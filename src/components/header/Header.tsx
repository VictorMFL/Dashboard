import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/images/logo.svg" alt="Logo da Onion Sales" className={styles.logo} />
      <div>
        <p className={styles.welcome}>Welcome</p>
        <p className={styles.name}>Alex Homes</p>
      </div>

      <div className={styles.container_input}>
        <input type="text" className={styles.input} />
        <img src="/images/icon-search.svg" alt="icone de pesquisa" className={styles.icon_search} />
      </div>

      <div>
        <p className={styles.monday}>Monday</p>
        <p className={styles.day}>23 March 2023</p>
      </div>
      <div>
        <p className={styles.viewing}>viewing as</p>
        <select id="select" className={styles.select}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <div className={styles.container_images}>
        <img src="/images/bmc-logo.svg" alt="logo bmc" />
        <img
          src="/images/cat.svg"
          alt="Imagem de um gato com um óculos de realidade virtual"
        />
      </div>
    </header>
  );
};

export default Header;
