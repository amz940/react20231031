function App() {
  // jsx에서 태그 사용 시 꼭 종료태그를 작성해야 함
  // 종료태그는 생략 불가능
  // 빈(empty) 요소이면 시작태그에서 종료 ( <br />로 작성
  return (
    <div>
      <h1>hello react</h1>
      <br />
      <h2>hi react</h2>
      <MyComp />
    </div>
  );
}

// built-in component(기본적으로 제공되는 함수)는 소문자로 시작
// component 명은 대문자로 시작 (유저가 만든 함수명)
// return 문을 가져야함
// return 값은 보통 JSX 코드를 가진다 (아닐 수도 있다)

function MyComp() {
  // return에 jsx 코드 작성 가능
  // 꼭! 하나의 root tag만 존재해야 함
  // 2개 이상의 JSX를 쓰고 싶을땐 div태그로 감싼다
  // return <h1>Hi Component</h1>
  // return <div><h1>Hi Component</h1><h2>hello!</h2></div>
  // return 값이 여러 줄이면 ( )로 감싸면 된다
  // 보기에도 편하기 때문에 쓰는 습관을 들이면 된다
  return (
    <div>
      <h1>Hi Component</h1>
      <h2>hello</h2>
    </div>
  );
}
// root tag가 필요없다면 fragment 사용 가능
// {/*<h1>Hi Component</h1>*/}
// {/*<h2>hello</h2>*/}
// JSX에서 주석 사용법
// {/* */}, 단축키는 똑같다
export default App;
