import IconRice from "../../../../public/images/icon_rice.svg"
import IconCarrot from "../../../../public/images/icon_carrot.svg"
import IconCookie from "../../../../public/images/icon_cookie.svg"
import IconChampagne from "../../../../public/images/icon_champagne.svg"

import styles from "./GraphicAchievement.module.css";

const GraphicAchievement = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container_title}>
        <h1>Category Achievement</h1>
        <p>select all</p>
      </div>
      <div className={styles.container_graphic}>
        <div className={styles.container_icon}>
          <img src={IconRice} alt="Icone de uma bacia de arroz" />
        </div>
        <div>
          <div className={styles.container_name}>
            <p>Rice</p>
            <p>
              $994K / <span>$1,754K</span>
            </p>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress_1}></div>
          </div>
        </div>
      </div>

      <div className={styles.container_graphic}>
        <div className={styles.container_icon}>
          <img src={IconCarrot} alt="Icone de uma cenoura" />
        </div>
        <div>
          <div className={styles.container_name}>
            <p>Vegetables</p>
            <p>
              $164K / <span>$570K</span>
            </p>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress_2}></div>
          </div>
        </div>
      </div>

      <div className={styles.container_graphic}>
        <div className={styles.container_icon}>
          <img src={IconCookie} alt="Icone de um biscoito" />
        </div>
        <div>
          <div className={styles.container_name}>
            <p>Biscuits</p>
            <p>
              $373K / <span>$223K</span>
            </p>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress_3}></div>
          </div>
        </div>
      </div>

      <div className={styles.container_graphic}>
        <div className={styles.container_icon}>
          <img src={IconChampagne} alt="Icone de uma Taça de vinho" />
        </div>
        <div>
          <div className={styles.container_name}>
            <p>Juice</p>
            <p>
            $118K / <span>$167K</span>
            </p>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress_4}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicAchievement;
