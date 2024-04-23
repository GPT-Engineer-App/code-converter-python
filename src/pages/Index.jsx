import React, { useState } from "react";
import { Box, Button, Textarea, Select, Heading, VStack, Container, Text } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [language, setLanguage] = useState("javascript");

  const handleConvert = () => {
    if (language === "javascript") {
      setOutputCode(
        inputCode
          .replace(/var/g, "def")
          .replace(/function/g, "def")
          .replace(/console.log/g, "print"),
      );
    } else if (language === "java") {
      setOutputCode(inputCode.replace(/System.out.println/g, "print").replace(/String/g, "str"));
    } else {
      setOutputCode("Language not supported for conversion.");
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Code Converter to Python
        </Heading>
        <Select placeholder="Select language" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          {}
        </Select>
        <Textarea placeholder="Enter your code here..." value={inputCode} onChange={(e) => setInputCode(e.target.value)} size="lg" />
        <Button rightIcon={<FaExchangeAlt />} colorScheme="teal" onClick={handleConvert}>
          Convert to Python
        </Button>
        <Textarea placeholder="Converted Python code will appear here..." value={outputCode} readOnly size="lg" />
      </VStack>
    </Container>
  );
};

export default Index;
