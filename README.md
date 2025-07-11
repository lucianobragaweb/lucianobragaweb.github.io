# Base Portfólio Next.js 14 + App Router

Este projeto é um ponto de partida moderno para portfólio de desenvolvedor, utilizando:

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS** (com suporte a dark mode via `class`)
- **shadcn/ui** (componentes prontos e personalizáveis)
- **Internacionalização** com `react-i18next` (funcionando em Client Components)
- **Alias `@` para `src/`**

## Estrutura de Pastas

```
├── src/
│   ├── app/           # Rotas e layouts (App Router)
│   ├── components/    # Componentes reutilizáveis (Client Components)
│   └── lib/           # Helpers, utilitários, i18n
├── public/
│   └── locales/       # Traduções (en, pt, ...)
```

## Scripts

```bash
npm run dev     # Desenvolvimento
npm run build   # Build de produção
npm run start   # Servir build de produção
```

## Internacionalização
- As traduções ficam em `public/locales/{lang}/common.json`.
- O hook `useTranslation` do `react-i18next` pode ser usado em qualquer Client Component.
- Para trocar de idioma, use o método `i18n.changeLanguage('en' | 'pt')`.

## Como adicionar um novo idioma?
1. Crie a pasta `public/locales/{novo_idioma}`.
2. Adicione o arquivo `common.json` com as traduções.
3. Importe e adicione no objeto `resources` em `src/lib/i18n.ts`.

## shadcn/ui
- Para adicionar componentes: `npx shadcn@latest add button` (ou outro componente)
- O tema base é "slate" (pode ser alterado em `components.json`)

## Observações
- O App Router **não suporta** configuração i18n no `next.config.ts`.
- Providers de contexto (como `I18nextProvider`) só funcionam em Client Components.
- O exemplo de troca de idioma está implementado na home.

---

Desenvolvido para servir de base para portfólio e projetos modernos com Next.js.
