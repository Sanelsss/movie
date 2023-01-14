/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";

const HeroNavLink = ({ btnText,btn }) => {
  const { activeLink, setSelect,setActiveLink, setHiddenMenu } = useContext(MovieContext);

  return (
    <button
      style={{ color: activeLink === btnText ? "#5fc5a3" : "#fff" }}
      css={styles}
      onClick={() => {
        setActiveLink(btnText);
        setSelect(btn);
        setHiddenMenu(true);
      }}
    >
      {btnText}
    </button>
  );
};

const styles = css`
  border: none;
  outline: none;
  background: transparent;
  font-size: 22px;
  margin-right: 
  ;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  @media (max-width: 860px) {
    font-size: 40px;
  }
`;

export default HeroNavLink;
