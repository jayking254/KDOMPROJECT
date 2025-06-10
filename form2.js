import React, { useState } from "react";
import "./form2.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    surname: "",
    firstname: "",
    othernames: "",
    gender: "",
    citizenship: "",
    passportId: "",
    dob: "",
    placeOfBirth: "",
    maritalStatus: "",
    religion: "",
    religiousStatus: [],
    phone: "",
    diocese: "",
    congregation: "",
    permanentAddress: "",
    email: "",
    kinAddress: "",
    kinEmail: "",
    kinPhone: "",
    studentStatus: [],
    schoolOfPhilosophy: [],
    schoolOfTheology: [],
    schoolOfPsychology: [],
    studyDuration: [],
    studiedAtCIU: [],
    previousSchool: "",
    previousId: "",
    enrolFrom: "",
    enrolTo: "",
    previousUniversities: "",
    highSchoolDocs: "",
    recommenderName: "",
    recommenderCongregation: "",
    recommenderAddress: "",
    recommenderPhone: "",
    recommenderEmail: "",
    feePayer: "",
    sponsorName: "",
    sponsorType: "",
    sponsorAddress: "",
    sponsorPhone: "",
    sponsorEmail: "",
    provinceSponsor: "",
    heardAboutCIU: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const groupName = name;
      setFormData((prev) => {
        const group = prev[groupName] || [];
        return {
          ...prev,
          [groupName]: checked
            ? [...group, value]
            : group.filter((v) => v !== value),
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const StepButtons = () => (
    <div className="button-group">
      {step > 1 && (
        <button type="button" className="btn-secondary" onClick={prevStep}>
          Back
        </button>
      )}
      {step < 5 && (
        <button type="button" className="btn-primary" onClick={nextStep}>
          Next
        </button>
      )}
      {step === 5 && (
        <button type="submit" className="btn-success">
          Submit
        </button>
      )}
    </div>
  );

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Registration Form (Step {step} of 5)</h3>

      {step === 1 && (
        <>
          <div className="form-group">
            <label>Surname</label>
            <input
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Other Names</label>
            <input
              name="othernames"
              value={formData.othernames}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Citizenship</label>
            <input
              name="citizenship"
              value={formData.citizenship}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Passport/ID</label>
            <input
              name="passportId"
              value={formData.passportId}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Place of Birth</label>
            <input
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="form-group">
            <label>Marital Status</label>
            <input
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Religious Affiliation</label>
            <input
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>For Religious:</label>
            {["priest", "deacon", "sister", "brother", "seminarian"].map(
              (role) => (
                <div key={role}>
                  <input
                    type="checkbox"
                    name="religiousStatus"
                    value={role}
                    onChange={handleChange}
                    checked={formData.religiousStatus.includes(role)}
                  />
                  {role}
                </div>
              )
            )}
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Diocese</label>
            <input
              name="diocese"
              value={formData.diocese}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Congregation</label>
            <input
              name="congregation"
              value={formData.congregation}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="form-group">
            <label>Permanent Address</label>
            <input
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Next of Kin Address</label>
            <input
              name="kinAddress"
              value={formData.kinAddress}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Next of Kin Email</label>
            <input
              name="kinEmail"
              value={formData.kinEmail}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Next of Kin Phone</label>
            <input
              name="kinPhone"
              value={formData.kinPhone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <div className="form-group">
            <label>School of Philosophy</label>
            {["school1", "school2", "school3"].map((s) => (
              <div key={s}>
                <input
                  type="checkbox"
                  name="schoolOfPhilosophy"
                  value={s}
                  onChange={handleChange}
                  checked={formData.schoolOfPhilosophy.includes(s)}
                />
                {s}
              </div>
            ))}
          </div>
          <div className="form-group">
            <label>School of Theology</label>
            {["schoolA", "schoolB"].map((s) => (
              <div key={s}>
                <input
                  type="checkbox"
                  name="schoolOfTheology"
                  value={s}
                  onChange={handleChange}
                  checked={formData.schoolOfTheology.includes(s)}
                />
                {s}
              </div>
            ))}
          </div>

          <div className="form-group">
            <label>School of Counselling Psychology</label>
            {["psychA", "psychB"].map((p) => (
              <div key={p}>
                <input
                  type="checkbox"
                  name="schoolOfPsychology"
                  value={p}
                  onChange={handleChange}
                  checked={formData.schoolOfPsychology.includes(p)}
                />
                {p}
              </div>
            ))}
          </div>

          <div className="form-group">
            <label>Anticipated Duration of Studies</label>
            {["1 year", "2 years", "3 years"].map((d) => (
              <div key={d}>
                <input
                  type="checkbox"
                  name="studyDuration"
                  value={d}
                  onChange={handleChange}
                  checked={formData.studyDuration.includes(d)}
                />
                {d}
              </div>
            ))}
          </div>

          <div className="form-group">
            <label>Have you studied at CIU before?</label>
            {["Yes", "No"].map((v) => (
              <div key={v}>
                <input
                  type="checkbox"
                  name="studiedAtCIU"
                  value={v}
                  onChange={handleChange}
                  checked={formData.studiedAtCIU.includes(v)}
                />
                {v}
              </div>
            ))}
          </div>

          <div className="form-group">
            <label>Previous School at CIU</label>
            <input
              name="previousSchool"
              value={formData.previousSchool}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Previous Student ID</label>
            <input
              name="previousId"
              value={formData.previousId}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Year of Enrolment (From)</label>
            <input
              type="text"
              name="enrolFrom"
              value={formData.enrolFrom}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Year of Enrolment (To)</label>
            <input
              type="text"
              name="enrolTo"
              value={formData.enrolTo}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Universities or Colleges Attended</label>
            <input
              type="text"
              name="previousUniversities"
              value={formData.previousUniversities}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>High School Documents (Upload)</label>
            <input
              type="file"
              name="highSchoolDocs"
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <div className="form-group">
            <label>Recommending Authority Name</label>
            <input
              name="recommenderName"
              value={formData.recommenderName}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Congregation/Diocese/Organization</label>
            <input
              name="recommenderCongregation"
              value={formData.recommenderCongregation}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Recommender Address</label>
            <input
              name="recommenderAddress"
              value={formData.recommenderAddress}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Recommender Telephone</label>
            <input
              name="recommenderPhone"
              value={formData.recommenderPhone}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Recommender Email</label>
            <input
              name="recommenderEmail"
              type="email"
              value={formData.recommenderEmail}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Fee Payment Method</label>
            <input
              name="feePayer"
              value={formData.feePayer}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Sponsor Name</label>
            <input
              name="sponsorName"
              value={formData.sponsorName}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Sponsor Type (Self/Congregation/etc)</label>
            <input
              name="sponsorType"
              value={formData.sponsorType}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Sponsor Address</label>
            <input
              name="sponsorAddress"
              value={formData.sponsorAddress}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Sponsor Phone</label>
            <input
              name="sponsorPhone"
              value={formData.sponsorPhone}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Sponsor Email</label>
            <input
              name="sponsorEmail"
              type="email"
              value={formData.sponsorEmail}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Sponsoring Province (optional)</label>
            <input
              name="provinceSponsor"
              value={formData.provinceSponsor}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>How did you hear about CIU?</label>
            <input
              name="heardAboutCIU"
              value={formData.heardAboutCIU}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </>
      )}

      <StepButtons />
    </form>
  );
};

export default MultiStepForm;
