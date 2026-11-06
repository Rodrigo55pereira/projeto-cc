# Patinhas Felizes aula 🐾

Landing page institucional de um petshop fictício, a **Patinhas Felizes aula**. O site apresenta os serviços (banho e tosa, veterinário, hotelzinho e loja de produtos), traz informações sobre a empresa e leva o visitante ao contato por WhatsApp.

É uma página estática de uma única rota, feita com Next.js (App Router) e Server Components. Serve como base para evoluir para um site com agendamento, autenticação e área administrativa.

## Seções da página

| Seção    | Componente               | Descrição                                          |
| -------- | ------------------------ | -------------------------------------------------- |
| Hero     | `components/hero.tsx`    | Título, apresentação e botão de agendamento        |
| Serviços | `components/services.tsx`| Cards com os quatro serviços oferecidos            |
| Sobre    | `components/about.tsx`   | Texto institucional e números da empresa           |
| Contato  | `components/contact.tsx` | Endereço, telefone, horário e link para o WhatsApp |
| Rodapé   | `components/footer.tsx`  | Direitos reservados                                |

A composição das seções está em `app/page.tsx`. Metadados (título e descrição em `pt-BR`) ficam em `app/layout.tsx`.

## Tecnologias

- [Next.js](https://nextjs.org) 16.4.5 (App Router, Turbopack, `cacheComponents` e `partialPrefetching` habilitados)
- [React](https://react.dev) 19.3
- [TypeScript](https://www.typescriptlang.org) 5
- [Tailwind CSS](https://tailwindcss.com) 4, com tokens de design em `app/globals.css` (`brand` e `brand-dark`) e suporte a modo escuro
- ESLint 9 com `eslint-config-next`
- Fontes Geist e Geist Mono via `next/font`

### Planejado

As convenções do projeto (`CLAUDE.md` e `.claude/rules/`) preveem estas ferramentas, que ainda **não** estão instaladas:

- shadcn/ui, para os primitivos em `components/ui/`
- React Hook Form + Zod, para formulários e validação
- Supabase, para autenticação e dados

## Como começar

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. A página atualiza automaticamente ao editar os arquivos.

## Scripts

| Comando              | Descrição                          |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Servidor de desenvolvimento        |
| `npm run build`      | Build de produção                  |
| `npm run start`      | Executa o build de produção        |
| `npm run lint`       | Verifica o código com ESLint       |
| `npm run type-check` | Checagem de tipos (`tsc --noEmit`) |

## Estrutura

```
app/             Rotas, layout e estilos globais (App Router)
actions/         Server Actions (mutações)
components/      Componentes de feature (seções da landing page)
components/ui/   Primitivos reutilizáveis
lib/             Helpers, clients e configurações
types/           Tipos globais e schemas compartilhados
public/          Arquivos estáticos
```

## Convenções

- Server Components por padrão; `"use client"` apenas quando houver hooks, eventos ou APIs do navegador.
- Mutações via Server Actions, nunca acessando o banco direto de Client Components.
- Estilo apenas com Tailwind, sem CSS inline. Novos tokens de design entram em `app/globals.css`.
- Arquivos em kebab-case e componentes em PascalCase.
- Sem `any` explícito; use `unknown` com type guard.
- Commits em inglês, no imperativo (ex.: `add OAuth callback handler`).

## Personalização

Os dados do petshop (nome, endereço, telefone, horário, número do WhatsApp e estatísticas) estão escritos diretamente nos componentes e são fictícios. Troque-os antes de publicar:

- Telefone, endereço, horário e link `wa.me`: `components/contact.tsx`
- Estatísticas e texto institucional: `components/about.tsx`
- Serviços oferecidos: lista `services` em `components/services.tsx`
- Cor da marca: `--color-brand` e `--color-brand-dark` em `app/globals.css`

## Observação sobre o Next.js

Esta versão do Next.js tem mudanças incompatíveis com versões anteriores. Consulte a documentação local em `node_modules/next/dist/docs/` antes de usar APIs novas (veja também `AGENTS.md`).

## Deploy

O caminho mais simples é a [Vercel](https://vercel.com). Veja o [guia de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
