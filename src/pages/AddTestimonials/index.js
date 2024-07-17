import React, { useState } from "react";
import "./style.css";

const AddTestimonials = () => {
  const [testimonial, setTestimonial] = useState({
    name: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial({
      ...testimonial,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Témoignage soumis: ", testimonial);
    setTestimonial({ name: "", message: "" });
  };

  return (
    <div className="testimonials-container">
      <h1>Ajouter un Témoignage</h1>
      <form onSubmit={handleSubmit} className="testimonial-form">
        <div className="form-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={testimonial.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={testimonial.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default AddTestimonials;

