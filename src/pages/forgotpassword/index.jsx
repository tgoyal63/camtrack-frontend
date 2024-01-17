import React from 'react';
import './forgotpassword.module.scss'; // Assuming you save your styles in a file named ForgotPasswordPage.css

const ForgotPasswordPage = () => {
  return (
    <div className="login-container">
      <img
        src="C:\\Users\\siddhi shukla\\OneDrive\\Pictures\\Screenshot (116).png"
        alt="Your Logo"
        className="login-logo"
      />
      <h1>Forgot Password</h1>
      <p>Enter your email and we’ll send you a link to reset your password.</p>
      <form>
        {renderFormField('Email address', 'emailaddress', 'text', 'emailaddress')}
        <button type="submit">SUBMIT</button>
      </form>
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

export default ForgotPasswordPage;
