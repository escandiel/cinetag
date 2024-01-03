import { useFavoritoContext } from "contexts/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.svg";
import iconeDesfavoritar from "./desfavoritar.svg";
import { Link } from "react-router-dom";

export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>

      <img
        src={icone}
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}
