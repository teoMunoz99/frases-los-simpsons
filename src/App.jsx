import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import logo from "./assets/logosimpson.png";
import Button from "react-bootstrap/Button";
import Frases from "./components/Frases";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      setPersonaje(dato[0]);
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComponente = mostrarSpinner ? (
    <div className="mb-5">
      <Spinner></Spinner>
    </div>
  ) : (
    <Frases personaje={personaje}></Frases>
  );

  return (
    <>
      <Container className="text-center">
        <img src={logo} alt="Logo de Los Simpsons" className="w-50 my-5" />
        {mostrarComponente}
        <Button variant="warning" className="my-3" onClick={consultarApi}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
