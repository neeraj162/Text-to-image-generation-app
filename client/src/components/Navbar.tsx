// NavBar.tsx
import React from "react";
import { Flex, Text, Button, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  const buttonColor = useColorModeValue("blue.500", "blue.200");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={bgColor}
      color={color}
      boxShadow="sm" // Added a subtle shadow for depth
    >
      <Flex
        align="center"
        mr={5}
        cursor="pointer"
        onClick={() => navigate("/")}
      >
        <Text fontSize="lg" fontWeight="bold">
        PicturizeIt
        </Text>
      </Flex>
      <Flex display="flex" width="auto" alignItems="center" flexGrow={1}>
        <Button
          onClick={() => navigate("/generate")}
          variant="ghost"
          _hover={{ bg: bgColor, color: buttonColor }} // Added hover effect
          aria-label="Generate"
        >
          Generate
        </Button>
        <Button
          onClick={() => navigate("/gallery")}
          variant="ghost"
          _hover={{ bg: bgColor, color: buttonColor }} // Added hover effect
          aria-label="Images"
        >
          Gallery
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
