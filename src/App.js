import { Button } from "@chakra-ui/react";

function App(props) {
  function handleClick1() {
    console.log("버튼 클릭됨");
  }
  function handleClick2() {
    console.log("2번 버튼 클릭됨");
  }

  function handleButtonClick(number) {
    console.log(number + "번째 버튼 클릭됨");
  }

  let func3 = () => {
    handleButtonClick(3);
  };
  let func4 = () => {
    handleButtonClick(4);
  };

  return (
    <div>
      <Button onClick={handleClick1}>첫번째버튼</Button>
      <Button onClick={handleClick2}>두번째버튼</Button>
      <Button
        onClick={() => {
          handleButtonClick(3);
        }}
      >
        세번째버튼
      </Button>
      <Button
        onClick={() => {
          handleButtonClick(4);
        }}
      >
        네번째버튼
      </Button>
    </div>
  );
}

export default App;
