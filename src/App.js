import { useState } from "react";
import { Button, Input, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const [coffees, setCoffees] = useState(["라때", "아아"]);
  const [text, setText] = useState("");

  function handleButtonClick() {
    // 직전 상태 배열을 조작하면 변경이 안되고
    // coffees.push(text);

    // 새 배열을 만들어서 set state 해줘야 한다
    const newCoffees = [...coffees]; // 배열 복사

    newCoffees.push(text);
    setCoffees(newCoffees);
    console.log(coffees);
  }

  return (
    <div>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleButtonClick}>추가</Button>

      <List>
        {coffees.map((e, index) => (
          <ListItem key={index}>{e}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
