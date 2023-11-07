import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

function Graphic() {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const data = {
      categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
      values: [10, 25, 15, 30, 20],
    };

    const chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Vendas Mensais',
      },
      xAxis: {
        categories: data.categories,
      },
      yAxis: {
        title: {
          text: 'Valores',
        },
      },
      credits: {
        enabled: false,
      },
      series: [{
        name: 'Vendas',
        data: data.values,
        color: '#fb8c00',
      }],
    };

    const chart = Highcharts.chart(chartContainerRef.current, chartOptions);

    return () => {
      // Limpar o gráfico ao desmontar o componente
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <div
        ref={chartContainerRef}
        style={{
          width: '570px',
          height: '280px',
          border: '2px solid #3e3e3e', // Cor, largura e estilo da borda
          borderRadius: '10px', // Borda arredondada (opcional)
          padding: '10px', // Espaçamento interno (opcional)
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
          margin: '16.5px'
        }}
      ></div>
    </div>
  );
}

export default Graphic;
