import { useState } from "react";
import { blogData } from  "../../data/blogData";
import AddNewBlog from "./AddNewBlog";
import BlogItem from "./BlogItem";
import "./BlogList.css";
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';


function BlogList() {
  const [blogs, setBlogs] = useState(blogData);

  return (
    <div className="blog-list">
      <div className="header-div">
      <LocalFloristOutlinedIcon  fontSize="large"/>
      <h2>İç Mekan Güzellikleri Bloğu</h2>
      </div>
        
      <AddNewBlog
        blogs={blogs}
        setBlogs={setBlogs}
      />
      <div className="blogs-wrapper">
        {blogData.map((Item) => {
          return (
            <BlogItem
              key={Item.id}
              imageURL={Item.imageURL}
              title={Item.title}
              content={Item.content}
              author={Item.author}
              date={Item.date} 

            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;