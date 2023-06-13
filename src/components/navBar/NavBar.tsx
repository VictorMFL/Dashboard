import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <img src="/images/icon_dashboard.svg" alt="icone de Dashboard" className={styles.icon}/>
        <p className={styles.active}>Dashboard</p>
      </div>

      <div>
        <img src="/images/icon_product.svg" alt="icone de Produtos" className={styles.icon}/>
        <p className={styles.p}>Product</p>
      </div>

      <div>
        <img src="/images/icon_store.svg" alt="icone do Store" className={styles.icon}/>
        <p className={styles.p}>Store</p>
      </div>

      <div>
        <img src="/images/icon_salesman.svg" alt="icone de uma Pessoa" className={styles.icon}/>
        <p className={styles.p}>Salesman</p>
      </div>
    </nav>
  );
};

export default NavBar;
