import React from 'react';
import styles from './signup.module.scss';

const SignupPage = () => {
    return (
        <div className={styles.container}>
            <img
                src="logo.png"
                alt="Your Logo"
                className="logo"
            />
            <div className={styles.signupContainer}>
                <h1>Account Signup</h1>
                <p>Become a member and enjoy exclusive promotions.</p>
                <form>
                    {renderFormField('Full Name', 'fullname', 'text', 'fullname')}
                    {renderFormField('Email Address', 'email', 'email', 'email')}
                    {renderFormField('Phone No.', 'phone', 'tel', 'phone')}
                    {renderFormField('Aadhaar No.', 'aadhaar', 'text', 'number', '12')}
                    {renderFormField('Password', 'password', 'password', 'password')}

                    <button type="submit">Create Account</button>
                </form>
                <p>
                    Already have an account? <a href="login">Login</a>
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

export default SignupPage;
