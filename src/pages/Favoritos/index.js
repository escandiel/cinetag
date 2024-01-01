import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";

function Favoritos() {
  return (
    <>
      <Banner imagem={"Favoritos"} />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card
          id="1"
          titulo="Escandiel Development"
          capa="https://github.com/escandiel.png"
        ></Card>
      </section>
    </>
  );
}

export default Favoritos;
