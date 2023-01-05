import { useState } from "react";
import { Data } from "../../src/container/main/data";
import styled from "@emotion/styled";

const Box = styled.div`
  width: 100px;
  height: 100px;
`;

const P = styled.p``;

const index = () => {
  const [data, setData] = useState(Data);
  const test = data.filter((data) => data.data);
  console.log(test);

  return (
    <div>
      <div>
        {Data.map((item) => {
          return (
            <>
              <p>
                {item.data.substring(0, 7).includes("2022.12") === false
                  ? ""
                  : ""}
              </p>
              <>
                <div>
                  {item.data.substring(0, 7).includes("2022.12") === true ? (
                    <Box id="1">
                      <P>{item.data}</P>
                    </Box>
                  ) : (
                    <Box>
                      <p id="2">{item.data}</p>
                    </Box>
                  )}
                </div>
              </>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default index;
