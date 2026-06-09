# Roteamento no React

##  📚 Documentação:

[React Router - Site oficial](https://reactrouter.com)

## Formas diferentes para aplicações diferentes

### Declarative Mode

É o equivalente ao nível fácil do joguinho. Aqui é onde você começa a brincar com criar os caminhos para chegar até o destino.

Para ele funcionar bem, usamos o componente `<BrowserRouter>` e criamos as rotas dentro da renderização dos componentes React chamados `<Routes>` para abrir o caminho das rotas e `<Route>` para as rotas precisamente.

> ⚠️ **Nota do Gemini Sênior:** Esse era o padrão até a versão 6.2 do React Router. Hoje, ele ainda é muito encontrado em sistemas legados, mas a própria documentação recomenda migrar para o _Data Mode_ devido a recursos de performance.

---

#### Texto retirado do conteúdo da alura

Principais recursos:

    **Navegação com `<Link>`:** Evita o reload total da página (Comportamento SPA);
    **Controle de URL:** Manipulação manual com os hooks `useNavigate` (redirecionamento) e `useLocation` (ler a rota atual);
    **Renderização Condicional:** baseada estritamente no caminho da URL.

Quando usar?

    Quando você quer começar simples;
    Quando já usa Create React App ou Vite com React;
    Quando você tem uma arquitetura de dados separada.

### Data Mode

Esse modo traz os superpoderes modernos do React Router (introduzidos na v6.4). Ele separa completamente a configuração das rotas da renderização dos componentes e introduz o conceito de **Data Decoupling** (carregar dados em paralelo com o download do componente).

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    loader: () => fetch("/api/home-data"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
```

Principais recursos:

    loader: Busca os dados da API antes mesmo de começar a renderizar a página, eliminando aquele efeito visual chato de "página piscando em branco".

    action: Trata envios de formulários (POST/PUT/DELETE) de forma nativa, imitando o comportamento HTML clássico, mas sem dar reload na página.

    useFetcher: Permite interagir com rotas e APIs em segundo plano (ótimo para botões de "curtir" ou atualizações silenciosas).

Quando usar?

    O padrão para novos projetos atuais no Vite;

    Quando sua aplicação tem muitas interações com APIs e você quer gerenciar estados de loading globais de forma simples;

    Para evitar os famosos "Waterfalls" de requisições (quando um componente espera o outro renderizar para só então buscar dados).

### Framework Mode

🚀 Agora começou o hard mode do joguinho. Ele utiliza automações (como plugins do Vite) para transformar a própria estrutura de pastas do seu projeto em rotas automáticas (File-based Routing).

💡 Curiosidade: Esse modo reflete a fusão do React Router com o Remix. Ele transforma a biblioteca de rotas em um framework completo de desenvolvimento.

Principais recursos:

    File-based Routing: Você não cria o array de rotas na unha. Criou o arquivo src/routes/about.tsx, a rota /about já existe automaticamente.

    Tipagem automática: Garante que você não erre os parâmetros da URL no TypeScript.

    Code Splitting nativo: Divide seu código automaticamente em pedaços menores. O usuário só baixa o JavaScript da página que ele realmente acessar.

    Suporte a SSR e SSG: Permite renderizar as páginas no servidor (Server-Side Rendering) ou gerar arquivos estáticos (Static Site Generation) para SEO agressivo.

Quando usar?

    Em projetos de grande porte que precisam de excelente indexação no Google (SEO);

    Quando você quer uma experiência de desenvolvimento similar ao Next.js, mas mantendo a stack pura do React Router;

    Quando a produtividade de não ter que configurar arquivos de rotas manualmente se paga no tamanho do time.

| **Modo** | **Abstração** | **Funcionalidade** | **Ideal para** | **Gerenciamento de Dados**
| :--- | :---: | :---: | :---: | ---: |
| **Declarative** | Baixa (Tudo manual) | Básica | Quem está começando | Dentro do componente (`useEffect`) |
| **Data** | Médio (Configuração Explícita)| Intermediárias| Apps com interação com API| Desacoplado via `loaders/actions` |
| **Framework** | Alta (Baseado em arquivos) | Avançadas| Projetos grandes e complexos | Integrado ao servidor/Borda |
