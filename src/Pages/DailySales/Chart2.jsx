import React, { useEffect, useRef } from 'react';
import { getStyle } from '@coreui/utils';
import { CChart } from '@coreui/react-chartjs';

const ChartBarExample = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current?.chartInstance;
      if (chartInstance) {
        const { options } = chartInstance;

        const bodyColor = getStyle('--cui-body-color') || '#000';
        const borderColor = getStyle('--cui-border-color-translucent') || '#ccc';

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = bodyColor;
        }

        if (options.scales?.x) {
          options.scales.x.grid.color = borderColor;
          options.scales.x.ticks.color = bodyColor;
        }

        if (options.scales?.y) {
          options.scales.y.grid.color = borderColor;
          options.scales.y.ticks.color = bodyColor;
        }

        chartInstance.update();
      }
    };

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange);

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange);
    };
  }, []);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        borderColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color') || '#000',
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    interaction: {
      mode: 'none',
      intersect: false,
    },
    hover: {
      mode: null,
    },
    scales: {
      x: {
        grid: {
          color: getStyle('--cui-border-color-translucent') || '#ccc',
        },
        ticks: {
          color: getStyle('--cui-body-color') || '#000',
        },
        type: 'category',
      },
      y: {
        grid: {
          color: getStyle('--cui-border-color-translucent') || '#ccc',
        },
        ticks: {
          color: getStyle('--cui-body-color') || '#000',
        },
        beginAtZero: true,
      },
    },
  };

  return <CChart type="bar" data={data} options={options} innerRef={chartRef} />;
};

export default ChartBarExample;
