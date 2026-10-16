'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Link, TextField } from "@mui/material";
import { useState } from "react"; // Importamos o useState para guardar os dados

export default function Home() {
  // Criamos "gavetas" para guardar o CPF e a Senha
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  async function handleCadastro() {
    try {
      const resposta = await fetch('https://localhost:7059/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ CPF: cpf, Senha: senha })
      });

      if (resposta.ok) {
        const resultado = await resposta.json();
        alert(resultado.mensagem);
      } else {
        alert("Erro ao cadastrar!");
      }
    } catch (erro) {
      alert("Erro de conexão com o servidor!");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: "20px" }}>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "40px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", gap: "15px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "10px", color: "#333" }}>Cadastro</h1>
        
        <TextField 
          label="CPF" 
          variant="outlined" 
          value={cpf} 
          onChange={(e) => setCpf(e.target.value)} // Atualiza a "gaveta" do CPF
        />
        
        <TextField 
          label="Senha" 
          variant="outlined" 
          type="password" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} // Atualiza a "gaveta" da Senha
        />

        <Button variant="contained" onClick={handleCadastro}>Cadastrar</Button>
      </div>
    </div>
  );
}