import "../assets/css/NumAleatorios.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Tabla = () => {
  const dato = [];
  const [aleatorio, setAleatorio] = useState(dato);

  //Saca un numero de despomposturas entre el rango con lo numeros aleatorios
  const valorDescomposturas = (i) => {
    if (i <= 0.1) {
      let min = 6;
      let max = 8;
      var rango = "valor1";
      let numero = Math.floor(Math.random() * (max - min + 1) + min);
      return [numero, rango];
    }

    if (i >= 0.11 && i <= 0.25) {
      let min = 8;
      let max = 10;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    if (i >= 0.26 && i <= 0.49) {
      let min = 10;
      let max = 12;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    if (i >= 0.5 && i <= 0.75) {
      let min = 12;
      let max = 14;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    if (i >= 0.76 && i <= 0.93) {
      let min = 16;
      let max = 18;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    if (i >= 0.94 && i <= 1) {
      let min = 18;
      let max = 20;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  };
  //Saca un rango de despomposturas entre el rango con lo numeros aleatorios
  const rangosDescomposturas = (i) => {
    if (i <= 0.1) {
      let rango = "Rango 1";
      return rango;
    }
    if (i >= 0.11 && i <= 0.25) {
      let rango = "Rango 2";
      return rango;
    }
    if (i >= 0.26 && i <= 0.49) {
      let rango = "Rango 3";
      return rango;
    }
    if (i >= 0.5 && i <= 0.75) {
      let rango = "Rango 4";
      return rango;
    }
    if (i >= 0.76 && i <= 0.93) {
      let rango = "Rango 5";
      return rango;
    }
    if (i >= 0.94 && i <= 1) {
      let rango = "Rango 6";
      return rango;
    }
  };
  //Saca un numero de reparacion entre el rango con lo numeros aleatorios
  const valorReparacion = (i) => {
    if (i <= 0.15) {
      let min = 2;
      let max = 4;
      let numero = Math.floor(Math.random() * (max - min + 1) + min);
      return numero;
    }
    if (i >= 0.16 && i <= 0.4) {
      let min = 4;
      let max = 6;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    if (i >= 0.41 && i <= 0.7) {
      let min = 6;
      let max = 8;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    if (i >= 0.71 && i <= 0.9) {
      let min = 8;
      let max = 10;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    if (i >= 0.91 && i <= 1) {
      let min = 10;
      let max = 12;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  };
  //Saca un rango de reparacion entre el rango con lo numeros aleatorios
  const rangosReparacion = (i) => {
    if (i <= 0.1) {
      let rango = "Rango 1";
      return rango;
    }
    if (i >= 0.11 && i <= 0.25) {
      let rango = "Rango 2";
      return rango;
    }
    if (i >= 0.26 && i <= 0.49) {
      let rango = "Rango 3";
      return rango;
    }
    if (i >= 0.5 && i <= 0.75) {
      let rango = "Rango 4";
      return rango;
    }
    if (i >= 0.76 && i <= 0.93) {
      let rango = "Rango 5";
      return rango;
    }
    if (i >= 0.94 && i <= 1) {
      let rango = "Rango 6";
      return rango;
    }
  };

  const generadorObjetos = () => {
    const numero = new Array(100);
    for (let i = 0; i < numero.length; i++) {
      let numeros = Math.random().toFixed(2);
      let cantidad = valorDescomposturas(numeros);
      let rangoDescomposturas = rangosDescomposturas(numeros);
      let numeros2 = Math.random().toFixed(2);
      let reparacion = valorReparacion(numeros2);
      let rangoReparacion = rangosReparacion(numeros2);
      numero[i] = {
        numeros: numeros,
        cantidad: cantidad,
        rangoDescomposturas: rangoDescomposturas,
        numeros2: numeros2,
        reparacion: reparacion,
        rangoReparacion: rangoReparacion,
      };
    }
    setAleatorio(numero);
  };
  return (
    <Container>
      <Container className="titulo">
        <p>
          Al apretar el siguiente boton se mostraran los datos de la simulacion
          o se refrescaran los datos:
        </p>
        <Button onClick={generadorObjetos} variant="primary">
          Generar
        </Button>
      </Container>
      <Container>
        <Card>
          <Card.Header>Tabla de Resultados</Card.Header>
          <Card.Body>
            <Container>
              <Table striped bordered hover>
                <thead>
                  <tr className="columna">
                    <th>n°</th>
                    <th>%</th>
                    <th>Tiempo descomporturas (horas)</th>
                    <th>Rango descomposturas</th>
                    <th>%</th>
                    <th>Tiempo arreglo (min)</th>
                    <th>Rango reparacion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="columna">
                    <td>1</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <Card>
          <Card.Header>Tabla de datos</Card.Header>
          <Card.Body>
            <Container>
              <Table striped bordered hover>
                <thead>
                  <tr className="columna">
                    <th>n°</th>
                    <th>%</th>
                    <th>Tiempo descomporturas (horas)</th>
                    <th>Rango descomposturas</th>
                    <th>%</th>
                    <th>Tiempo arreglo (min)</th>
                    <th>Rango reparacion</th>
                  </tr>
                </thead>
                <tbody>
                  {aleatorio.map((i, index) => (
                    <tr key={index} className="columna">
                      <td>{index + 1}</td>
                      <td>{i.numeros}</td>
                      <td>{i.cantidad}</td>
                      <td>{i.rangoDescomposturas}</td>
                      <td>{i.numeros2}</td>
                      <td>{i.reparacion}</td>
                      <td>{i.rangoReparacion}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default Tabla;
