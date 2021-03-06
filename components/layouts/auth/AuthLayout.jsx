import design from "../../../public/circles.png";
import Image from "next/image";
import styles from "./AuthLayout.module.scss";
import { RegisterContextProvider } from "../../../context/register-context";
import { AdContexProvider } from "../../../context/ad-context";

const AuthLayout = ({ children }) => {
  return (
    <AdContexProvider>
      <RegisterContextProvider>
        <div className={styles.auth_layout}>
          <div className={styles.container}>
            <div style={{ textAlign: "center" }}>
              <div className={styles.image}></div>
              <h3>Welcome to</h3>
              <h1>Company Name</h1>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.box}>
              <h3>Welcome to</h3>
              <h1>Company Name</h1>
            </div>
            <div className={styles.top}>
              <Image src={design} alt="Design" />
            </div>
            {children}
            <div className={styles.bottom}>
              <Image src={design} alt="Design" />
            </div>
          </div>
        </div>
      </RegisterContextProvider>
    </AdContexProvider>
  );
};

export default AuthLayout;
