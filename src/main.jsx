import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./pages/Login/index.jsx";
import { Register } from "./pages/Register/index.jsx";
import { Feed } from "./pages/Feed/index.jsx";
import { BlogPost } from "./pages/BlogPost/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Logout } from "./pages/Logout/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Inicia o modo de navegação */}
    <BrowserRouter>
      {/* Rotas conhecidas */}
      <Routes>
        {/* Como o caminho é comum para os dois, podemos fazer isso para ganhar na legibilidade do código */}
        {/* Separar '/auth' das outras páginas do mesmo grupo */}
        <Route path="/auth">
          {/* Rota de registro */}
          <Route path="register" element={<Register />} />
          {/* Rota de login */}
          <Route path="login" element={<Login />} />
          {/* Rota de logout */}
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="/">
          {/* Aqui começa a rota protegida. O que ela faz? Se o usuário não estiver logado e não estiver carregando, impede o navegador de visualizar a página entre os <ProtectedRoute></ProtectedRoute> */}
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
          {/* Complementamos a rota de blog-post para procurar por postagem específica dentro do nosso array de posts. */}
          <Route
            path="blog-post/:slug"
            element={
              <ProtectedRoute>
                <BlogPost />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Feed /> */}
        {/* <BlogPost /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
