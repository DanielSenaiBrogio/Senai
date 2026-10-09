
"use client";

import { useState } from "react";
import Link from "next/link";
  
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  MenuBook,
  
  LockOutlined,
  Visibility,
  VisibilityOff,
  ArrowForward,
  ArrowBack,
} from "@mui/icons-material";
import styles from "./page.module.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function entrar() {
    if (usuario === "" || senha === "") {
      alert("Preencha o usuário e a senha!");
      return;
    }

    alert("A tela está pronta! Ainda precisamos conectar a API.");
  }

  return (
    <Box className={styles.pagina}>
      <Box className={styles.apresentacao}>
        <Box className={styles.logo}>
          <MenuBook sx={{ fontSize: 52, color: "#d5a66b" }} />
          <Box>
            <Typography variant="h4" className={styles.tituloLogo}>
              Biblioteca
            </Typography>
            <Typography>
              Mais que livros, são novas histórias.
            </Typography>
          </Box>
        </Box>

        <Box className={styles.mensagem}>
          <Typography variant="h3" className={styles.tituloPrincipal}>
            Bem-vindo de volta!
          </Typography>

          <Typography className={styles.descricao}>
            Acesse sua conta e continue explorando
            um mundo de conhecimento.
          </Typography>
        </Box>

        <Typography className={styles.frase}>
          "Um livro é uma porta para novos mundos."
        </Typography>
      </Box>

      <Box className={styles.areaLogin}>
        <Paper elevation={0} className={styles.cartao}>
          <MenuBook sx={{ fontSize: 48, color: "#9a7047" }} />

          <Typography variant="h3" className={styles.tituloLogin}>
            Login
          </Typography>

          <Typography className={styles.subtitulo}>
            Entre com sua conta para acessar a biblioteca.
          </Typography>

          <Box className={styles.formulario}>
            <TextField
              label="Usuário"
              placeholder="Digite seu usuário"
              fullWidth
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              autoComplete="username"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              label="Senha"
              placeholder="Digite sua senha"
              type={mostrarSenha ? "text" : "password"}
              fullWidth
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setMostrarSenha(!mostrarSenha)}
                        edge="end"
                        aria-label="Mostrar ou esconder senha"
                      >
                        {mostrarSenha ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              onClick={entrar}
              endIcon={<ArrowForward />}
              className={styles.botaoEntrar}
            >
              Entrar
            </Button>
          </Box>

          <Box className={styles.cadastro}>
            <Typography variant="body2">
              Não tem uma conta?
            </Typography>

            <Button component={Link} href="/cadastro">
              Cadastre-se
            </Button>
          </Box>

          <Button
            component={Link}
            href="/"
            startIcon={<ArrowBack />}
            className={styles.botaoVoltar}
          >
            Voltar para a página inicial
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}