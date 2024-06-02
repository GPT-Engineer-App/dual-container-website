import { Container, Box, Text, VStack, HStack, Button, IconButton } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="start" alignItems="center" p={4}>
      <HStack width="100%" justifyContent="space-between" mb={4}>
        <Button leftIcon={<FaUpload />} colorScheme="blue" size="lg" width="200px">
          Upload Document
        </Button>
      </HStack>
      <HStack spacing={4} width="100%" justifyContent="center">
        <Box width="45%" height="80vh" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Text fontSize="xl" mb={4}>Educational Text</Text>
          {/* Content for Educational Text */}
        </Box>
        <Box width="45%" height="80vh" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Text fontSize="xl" mb={4}>Essence</Text>
          {/* Content for Essence */}
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;