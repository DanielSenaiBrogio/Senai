import styles from "./page.module.css";
import inputStyles from "../../input.module.css";
import buttonStyles from "../../button.module.css";
import textStyles from "../../text.module.css"

export default function TelaUnidadeMedidaCadastro() {
    return (
        <section className={styles.conteudo}>

            <h3 className={textStyles.titulo}>Cadastro de Unidades de Medida</h3>

            <label htmlFor="nome">Nome:</label>
            <input className={inputStyles.input} type="text" name="nome" />

            <label htmlFor="descricao">Descrição: </label>
            <textarea className={inputStyles.textArea} name="descricao"></textarea>

            <label htmlFor="fracionavel">Fracionável: </label>
            <select className={inputStyles.select} name="fracionavel">
                <option>Não</option>
                <option>Sim</option>
            </select>         

            <div className={buttonStyles.divBotoes}>
                <button className={buttonStyles.botaoSalvar}>Salvar</button>
                <button className={buttonStyles.botaoExcluir}>Excluir</button>
            </div>

        </section>
    )
}