import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import './Graficos.css'


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

    const options = {

    }    

    return(
        
        <div className="GraficoTiempoDescomposturas">
            <h1 style={{padding: '20%'}} className="GraficoTiempoTitulo">% de rangos cantidad de horas</h1>
            <div style={{width: '40%', height: '40%'}} className="GraficoRangoHoras">
                <Pie data = {data} options = {options}>

                </Pie>
            </div>

            <div className="GraficoRangoReparacion">

            </div>
        </div>
    );

};

export default Grafico;