// 2개의 파일에 객체명이 같을 시
// as로 named export 값을 import 할 때 별칭을 줄 수 있다
import MyBox, { address } from "./component/MyBox";
import MyElem, { address as myAddress } from "./component/MyElem";
function App() {
  return (
    <>
      <MyElem />
      <MyBox />
      <h1>{address}</h1>
      <h1>{myAddress}</h1>
    </>
  );
}

export default App;
