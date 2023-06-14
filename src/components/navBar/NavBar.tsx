import IconDashboard from "../../../public/images/icon_dashboard.svg"
import IconProduct from "../../../public/images/icon_product.svg"
import IconStore from "../../../public/images/icon_store.svg"
import IconSalesman from "../../../public/images/icon_salesman.svg"

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <section>
        <div>
          <img
            src={IconDashboard}
            alt="icone de Dashboard"
            className={styles.icon}
          />
          <p className={styles.active}>Dashboard</p>
        </div>

        <div>
          <img
            src={IconProduct}
            alt="icone de Produtos"
            className={styles.icon}
          />
          <p className={styles.p}>Product</p>
        </div>

        <div>
          <img
            src={IconStore}
            alt="icone do Store"
            className={styles.icon}
          />
          <p className={styles.p}>Store</p>
        </div>

        <div>
          <img
            src={IconSalesman}
            alt="icone de uma Pessoa"
            className={styles.icon}
          />
          <p className={styles.p}>Salesman</p>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
