'use client';

import styles from "./page.module.css";
import inputStyles from "../../input.module.css";
import buttonStyles from "../../button.module.css";
import textStyles from "../../text.module.css";


import { useEffect, useState } from "react";
import { ICategoria } from "../../../interfaces/icategoria";
import { useSearchParams } from "next/navigation";
import { ObterPorId } from "../api";

export default function TelaCategoriaCadastro() {
    
    const [categoria, setCategoria] = useState<ICategoria>();


    const parametros = useSearchParams()
    const id = parametros.get('id'); // TODO: Implementar busca por id
    
    async function CarregarDados() { // carrega os dados da categoria
       if (id){
        const dados = await ObterPorId(id);
        setCategoria(dados);
       }
    }

    useEffect(() => {CarregarDados();}, []); // carregar informaçoes do useEffect

    return (
        <section className={styles.conteudo}>

            <h3 className={textStyles.titulo}>Cadastro de Categorias</h3>

            <label htmlFor="nome">Nome:</label>
            <input 
                value={categoria?.nome}
                onChange={(evento) => setCategoria({ ...categoria!, nome: evento.target.value })}
                className={inputStyles.input} type="text" name="nome"
            />

            <label htmlFor="descricao">Descrição: </label>
            <textarea
                name="descricao"
                value={categoria?.descricao || ''}
                onChange={(evento) => setCategoria({ ...categoria!, descricao: evento.target.value })}
                className={inputStyles.textArea}
            />

            <div className={buttonStyles.divBotoes}>
                <button className={buttonStyles.botaoSalvar}>Salvar</button>
                <button className={buttonStyles.botaoExcluir}>Excluir</button>
            </div>

        </section>
    )
}