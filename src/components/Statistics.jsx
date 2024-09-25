import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
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
    <div
      className="w-[50rem] h-[300px] mt-3 rounded-2xl mb-6  text-white font-extrabold"
      // style={{
      //   background:
      //     "linear-gradient(115.93deg, rgba(217, 217, 217, 0.152) 19.7%, rgba(115, 115, 115, 0.019) 139.96%)", // Match the background with CircularProgress
      // }}
    >
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
