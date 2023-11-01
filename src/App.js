// style 적용 방법
// 보통의 css 파일
// css module 사용

import { MyComp } from "./componant/MyComp";
import { MyBox } from "./componant/MyBox";

function App() {
  return (
    <>
      <MyComp />
      <MyBox />
    </>
  );
}

export default App;
