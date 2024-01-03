import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";

export default function Player() {
  return (
    <>
      <Banner imagem="player">
        <Titulo>
          <h1>Player</h1>
        </Titulo>
      </Banner>
    </>
  );
}
