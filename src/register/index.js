import { useFormik } from "formik";
import * as Yup from "yup";

import "./register.css";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      // gender: "",
      // hobbies: [],
      // contact: "",
      // salary: "",
      // image: "",
      // email: "",
      // state: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      address: Yup.string().required(),
      // gender: Yup.string().required(),
      // hobbies: [],
      // contact: Yup.string().required(),
      // salary: Yup.string().required(),
      // image: Yup.string().required(),
      // email: Yup.string().required(),
      // state: Yup.string().required(),
    }),
    onSubmit: (val) => {
      alert(val);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-input">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="form-input">
        <label htmlFor="address">Address</label>
        <textarea
          name="address"
          id="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? (
          <div>{formik.errors.address}</div>
        ) : null}
      </div>
      <div className="form-input">
        <label htmlFor="dob">DOB</label>
        <input type="date" name="dob" id="dob" />
      </div>
      <div className="form-input">
        <label>gender</label>
        <input type="radio" name="gender" id="male" defaultValue="male" />
        <label htmlFor="male" className="radio-label">
          MALE
        </label>
        <input
          type="radio"
          className="radio-label"
          name="gender"
          id="female"
          defaultValue="female"
        />
        <label htmlFor="female">FEMALE</label>
      </div>
      <div className="form-input">
        <label>hobbies</label>
        <input type="checkbox" name="hobbies[]" id="read" defaultValue="read" />
        <label className="checkbox-label" htmlFor="read">
          READING
        </label>
        <input
          type="checkbox"
          name="hobbies[]"
          id="write"
          defaultValue="write"
        />
        <label className="checkbox-label" htmlFor="write">
          WRITING
        </label>
        <input
          type="checkbox"
          name="hobbies[]"
          id="sports"
          defaultValue="sports"
        />
        <label className="checkbox-label" htmlFor="sports">
          Sports
        </label>
      </div>
      <div className="form-input">
        <label htmlFor="salary">Salary Range</label>
        <input type="number" name="from" placeholder="salary from" />
        To
        <input type="number" name="to" placeholder="salary To" />
      </div>
      <div className="form-input">
        <label htmlFor="salary">Salary Range</label>
        <input
          type="range"
          name="range"
          defaultValue={1000}
          step={1000}
          min={1000}
          max={30000}
        />
      </div>
      <div className="form-input">
        <label htmlFor="state">State</label>
        <select name="state" id="state">
          <option value>Select State</option>
          <option value={1}>Gujarat</option>
          <option value={2}>Maharshtra</option>
          <option value={3}>Bangal</option>
        </select>
      </div>
      <div className="form-input">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-input">
        <label htmlFor="contact">contact</label>
        <input type="number" name="contact" id="contact" />
      </div>
      <div className="form-input">
        <label htmlFor="img">Upload Image</label>
        <input type="file" name="image" id="img" />
      </div>
      <div className="form-input" style={{ textAlign: "center" }}>
        <button type="submit">REGISTER</button>
      </div>
    </form>
  );
};

export default Register;
