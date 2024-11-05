import { useState } from "react";
import { blogData } from  "../../data/blogData";
import AddNewBlog from "./AddNewBlog";
import BlogItem from "./BlogItem";
import "./BlogList.css";
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';


function BlogList() {
  const [blogs, setBlogs] = useState(blogData);

  const handleDelete = (blogId) => {
    // console.log("Deleting blog with id:", id);
    const filteredBlogs = blogs.filter((item) => item.id !== blogId);
    setBlogs(filteredBlogs);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    //console.log(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
   
  );
  return (
    <div className="blog-list">
      <div className="header-div">
        <div className="icon-div">
      <LocalFloristOutlinedIcon  fontSize="large"/>
      <LocalFloristOutlinedIcon  fontSize="large"/>
      <LocalFloristOutlinedIcon  fontSize="large"/>
      <LocalFloristOutlinedIcon  fontSize="large"/>
      <LocalFloristOutlinedIcon  fontSize="large"/>
      <LocalFloristOutlinedIcon  fontSize="large"/>
      <LocalFloristOutlinedIcon  fontSize="large"/>
      </div>
      
      <h2>İç Mekan Güzellikleri</h2>
      </div>
        <div className="new-blog"><AddNewBlog
        blogs={blogs}
        setBlogs={setBlogs}
      
      />
      
      </div>

      <div className="blog-filter">
       <input
            type="text"
            className="blog-input"
            placeholder="Ara..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
      </div>

      <div className="blogs-wrapper">
        {filteredBlogs.map((Item) => {
          return (
            <BlogItem
              key={Item.id}
              id={Item.id}
              imageURL={Item.imageURL}
              title={Item.title}
              content={Item.content}
              author={Item.author}
              date={Item.date} 
              handleDelete={handleDelete}

            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;