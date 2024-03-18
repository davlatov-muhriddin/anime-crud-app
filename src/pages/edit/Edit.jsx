import Styles from "./edit.module.css";
import Input from "../../components/ui/input/Input";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Edit() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://express-crud-three.vercel.app/api/products/${id}`
      );
      setImage(data.product.image);
      setTitle(data.product.title);
      setDescription(data.product.description);
      setPrice(data.product.price);
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (e) => {
    e.preventDefault();

    const { data } = await axios.put(
      `https://express-crud-three.vercel.app/api/products/${id}`,
      { image, title, description, price }
    );
    navigate("/");
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div className={Styles.edit}>
      <div className="container">
        <h2>Edit Page</h2>
        <form onSubmit={editProduct}>
          <Input state={image} setState={setImage} />
          <Input state={title} setState={setTitle} />
          <Input state={description} setState={setDescription} />
          <Input state={price} setState={setPrice} />
          <button>Edit Product</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
