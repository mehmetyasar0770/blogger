import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./AddNewBlog.css";
import BlogInput from "./BlogInput";

const blogInputs = [
  {
    label: "Başlık",
    type: "text",
    placeholder: "Blog başlığı giriniz.",
    name: "title",
  },
  {
    label: "İçerik",
    type: "text",
    placeholder: "İçerik giriniz.",
    name: "content",
  },
  {
    label: "Yazar",
    type: "text",
    placeholder: "Yazar adı giriniz.",
    name: "author",
  },
  {
    label: "Tarih",
    type: "text",
    placeholder: "Tarih giriniz.",
    name: "date",
  },
  {
    label: "Resim Linki",
    type: "text",
    placeholder: "Görsel linki giriniz.",
    name: "imageURL", // "imageURL" is correct here
  },
];

function AddNewBlog({ blogs, setBlogs }) {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
    imageURL: "", // Ensure state uses "imageURL"
  });

  function handleChange({ target: { name, value } }) {
    setBlog({ ...blog, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newBlog = {
      id: Math.random(),
      ...blog,
    };

    const isFormValid = Object.values(blog).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      alert("Input alanları boş geçilemez!");
      return;
    }

    setBlogs([newBlog, ...blogs]);
    console.log("yeni blog eklendi")
  }

  return (
    <form className="add-blog-form" onSubmit={handleSubmit}>
      {blogInputs.map((input, index) => (
        <BlogInput
          key={index}
          {...input}
          value={blog[input.name]} 
          handleChange={handleChange}
        />
      ))}
      <Button color={"success"}>Yeni Yazı Ekle</Button>
    </form>
  );
}

export default AddNewBlog;

AddNewBlog.propTypes = {
  blogs: PropTypes.array,
  setBlogs: PropTypes.func,
};
