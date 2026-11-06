# projeto1

Aplicação [Next.js](https://nextjs.org) (App Router) criada com `create-next-app`, usando TypeScript e Tailwind CSS.

## Stack

- Next.js 16.4.5 (App Router, Turbopack) e React 19.3
- TypeScript 5
- Tailwind CSS 4 (via `@tailwindcss/turbopack`)
- ESLint 9 com `eslint-config-next`
- Fontes Geist e Geist Mono via `next/font`

## Como começar

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. A página inicial fica em `app/page.tsx` e atualiza automaticamente ao ser editada.

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
app/          Rotas, layouts e estilos globais (App Router)
actions/      Server Actions (mutações)
components/   Componentes de feature
components/ui/ Primitivos reutilizáveis
lib/          Helpers, clients e configurações
types/        Tipos globais e schemas compartilhados
public/       Arquivos estáticos
```

## Configuração relevante

`next.config.ts` habilita `cacheComponents` e `partialPrefetching`, e configura o Tailwind CSS 4 como loader de arquivos `.css` no Turbopack.

Esta versão do Next.js tem mudanças incompatíveis com versões anteriores. Consulte a documentação local em `node_modules/next/dist/docs/` antes de usar APIs novas (veja também `AGENTS.md`).

## Saiba mais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Deploy na Vercel](https://nextjs.org/docs/app/building-your-application/deploying)
