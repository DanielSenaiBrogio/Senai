'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Link, TextField } from "@mui/material";
import { useState } from "react"; // Importamos o useState para guardar o que o usuário digita

export default function Home() {
  // Criamos as "gavetas" para o CPF e a Senha
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  // FUNÇÃO DE LOGIN
  async function handleLogin() {
    try {
      // Chamamos a rota de login que criamos no C#
      const resposta = await fetch('https://localhost:7059/api/cadastro/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ CPF: cpf, Senha: senha })
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        // Se der 200 OK
        alert("🎉 " + resultado.mensagem);
        // Aqui no futuro você pode redirecionar o usuário para a página principal
      } else {
        // Se der 400 ou 404, ele mostra a mensagem que definimos no C#
        // (Ex: "Senha incorreta" ou "Usuário não existe")
        alert("❌ " + (resultado.mensagem || "Erro ao fazer login!"));
      }
    } catch (erro) {
      alert("⚠️ Erro de conexão com o servidor! Verifique se a API está rodando.");
    }
  }

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      gap: "20px" 
    }}>
      <div style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.8)", 
        padding: "40px", 
        borderRadius: "15px", 
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)", 
        display: "flex", 
        flexDirection: "column", 
        gap: "15px",
        textAlign: "center" 
      }}>
        <h1 style={{ marginBottom: "10px", color: "#333" }}>Login</h1>
        
        {/* Campo de CPF conectado ao estado 'cpf' */}
        <label style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}> 
          <TextField 
            label="CPF" 
            variant="outlined" 
            value={cpf} 
            onChange={(e) => setCpf(e.target.value)} 
          />
        </label>
        
        {/* Campo de Senha conectado ao estado 'senha' */}
        <label style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
          <TextField 
            label="Senha" 
            variant="outlined" 
            type="password" // Esconde a senha com bolinhas
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
          /> 
        </label>

        {/* Botão que agora chama a função handleLogin */}
        <Button variant="contained" onClick={handleLogin}>Entrar</Button>
        
        <div style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
          Crie sua conta agora!{" "}
          <Link 
            href="/Cadastro" 
            style={{ 
              color: "#0070f3", 
              fontWeight: "bold", 
              cursor: "pointer", 
              textDecoration: "none" 
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}