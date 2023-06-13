import styles from "./TotalSpent.module.css";

const TotalSpent = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.container_icon}>
          <img src="/images/icon_pig.svg" alt="icone de um porquinho" />
        </div>
        <div>
          <p className={styles.title}>Sales Order</p>
          <p className={styles.price}>$1649K</p>
        </div>
      </div>
      <div>
      <div className={styles.container_icon}>
          <img src="/images/icon_pig.svg" alt="icone de um porquinho" />
        </div>
        <div>
          <p className={styles.title}>Delivered</p>
          <p className={styles.price}>$775K</p>
        </div>
      </div>
      <div>
      <div className={styles.container_icon}>
          <img src="/images/icon_pig.svg" alt="icone de um porquinho" />
        </div>
        <div>
          <p className={styles.title}>Remaining</p>
          <p className={styles.price}>$874K</p>
        </div>
      </div>
      <div>
      <div className={styles.container_icon}>
          <img src="/images/icon_pig.svg" alt="icone de um porquinho" />
        </div>
        <div>
          <p className={styles.title}>Last Month</p>
          <p className={styles.price}>$1,565K</p>
        </div>
      </div>

      <div className={styles.achievement}>
        <p className={styles.title}>Achievement</p>
        <div>
          <p className={styles.percentage}>61%</p>
          <p className={styles.p}><span>$1,649K /</span> $2,713K</p>
        </div>
      <div className={styles.bar}>
        <div></div>
      </div>
      </div>
    </section>
  );
};

export default TotalSpent;
