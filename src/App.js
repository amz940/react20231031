import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // 첫번째 파라미터(set up) : The function with your Effect's logic.
  // 부작용이 있는 함수(부작용이 나쁜뜻의 부작용이 아니라 부수적인 작용을 한다는 뜻)
  // 두번재 파라미터를 안 쓰면 재 렌더링 될때마다 사용된다
  // 두번째 파라미터 : set up(첫번째 파라미터)을 실행 시키는 값의 나열(배열)
  // 빈 배열이면 첫 렌더링 때만 실행된다, 빈 배열이 아니라면 첫 렌더링 + 배열의 변화가 있을ㄸ마다 사용된다
  useEffect(() => {
    console.log("effect 함수 실행");
  }, [number, text]);

  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;
