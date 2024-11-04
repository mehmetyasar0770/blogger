import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./BlogItem.css";
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined'; 

function BlogItem(props) {
  return (
    <div className="blog-item">
      <div className="blog-image-wrapper">
        <img
          className="blog-image"
          src={props.imageURL}
          alt=" "
          width={200}
        />
      </div>
      <b className="blog-title">{props.title}</b>
      <div className="blog-info">
        <p className="blog-content">{props.content}</p>
        <span className="blog-author">{props.author}</span>
        <span className="blog-date">{props.date}</span>
        <div className="dummy-div"></div>
       
        <Button color="success" className= "btn">
          <strong>Güncelle</strong>
        </Button>
        <Button color="danger" className= "btn">Sil</Button>
        
      </div>
    </div>
  );
}

BlogItem.propTypes = {
  
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  imageURL: PropTypes.string,
  
  
};

export default BlogItem;