import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        width={"100%"}
        height={"50px"}
        bg={"gray.300"}
        gap={3}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Maxime?</Box>
        <Box bg={"grey"}>Numquam!</Box>
        <Box bg={"blue"}>Porro.</Box>
        <Box bg={"green"}>Hic.</Box>
      </Flex>
    </>
  );
}

export default App;
