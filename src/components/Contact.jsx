import React from "react";

export default function Contact() {
   
    
  return (
    <>
      <div
        id="contact"
        data-bs-spy="scroll"
        data-bs-target="#contact"
        data-bs-offset="0"
        className="section scrollspy container-fluid d-flex w-auto p-3 align-items-center"
        tabIndex="0"
      >
        <div
          id="scrollspyHeading1"
          className="contact-form border border-secondary border-3 rounded pt-5 mt-5"
        >
          <h1 className="title text-center display-5">contact.</h1>
        <form>
            <div className="email-area">
                <label>e-mail address</label>
                <input type="email" name="email" placeholder="boimler@email.com" />
            </div>
            <button type="submit">submit</button>
        </form>
        </div>
      </div>
    </>
  );
}
