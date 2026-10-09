
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/Entrada/Login">
        <button>Login</button>
      </Link>
<br /><br /><br />
      <Link href="/Entrada/Cadastro">
        <button>Cadastro</button>
      </Link>
    </div>
  );
}