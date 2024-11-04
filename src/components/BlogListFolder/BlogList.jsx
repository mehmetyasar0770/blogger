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