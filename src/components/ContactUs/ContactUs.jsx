import * as React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us">
        <h1 className="title">Contact Us</h1>
        <form className="contact-us-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail*</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="queryType">Query type</label>
          </div>
          <div className="form-group">
            <label className="radio-button">
              <input type="radio" name="queryType" value="general" />General Enquiry*
            </label>
          </div>
          <div className="form-group">
            <label className="radio-button">
              <input type="radio" name="queryType" value="support" />Support Enquiry*
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <div className="form-group">
            <label className="checkbox">
              <input type="checkbox" name="consent" required />I consent to being contacted by the team*
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
