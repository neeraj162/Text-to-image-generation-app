// GalleryComponent.tsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

const Gallery: React.FC = () => {
  // Define color mode dependent values
  const bgColor = useColorModeValue("white", "gray.800");
  const primaryColor = useColorModeValue("blue.500", "blue.200");
  const [imagePrompts, setImagePrompts] = useState<string[]>([]);

  // Assuming you have images named picture_1, picture_2, ..., picture_12
  const totalImages = 12; // Update this with the actual number of images you have

  // Assuming you know the number of prompt files
  const totalPrompts = 12;

  useEffect(() => {
    const fetchPrompts = async () => {
      const prompts = await Promise.all(
        Array.from({ length: totalPrompts }, (_, i) =>
          fetch(`${process.env.PUBLIC_URL}/prompts/prompt_${i + 1}.txt`).then(
            (res) => (res.ok ? res.text() : `Prompt ${i + 1} not found`)
          )
        )
      );
      setImagePrompts(prompts);
    };

    fetchPrompts();
  }, [totalPrompts]);

  const imageUrls = Array.from(
    { length: totalImages },
    (_, i) => `${process.env.PUBLIC_URL}/images/picture_${i + 1}.jpg`
  );

  return (
    <Container maxW="100%" centerContent>
      <Box
        textAlign="center"
        fontSize="xl"
        bg={bgColor}
        p={8}
        mt={20}
        borderRadius="lg"
        shadow="md"
      >
        <Heading mb={6} color={primaryColor}>
          Image Gallery
        </Heading>
        <Text fontSize="lg" mb={6}>
          Explore a selection of images generated using the best prompts and our
          advanced model.
        </Text>
        <SimpleGrid columns={[1, null, 3]} spacing={10}>
          {imageUrls.map((url, index) => (
            <Tooltip
              key={index}
              label={imagePrompts[index]}
              placement="top"
              hasArrow
            >
              <Box
                marginTop={3}
                boxSize="sm"
                boxShadow="md"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src={url}
                  alt={`Generated image ${index + 1}`}
                  objectFit="cover"
                />
              </Box>
            </Tooltip>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Gallery;
