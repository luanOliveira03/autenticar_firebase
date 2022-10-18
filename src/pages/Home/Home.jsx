import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder="nome@site.com.br" />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
        </label>
        <button>Entrar</button>
        <Link to='/cadastro'>Cadastre-se</Link>
      </form>
    </div>
  );
};

export default Home;
