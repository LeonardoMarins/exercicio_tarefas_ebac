import { configureStore } from "@reduxjs/toolkit";
import adicionarCadastroReducer from "./reducers/cadastro";

const store = configureStore({
  reducer: {
    formulario: adicionarCadastroReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
