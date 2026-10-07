"use client";
import React, { useState } from "react";

export default function Home() {
  // Estados para capturar os dados do formulário
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [senha, setSenha] = useState("");

  // Função para enviar os dados para a API Mordor
  const handleSalvar = async () => {
    console.log("Botão salvar clicado!"); 
    
    if (!nome || !cpf || !rg || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const usuario = {
      nome: nome,
      cpf: cpf,
      rg: rg,
      senha: senha,
    };

    console.log("Enviando dados para API:", usuario);

    try {
      const response = await fetch("http://localhost:5271/api/Usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      console.log("Resposta da API status:", response.status);

      if (response.ok) {
        alert("Conta criada com sucesso no Banco Vorcaro!");
        setNome("");
        setCpf("");
        setRg("");
        setSenha("");
      } else {
        alert("Erro ao criar conta. Verifique se a API Mordor está rodando.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Não foi possível conectar à API Mordor. Verifique se o terminal do dotnet run está aberto.");
    }
  };

  return (
    <div style={{ 
      backgroundImage: "url('https://img.magnific.com/vetores-gratis/fundo-minimalista-branco-abstrato-moderno_84443-8335.jpg?semt=ais_hybrid&w=740&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      gap: "5px",
      border: "3px solid black",     
      position : "relative" 
    }}>

      <h1 style={{ 
        position: "absolute", 
        top: "1px",           
        fontSize: "60px", 
        fontWeight: "bold", 
        margin: 0,
        color: "black" 
      }}>
        Banco Executivo
      </h1>

      <div style={{ marginBottom: "-40px" , border: "3px solid black", borderRadius: "10px", padding: "50px", }}>
        <h2 style={{ textAlign: "center", marginTop: 0, marginBottom: "20px"}} >Crie sua conta</h2>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
          <h4 style={{width:"300px"}} >Nome</h4>
          <input 
            style={{ 
              width: "300px", 
              height: "35px", 
              textAlign: "center", 
              border: "2px solid black", 
              borderRadius: "10px" }}
            type="text" 
            placeholder="Nome" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
          <h4 style={{width:"300px"}} >CPF</h4>
          <input 
            style={{ 
              width: "300px", 
              height: "35px", 
              textAlign: "center", 
              border: "2px solid black", 
              borderRadius: "10px" }}
            type="text" 
            placeholder="CPF" 
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
          <h4 style={{width:"300px"}} >RG</h4>
          <input 
            style={{ 
              width: "300px", 
              height: "35px", 
              textAlign: "center", 
              border: "2px solid black", 
              borderRadius: "10px" }}
            type="text" 
            placeholder="RG" 
            value={rg}
            onChange={(e) => setRg(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
          <h4 style={{width:"300px"}} >Senha</h4>
          <input 
            style={{ 
              width: "300px", 
              height: "35px", 
              textAlign: "center", 
              border: "2px solid black", 
              borderRadius: "10px" }}
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", marginTop: "20px" }}>
          
          <button 
            onClick={() => { setNome(""); setCpf(""); setRg(""); setSenha(""); }}
            style={{ 
              width: "120px", 
              height: "35px", 
              borderRadius: "10px", 
              cursor: "pointer",
              backgroundColor: "Red", 
              color: "black", 
              border: "2px solid black",
              fontWeight: "bold"}} 
          >Cancelar</button>
          
          <button 
            onClick={handleSalvar}
            style={{ 
              width: "120px", 
              height: "35px", 
              borderRadius: "10px",     
              cursor: "pointer",
              backgroundColor: "Blue", 
              color: "white", 
              border: "2px solid black",
              fontWeight: "bold",
              marginLeft: "50px"}} 
          >Salvar</button>
        </div>
      </div>
    </div>
  );
}