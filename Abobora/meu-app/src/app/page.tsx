'use client';

import { Botao } from "./componentes/botoes/BotaoPadrao";
import { BotaoNavegacao } from "./componentes/botoes/BotaoNavegacao";
import { BotaoMaisEMenos } from "./componentes/botoes/BotaoMaisEMenos";
import { TabelaPadrao } from "./componentes/Tabelas/Tablea-padrao";
import { ListaPadrao } from "./componentes/listas/listaPadrao";

export default function  Home() {
  const frutas = [
    { nome: "banana", precoKg: 5.50, calorias: 105 },
    { nome: "maçã", precoKg: 4.00, calorias: 52 },
    { nome: "uva", precoKg: 8.00, calorias: 69 },
    { nome: "laranja", precoKg: 3.00, calorias: 47 },
    { nome: "morango", precoKg: 12.00, calorias: 32 },
    { nome: "melancia", precoKg: 2.00, calorias: 34 }
  ];




  const ProdutosDeLimpeza  = [
    {nome: "detergente", preco: 2.50, marca: "Ypê", dataDeValidade: "2026-12-31"},
    {nome: "desinfetante", preco: 8.00, marca: "Pinho Sol", dataDeValidade: "2026-12-31"},
    {nome: "agua sanitaria", preco: 3.00, marca: "Varek", dataDeValidade: "2026-12-31"}
    
  ]

  return (
    <div>
      <h1>Lista de Componentes</h1>


      <TabelaPadrao
        cabecalhos={["Nome", "Preço por kg", "Calorias"]}
        colunas={["nome", "precoKg", "calorias"]}
        lista={frutas}
      />

      <ListaPadrao coluna="nome" lista={frutas}/>

      <Botao texto="Clica aqui" />

      <Botao
        texto="Avançado"
        corFundo="pink"
        corBorda="red"
      />

      <BotaoNavegacao
        funcaoVoltar={() => alert("Voltar")}
        funcaoAvancar={() => alert("Avançar")}
      />

      <BotaoNavegacao distancia={100} />

      <BotaoMaisEMenos
        mais={() => alert("Deu mais")}
        menos={() => alert("Deu menos")}
      />
    </div>
  );
}
