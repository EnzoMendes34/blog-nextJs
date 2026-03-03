# 📝 Blog Next.js

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black"/>
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white"/>
</p>

Aplicação de blog fullstack desenvolvida com Next.js, com suporte a criação e edição de posts em **Markdown**, autenticação de usuários e banco de dados local com SQLite.

---

## 📋 Funcionalidades

- ✅ Autenticação de usuários com **Better Auth** (jose + bcryptjs)
- ✅ Criação de posts com editor **Markdown**
- ✅ Renderização de Markdown com sanitização de HTML
- ✅ URLs amigáveis com **slugs** automáticos
- ✅ Validação de dados com **Zod**
- ✅ Banco de dados local com **SQLite** via Drizzle ORM
- ✅ Seed do banco de dados para popular dados iniciais
- ✅ Interface moderna e responsiva com **Tailwind CSS**

---

## 🛠️ Tecnologias

| Tecnologia | Descrição |
|------------|-----------|
| Next.js 16 | Framework React fullstack |
| TypeScript | Tipagem estática |
| Tailwind CSS + Typography | Estilização e tipografia |
| Drizzle ORM | ORM para acesso ao banco |
| SQLite (better-sqlite3) | Banco de dados local |
| Better Auth | Autenticação de usuários |
| JWT (jose) | Tokens de sessão |
| bcryptjs | Hash de senhas |
| Zod | Validação de schemas |
| react-md-editor | Editor de Markdown |
| react-markdown | Renderização de Markdown |
| slugify | Geração de slugs para URLs |
| date-fns | Formatação de datas |
| Prettier | Formatação de código |

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js 18+

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/EnzoMendes34/blog-nextJs.git

# Entre na pasta
cd blog-nextJs

# Instale as dependências
npm install
```

Configure as variáveis de ambiente copiando o arquivo de exemplo:

```bash
cp .env.local-example .env.local
```

Edite o `.env.local` com suas configurações:

```env
DATABASE_URL=./seu-banco.db
BETTER_AUTH_SECRET=sua_chave_secreta
BETTER_AUTH_URL=http://localhost:3000
```

```bash
# Rode as migrations do banco
npm run migrate

# (Opcional) Popule o banco com dados iniciais
npm run seed

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

---

## 👨‍💻 Autor

Feito por **Enzo Mendes**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enzo-mendes-49896b285)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EnzoMendes34)
