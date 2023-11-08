import React, { useEffect, useState } from "react";

function App(props) {
  const [number, setNumber] = useState(0);

  // useEffect 사용 시 자주 하는 실수
  useEffect(() => {
    console.log("코드 실행");
    // setNumber(number + 1);
    // trigger하는 값을 변경하면 안된다
    // deps 값을 변경하는 코드를 짜면 안된다, 무한으로 리 렌더링 해버리기 때문에 큰일난다
  }, [number]);

  return <div></div>;
}

export default App;
