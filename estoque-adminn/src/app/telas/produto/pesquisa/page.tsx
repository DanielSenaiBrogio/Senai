import styles from "./pesquisa.module.css";
export default function TelaPesquisaProduto() {
    return (
        <section>
            <input className={styles.pesquisaProduto} type="text" placeholder="Pesquisa Produto " />

            {/* Select centralizado */}
            <section className={styles.sectionCenter}>
                <div className={styles.container}>
                    <div className={styles.selectContainer}>
                        <select className={styles.Azure} name="" id="">
                            <option value="">Caneca</option>
                            <option value="">Chaleira</option>
                            <option value="">Colherzinhas</option>
                            <option value="">Colheroes</option>
                            <option value="">Pratos rasos</option>
                            <option value="">Prato fundo</option>
                            <option value="">Garfo</option>
                            <option value="">Facões</option>
                            <option value="">Saleiros</option>
                            <option value="">Açucareiro</option>
                            <option value="">Panela que fazem feijão</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Tabela simples abaixo do select */}
            <table className={styles.Fazer}>
                <thead>
                    <tr>
                        <th className={styles.valores}>Produto</th>
                        <th className={styles.valores}>Categoria</th>
                        <th className={styles.valores}>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Caneca</td>
                        <td>Caneca Cerâmica Cilíndrica Sublimação Branca 330ml Cor Branco Sem Personalização</td>
                        <td>20</td>
                    </tr>
                </tbody>


                <tbody>
                    <tr>
                        <td>Chaleira</td>
                        <td>Chaleira Elétrica 1,8L Inox 220V</td>
                        <td>14</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Colherzinhas</td>
                        <td>Colher de Plástico 100% Reciclável 100 Unidades</td>
                        <td>100</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Colheroes</td>
                        <td>Colher De Silicone Multiuso Colherão Utensílio De Cozinha PRETO / U</td>
                        <td>200</td>
                    </tr>
                </tbody>


                <tbody>
                    <tr>
                        <td>Pratos rasos</td>
                        <td>Prato Raso 25cm 100% Porcelana</td>
                        <td>350</td>
                    </tr>
                </tbody>


                <tbody>
                    <tr>
                        <td>Prato fundo</td>
                        <td>Prato Fundo 28cm 100% Porcelana</td>
                        <td>340</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Garfo</td>
                        <td>Garfo Inox 20cm 100% Aço Inox</td>
                        <td>500</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Facões</td>
                        <td>Facão Inox 25cm 100% Aço Inox</td>
                        <td>120</td>
                    </tr>
                </tbody>



                <tbody>
                    <tr>
                        <td>Saleiros</td>
                        <td>Saleiro Inox 10cm 100% Aço Inox</td>
                        <td>60</td>
                    </tr>
                </tbody>


                <tbody>
                    <tr>
                        <td>Açucareiro</td>
                        <td>Açucareiro Inox 10cm 100% Aço Inox</td>
                        <td>50</td>
                    </tr>
                </tbody>



                <tbody>
                    <tr>
                        <td>Panela que fazem feijão</td>
                        <td>Panela de preçao.</td>
                        <td>47</td>
                    </tr>
                </tbody>


                


            </table>
        </section>
    );
}