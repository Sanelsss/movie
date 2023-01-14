/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";

const HeroNavSearch = () => {
  const { search, setSearch, handleSearch, /* activeLink */ } = useContext(
    MovieContext
  );

  return (
    <form css={styles} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
    </form>
  
  );
};

const styles = css`
  height: 40px;
  min-height: 40px;
  input {
    border: none;
    outline: none;
    border-radius: 50px;
    border: 1px solid #2c2f39;
    background: transparent;
    padding: 10px 16px;
    width: 860px;
    color: #5fc5a3;
    &::placeholder {
      color: #5fc5a3;
      letter-spacing: 1px;
    }
  }
  @media (max-width: 860px) {
    input {
      width: 220px;
    }
  }
`;

export default HeroNavSearch;
