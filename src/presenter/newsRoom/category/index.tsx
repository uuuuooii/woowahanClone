import { useState } from "react";
import * as C from "./styled";

const Category = () => {
  const [category, setCategory] = useState("");
  const onHandleCategory = (newCategory: string) => {
    if (newCategory === "보도자료") {
      setCategory("보도자료");
    }
    if (newCategory === "언론보도") {
      setCategory("언론보도");
    }
    if (newCategory === "팩트 바로 알기") {
      setCategory("팩트 바로 알기");
    }
  };
  console.log(category);
  return (
    <section>
      <article>
        <C.TitleBox>
          <C.Title onClick={() => onHandleCategory("보도자료")}>
            보도자료
          </C.Title>

          <C.Title onClick={() => onHandleCategory}>언론보도</C.Title>

          <C.Title onClick={() => onHandleCategory}>팩트 바로 알기</C.Title>
        </C.TitleBox>
      </article>
    </section>
  );
};

export default Category;
