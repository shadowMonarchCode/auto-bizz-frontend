import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";
import Axios from "axios";
import Image from "next/image";
import google from "../../../public/google.svg";
import apple from "../../../public/apple.svg";
import facebook from "../../../public/facebook.svg";

const LoginPage = (props) => {
  // Form data is an object which stores email and password of the user from the input fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    emailErr: false,
    passwordErr: false,
  });
  const { email, password, emailErr, passwordErr } = formData;

  // This function updates the formData object
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  // Function to send data to the backend
  //! If error:- Show the error
  //* If success:- Redirect to the user dashboard or homepage
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    Axios.post(props.URL, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // Update error field of formData, if any
        console.log(error);
      });
  };

  // Show when email is incorrect
  const errEmail = () => {
    return <p>Enter a valid email ID</p>;
  };

  // Show when password is incorrect
  const errPassword = () => {
    return <p>Password should contain atleast 8 characters</p>;
  };

  return (
    <div className={styles.login}>
      <h3>{props.title}</h3>
      <h1>Log In</h1>
      <p className={styles.description}>
        Register now to start your journey as seller with company name
      </p>
      <form>
        <div className={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange("email")}
          />
          {emailErr && errEmail()}
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange("password")}
          />
          {passwordErr && errPassword()}
        </div>
        <div className={styles.remember}>
          <div></div>
          <p>Keep me remembered</p>
        </div>
        <Button onClick={handleSubmit}>Log In</Button>
      </form>

      <p className={styles.forgot}>
        <Link href="/forgot-password" passHref>Forget password</Link>
      </p>

      <p className={styles.or}>Or join with</p>
      <div className={styles.container}>
        <div className={styles.google}>
          <Image src={google} />
        </div>
        <div className={styles.google}>
          <Image src={apple} />
        </div>
        <div className={styles.google}>
          <Image src={facebook} />
        </div>
      </div>
      <p className={styles.redirect}>
        Not yet registered?{" "}
        <Link href="/register/seller" passHref>
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
