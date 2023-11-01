function App() {
  return (
    <>
      <MyComp name={"흥민"} age={33} address={"서울"} city={"부산"} />
      <MyComp address={"강남"} city={"서울"} />
      <MyComp address={"프랑스"} name="강인" age={33} city={"파리"} />
    </>
  );
}

function MyComp({ name = "anonymous", address, city, age = 33 }) {
  return (
    <div>
      <p>
        {name}은 {age}세 이고 {address},{city}에 산다
      </p>
    </div>
  );
}
export default App;
