import { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Tabla = () => {
  const [aleatorio, setAleatorio] = useState([]);

  const generadorProd = () => {
    const numeros = new Array(100);
    for (let i = 0; i < numeros.length; i++) {
      numeros[i] = Math.random().toFixed(2);
    }
    setAleatorio(numeros);
  };

  return (
    <Container>
      <Card>
        <Card.Header>Tabla de datos</Card.Header>
        <Card.Body>
          <Button onClick={generadorProd} variant="primary">
            Generar
          </Button>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>n°</th>
                  <th>%</th>
                  <th>Toneladas Prod</th>
                  <th>%</th>
                  <th>Toneladas Transportadas</th>
                  <th>Ganancia</th>
                </tr>
              </thead>
              <tbody>
                {aleatorio.map((n, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{n + 2}</td>
                    <td>{n + 3}</td>
                    <td>{n + 4}</td>
                    <td>{n + 5}</td>
                    <td>{n + 6}</td>
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
