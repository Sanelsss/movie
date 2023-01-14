/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";
import HeroNavLink from "../Hero/HeroNav/HeroNavLink";

const Movies = () => {
  const { filmovi,setPhone } = useContext(MovieContext);

  return (
    <div css={styles} className="movies">
      <Container>
        { (
          filmovi.map((movieItem, index) => (
              <p onClick={()=>setPhone(movieItem)}>
            <img   
               key={index} 
               src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
               alt="poster"
             />
             <div >        
                <HeroNavLink  btnText="Details" btn="movies" />
             </div>
             </p>
           ))     
        ) }
      </Container>
    </div>
  );
};

const styles = css`
ss{
  color: #5fc5a3;
 
}
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

export default Movies;