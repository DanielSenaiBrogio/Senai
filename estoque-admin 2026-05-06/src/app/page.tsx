import styles from "./page.module.css";
import stylesText from "./telas/text.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <h3 className={stylesText.titulo}>Página Inicial: Seja bem vindo!</h3>      
    </div>
  );
}
