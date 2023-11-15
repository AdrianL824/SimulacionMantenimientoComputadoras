import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import "../assets/css/Graficos.css";

const Graficos = () => {
  const data = {
    labels: ["6-8", "8-10", "10-12", "12-14", "16-18", "18-20"],
    datasets: [
      {
        label: "Porcentaje %",
        data: [10, 15, 24, 26, 18, 7],
        backgroundColor: ["green", "red", "yellow", "blue", "orange", "brown"],
        border: ["green", "red", "yellow", "blue", "orange", "brown"],
      },
    ],
  };

  const dataReparacion = {
    labels: ["2-4", "4-6", "6-8", "8-10", "10-12"],
    datasets: [
      {
        label: "Porcentaje %",
        data: [15, 25, 30, 20, 10],
        backgroundColor: ["red", "yellow", "green", "orange", "blue"],
        border: ["red", "yellow", "green", "orange", "blue"],
      },
    ],
  };

  const options = {};

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Graficos de tabla de porcentajes</Card.Title>
          <Card.Text>
            Para mostrar los rangos de la descomporturas y de las reparaciones.
          </Card.Text>
          <Card.Text>
            Aqui tenemos las siguientes tortas las cuales nos muestran
            graficamente los porcentajes de las tablas de la descripcion.
          </Card.Text>
        </Card.Body>
        <div className="Contaner">
          <div className="Graficos">
            <h1 className="GraficoTitulo">% de rangos cantidad de horas</h1>
            <div className="GraficoTorta">
              <Pie data={data} options={options}></Pie>
            </div>
          </div>
          <div className="Graficos">
            <h1 className="GraficoTitulo">% de cada rango de reparación</h1>
            <div className="GraficoTorta">
              <Pie data={dataReparacion} options={options}></Pie>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Graficos;
