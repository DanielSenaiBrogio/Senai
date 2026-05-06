"use client";

import { useRouter } from "next/navigation";
import inputStyles from "../../input.module.css";
import styleTexts from "../../text.module.css";
import tableStyles from "../../table.module.css";
import buttonStyles from "../../button.module.css";
import styles from "../pesquisa/page.module.css";
import { IProdutoPesquisa } from "@/app/interfaces/iprodutopesquisa";
import { useState } from "react";


export default function TelaPesquisaProduto() {
    const router = useRouter();

    const [produtos] = useState<IProdutoPesquisa[]>([
        {
            id: '01',
            categoria: 'Canecas',
            nome: 'Caneca da formatura',
            quantidadeAtual: 1,
            unidadeMedida: 'un'
        },
        {
            id: '02',
            categoria: 'Canecas',
            nome: 'Caneca de porcelana',
            quantidadeAtual: 10,
            unidadeMedida: 'un'
        },
        {
            id: '03',
            categoria: 'Panelas',
            nome: 'Panela que faz feijão fu fu',
            quantidadeAtual: 1,
            unidadeMedida: 'un'
        },
        {
            id: '04',
            categoria: 'Armas corpo a corpo',
            nome: 'Sabre de Luz',
            quantidadeAtual: 3,
            unidadeMedida: 'un'
        },
    ])

    return (
        <section className={styles.conteudo}>
            <h3 className={styleTexts.titulo}>Pesquisa de Produtos</h3>

            <div className={styles.parametros}>
                <div>
                    <label htmlFor="categoria">Categoria: </label> <br></br>
                    <select className={inputStyles.select} name="categoria">
                        <option></option>
                        <option>Ferramentas</option>
                        <option>Utensílios</option>
                        <option>Líquidos Inflamáveis</option>
                        <option>Alimentos</option>
                        <option>Cama, Mesa e Banho</option>
                    </select>

                </div>
                <div style={{ flex: 1 }}>
                    <label htmlFor="nomeDescricao">Nome ou Descrição: </label> <br></br>
                    <input className={inputStyles.input} style={{ width: '100%' }} type="text" name="nomeDescricao" />
                </div>
                <button className={buttonStyles.botaoPadrao} style={{ width: '100px' }}>🔍</button>
            </div>

            <div style={{ flex: '1', overflowY: 'scroll', borderBottom: '1px solid lightgray' }}>
                <table className={tableStyles.table} style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produtos.map(produto => (
                                <tr
                                    key={produto.id}
                                    onClick={() => router.push('/telas/produto/cadastro?id=' + produto.id)}
                                >
                                    <td>{produto.categoria}</td>
                                    <td>{produto.nome}</td>
                                    <td>{produto.quantidadeAtual + ' ' + produto.unidadeMedida}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <button
                onClick={() => router.push('/telas/produto/cadastro')}
                className={buttonStyles.botaoPadrao}
                style={{ width: '100px' }}>
                ➕ Criar
            </button>
        </section>
    )
}