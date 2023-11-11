import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);


const Grafico = () => {

    const data = {
        labels: ['6-8', '8-10', '10-12', '12-14', '16-18', '18-20'], 
        datasets: [{
            label: 'Pie',
            data: [13, 19, 27, 19, 16, 6],
            backgroundColor: ['black', 'red', 'yellow', 'blue', 'orange', 'brown'],
            border: ['black', 'red', 'yellow', 'blue', 'orange', 'brown'],
        }]
    };

    const options = {

    }    

    return(
        
        <div className="GraficoTiempoDescomosturas">
            <h1 style={{padding: '20%'}}>Grafico de Tiempo entre descomposturas</h1>
            <div style={{width: '40%', height: '40%'}}>
                <Pie data = {data} options = {options}>

                </Pie>
            </div>
        </div>
    );

};

export default Grafico;