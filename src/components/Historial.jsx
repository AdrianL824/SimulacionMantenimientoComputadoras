import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DocuPDF from "./DocuPDF";
import "../assets/css/Historial.css";

const Historial = ({ lista }) => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <Container id="tabla">
      <Card>
        <Card.Header>Tabla de Resultados</Card.Header>
        <Card.Body>
          <div className="contenedor">
            <Container className="botonesHistorial">
              <Card.Text className="acciones">
                Para actualizar los resultados apretar:
              </Card.Text>
              <Button
                onClick={() => {
                  reload();
                }}
                variant="primary"
              >
                Actualizar
              </Button>
            </Container>
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
          {/* <Button onClick={generarPDf}>Js PDF </Button> */}

          <Container>
            <Table striped bordered hover>
              <thead>
                <tr className="columna">
                  <th>n°</th>
                  <th>Cant. Maquinas</th>
                  <th>Promedio de horas de uso</th>
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
                  <tr key={index} className="columna">
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
