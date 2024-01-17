import styles from "./cameraRegistration.module.scss";

const CameraRegistration = () => {
  return (
    <div className="registration-container">
      <img
        src="logo.png"
        alt="Your Logo"
        className="logo"
      />
      <h1>Camera Registration</h1>
      <form>
        {renderFormField('Camera Model', 'model', 'text', 'cameramodel')}
        {renderFormField('Serial No.', 'serial', 'text', 'serial')}
        {renderFormField('Company', 'company', 'text', 'company')}

        <label htmlFor="location">Location</label>
        <select id="location" name="location" required>
          <option value="Business">Business</option>
          <option value="Residential">Residential</option>
        </select>

        <label htmlFor="type">Type</label>
        <select id="type" name="type" required>
          <option value="Interior">Interior</option>
          <option value="Exterior">Exterior</option>
        </select>

        <label htmlFor="facingDirection">Camera Facing Direction</label>
        <select id="facingDirection" name="facingDirection">
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="West">West</option>
          <option value="East">East</option>
        </select>

        {renderFormField('Pincode', 'pincode', 'number', 'pincode', 6)}
        {renderFormField('State', 'state', 'text', 'state')}
        {renderFormField('District', 'district', 'text', 'district')}
        {renderFormField('City', 'city', 'text', 'city')}
        {renderFormField('Geolocation Coordinates', 'coordinates', 'text', 'coordinates')}
        {renderFormField('Complete Address', 'address', 'textarea', 'address')}

        <button type="submit">Submit</button>
      </form>
      <p>
        Already have an account? <a href="index.html">Login</a>
      </p>
    </div>
  );
};

const renderFormField = (label, id, type, name, maxLength) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea id={id} name={name} required></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required
          maxLength={maxLength}
        />
      )}
    </>
  );
};

export default CameraRegistration;
