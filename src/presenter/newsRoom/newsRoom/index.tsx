import { useState, useEffect, useRef, FC, SetStateAction } from "react";
import * as C from "./styled";
import { newsItem } from "../../../container/newsRoom/pressRelease";
import { SubContent, Titles } from "../../../commons/title";
import { newsTitle } from "../../../container/newsRoom/fact";
interface RefObject<T> {
  readonly current: T | null;
}
const POST_COUNT_MAX = 10; // 페이지당 포스트 개수

const CategorySearch: FC = () => {
  //카테고리
  const [category, setCategory] = useState("보도자료");
  //검색
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [windowWidth, setWindowWidth] = useState(0);

  // 더보기 기능
  const [currentView, setCurrentView] = useState(POST_COUNT_MAX);
  const onHandleViewMore = () => {
    setCurrentView(currentView + POST_COUNT_MAX);
  };
  //페이지네이션
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const indexOfLastPost = currentPage * POST_COUNT_MAX; // 1*10 = 10번 포스트
  const indexOfFirstPost = indexOfLastPost - POST_COUNT_MAX; //10-10 = 0포스트
  const currentPosts =
    windowWidth > 980
      ? searchInput.length > 1 // 검색창에 한글자입력하면 검색하는 filter로 변경됨(filteredResults)
        ? filteredResults
            .filter((item) => item.type === category)
            .slice(0, currentView)
        : newsItem
            .filter((item) => item.type === category) //카테고리 필터
            .slice(indexOfFirstPost, indexOfLastPost) //페이지네이션 기능
      : searchInput.length > 1 // 검색창에 한글자입력하면 검색하는 filter로 변경됨(filteredResults)
      ? filteredResults
          .filter((item) => item.type === category)
          .slice(0, currentView)
      : newsItem
          .filter((item) => item.type === category) //카테고리 필터
          .slice(0, currentView); // 더보기기능

  const paginate = (pageNum: SetStateAction<number>) => setCurrentPage(pageNum); //클릭 이벤트-페이지 바꾸기
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(newsItem.length / POST_COUNT_MAX); i++) {
    pageNumbers.push(i);
  }

  //width 980px일때 다르게보이게
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [windowWidth]);

  //검색 기능
  const searchItems = (searchValue: SetStateAction<string>) => {
    setSearchInput(searchValue);
    if (searchInput.trim() !== "") {
      const filterData = newsItem.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filterData);
    } else {
      setFilteredResults(newsItem);
    }
  };

  //검색 아이콘 포커싱
  const inputFocus = useRef<HTMLInputElement>(null);
  const onHandleInputFocus = () => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  };

  return (
    <>
      <C.Section>
        <article>
          <C.MainTitleBox>
            <C.MainTitle>뉴스룸</C.MainTitle>
          </C.MainTitleBox>
          <C.InputBox>
            <span>
              {/* 돋보기 제작 아이콘 */}
              <C.SearchGlasses onClick={onHandleInputFocus}>
                <C.SearchGlassesCircle />
                <C.SearchGlassesLine />
              </C.SearchGlasses>
              <C.Input
                type="text"
                placeholder="검색해보세요"
                onChange={(e) => searchItems(e.target.value)}
                ref={inputFocus}
              />
            </span>
          </C.InputBox>
        </article>
      </C.Section>
      <section>
        <C.Article>
          <C.NewsTitleBox>
            {/* 타이틀과 맞는 데이터 보여주기 */}
            <C.Title
              onClick={() => {
                setCategory("보도자료");
              }}
              active={category === "보도자료"}
            >
              보도자료
            </C.Title>
            <C.Title
              onClick={() => {
                setCategory("언론보도");
              }}
              active={category === "언론보도"}
            >
              언론보도
            </C.Title>
            <C.Title
              onClick={() => {
                setCategory("팩트 바로 알기");
              }}
              active={category === "팩트 바로 알기"}
            >
              팩트 바로 알기
            </C.Title>
            <C.Line />
          </C.NewsTitleBox>
          {newsTitle
            .filter((item) => item.type === category)
            .map((item) => {
              return (
                <C.TitleBox key={item.id}>
                  <Titles>{item.type}</Titles>
                  <SubContent>{item.title}</SubContent>
                </C.TitleBox>
              );
            })}
        </C.Article>
        <C.NewsListArticle>
          <C.NewsList>
            {currentPosts.map((item) => {
              return (
                <C.Item key={item.id}>
                  <C.Link
                    className={`${category === "언론보도" ? "press" : "fact"}`}
                  >
                    {category === "보도자료" ? (
                      <picture>
                        <C.Img src={item.image} />
                      </picture>
                    ) : (
                      []
                    )}
                    <C.NewsItemTitle
                      className={`${category === "언론보도" && "press"}`}
                    >
                      {item.title}
                      <C.NewsSubTitle
                        className={`${
                          category === "언론보도" ? "press" : "fact"
                        }`}
                      >
                        {item.subTitle}
                      </C.NewsSubTitle>
                      <C.Time>{item.data}</C.Time>
                    </C.NewsItemTitle>
                  </C.Link>
                </C.Item>
              );
            })}
            {windowWidth > 980 ? (
              <C.PagenationBox>
                <C.PaginationArrowButton> &#60;</C.PaginationArrowButton>
                {/* 페이지 번호 출력 */}
                {pageNumbers.map((num) => (
                  <li key={num}>
                    <C.PaginationButton
                      onClick={() => {
                        paginate(num);
                      }}
                    >
                      <C.ButtonRound>{num}</C.ButtonRound>
                    </C.PaginationButton>
                  </li>
                ))}
                <C.PaginationArrowButton>&#62; </C.PaginationArrowButton>
              </C.PagenationBox>
            ) : (
              <C.Button onClick={() => onHandleViewMore()}>더보기</C.Button>
            )}
          </C.NewsList>
        </C.NewsListArticle>
      </section>
    </>
  );
};

export default CategorySearch;
