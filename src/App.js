function App() {
  const myStyle = {
    color: "blue",
    backgroundColor: "gold", // lowerCamelCase로 작성
    fontSize: "70px",
    textAlign: "center",
  }; // js object
  return (
    <>
      {/* style 속성은 객체로 줘야한다 */}
      <div style={myStyle}>Lorem</div>
      <hr />
      <div
        {/*바깥쪽 중괄호는 js 코드, 안쪽 중괄호는 js 객체 코드*/}
        style={{ color: "red", backgroundColor: "yellow", fontSize: "70px" }}
      >
        ipsum
      </div>
    </>
  );
}
export default App;
