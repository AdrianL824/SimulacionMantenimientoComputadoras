import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom/";
import "../assets/css/Description.css";

const cursor = () => {
  window.scrollTo(0, 0);
};

const Descripcion = () => {
  return (
    <Container>
      <Card>
        <Card.Header>Descripcion</Card.Header>
        <Card.Body>
          <Card.Title>Acerca del mantenimiento de computadoras</Card.Title>
          <Card.Text>
            Para el proyecto de la oficina Nro7 se nos dio la tarea de simular
            un grupo de computadoras la cuales tienen una cierta cantidad de uso
            antes de que se arruinen, tiempo para ser reparadas, costo por ocio
            y sueldo del tecnico que arregla las maquinas.
          </Card.Text>
          <Card.Text>
            En el caso del uso de una computadora se tiene que tomar en cuenta
            que este funcionara una cierta cantidad de tiempo (en horas) hasta
            que se arruine, en ese caso se tiene una tabla de probabilidades la
            cual seria:
          </Card.Text>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Tiempo entre descomposturas (horas)</th>
                  <th>Probabilidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6 - 8</td>
                  <td>0.10</td>
                </tr>
                <tr>
                  <td>8 - 10</td>
                  <td>0.15</td>
                </tr>
                <tr>
                  <td>10 - 12</td>
                  <td>0.24</td>
                </tr>
                <tr>
                  <td>12 - 14</td>
                  <td>0.26</td>
                </tr>
                <tr>
                  <td>16 - 18</td>
                  <td>0.18</td>
                </tr>
                <tr>
                  <td>18 - 20</td>
                  <td>0.07</td>
                </tr>
              </tbody>
            </Table>
          </Container>
          <Card.Text>
            En el caso del uso de una computadora esta tiene que ser reparada se
            llamara a un tecnico al cual tiene una tabla de probabilidades que
            define cuanto tiempo tardara en reparar la computadora (en minutos)
            la cual seria:
          </Card.Text>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Tiempo de reparacion (minutos)</th>
                  <th>Probabilidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2 - 4</td>
                  <td>0.15</td>
                </tr>
                <tr>
                  <td>4 - 6</td>
                  <td>0.25</td>
                </tr>
                <tr>
                  <td>6 - 8</td>
                  <td>0.30</td>
                </tr>
                <tr>
                  <td>8 - 10</td>
                  <td>0.20</td>
                </tr>
                <tr>
                  <td>10 - 12</td>
                  <td>0.10</td>
                </tr>
              </tbody>
            </Table>
          </Container>
          <Button variant="primary" onClick={cursor}>
            <Link to="/tablas" className="boton">
              Simular
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Descripcion;
