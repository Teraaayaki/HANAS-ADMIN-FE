import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineGraph = () => {

    const {incomeData} = useSelector( (state) => state.overview);

    return (
    //   <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={1200}
          height={300}
          data={incomeData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"Month"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="confirmed_income" stroke="#82ca9d" activeDot={{ r: 8 }}/>
        </LineChart>
    //   </ResponsiveContainer>
    );
}

export default LineGraph;