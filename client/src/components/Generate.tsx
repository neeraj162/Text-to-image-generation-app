// GenerateComponent.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Progress,
  Image,
  useColorModeValue,
  VStack,
  Flex,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import axios from "axios";

const Generate: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [Model, setModel] = useState<string>("compvis");

  // Define color mode dependent values
  const bgColor = useColorModeValue("white", "gray.800");
  const primaryColor = useColorModeValue("blue.500", "blue.200");

  const handleGenerateImage = async () => {
    // Start the generation process
    setIsGenerating(true);

    // Mock API call or generation process
    const result = await axios.get(
      `http://127.0.0.1:8000/${Model}?prompt=${prompt}`
    );

    // updateImage(result.data);
    setImage(result.data);
    setIsGenerating(false);
  };

  return (
    <Container maxW="xl" centerContent>
      <Box
        textAlign="center"
        fontSize="xl"
        bg={bgColor}
        p={8}
        mt={20}
        borderRadius="lg"
        shadow="md"
        width="100%"
      >
        <VStack spacing={6}>
          <Heading mb={6} color={primaryColor}>
            Image Generator
          </Heading>
          <FormControl id="prompt">
            <FormLabel>Description</FormLabel>
            <Flex direction={"row"} gap={2}>
              <Input
                placeholder="Enter a description to generate an image."
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                isDisabled={isGenerating}
                autoComplete={'off'}
              />
              <Button
                colorScheme="blue"
                onClick={handleGenerateImage}
                isLoading={isGenerating}
                disabled={!prompt.trim() || isGenerating}
              >
                Generate
              </Button>
            </Flex>
            <FormLabel marginTop={5}>Select Model</FormLabel>
            <RadioGroup onChange={setModel} value={Model} marginTop={3}>
              <Stack direction="row">
                <Radio value="compvis">CompVis</Radio>
                <Radio value="dream-art">DreamArt</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          {isGenerating && (
            <Progress
              isIndeterminate
              size="xs"
              width="100%"
              isAnimated
              colorScheme="blue"
              mt={4}
            />
          )}
          {image && (
            <Box boxSize="sm" mt={6}>
              <Image src={`data:image/png;base64,${image}`} alt="Generated" />
            </Box>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default Generate;
