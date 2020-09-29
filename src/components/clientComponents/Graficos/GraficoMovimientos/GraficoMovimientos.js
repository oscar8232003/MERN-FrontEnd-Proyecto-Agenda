import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const GraficoMovimientos = (props) => {
  const { data, bars, height = 300 } = props;

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {bars.map((bar, index) => (
            <Bar dataKey={bar.barra} fill={bar.color} key={index} />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoMovimientos;
