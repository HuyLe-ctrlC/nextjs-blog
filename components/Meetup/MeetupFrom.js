import React, { useState } from "react";
import { useFormik } from "formik";
export default function MeetupFrom({ onAddMeetup }) {
  let numberRandom = Math.random();
  const [ID, setID] = useState(numberRandom);
  // console.log("numberRandom", numberRandom);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      // id: ID,
      title: "",
      image: "",
      address: "",
      description: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("values1", values);
      onAddMeetup(values);
      resetForm();
    },
  });
  return (
    <>
      <form className="user" onSubmit={formik.handleSubmit}>
        {/* <div className="form-group d-none">
          <label>
            ID <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control form-control-user"
            name="title"
            value={ID}
          />
          <div className="text-danger fs-6 mt-1">
            {formik.touched.id && formik.errors.id}
          </div>
        </div> */}
        <div className="form-group">
          <label>
            Tiêu đề <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control form-control-user"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange("title")}
            onKeyDown={() => setID(numberRandom)}
            onBlur={formik.handleBlur("title")}
          />
          <div className="text-danger fs-6 mt-1">
            {formik.touched.title && formik.errors.title}
          </div>
        </div>
        <div className="form-group">
          <label>
            Image <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control form-control-user"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange("image")}
            onBlur={formik.handleBlur("image")}
          />
          <div className="text-danger fs-6 mt-1">
            {formik.touched.image && formik.errors.image}
          </div>
        </div>
        <div className="form-group">
          <label>
            Address <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control form-control-user"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange("address")}
            onBlur={formik.handleBlur("address")}
          />
          <div className="text-danger fs-6 mt-1">
            {formik.touched.address && formik.errors.address}
          </div>
        </div>
        <div className="form-group">
          <label>
            Tên <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control form-control-user"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange("description")}
            onBlur={formik.handleBlur("description")}
          />
          <div className="text-danger fs-6 mt-1">
            {formik.touched.description && formik.errors.description}
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-info btn-cus ml-3">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
