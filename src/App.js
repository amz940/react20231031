import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  /*
  base: "0em", // 0px
  sm: "30em", // 1~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // 481~768px
  lg: "62em", // 769~992px
  xl: "80em", // 993~1280px
  "2xl": "96em", // 1281~1536px
   */
  return (
    <>
      <SimpleGrid spacing={"10px"} columns={{ sm: 2, md: 3, "2xl": 6 }}>
        {/*Box[bg="blue.300"]*30>lorem1*/}
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Quis!</Box>
        <Box bg="blue.300">Odit!</Box>
        <Box bg="blue.300">Modi.</Box>
        <Box bg="blue.300">Optio.</Box>
        <Box bg="blue.300">Aspernatur!</Box>
        <Box bg="blue.300">Id?</Box>
        <Box bg="blue.300">Id.</Box>
        <Box bg="blue.300">Quidem?</Box>
        <Box bg="blue.300">Nobis!</Box>
        <Box bg="blue.300">Atque.</Box>
        <Box bg="blue.300">Modi!</Box>
        <Box bg="blue.300">Consectetur?</Box>
        <Box bg="blue.300">Quibusdam.</Box>
        <Box bg="blue.300">Perspiciatis?</Box>
        <Box bg="blue.300">Consequatur?</Box>
        <Box bg="blue.300">Odit?</Box>
        <Box bg="blue.300">Pariatur.</Box>
        <Box bg="blue.300">Placeat!</Box>
        <Box bg="blue.300">Odit?</Box>
        <Box bg="blue.300">Inventore.</Box>
        <Box bg="blue.300">Ducimus.</Box>
        <Box bg="blue.300">Reiciendis?</Box>
        <Box bg="blue.300">Ipsam!</Box>
        <Box bg="blue.300">Labore?</Box>
        <Box bg="blue.300">Ea?</Box>
        <Box bg="blue.300">Ad.</Box>
        <Box bg="blue.300">Vero.</Box>
        <Box bg="blue.300">Mollitia?</Box>
        <Box bg="blue.300">Velit!</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
