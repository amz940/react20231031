import { Box, Button, Center } from "@chakra-ui/react";

function App() {
  function handleClick(e) {
    // event bubbling 막는 메소드
    // bubbling 이란? 안쪽에 있는 메소드가 실행될때 그 메소드를 감싸고 있는 메소드들도 다같이 작동되는 현상
    e.stopPropagation();
    console.log(e.target.className);
  }
  return (
    <Center
      onClick={handleClick}
      className="outerBox"
      w="200px"
      h="200px"
      bg="gold"
    >
      <Center
        onClick={handleClick}
        className="innerBox"
        w="100px"
        h="100px"
        bg="blue"
      >
        <Button onClick={handleClick} className="button" colorScheme="yellow">
          button
        </Button>
      </Center>
    </Center>
  );
}

export default App;
