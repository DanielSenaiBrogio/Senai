import styleTexts from '../../text.module.css';
import styleInputs from '../../input.module.css';
import styleBotoes from '../../button.module.css';
import styles from './page.module.css';

export default function TelaProdutoCadastro() {
    return (
        <section className={styles.conteudo}>
            <h3 className={styleTexts.titulo}>Cadastro de Produtos</h3>

            <div className={styles.dados}>

                <div className={styles.gridImg}>
                    <label>Foto: </label>
                    <img
                        style={{ border: '1px solid lightgray', flex: 1 }}
                        width={'225px'}
                        height={'225px'}
                        src="https://http2.mlstatic.com/D_NQ_NP_2X_644018-MLA93296053690_092025-F.webp"
                    />
                    <input type="file" />
                </div>

                <div className={styles.gridInf}>
                    <div className={styles.info}>
                        <label htmlFor="nome">Nome:</label>
                        <input className={styleInputs.input} type="text" name="nome" />
                    </div>

                    <div className={styles.info}>
                        <label htmlFor="unidadeMedida">Unidade de Medida:</label>
                        <select className={styleInputs.select} name='unidadeMedida'>
                            <option>Litro (Lt)</option>
                            <option>Quilograma (Kg)</option>
                            <option>Unidade (Un)</option>
                        </select>
                    </div>

                    <div className={styles.info}>
                        <label htmlFor="categoria">Categoria:</label>
                        <select className={styleInputs.select} name='categoria'>
                            <option>Utensílios de Cozinha</option>
                            <option>Brinquedos</option>
                            <option>Inflamáveis</option>
                        </select>
                    </div>

                    <div className={styles.info}>
                        <label htmlFor="habilitado">Habilitado:</label>
                        <select className={styleInputs.select} name='habilitado'>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>
                    </div>
                </div>

                <div className={styles.gridDes}>
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        style={{width: '100%',height: '100%'}}
                        className={styleInputs.textArea}
                        name='descricao'
                    ></textarea>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button
                    className={styleBotoes.botaoPadrao}
                    style={{ width: '100px' }}
                >
                    Recarregar
                </button>

                <button
                    className={styleBotoes.botaoSalvar}
                    style={{ width: '200px' }}
                >
                    Salvar
                </button>
            </div>
        </section>
    )
}