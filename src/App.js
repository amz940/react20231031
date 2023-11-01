// style 적용 방법
// 보통의 css 파일
// css module 사용

import { MyComp } from "./componant/MyComp";
import { MyBox } from "./componant/MyBox";
import { MyContainer } from "./componant/MyContainer";

function App() {
  return (
    <>
      <MyComp />
      <MyBox />
      <MyContainer />
    </>
  );
}

export default App;
