
import "./globals.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header className="header">
          <h1>Estocar: painel administrativo</h1>
        </header>

        <nav className="nav">
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/telas/categoria/lista">Categoria</Link></li>
            <li><Link href="/telas/unidadeMedida/lista">Unidade de medida</Link></li>
            <li><Link href="/telas/produto/pesquisa">Produto</Link></li>
          </ul>
        </nav>

        <main className="main">
          
        {children} 

        </main>

      <footer className="footer">
        <h1>Todos os direitos reservados</h1>
      </footer>

      </body>
    </html>
    
  );
}
