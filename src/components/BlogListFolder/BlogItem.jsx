import PropTypes from "prop-types";
import { useState } from "react"; // Add useState import
import Button from "../UI/Button";
import "./BlogItem.css";

function BlogItem(props) {
  const {
    id,
    title,
    content,
    author,
    date,
    imageURL,
    handleDelete,
    handleUpdate,
  } = props;

  
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    handleUpdate(id, updatedTitle, updatedContent);
    setIsEditing(false);
  };

  return (
    <div className="blog-item">
      {isEditing ? (
        <div className="edit-blog">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            className="blog-textarea"
          />
          <Button color="success" className="save" onClick={handleSave}>
            Kaydet
          </Button>
        </div>
      ) : (
        <div className="blog-content-wrapper">
          <div className="blog-image-wrapper">
            <img className="blog-image" src={imageURL} alt="Blog görseli" width={200} />
          </div>
          <b className="blog-title">{title}</b>
          <div className="blog-info">
            <p className="blog-content">{content}</p>
            <span className="blog-author">{author}</span>
            <span className="blog-date">{date}</span>
            <div className="dummy-div"></div>
            <Button color="success" className="btn" onClick={handleEdit}>
              <strong>Güncelle</strong>
            </Button>
            <Button color="danger" className="btn" onClick={() => handleDelete(id)}>
              Sil
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

BlogItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default BlogItem;
