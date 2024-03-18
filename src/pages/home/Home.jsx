import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Styles from "./home.module.css";
import axios from "axios";
import ProjectItem from "../../components/project-items/ProjectItem";
import Loader from "../../components/loader/Loader";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://express-crud-three.vercel.app/api/products"
        );
        setProjects(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [projects]);

  return (
    <section className={Styles.home}>
      <div className="container">
        <div className={Styles.homeProjects}>
          {projects.length ? (
            projects.map((project) => (
              <ProjectItem key={project._id} {...project} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
