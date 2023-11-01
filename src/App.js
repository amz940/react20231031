import {
  MyBox,
  MyContainer,
  MyElem,
  name,
  person,
  address,
} from "./component/MyBox";

// export된 컴포넌트(변수, 함수, 객체 전부다 사용가능)를 import해서 사용
function App() {
  console.log("name", name);
  console.log("person", person);
  console.log("address", address);

  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}

export default App;
