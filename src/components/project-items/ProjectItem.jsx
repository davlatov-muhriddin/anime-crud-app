import React from "react";
import Styles from "./project-item.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ProjectItem({ _id, image, title, description, price }) {
  const deleteProject = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://express-crud-three.vercel.app/api/products/${id}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={Styles.projectCard}>
      <img src={image} alt={title} />
      <div className={Styles.projectCardBody}>
        <h1>{title}</h1>
        <p>{description.slice(0, 70)}...</p>
        <span>{price}$</span>
      </div>
      <div className={Styles.projectCardBtns}>
        <Link to={`/detail/${_id}`}>Detail</Link>
        <Link to={`/edit/${_id}`}>Edit</Link>
        <a href="#" onClick={() => deleteProject(_id)}>Delete</a>
      </div>
    </div>
  );
}

export default ProjectItem;
