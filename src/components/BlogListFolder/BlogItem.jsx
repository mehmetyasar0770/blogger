import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./BlogItem.css";
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined'; 

function BlogItem(props) {
  const {id, title,content,author,date,imageURL,handleDelete} = props;
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
      <b className="blog-title">{title}</b>
      <div className="blog-info">
        <p className="blog-content">{content}</p>
        <span className="blog-author">{author}</span>
        <span className="blog-date">{date}</span>
        <div className="dummy-div"></div>
       
        <Button color="success" className= "btn">
          <strong>Güncelle</strong>
        </Button>
        <Button color="danger" className= "btn" onClick={() => props.handleDelete(id)}>Sil</Button>
        
      </div>
    </div>
  );
}

BlogItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  imageURL: PropTypes.string,
  handleDelete: PropTypes.func,
  
  
};

export default BlogItem;