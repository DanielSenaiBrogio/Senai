'use client';

import styleCards from "../../card.module.css";
import styles from "../lista/page.module.css";
import styleTexts from "../../text.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IUnidadeMedida } from "@/app/interfaces/iunidademedida";
import { Listar } from "../api";

export default function TelaListaUnidadeMedida() {
    const router = useRouter();

    const [unidadesMedida] = useState<IUnidadeMedida[]>([
        //nada por enquanto
    ])

    const [UnidadeMedida, setUnidadeMedida] = useState<IUnidadeMedida[]>([])

    async function CarregarDados() {
        const lista = await Listar()
        setUnidadeMedida(lista);
    }

    useEffect(() => { CarregarDados(); }, []);

    return (
        <section className={styles.conteudo}>

            <h3 className={styleTexts.titulo}>Lista de Unidades de Medida</h3>

            <div className={styleCards.cardsContainer}>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.cardCriar}>➕ Criar</div>

                {
                    UnidadeMedida.map(unidade => (
                        <div
                            key={unidade.id}
                            className={styleCards.card}
                            onClick={() => router.push("/telas/unidadeMedida/cadastro?id=" + unidade.id)}
                        >
                            {`${unidade.descricao} (${unidade.sigla})`}
                        </div>
                    ))
                }
            </div>

        </section>
    )
}