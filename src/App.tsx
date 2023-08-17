import { Provider } from "react-redux";
import Formulario from "./containers/Formulario";
import store from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editar from "./pages/editar";
import Tabela from "./components/TabelaCadastro";
import { DadosCadastro } from "./models";

const rotas = createBrowserRouter([
  {
    path: "/edit/:id",
    element: <Editar />,
  },
  {
    path: "/",
    element: <Formulario />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={rotas} />
      </Provider>
    </>
  );
}

export default App;
