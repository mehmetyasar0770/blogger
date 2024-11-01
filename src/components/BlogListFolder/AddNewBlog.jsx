import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./AddNewBlog.css";
import BlogInput from "./BlogInput";

const blogInputs = [
  {
    label: "Title",
    type: "text",
    placeholder: "Blog başlığı giriniz.",
    name: "title",
  },
  {
    label: "Content",
    type: "text",
    placeholder: "İçerik giriniz.",
    name: "content",
  },
  {
    label: "Author",
    type: "text",
    placeholder: "Yazar adı giriniz.",
    name: "author",
  },
  {
    label: "Date",
    type: "text",
    placeholder: "Tarih giriniz.",
    name: "date",
  },
  {
    label: "Image URL",
    type: "text",
    placeholder: "Görsel linki giriniz.",
    name: "image",
  },
];

function AddNewBlog({ blogs, setBlogs }) {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
    imageURL: "",
  });
  
  function handleChange({ target: { name, value } }) {
    setBlog({ ...blog, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = Object.values(blog).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      console.error("Input alanları boş geçilemez!");
      return;
    }

    const newBlog = {
      id: Math.random(),
      ...blog,
      
    };
    setBlogs([newBlog, ...blogs]);
  }

  return (
    <form className="add-blog-form" onSubmit={handleSubmit}>
      {blogInputs.map((input, index) => (
        <BlogInput key={index} {...input} handleChange={handleChange} />
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