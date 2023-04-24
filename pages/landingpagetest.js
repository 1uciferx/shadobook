import Landingpage from "../components/landingpage";
import Landingpage2 from "../components/landingpage2";
import Landingpage3 from "../components/landpage3";
import Landingpagecards from "../components/landingpagecards";
import Landingpage5 from "../components/landingpage5";
import Landingpage7 from "../components/landingpage7";
import Landingpage7mid from "../components/landingpage7mid";
import Layout from "../components/layout/Layout";
import styles from "../styles/landingpagetext.module.css"
function Landingpage1() {
  return (
    <>
      <Layout>
        <div>
          <Landingpage />
        </div>

        <div>
          <Landingpage2 />
        </div>

        <div>
          <Landingpage3 />
        </div>

        <div style={{ marginTop: "5%" }}>
          <Landingpagecards />
        </div>

        <div style={{ marginTop: "5%" }}>
          <Landingpage5 />
        </div>

        <div className={styles.normalsx}>
          <Landingpage7 />
        </div>


        <div className={styles.midxs}>
          <Landingpage7mid />
        </div>

      </Layout>
    </>
  );
}

export default Landingpage1;
