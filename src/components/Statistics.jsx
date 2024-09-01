import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", modules: 1 },
  { month: "Feb", modules: 1.5 },
  { month: "Mar", modules: 2 },
  { month: "Apr", modules: 3 },
  { month: "May", modules: 2.5 },
  { month: "Jun", modules: 4 },
  { month: "Jul", modules: 3.5 },
  { month: "Aug", modules: 4.5 },
  { month: "Sep", modules: 3.5 },
  { month: "Oct", modules: 4 },
  { month: "Nov", modules: 3 },
  { month: "Dec", modules: 3.5 },
];

const Statistics = ({ theme }) => {
  return (
    <div className="w-full h-[300px] mt-3 ">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: -40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="modules"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
