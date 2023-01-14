/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";
import HeroNavLink from "../Hero/HeroNav/HeroNavLink";

const PopularMovies = () => {
  const { popularMovies,setPhone} = useContext(MovieContext);

  return (
    <div css={styles} className="popularMovies">
      <Container>
        {popularMovies &&
          popularMovies.map((popularMovieItem, index) => (
           <p onClick={()=>setPhone(popularMovieItem)} >
            <img /* onClick={()=>setPhone(movieItem)} */
              key={index}
              src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`}
              alt="poster"
            />
             <div >        
                <HeroNavLink className="mx-4" btnText="Details" btn="popular" />
             </div>
            </p>
          ))}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    &:nth-child(1) {
      height: 80vh;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar {
        width: 0;
      }
      .error {
        font-size: 38px;
        color: red;
        height: 32px;
      }
    }
    img {
      width: 100%;
      max-width: 240px;
      height: 360px;
      margin: 10px 0;
    }
  }
  @media (max-width: 600px) {
    .container {
      img {
        max-width: 100%;
        height: 500px;
      }
    }
  }
  @media (min-width: 601px) and (max-width: 854px) {
    .container {
      img {
        max-width: 48%;
      }
    }
  }
  @media (min-width: 855px) and (max-width: 1144px) {
    .container {
      img {
        max-width: 31%;
      }
    }
  }
  @media (min-width: 1145px) and (max-width: 1365px) {
    .container {
      img {
        max-width: 23.4%;
      }
    }
  }
`;

export default PopularMovies;
