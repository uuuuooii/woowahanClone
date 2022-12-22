import { useState, useEffect, useMemo } from "react";
import * as C from "./styled";
import { newsItem } from "../../../container/newsRoom/pressRelease";
import { SubContent, Titles } from "../../../commons/title";
import { newsTitle } from "../../../container/newsRoom/fact";

const Category = () => {
  const [category, setCategory] = useState("보도자료");

  return (
    <section>
      <C.Article>
        <C.NewsBox>
          <article>
            <C.NewsTitleBox>
              <C.Title
                className={category === "보도자료" ? " active" : ""}
                onClick={() => {
                  setCategory("보도자료");
                }}
              >
                보도자료
              </C.Title>
              <C.Title
                className={category === "언론보도" ? " active" : ""}
                onClick={() => {
                  setCategory("언론보도");
                }}
              >
                언론보도
              </C.Title>
              <C.Title
                className={category === "팩트 바로 알기" ? " active" : ""}
                onClick={() => {
                  setCategory("팩트 바로 알기");
                }}
              >
                팩트 바로 알기
              </C.Title>
            </C.NewsTitleBox>

            {newsTitle
              .filter((item) => item.type === category)
              .map((item) => {
                return (
                  <C.TitleBox>
                    <Titles>{item.type}</Titles>
                    <SubContent>{item.title}</SubContent>
                  </C.TitleBox>
                );
              })}
            <C.NewsList>
              {newsItem
                .filter((item) => item.type === category)
                .map((item) => {
                  return (
                    <C.Item>
                      <C.Link>
                        <C.Picture>
                          <C.Img src={item.image} />
                        </C.Picture>
                        <C.NewsItemTitle>
                          {item.title}{" "}
                          <C.NewsSubTitle>{item.subTitle}</C.NewsSubTitle>
                          <C.Time>{item.data}</C.Time>
                        </C.NewsItemTitle>
                      </C.Link>
                    </C.Item>
                  );
                })}
              <C.Button>더보기</C.Button>
            </C.NewsList>
          </article>
        </C.NewsBox>
      </C.Article>
    </section>
  );
};

export default Category;
