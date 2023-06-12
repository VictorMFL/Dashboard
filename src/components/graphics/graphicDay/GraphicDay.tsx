import Chart from "react-apexcharts";

const data = [{ name: "quantidade", data: [190, 160, 40, 90, 160, 210, 30, 320, 30, 100, 50, 220, 10, 45], stroke: {curve: 'smooth'}}];

const options = {
  xaxis: {
    categories: [2, 4, 5, 6, 9, 11, 12, 19, 20, 22, 23, 24, 26, 27],
  },
  colors: [
    '#FF7100'
  ],
};

const GraphicDay = () => {
  return (
    <div>
       <Chart
        type="area"
        width={1000}
        height={400}
        series={data}
        options={options}
      />
    </div>
  )
}

export default GraphicDay
