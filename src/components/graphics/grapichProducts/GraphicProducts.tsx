import styles from "./GraphicProducts.module.css";

const GraphicProducts = () => {
  return (
    <section className={styles.container}>
      <h1>Top Selling Products</h1>
      <div className={styles.graphic}>
        <p className={styles.title}>Item Full Name</p>
        <div>
          <p className={styles.title}>Quantity</p>
        </div>
        <div>
          <p className={styles.title}>Sales Order</p>
        </div>
      </div>
      <div className={styles.graphic}>
        <p>Rice Bliss</p>
        <div>
          <p>618</p>
        </div>
        <div className={styles.contrast}>
          <p>$214K</p>
          <span className={styles.contrast_1}></span>
        </div>
      </div>
      <div className={styles.graphic}>
        <p>Rice Games</p>
        <div>
          <p>1721</p>
        </div>
        <div className={styles.contrast}>
          <p>$172K</p>
          <span className={styles.contrast_2}></span>
        </div>
      </div>
      <div className={styles.graphic}>
        <p>Wholesome Rice Harvest</p>
        <div>
          <p>1206</p>
        </div>
        <div className={styles.contrast}>
          <p>$121K</p>
          <span className={styles.contrast_3}></span>
        </div>
      </div>
      <div className={styles.graphic}>
        <p>Crisp Carrots</p>
        <div>
          <p>776</p>
        </div>
        <div className={styles.contrast}>
          <p>$85K</p>
          <span className={styles.contrast_4}></span>
        </div>
      </div>
      <div className={styles.graphic}>
        <p>Elite Rice Selection</p>
        <div>
          <p>530</p>
        </div>
        <div className={styles.contrast}>
          <p>$81K</p>
          <span className={styles.contrast_5}></span>
        </div>
      </div>
      <div className={styles.graphic}>
        <p>Nutty Delight</p>
        <div>
          <p>593</p>
        </div>
        <div className={styles.contrast}>
          <p>$77K</p>
          <span className={styles.contrast_6}></span>
        </div>
      </div>
      <div className={styles.graphic}>
        <p>Raspberry Ripple</p>
        <div>
          <p>321</p>
        </div>
        <div className={styles.contrast}>
          <p>$68K</p>
          <span className={styles.contrast_7}></span>
        </div>
      </div>
      <div className={styles.graphic}>
        <p>Minty Magic</p>
        <div>
          <p>680</p>
        </div>
        <div className={styles.contrast}>
          <p>$67K</p>
          <span className={styles.contrast_8}></span>
        </div>
      </div>
    </section>
  );
};

export default GraphicProducts;
