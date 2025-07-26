import { faker } from '@faker-js/faker';

export function gerarUsuario() {
  const senha = faker.internet.password(8);
  return {
    email: faker.internet.email(),
    nome: faker.person.fullName(),
    senha,
    confirmarSenha: senha
  };
}
