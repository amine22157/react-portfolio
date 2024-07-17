import React, { useState } from "react";
import "./style.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: "Alice", message: "Super site web !" },
    { id: 2, name: "Bob", message: "J'ai adoré travailler avec vous." }
  ]);

  return (
    <div className="testimonials-container">
      <h1>Liste des Témoignages</h1>
      <ul className="testimonial-list">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="testimonial-item">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;

