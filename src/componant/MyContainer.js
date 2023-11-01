import style from "../style/style2.module.css";
export function MyContainer() {
  return (
    <div>
      {/*<h1 className="boxClass error note">Lorem.</h1>*/}
      {/*여러개의 클래스 명에 하나의 css를 주고 싶을때 ` `를 사용*/}
      <h1 className={`style.boxClass style.error style.note`}>
        Lorem ipsum dolor sit amet.
      </h1>
      <h1 className={[style.boxClass, style.error, style.note].join("")}>
        lorem ipsum
      </h1>
    </div>
  );
}
