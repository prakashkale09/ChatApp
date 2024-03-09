import React from 'react'
import {Line,Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale,Tooltip,Filler,LinearScale,PointElement,ArcElement,Legend, LineElement} from "chart.js"
import { orange, orangeLight, purple, purpleLight } from '../../constants/color';
import { getLast7Days } from '../../lib/Features';


ChartJS.register(Tooltip,Filler,LinearScale,PointElement,ArcElement,Legend,CategoryScale,LineElement);
const labels=getLast7Days();

const lineChartOptions={
    responsive:true,
    plugins:{
        legend:{
            display: false,
        },
        title:{
            display:false,
        },
    },
    scales:{
        x:{
            grid:{
                display:false,
            },
        },
        y:{
            beginAtZero:true,
            grid:{
                 display:false,
             },

        },

    }
};
const LineChart = ({value=[]}) => {
    const data={
        labels,
        datasets:[{
            
            data:value,
            label:"Revenue",
            fill:true,
            backgroundColor:purpleLight,
            borderColor:purple,
        }],
    }
  return (
    <div>
        <Line data={data} options={lineChartOptions}/> 
    </div>
  )
};
   const doughnutChartOptions={
      responsive:true,
      plugins:{
        legend:{
            display:false,
        },
        title:{
            display:false
        },
      },
      cutout:90,
   }
const DoughnutChart = ({value=[],labels=[]}) => {
    const data={
        labels,
        datasets:[
            {
                data:value,
                backgroundColor:[purpleLight,orangeLight],
                borderColor:[purple,orange],
                hoverBackgroundColor:[purple,orange],
                offset:20
            },
        ],
    }
    return (
     <Doughnut style={{zIndex:10
     }}data={data} options={doughnutChartOptions}/>
    )
  }

export  {LineChart,DoughnutChart}