import { Button } from "@chakra-ui/react";

function App() {
  function func1() {
    console.log("func1 실행");
  }

  let func2 = () => {
    console.log("arrow function 실행 !!!");
  };

  return (
    <div>
      <MyComp executeClick={func1}>Button1</MyComp>
      <MyComp executeClick={func2}>Button2</MyComp>
      <MyComp
        executeClick={() => {
          console.log("arrow function 실행 222");
        }}
      >
        Button3
      </MyComp>
      <MyComp executeClick={() => console.log("arrow function 실행333")}>
        Button4
      </MyComp>
    </div>
  );
}

function MyComp({ children, executeClick }) {
  return <Button onClick={executeClick}>{children}</Button>;
}
export default App;
