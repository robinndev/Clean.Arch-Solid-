## Meeting

Somos uma biblioteca pequena e gostariamos de controlar a nossa entrada e saída de livros. Queremos cadastrar o usuário que irá pegar o livro emprestado, cadastrar os livros da nossa biblioteca e poder emprestar os livros para qualquer usuário

## Dados

- Usuários [name, CPF, cellphone, address, email, is_active, user_id]
- Livro [name, quantity, author, gender, ISBN, book_id]
- Empréstimo [user_id, book_id, date_borrowed, date_due, date_returned]

date_borrowed → data_empréstimo (quando o livro foi retirado)
date_due → data_prevista_devolução (prazo que o usuário deve devolver)
date_returned → data_devolução (quando realmente foi devolvido)

## Use Cases

Um Use Case é o orquestrador de todas as regras e requisitos dentro de um contexto específico.
Ele pega um contexto concreto (ex: Criar Usuário) e quebra o fluxo em passos menores, que podem ser funções internas, validações ou interações com entidades/repositórios.

### [] Cadastrar um novo usuário

- [ ] CPF ou e-mail devem ser únicos
- [ ] CPF deve possuir formato correto
- [ ] Email deve ter formato válido

### [] Cadastrar um novo livro

- [ ] ISBN deve ser único
- [ ] Quantidade inicial não pode ser negativa
- [ ] Nome do livro não pode ser vazio

### [] Realizar empréstimo

- [ ] Só permitido se houver quantidade disponível
- [ ] Registrar data_empréstimo e data_prevista_devolução
- [ ] Um usuário não pode pegar o mesmo livro (ISBN) mais de uma vez sem devolver
- [ ] Um usuário pode estar com mais de um livro (ISBN) diferente
- [ ] Ao cadastrar um empréstimo, será disparado um e-mail automaticamente informando o livro, CPF e informações para devolução (ex: “O e-mail deve conter título, livro emprestado, CPF do usuário e data prevista de devolução”).

### [] Registrar devolução

- [ ] Preencher data_devolução
- [ ] Não pode ser anterior à data_empréstimo
- [ ] Se devolver depois da data_prevista_devolução, marcar como atraso
- [ ] Ao registrar a devolução, a quantidade do livro deve ser incrementada em +1
- [ ] Não deve ser possível registrar devolução duas vezes para o mesmo empréstimo
- [ ] Ao registrar uma devolução, será disparado um e-mail automaticamente informando o livro, CPF e informações para devolução (ex: “O e-mail deve conter título, livro devolvido, CPF do usuário e data de devolução”).

### [] Listar usuários

- [ ] Não deve trazer usuários inativos
- [ ] Permitir filtrar por nome, CPF ou email
- [ ] Caso não exista nada deve retornar [vazio]

### [] Listar livros

- [ ] Livro deve mostrar como indisponível caso não tenha quantidade acima de 0
- [ ] Permitir filtrar por nome, ISBN ou demais campos
- [ ] Caso não exista nada deve retornar [vazio]

### [] Listar empréstimos ativos

- [ ] Não deve mostrar empréstimos que possuem data_devolução, pois estão encerrados
- [ ] Permitir filtrar por usuário
- [ ] Permitir filtrar por livro
- [ ] Caso não exista nada deve retornar [vazio]

### [] Consultar histórico de empréstimos

- [ ] Trazer apenas empréstimos que possuem data_devolução
- [ ] Permitir filtrar por usuário
- [ ] Permitir filtrar por livro
- [ ] Caso não exista nada deve retornar [vazio]
