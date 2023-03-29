import './App.css';
import { useState } from "react";

function App() {

  const [nome, setNome] = useState("");

  const nomes = ["Vanessa", "Ívina", "David", "Augusto", "Júnior", "Luíz"];

  function gerarNome() {
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    setNome(nomes[indiceAleatorio]);
  }

  return (
    <div className="App">
      <span> O nome é: {nome}</span>
      <br/>
      <button onClick={gerarNome}>GERAR NOME</button>

    </div>
  );
}

export default App;
