import { Container, Box, Text, VStack, HStack, Button, IconButton, Flex } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";
import { useState, useRef } from "react";

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileContent, setFileContent] = useState("");
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
        console.log("File content:", e.target.result);
      };
      reader.onerror = (e) => {
        console.error("Error reading file:", e.target.error);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="start" alignItems="center" p={4}>
      <Flex id="navbar-container" width="100vw" height="10vh" bg="blue.500" alignItems="center" justifyContent="center" mb={4}>
        <Box width="90vw" display="flex" justifyContent="space-between" alignItems="center">
          <Button leftIcon={<FaUpload />} colorScheme="blue" size="lg" width="200px" onClick={() => fileInputRef.current.click()}>
            Upload Document
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          {uploadedFile && (
            <Text mt={2}>Uploaded file: {uploadedFile.name}</Text>
          )}
        </Box>
      </Flex>
      <HStack spacing={4} width="100%" justifyContent="center">
        <Box width="45%" height="80vh" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Text fontSize="xl" mb={4}>Educational Text</Text>
          {/* Content for Educational Text */}
        </Box>
        <Box width="45%" height="80vh" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Text fontSize="xl" mb={4}>Essence</Text>
          {/* Content for Essence */}
          {fileContent && (
            <Box mt={4} p={4} bg="gray.100" borderRadius="md">
              <Text fontSize="md" whiteSpace="pre-wrap">{fileContent}</Text>
            </Box>
          )}
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;