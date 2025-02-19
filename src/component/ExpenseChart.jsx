import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const ExpenseChart = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const data = expenses.map((exp) => ({ name: exp.title, value: exp.amount }));
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"];

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
        {data.map((entry, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseChart;
