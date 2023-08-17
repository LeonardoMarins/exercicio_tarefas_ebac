import React, { ChangeEvent } from "react";
import { Button, Input } from "./style";

type Props = {
  nome: string;
  email: string;
  telefone: string;
  onNomeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onTelefoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
  Submit: () => void;
};

const ItensForm = ({
  nome,
  email,
  telefone,
  onNomeChange,
  onEmailChange,
  onTelefoneChange,
  onSubmit,
  Submit,
}: Props) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="nome">Nome completo</label>
        <Input
          required
          onChange={onNomeChange}
          value={nome}
          placeholder="digite seu nome completo"
          id="nome"
          type="text"
        />
        <label htmlFor="email">E-mail</label>
        <Input
          required
          onChange={onEmailChange}
          value={email}
          placeholder="digite seu e-mail"
          id="email"
          type="email"
        />
        <label htmlFor="telefone">Telefone</label>
        <Input
          onChange={onTelefoneChange}
          value={telefone}
          placeholder="digite seu telefone"
          id="telefone"
          type="tel"
        />
        <Button onClick={Submit} type="submit">
          Cadastrar
        </Button>
      </form>
    </>
  );
};

export default ItensForm;
