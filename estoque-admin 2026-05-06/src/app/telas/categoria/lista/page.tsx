"use client";

import { useRouter } from "next/navigation";
import styleCards from "../../card.module.css";
import styleTexts from "../../text.module.css";
import styles from "../lista/page.module.css";
import { useState } from "react";
import { ICategoria } from "@/app/interfaces/icategoria";

export default function TelaListaCategoria() {
    const router = useRouter();

    const [categorias] = useState<ICategoria[]>([
        { id: '01', nome: "Canecas", descricao: null },
        { id: '02', nome: "Chaleiras", descricao: null },
        { id: '03', nome: "Colheres", descricao: null },
        { id: '04', nome: "Pratos", descricao: null },
        { id: '05', nome: "Garfos", descricao: null },
        { id: '06', nome: "Facões", descricao: null },
        { id: '07', nome: "Saleiros", descricao: null },
        { id: '08', nome: "Açucareiros", descricao: null },
        { id: '09', nome: "Panelas", descricao: null },
    ])

    return (
        <section className={styles.conteudo}>

            <h3 className={styleTexts.titulo}>Lista de Categorias</h3>

            <div className={styleCards.cardsContainer}>
                
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.cardCriar}>➕ Criar</div>

                {
                    categorias.map((categoria) => (
                        <div
                            key={categoria.id}
                            className={styleCards.card}
                            onClick={() => router.push("/telas/categoria/cadastro?id=" + categoria.id)}
                        >
                            {categoria.nome}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}