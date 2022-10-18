import React from "react";

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
      </form>
    </div>
  );
};

export default Home;
