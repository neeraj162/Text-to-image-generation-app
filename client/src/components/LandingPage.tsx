// LandingPage.tsx
import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  useColorModeValue,
  HStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  // Define color mode dependent values
  const bgColor = useColorModeValue("white", "gray.800");
  const primaryColor = useColorModeValue("blue.500", "blue.200");

  return (
    <Container marginTop={50} maxW="container.xl" centerContent>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        gap={20}
        mt={20}
      >
        <Box
          textAlign="left"
          fontSize="xl"
          bg={bgColor}
          p={8}
          borderRadius="lg"
          shadow="md"
          mr={{ md: 6 }}
          mb={{ base: 6, md: 0 }} // Add margin to the bottom on mobile
          flex="1"
        >
          <Heading mb={6} color={primaryColor}>
            Welcome to PicturizeIt
          </Heading>
          <Text fontSize="md" mb={6}>
            Explore the power of AI to transform your words into stunning
            visuals. Enter a description, and let the AI generate a unique image
            for you.
          </Text>
          <Text fontSize="md" mb={10}>
            It's as simple as typing a sentence and watching the magic happen.
            Our gallery showcases the creativity of our AI, so be sure to check
            it out!
          </Text>
          <HStack spacing={5} justifyContent={{ base: "center", md: "start" }}>
            <Button
              onClick={() => {
                navigate("./generate");
              }}
              colorScheme="blue"
              size="lg"
            >
              Generate
            </Button>
            <Button
              onClick={() => {
                navigate("./gallery");
              }}
              colorScheme="blue"
              variant="outline"
              size="lg"
            >
              Gallery
            </Button>
          </HStack>
        </Box>
        <Box textAlign={"center"} maxW={{ md: "50%" }}>
          <Image
            src={`${process.env.PUBLIC_URL}/home.jpg`}
            alt="AI-generated art"
            borderRadius="lg"
            shadow="md"
            maxH="350px"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default LandingPage;
