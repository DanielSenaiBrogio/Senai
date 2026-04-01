import styles from "./page.module.css";

export default function TelaCategoriaCadastro(){
    return(
        <section style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
            <h3 className={styles.title}>Cadastro de Categoria</h3>

            <label htmlFor="nome" className={styles.label}>Nome</label>
            <input className={styles.input} type="text" name="nome" />
            <label htmlFor="descricao" className={styles.label}>Descrição</label>
            <textarea className={styles.textarea} name="descricao">
            </textarea>

        <button className={styles.button}>Salvar</button>
        <button className={styles.button}>Excluir</button>
        </section>
        
    )
    
}