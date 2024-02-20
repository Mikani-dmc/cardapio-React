import { useState } from "react";
import Hashtaurante from "./assets/hashtaurante.webp"; //todo item que formos usar a gente 
import "./App.css";
import { Navegacao } from "./Navegacao.jsx";
import { ItemCardapio } from "./ItemCardapio.jsx";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio.js";



export function App () { //export = deixa essa função disponível para qualquer arquivo que queira usar ela
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return  <> 
   <img src={Hashtaurante} alt="" className="capa"/> 
    <Navegacao atualizarPaginaSelecionada = {atualizarPaginaSelecionada}/>
    <div className="menu">
      {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome}  descricao = {item.descricao} preco = {item.preco} imagem = {item.imagem}/>)} 
    </div>
  </>   
}