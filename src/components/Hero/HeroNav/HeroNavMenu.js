/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";
import HeroNavLink from "./HeroNavLink";

const HeroNavMenu = () => {
  const { hiddenMenu } = useContext(MovieContext);
  return (
    
    <div css={styles} className={(hiddenMenu ? "hidden" : "") + " heroNavMenu"}>
      <HeroNavLink btnText="TV Shows"  btn="popular" />    
      <HeroNavLink className="mx-2" btnText="Movies" btn="movies"/>
       </div>
  );
};

const styles = css`
  padding-left: 50px;
  @media (max-width: 860px) {
    position: absolute;
    top: 0;
    left: 6rem;
    opacity: 1;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    padding-left: 0;
    padding: 20px 50px;
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 800ms ease-in-out;
    &.hidden {
      left: -600px;
      opacity: 0;
    }
  }
`;

export default HeroNavMenu;
