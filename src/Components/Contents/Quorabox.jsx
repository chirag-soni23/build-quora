import React from "react";
import "../css/Quorabox.css";
import Modal from "react-responsive-modal";
import ReactQuill from "react-quill";
import { useState } from "react";
import "../css/Post.css";

function Quorabox() {
  // State to manage the visibility of two modals
  const [isModalOpen, setIsModalOpen] = useState(false); // For the first modal
  const [isModalOpen2, setIsModalOpen2] = useState(false); // For the second modal

  // Icon for closing the modals
  const Close = <i class="fa-solid fa-xmark"></i>;

  return (
    <>
      <div className="quoraBox">
        {/* First Modal */}
        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div
            className="modal_title"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <h5>Add Question</h5>
            <h5 onClick={() => setIsModalOpen2(true)}>Create Post</h5>
          </div>
          {/* Tips for asking questions */}
          <div className="tips">
            <h3>Tips on getting good answers quickly</h3>
            <ul>
              <li>Make sure your question has not been asked already</li>
              <li>Keep your question short and to the point</li>
              <li>Double-check grammar and spelling</li>
            </ul>
          </div>
          {/* Modal content for adding a question */}
          <div className="modal__info">
            <img
              src="https://qph.cf2.quoracdn.net/main-thumb-2343499123-200-klaahntbbdzxnxrjcnjiysashxmagsfc.jpeg"
              alt=""
              srcSet=""
              className="avatar"
            />
            <div className="modal__scope">
              <i class="fa-solid fa-users"></i>
              <p>Public</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="modal__Field">
            <input
              style={{ outline: "none", padding: "20px" }}
              type="text"
              name=""
              id=""
              placeholder="Start your Question with what, How, Why, etc."
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
            </div>
          </div>
          <div className="modal__button">
            <button className="cancel" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button
              className="adds"
              type="Submit"
              onClick={() => setIsModalOpen(true)}
            >
              Add Question
            </button>
          </div>
        </Modal>

        {/* Second Modal */}
        <Modal
          open={isModalOpen2}
          closeIcon={Close}
          onClose={() => setIsModalOpen2(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div
            className="modal_title"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <h5 onClick={() => setIsModalOpen2(false)}>Add Question</h5>
            <h5 onClick={() => setIsModalOpen2(true)}>Create Post</h5>
          </div>
          <div className="i">
          <div className="modal__question">
            <i class="fa-solid fa-globe"></i>
            <p>Everyone</p>
            <span>
              <i class="fa-solid fa-angle-down"></i>
            </span>
          </div>
          </div>
          <div className="modal__answer">
            <ReactQuill placeholder="Say Something....." />
            <div className="modal__buttons"></div>
          </div>
          <div className="modal__button">
            <button className="cancel" onClick={() => setIsModalOpen2(false)}>
              Cancel
            </button>
            <button
              className="add"
              type="Submit"
              onClick={() => setIsModalOpen2(false)}
            >
              Post
            </button>
          </div>
        </Modal>

        {/* Quora box content */}
        <div className="quoraBox_info">
          <img
            src="https://qph.cf2.quoracdn.net/main-thumb-2343499123-50-klaahntbbdzxnxrjcnjiysashxmagsfc.jpeg"
            alt=""
          />
          <div className="quoraBox_quora">
            <input
              className="input"
              style={{ cursor: "pointer" }}
              type="text"
              placeholder="What do you want to ask or Share ?"
              readOnly
            />
          </div>
        </div>

        <div className="quorabox__btn">
          {/* Buttons for asking, answering, and posting */}
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                class="icon_svg-stroke"
                stroke="#666"
                stroke-width="1.5"
                fill="none"
                fill-rule="evenodd"
              >
                <g transform="translate(9 7)">
                  <path
                    d="M3 6v-.5A2.5 2.5 0 1 0 .5 3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle
                    class="icon_svg-fill_as_stroke"
                    fill="#666"
                    cx="3"
                    cy="8.5"
                    r="1"
                    stroke="none"
                  ></circle>
                </g>
                <path
                  d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => setIsModalOpen(true)}
              className="post__btn"
            >
              Ask
            </button>
          </span>
          <hr />
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke-width="1.5" fill="none" fill-rule="evenodd">
                <path
                  d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z"
                  class="icon_svg-stroke"
                  stroke="#666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  class="icon_svg-fill_as_stroke"
                  fill="#666"
                  d="m4.429 19.571 2.652-.884-1.768-1.768z"
                ></path>
                <path
                  d="M14.5 19.5h5v-5m-10-10h-5v5"
                  class="icon_svg-stroke"
                  stroke="#666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <button style={{ cursor: "pointer" }}>Answer</button>
          </span>
          <hr />
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z"
                  class="icon_svg-stroke"
                  stroke="#666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  class="icon_svg-fill_as_stroke"
                  fill="#666"
                  d="m4.429 19.571 2.652-.884-1.768-1.768z"
                ></path>
              </g>
            </svg>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => setIsModalOpen2(true)}
            >
              Post
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Quorabox;

