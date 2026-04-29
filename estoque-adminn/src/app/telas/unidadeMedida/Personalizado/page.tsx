import styles from "./UNDM.module.css";

export default function TelaCategoriaCadastro(){
    return(
        <section style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
            <h3 className={styles.title}>Cadastro de Unidade de Medida</h3>

            <label htmlFor="sigla" className={styles.label}>Sigla</label>
            <input className={styles.input} type="text" name="nome" />
            <label htmlFor="descricao" className={styles.label}>Descrição</label>
            <textarea className={styles.textarea} name="descricao"></textarea>

        <h1 className={styles.label}>Fracionável</h1>
        <select className={styles.select} name="fracionavel" id="">
            <option value="">Sim</option>
            <option value="">Nao</option>
        </select>

        <button className={styles.button}>Salvar</button>
        <button className={styles.button}>Excluir</button>
        </section>
        
    )
    
}