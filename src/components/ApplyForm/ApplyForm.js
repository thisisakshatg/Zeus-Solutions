import React from 'react';

const ApplyForm = (props) => {
  return (
    <div>
      <div className="login-container new-post-box">
        <div className="login-form new-post-form">
          <button
            className="new-post-box-close-btn"
            onClick={props.newPostOverlayHandler}
          >
            <ion-icon
              className="overlay-close"
              name="close"
              style={{ width: '3rem', height: '3rem' }}
            ></ion-icon>
          </button>
          <h2 className="heading-secondary heading-login ma-bt-lg">
            Job Application Form
          </h2>
          <form
            className="form form--login"
            id="login-form"
            // onSubmit={submitHandler}
          >
            <div className="form__group">
              <label className="form__label" htmlFor="name">
                Your Name
              </label>
              <input
                className="form__input"
                id="name"
                type="text"
                placeholder="John Doe"
                required="required"
                // ref={emailInputRef}
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="num">
                Your Contact Number
              </label>
              <input
                className="form__input"
                id="num"
                type="number"
                placeholder="1234567890"
                required="required"
                // ref={emailInputRef }
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="email">
                Your Email
              </label>
              <input
                className="form__input"
                id="email"
                type="email"
                placeholder="you@example.com"
                required="required"
                // ref={emailInputRef}
              />
            </div>
            <div className="form__group ma-bt-md">
              <label for="select-where" className="form__label">
                Position Apply For
              </label>
              <select
                id="select-where"
                className="form__input"
                name="select-where"
                required
              >
                <option value="">Please select an option:</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Data Engineer">Data Engineer</option>
                <option value="AWS Data Engineer">AWS Data Engineer</option>
                <option value="Power BI Developer">Power BI Developer</option>
                <option value="Java - Full Stack Developer">
                  Java - Full Stack Developer
                </option>
                <option value="others">
                  Commodities Trading and Risk Management Business Analyst
                </option>
                <option value="others">
                  Energy Trading and Risk Management Expert
                </option>
                <option value="others">Java - Full Stack Developer</option>
              </select>

              <div className="file-input-box">
                <label className="form__label" htmlFor="content">
                  Upload Content
                </label>
                <input
                  className="form__upload"
                  type="file"
                  name="content"
                  accept="video/*, image/*"
                  id="content"
                />
                <label htmlFor="content" className="form__label fileInput">
                  Choose file
                </label>
              </div>
            </div>
            <div className="form__group">
              <button className="btn-login btn--green">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
