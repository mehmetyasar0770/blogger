import { useState } from "react";
import { blogData } from  "../../data/blogData";
import AddNewBlog from "./AddNewBlog";
import BlogItem from "./BlogItem";
import "./BlogList.css";
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';


function BlogList() {
  const [blogs, setBlogs] = useState(blogData);
  const [sortBy, setSortBy] = useState("date");

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

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === "author") {
      return a.author.localeCompare(b.author);
    }
    return 0;
  });

  let updatedBlogs = sortedBlogs;
  
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
            placeholder="Başlıklarda Ara..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
           <select
            value={sortBy}
            className="blog-select"
            onChange={handleSortChange}
          >
            <option value="date">Tarihe Göre Sırala</option>
            <option value="author">Yazara Göre Sırala</option>
          </select>
          
      </div>


      <div className="blogs-wrapper">
        {updatedBlogs.map((Item) => {
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