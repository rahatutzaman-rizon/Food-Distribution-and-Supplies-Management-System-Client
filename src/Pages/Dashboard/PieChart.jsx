import React from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = ({ supplies }) => {
  const totalQuantity = supplies.reduce((total, supply) => total + supply.quantity, 0);

  // Create data for the pie chart
  const colorOptions = ['red', 'green', 'blue', 'orange', 'purple', 'cyan', 'pink', 'lime', 'teal', 'indigo'];
  const data = supplies.map((supply, index) => ({
    type: supply.title,
    value: supply.quantity,
    percentage: ((supply.quantity / totalQuantity) * 100).toFixed(2),
    color: colorOptions[index % colorOptions.length], // Use color names from the colorOptions array
  }));

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type', // Use the color name for each supply
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent, value, data }) => {
        const supply = data[0];
        return `${supply.value} (${supply.percentage}%)`;
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        fill: '#fff', // White text for better visibility
      },
    },
    statistic: {
      title: {
        content: 'Total Quantity',
        style: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
        },
      },
      content: {
        style: {
          fontSize: 24,
          fontWeight: 'bold',
          color: '#333',
        },
        formatter: () => totalQuantity,
      },
    },
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
      <Pie {...config} />
      <div style={{ marginTop: '20px' }}>
        {supplies.map((supply, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div
              style={{
                width: '16px',
                height: '16px',
                backgroundColor: colorOptions[index % colorOptions.length],
                marginRight: '10px',
                borderRadius: '50%',
              }}
            />
            <div>
              <p style={{ fontWeight: 'bold', margin: 0 }}>{supply.title}</p>
              <p style={{ margin: 0 }}>Quantity: {supply.quantity}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;