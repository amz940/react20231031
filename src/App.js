function App(props) {
  // prevent : 막다. 예방하다, 방지하다
  function handleClick(e) {
    // preventDefault : 원래 해야 하는 일을 취소하고 싶을때 사용
    e.preventDefault();
    console.log("다른 일을 시킴");
  }

  function handleSubmit(e) {
    // 기본 기능 취소
    e.preventDefault();
    console.log("다른 일을 시킴");
  }

  return (
    <div>
      <a href="https://www.naver.com" onClick={handleClick}>
        네이버
      </a>
      <div>
        <form action="https://search.daum.net/search" onSubmit={handleSubmit}>
          <input type="text" name="q" />
          <button>검색</button>
        </form>
      </div>
    </div>
  );
}

export default App;
