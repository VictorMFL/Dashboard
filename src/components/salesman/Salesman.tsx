import styles from "./Salesman.module.css";

const Salesman = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1>Salesman Performance</h1>
        <img src="../../public/images/icon_rubber.svg" alt="icone de uma borracha" />
      </div>
      <div className={styles.salesman}>
        <div>
          <img src="../../public/images/alfonso.png" alt="imagem do Alfonso" />
          <p>Alfonso</p>
        </div>
        <div>
          <img src="../../public/images/calzoni.png" alt="imagem do Calzoni" />
          <p>Calzoni</p>
        </div>
        <div>
          <img src="../../public/images/luke.png" alt="imagem do Luke" />
          <p>Luke</p>
        </div>
        <div>
          <img src="../../public/images/tatiana.png" alt="imagem da Tatiana" />
          <p>Tatiana</p>
        </div>
      </div>

      <div className={styles.person_data}>
        <div className={styles.data}>
          <div className={styles.names}>
            <p className={styles.title}>Salesman</p>
            <p className={styles.name}>Tatiana</p>
            <p className={styles.name}>Calzoni</p>
            <p className={styles.name}>Alfonso</p>
            <p className={styles.name}>Luke</p>
          </div>
          <div className={styles.names}>
            <p className={styles.title}>Sales Orders</p>
            <p className={styles.total}>$699K</p>
            <p className={styles.total}>$408K</p>
            <p className={styles.total}>$341K</p>
            <p className={styles.total}>$201K</p>
          </div>
          <div className={styles.names}>
            <p className={styles.title}>Remaining</p>
            <p className={styles.total}>$73K</p>
            <p className={styles.total}>$270K</p>
            <p className={styles.total}>$316K</p>
            <p className={styles.total}>$405K</p>
          </div>
          <div className={styles.names}>
            <p className={styles.title}>Achieve(%)</p>
            <p className={styles.percentage_1}>91%</p>
            <p className={styles.percentage_2}>60%</p>
            <p className={styles.percentage_3}>52%</p>
            <p className={styles.percentage_4}>33%</p>
          </div>
          <span className={styles.contraste_1}></span>
          <span className={styles.contraste_2}></span>
          <span className={styles.contraste_3}></span>
        </div>
      </div>
    </section>
  );
};

export default Salesman;
