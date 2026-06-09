# Roteamento no React

## Documentação:

[React Router - Site oficial](https://reactrouter.com)

## Formas diferentes para aplicações diferentes

### Declarative Mode

É o equivalente ao nível fácil do joguinho. Aqui é onde você começa a brincar com criar os caminhos para chegar até o destino.

Para ele funcionar bem, usamos o componente `<BrowserRouter>` e criamos as rotas dentro da renderização dos componentes React.

---

#### Texto retirado do conteúdo da alura

Principais recursos:

    Navegação com <Link>;
    Controle de URL com useNavigate e useLocation;
    Renderização baseada no caminho da URL.

Quando usar?

    Quando você quer começar simples;
    Quando já usa Create React App ou Vite com React;
    Quando você tem uma arquitetura de dados separada.

### Data Mode

Esse modo traz mais funcionalidades. Ele separa a configuração das rotas da renderização React e permite carregar dados antes de mostrar a página.

```

import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
{
path: "/",
Component: Home,
loader: () => fetch("/api/home-data"),
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={router} />
);

```
Principais recursos:

    loader: carrega dados antes de renderizar a página;
    action: trata formulários e eventos;
    useFetcher: controle mais fino de requisições e estados pendentes

Quando usar?

    Quando você quer mais controle sobre os dados carregados;
    Quando sua aplicação tem muitas interações com API;
    Quando quer mostrar estados de carregamento (loading).


### Framework Mode

Agora começou o hard mode do joguinho. Ele usa um plugin do Vite para transformar as rotas em módulos e trazer recursos prontos.
Dentre eles:
- Tipagem automática;
- Divisão inteligente de código (code splitting);
- Suporte nativo a SSR (Server Side Rendering) e SSG (Static Site Generation)

Quando usar?

    Quando você quer o máximo de produtividade com integração de tudo;
    Quando quer comparar com frameworks como Next.js ou Remix;
    Quando precisa de SSR ou SSG prontos.

| Modo | Controle | Funcionalidade | Ideal para
| :--- | :---: | |:---: | ---:|
| Declarative | Alto | Básica | Quem está começando |
| Data | Médio | Intermediárias| Apps com interação com API|
| Framework| Baixo | Avançadas| Projetos grandes e complexos |