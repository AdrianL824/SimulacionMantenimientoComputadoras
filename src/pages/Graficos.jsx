import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import "../assets/css/Graficos.css"


const Grafico = () => {

    const data = {
        labels: ['6-8', '8-10', '10-12', '12-14', '16-18', '18-20'], 
        datasets: [{
            label: 'Pie',
            data: [15, 22, 20, 20, 20, 3],
            backgroundColor: ['black', 'red', 'yellow', 'blue', 'orange', 'brown'],
            border: ['black', 'red', 'yellow', 'blue', 'orange', 'brown'],
        }]
    };

    const dataReparacion = {
        labels: ['2-4', '4-6', '6-8', '8-10', '10-12'],
        datasets: [{
            label: 'Pie',
            data: [23, 18, 6, 24, 29],
            backgroundColor:  ['red', 'yellow', 'green', 'orange', 'blue'],
            border: ['red', 'yellow', 'green', 'orange', 'blue']
        }]
    }

    const options = {

    }    

    return(
        
        <div className="GraficoTiempoDescomposturas">
            <h1 style={{padding: '20%'}} className="GraficoTiempoTitulo">% de rangos cantidad de horas</h1>
            <div className="GraficoRangoHoras">
                <Pie data = {data} options = {options}>

                </Pie>
            </div>
            <h1 style={{padding:'20%'}} className="GraficoReparacionTitulo">% de cada rango de reparación</h1>
            <div className="GraficoRangoReparacion">
                <Pie data = {dataReparacion} options={options}>

                </Pie>
            </div>

            
            <div></div>
        </div>
    );

};

export default Grafico;