import styles from "../../card.module.css";

export default function TelaListaUnidadeMedida() {
    return (
        <div>
            <h1>Lista de Unidade De Medida</h1>
            <div className={styles.cardsContainer}>
                
                <div className={styles.card}>Quilograma (kg)</div>
                <div className={styles.card}>Grama (g)</div>
                <div className={styles.card}>Litro (L)</div>
                <div className={styles.card}>Mililitro (mL)</div>
                <div className={styles.card}>Metro (m)</div>
                <div className={styles.card}>Centímetro (cm)</div>
                <div className={styles.card}>Unidade (un)</div>
                <div className={styles.card}>Dúzia (dz)</div>
                <div className={styles.card}>Caixa (cx)</div>
                <div className={styles.card}>Pacote (pct)</div>
                <div className={styles.card}>Fardo (fd)</div>
            </div>
        </div>
    );
}