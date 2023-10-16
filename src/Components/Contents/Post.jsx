import React from "react";
import "../css/Post.css";
import "react-responsive-modal/styles.css";
import "react-quill/dist/quill.snow.css";
import { Userdata } from "../Constant/Constant";

// Define the Post component
function Post() {
  return (
    <div className="post">
      {/* Map through the Userdata array and render content for each item */}
      {Userdata.map((item) => (
        <>
          {/* Post information */}
          <div className="post__info">
            <img src={item.logoimage} alt="" />
            <div className="author">
              <h4>
                {/* Display the author's name */}
                <span key={item.Id} className="username">
                  {item.name}
                </span>{" "}
                .<span className="span">Follow</span>
              </h4>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="post__body">
            {/* Post content, including question and answer */}
            <div className="post__question">
              <p>{item.Question}</p>
              <small>{item.Answer}</small>
              <img src={item.image} alt="" srcset="" />
            </div>
          </div>
          <div className="post__footer">
            {/* Post footer actions */}
            <div className="post__footerAction">
              <i class="fa-solid fa-arrow-up"></i>
              <h4>Upvote</h4>
            </div>
            <i
              style={{ marginLeft: "10px" }}
              class="fa-solid fa-arrow-down"
            ></i>
            <i class="fa-solid fa-repeat"></i>
            <i class="fa-solid fa-comment"></i>
            <div className="post__footerLeft">
              <i class="fa-solid fa-share"></i>
              <i class="fa-solid fa-grip"></i>
            </div>
          </div>
          <p
            style={{
              color: "rgba(0,0,0,0.5)",
              fontSize: "12px",
              fontWeight: "bold",
              margin: "10px 0",
            }}
          >
            1 Answer
          </p>
          <div
            className="post__answer"
            style={{
              margin: "5px 0px 0px 6px",
              padding: "5px 0px 0px 20px",
              borderTop: "1px solid lightgray",
            }}
          ></div>
        </>
      ))}
    </div>
  );
}

export default Post;
