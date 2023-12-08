import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Historial = ({ lista }) => {
  const reload = () => {
    window.location.reload();
  };
  return (
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
              <td>{index + 1}</td>
              <td>100</td>
              <td>{i.totalReparacion}</td>
              <td>{i.precioHoraOcio}</td>
              <td>{i.precioHoraOcio}</td>
              <td>{i.precioEspecialista}</td>
              <td>{i.precioOcioTotal}</td>
              <td>{i.sueldoEspecialista}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
Historial.propTypes = {
  lista: PropTypes.array.isRequired,
};
export default Historial;
