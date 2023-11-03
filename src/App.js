function App() {
  return (
    <>
      <MyComp text="hello" address="seoul">
        some contents 다른 컴포넌트가 존재 할 경우
      </MyComp>
    </>
  );
}

function MyComp({ text, address, children }) {
  return (
    <>
      <p>{text}</p>
      <p>{address}</p>
      <p>{children}</p>
    </>
  );
}
export default App;
