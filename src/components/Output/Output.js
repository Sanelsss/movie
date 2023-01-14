/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import  { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";
import Movies from "../Movies/Movies";
import Popular from "../Popular/Popular";
import Item from "../Popular/Item";

const Output = () => {
  const { select,activeLink } = useContext(MovieContext);

  return (
    <div css={styles} className="output">
      {activeLink === "Movies" && (
        (<Container>
            <Movies />
        </Container>)
      ) }

      {activeLink === "TV Shows" && (
        (<Container>
          <Popular />
        </Container>)
      )}

        {activeLink === "Back" && (
          (select === "movies") ? 
        (<Container>
            <Movies />
        </Container>)
        
       :(<Container>
            <Popular />
      </Container>)) }

      {activeLink === "Details" && (
        <Container>
          <Item />
        </Container>
      )}
    </div>
  );
};

const styles = css`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 1365px) {
    > .container {
      max-width: 90%;
    }
  }
`;

export default Output;
