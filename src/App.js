import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Culpa, nihil?
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Ad, aperiam?
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        양 옆에만 선 긁기
      </Box>
      <Box borderY={"10px dotted"} borderColor={"red.300"}>
        위 아래만 선 긁기
      </Box>
      <Box border={"5px solid blue"} borderRadius={"30px"}>
        Laborum, porro?
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"20%"}>
        Earum, vel!
      </Box>
      <Box border={"5px solid black"} borderRadius={30}>
        Exercitationem, suscipit?
      </Box>
      <Box border={"5px solid gold"} borderTopRightRadius={"30"}>
        Consequuntur, officia?
      </Box>
      <Box border={"5px solid skyblue"} borderBottomRightRadius={30}>
        Modi, nulla.
      </Box>
      <Box shadow={"10px 5px 5px red "}>Eaque, suscipit?</Box>
      <Box shadow={"inner"}>Maiores, voluptates.</Box>
      <Box textShadow={"1px 1px red"}>Fugiat, qui?</Box>
      <Box bg={"blue.300"} m={"30px"}>
        Illum, praesentium.
      </Box>
      <Box bg={"yellow.600"} m={"30"}>
        Incidunt, iusto.
      </Box>
      <Box bg={"facebook.500"}>Culpa, quibusdam.</Box>
      <Box bg={"gold.300"} mx={"20px"}>
        Illum, labore!
      </Box>
      <Box>Aperiam, provident!</Box>
      <Box>Iusto, quo.</Box>
      <Box>Harum, quisquam!</Box>
      {/*Box[bg][m]*5>lorem2*/}
      <Box bg="red.600" m="1">
        Lorem ipsum.
      </Box>
      <Box bg="blue.300" m="2">
        Laboriosam, ratione.
      </Box>
      <Box bg="gold" m="3">
        Debitis, recusandae!
      </Box>
      <Box bg="yellow.900" m="4">
        Distinctio, veritatis.
      </Box>
      <Box bg="gray.400" m="5">
        Dolores, rem?
      </Box>
      <Box bg="red.400" p={5}>
        Lorem ipsum.
      </Box>
      <Box bg="blue.400">Vero, voluptate?</Box>
      <Box bg="gray.300">Cupiditate, voluptatum?</Box>
      <Box bg="purple">Ipsam, possimus.</Box>
      <Box bg="gold">Earum, ullam?</Box>
      <Box bg="tomato">Tempore, temporibus!</Box>
      <Box bg="facebook.200">Hic, vero.</Box>
      <Box bg="black">At, repellendus.</Box>
      <Box bg="skyblue">Incidunt, nobis?</Box>
    </>
  );
}

export default App;
