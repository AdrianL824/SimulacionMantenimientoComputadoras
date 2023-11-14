import "../assets/css/NumAleatorios.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Tabla = () => {
  const dato = [];
  const [aleatorio, setAleatorio] = useState(dato);

  const rangosDescomposturas = (i) => {
    if (i <= 0.1) {
      let min = 6;
      let max = 8;
      return Math.floor(Math.random() * (max - min + 1) + min);
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

  const generadorObjetos = () => {
    const numero = new Array(100);
    for (let i = 0; i < numero.length; i++) {
      let numeros = Math.random().toFixed(2);
      let cantidad = rangosDescomposturas(numeros);
      let numeros2 = Math.random().toFixed(2);
      let transportada = numeros2 + 1;
      numero[i] = {
        numeros: numeros,
        cantidad: cantidad,
        numeros2: numeros2,
        transportada: transportada,
      };
    }
    setAleatorio(numero);
  };
  return (
    <Container>
      <Card>
        <Card.Header>Tabla de datos</Card.Header>
        <Card.Body>
          <Button onClick={generadorObjetos} variant="primary">
            Generar
          </Button>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr className="columna">
                  <th>n°</th>
                  <th>%</th>
                  <th>Tiempo descomporturas (horas)</th>
                  <th>%</th>
                  <th>Tiempo arreglo (min)</th>
                  <th>Ganancia</th>
                </tr>
              </thead>
              <tbody>
                {aleatorio.map((i, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{i.numeros}</td>
                    <td>{i.cantidad}</td>
                    <td>{i.numeros2}</td>
                    <td>{i.transportada}</td>
                    <td>0</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Tabla;
