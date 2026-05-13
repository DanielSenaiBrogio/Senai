'use client';

import styleCards from "../../card.module.css";
import styles from "../lista/page.module.css";
import styleTexts from "../../text.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IUnidadeMedida } from "@/app/interfaces/iunidademedida";

export default function TelaListaUnidadeMedida() {
    const router = useRouter();

    const [unidadesMedida] = useState<IUnidadeMedida[]>([
        { id: "01", sigla: "mg", descricao: "miligrama", fracionavel: true },
        { id: "02", sigla: "g", descricao: "grama", fracionavel: true },
        { id: "03", sigla: "kg", descricao: "quilograma", fracionavel: true },
        { id: "04", sigla: "ml", descricao: "mililitro", fracionavel: true },
        { id: "05", sigla: "l", descricao: "litro", fracionavel: true },
        { id: "06", sigla: "mm", descricao: "mililitro", fracionavel: true },
        { id: "07", sigla: "m", descricao: "metro", fracionavel: true },
        { id: "08", sigla: "un", descricao: "unidade", fracionavel: false },
        { id: "09", sigla: "dez", descricao: "dezena", fracionavel: false },
        { id: "10", sigla: "dz", descricao: "dúzia", fracionavel: false },
    ])

    return (
        <section className={styles.conteudo}>

            <h3 className={styleTexts.titulo}>Lista de Unidades de Medida</h3>

            <div className={styleCards.cardsContainer}>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.cardCriar}>➕ Criar</div>

                {
                    unidadesMedida.map(unidade => (
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