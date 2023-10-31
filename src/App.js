
function App() {
  return (
    <div >
      <MyComponent1 />

      <MyComponent2 />
    </div>
  );
}

function MyComponent1(){
  return (
    <>
        <h1>Hello Component</h1>
    </>
  )
}
function MyComponent2(){
    return (
        <>
             {/*p>lorem5^ul>li*3>lorem1*/}
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
                <li>Lorem.</li>
                <li>Delectus.</li>
                <li>Eius?</li>
            </ul>
        </>
    )
}

export default App;
