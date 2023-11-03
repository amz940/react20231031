import { Button } from "@chakra-ui/react";

function App(props) {
  // 브라우저가 이벤트 핸들러 메소드에
  // event 객체를 매개값으로 넣어준다 보통 줄여서 e로 넣는다
  function handleClick(event) {
    // console.log(event);
    console.log(event.target);
    // console.log(event.target.className);
    // console.log(event.target.type);
  }

  return (
    <div>
      <Button colorScheme="orange" onClick={handleClick}>
        button1
      </Button>
      <Button colorScheme="blue" onClick={handleClick}>
        button2
      </Button>
    </div>
  );
}

export default App;
