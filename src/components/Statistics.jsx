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
import { getConsistency } from "../api/postLogin";
import { useState, useEffect } from "react";

const Statistics = ({ theme }) => {
  const [consistencyGraph, setConsistencyGraph] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getConsistency();
        console.log(data);
        setConsistencyGraph(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // Check if all the modules values are zero
  const allValuesAreZero = consistencyGraph.every(
    (dataPoint) => dataPoint.modules === 0
  );

  return (
    <div
      className="w-[50rem] h-[300px] mt-3 rounded-2xl mb-6  text-white font-extrabold"
    >
      {allValuesAreZero ? (
        <div className="flex items-center justify-center h-full text-gray-400">
          Analysis awaits your participation
        </div>
      ) : (
        <ResponsiveContainer>
          <LineChart
            data={consistencyGraph}
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
      )}
    </div>
  );
};

export default Statistics;
