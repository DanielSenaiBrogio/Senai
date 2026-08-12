export type Prop={
    cabecalhos: string[]; //define os titulos dos cabecalhos
    colunas: string[]; //define quais chaves do objeto serão exibidas
    lista: any[]; //define lista de qualquer coisa

}

export function TabelaPadrao({cabecalhos, colunas, lista}: Prop){
    return(
        <table style={{borderCollapse: "collapse", textAlign: "center"}} >


            {/* Cabeçalho da tabela tipo nome preço por kilo */}
            <thead>
                <tr>
                    {cabecalhos.map((cabecalho, index) => (
                        <th style={{padding: "5px", background: "lightgray", border: "1px solid black"}} key={index}> {cabecalho}</th>
                    ))}
                </tr>
            </thead>


            <tbody>
                {lista.map((item, index) => (
                    <tr key={index}>
                        {colunas.map((coluna, indexColuna) => (
                            <td style={{padding: "10px"}} key={indexColuna}>{item[coluna]}</td>
                        /* essa e a lista de coluna tipo cada item*/
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}