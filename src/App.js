// export된 컴포넌트(변수, 함수, 객체 전부다 사용가능)를 import해서 사용
import aaggee, { city, MyElem } from "./component/MyElem";
import MyContainer, { country, person } from "./MyBox";

function App() {
  return (
    <>
      <MyElem />
      <MyContainer />
      <h1>{city}</h1>
      <h1>{aaggee}</h1>
      <h1>{country}</h1>
      <h1>{person}</h1>
    </>
  );
}

export default App;
