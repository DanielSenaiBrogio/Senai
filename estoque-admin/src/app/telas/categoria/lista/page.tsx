"use client";

import { useRouter } from "next/navigation";
import styleCards from "../../card.module.css";
import styleTexts from "../../text.module.css";
import styles from "../lista/page.module.css";
import { useEffect, useState } from "react";
import { ICategoria } from "@/app/interfaces/icategoria";
import { Listar } from "../api";

export default function TelaListaCategoria() {
    const router = useRouter();

    const [categorias, setCategorias] = useState<ICategoria[]>([])

    async function CarregarDados(){
        const lista = await Listar()
        setCategorias(lista);
    }

    useEffect(() => {CarregarDados();}, []);
    
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