import styles from "../../card.module.css";
export default function ListaCategoria() {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.card}>Caneca</div>
            <div className={styles.card}>Chaleira</div>
            <div className={styles.card}>Colherzinhas</div>
            <div className={styles.card}>Cholherões</div>
            <div className={styles.card}>Pratos rasos</div>
            <div className={styles.card}>Prato fundo</div>
            <div className={styles.card}>Garfo</div>
            <div className={styles.card}>Facões</div>
            <div className={styles.card}>Saleiros</div>
            <div className={styles.card}>Açucareiro</div>
            <div className={styles.card}>Panela que fazem feijão</div>
        </div>
    );
}