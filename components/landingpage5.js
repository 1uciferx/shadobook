import Link from "next/link";
import { useState } from "react";
import styles from "../styles/landingpage5.module.css";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});
function Landingpage5() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={styles.mainhead}>
        <div className="container">
          <div className="box-video-homepage5 ">
            {/* <div className="box-image mt-30 mb-30">
              <a
                className="popup-youtube btn-play-video btn-play-middle"
                onClick={() => setOpen(true)}
              ></a>
              <img
                className="img-responsive"
                src="assets/imgs/page/homepage6/img-3.png"
              />
            </div> */}

            <Link href="/request-a-demo">
              <div className={styles.btnparent}>
                <button class={styles.button3}>90 days Free Trial</button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default Landingpage5;
