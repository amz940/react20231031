import { Input } from "@chakra-ui/react";

function App(props) {
  function handleChange(e) {
    // console.log("인풋값이 변경됨");
    console.log(e.target.value);
  }

  // onChange = 인풋에 입력되는 값 표현
  return (
    <div>
      <Input onChange={handleChange} />
      <Input onChange={handleChange} />
    </div>
  );
}

export default App;
