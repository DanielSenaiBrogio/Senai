"use client";

import { useState } from "react";

type Props = {
    texto: string;
    corFundo?: string;
    corBorda?: string;
};

export function Botao({ texto, corFundo, corBorda }: Props) {
    const [selecionado, setSelecionado] = useState(false);

    return (
        <button
            onMouseEnter={() => setSelecionado(true)}
            onMouseLeave={() => setSelecionado(false)}

            style={{
                backgroundColor: selecionado ? "black" : "white",

                color: selecionado ? "white": "black",

                borderColor: corBorda || "black",
                borderWidth: "1px",
                borderStyle: "solid",
                cursor: "pointer",
                padding: "10px 20px",
            }}
        >
            {texto}
        </button>
    );
}
