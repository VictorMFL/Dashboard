import Chart from "react-apexcharts";

import styles from "./GraphicStores.module.css";

const GraphicStores = () => {
  const data = [
    {
      name: "quantidade",
      data: [217, 191, 118, 79, 76],
      stroke: { curve: "smooth" },
    },
  ];

  const options = {
    xaxis: {
      categories: [0, 100, 200],
    },
    colors: ["#FF7100"],
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  };

  return (
    <section className={styles.container}>
      <h1>Top Selling Stores</h1>
      <div className={styles.container_graphic}>
        <Chart
          type="bar"
          width={700}
          height={300}
          options={options}
          series={data}
        />

        <div className={styles.names}>
          <p>Foodie’s Delight</p>
          <p>Family Fare</p>
          <p>Earthly Eats</p>
          <p>Flavorful Foods</p>
          <p>Harvest Haven</p>
        </div>
      </div>
    </section>
  );
};

export default GraphicStores;
