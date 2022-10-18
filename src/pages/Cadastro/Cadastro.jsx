import React from "react";
import styles from './Cadastro.module.css'

const Cadastro = () => {
  return (
    <div className={styles.cadastro}>
        <h2>Cadastre-se</h2>
      <form>
        <label>
          <span>Nome: </span>
          <input type="text" name="displayName" placeholder="Nome Completo" />
        </label>
        <label>
          <span>E-mail: </span>
          <input type="email" name="email" placeholder="nome@site.com.br" />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
        </label>
        <label>
          <span>Confirmar senha: </span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme a Senha"
          />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
