import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DocuPDF from "./DocuPDF";
import "../assets/css/Historial.css";
import { useLocalStorage } from "./UseLocalStorage";

const Historial = () => {
  const [lista] = useLocalStorage("simu", []);

  return (
    <Container id="tabla">
      <Card>
        <Card.Header>Tabla de Historial de Resultados</Card.Header>
        <Card.Body>
          <Container className="botonesHistorial">
            <Card.Text className="acciones">
              <h2>Historial</h2>
              Una vez ya corrieron los datos de la simulacion estos son
              guardados y almacenados, por lo cual se pueden ver los distintos
              resultados de las simulaciones <br />
              Los resultados que podemos ver son: <br />
              <Container>
                <Card.Text>
                  <strong>N°:</strong> Este es el identificador de a que numero
                  de simulacion pertenecen estos resultados.
                  <br />
                  <strong>Cant maquinas:</strong> Esta es la cantidad de
                  maquinas que se usaron para hacer la simulacion.
                  <br />
                  <strong>Promedio hora de uso:</strong> Este es el promedio de
                  la horas que se uso una computadora hasta antes de que se
                  descompongan.
                  <br />
                  <strong>Promedio de minutos de reparacion:</strong> Este es el
                  promedio de minutos que se tardo un especialista en arreglar
                  las maquinas descompuestas.
                  <br />
                  <strong>Precio de maquina/hora de ocio:</strong> Este es el
                  precio por hora de una maquina durante el tiempo que esta
                  descompuesta.
                  <br />
                  <strong>Salario/hora:</strong> Este es el salario del
                  especialista por la hora de su trabajo arreglando las
                  maquinas.
                  <br />
                  <strong>Precio ocio total:</strong> Este es el total del costo
                  por mas maquinas que estan descompuestas.
                  <br />
                  <strong>Salario total:</strong> Este es el total a pagar al
                  especialista por el tiempo que arreglo mas maquinas.
                  <br />
                </Card.Text>
              </Container>
            </Card.Text>
          </Container>
          <div className="contenedor">
            <Container className="botonesHistorial">
              <Card.Text className="acciones">
                Para descargar los resultados apretar el siguiente boton:
              </Card.Text>
              <PDFDownloadLink
                document={<DocuPDF lista={lista} />}
                fileName="Simulacion.pdf"
              >
                <Button>Descargar</Button>
              </PDFDownloadLink>
            </Container>
          </div>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr className="tabla">
                  <th>n°</th>
                  <th>Cant. Maquinas</th>
                  <th>
                    Promedio de horas <br /> de uso
                  </th>
                  <th>
                    Promedio de minutos <br />
                    de reparacion
                  </th>
                  <th>
                    Precio de maquina <br />
                    /hora de ocio
                  </th>
                  <th>Salario /hora</th>
                  <th>Precio ocio total</th>
                  <th>Salario total</th>
                </tr>
              </thead>
              <tbody>
                {lista.map((i, index) => (
                  <tr key={index} className="tabla">
                    <td>{i.n}</td>
                    <td>100</td>
                    <td>{i.totalUso}</td>
                    <td>{i.totalReparacion}</td>
                    <td>{i.precioHoraOcio}</td>
                    <td>{i.precioEspecialista}</td>
                    <td>{i.precioOcioTotal}</td>
                    <td>{i.sueldoEspecialista}</td>
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
Historial.propTypes = {
  lista: PropTypes.array.isRequired,
};
export default Historial;
