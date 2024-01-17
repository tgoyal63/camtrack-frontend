import React from 'react';
import styles from "./login.module.scss";

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <img
                src="logo.png"
                alt="Your Logo"
                className="logo"
            />
            <div className={styles.loginContainer}>
                <h1>Account Login</h1>
                <p>If you are already a member you can login with your email address and password.</p>
                <form>
                    {renderFormField('Username', 'username', 'text', 'username')}
                    {renderFormField('Password', 'password', 'password', 'password')}
                    <div className={styles.passwordRemember}>
                        <a href="forgotpassword" className="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <a href="signup">Signup</a>
                </p>
            </div>
        </div>
    );
};

const renderFormField = (label, id, type, name) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} required />
        </>
    );
};

export default LoginPage;
