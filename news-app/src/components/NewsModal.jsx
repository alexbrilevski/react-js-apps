import demoImg from "../assets/images/demo.jpg";
import "./NewsModal.css";

const NewsModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img src={demoImg} alt="" className="modal-image" />
        <h2 className="modal-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          dolorem.
        </h2>
        <p className="modal-source">Source: The Guardian</p>
        <p className="modal-date">Oct 10, 2026, 11:30 PM</p>
        <p className="modal-content-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime
          dolore repellendus temporibus natus sit. Nulla tempore perferendis
          sapiente corrupti quo a necessitatibus quisquam, ducimus eos pariatur
          saepe eum! Quo.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-link"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsModal;
