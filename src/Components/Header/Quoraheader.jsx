import React, { useState } from "react";
import '../Header/quoraheader.css'
import "../css/Quora.css"
import "../css/Post.css"
import "react-responsive-modal/styles.css"
import Modal from "react-responsive-modal";
import ReactQuil from "react-quill";
import { Link } from "react-router-dom";
function Quoraheader() {
   const [isModalOpen,setIsModalOpen] = useState(false)
   const [isModalOpen2,setIsModalOpen2] = useState(false)
   const Close =<i class="fa-solid fa-xmark"></i>
  return (
    <div className="header">
      {/* modal */}
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
                <div className="modal_title" style={{display:"flex",justifyContent:"space-around"  }}>
              <h5 onClick={()=>setIsModalOpen2(false)}>Add Question</h5>
              <h5 onClick={() => setIsModalOpen2(true)}>Create Post</h5>
            </div>
                <div className="mod">
                <div className="modal__question">
                <i class="fa-solid fa-globe"></i>
                  <p>Everyone</p>
                  <span><i class="fa-solid fa-angle-down"></i></span>
                </div>
                </div>
                <div className="modal__answer">
                  <ReactQuil placeholder="Say Something....." />
                  <div className="modal__buttons"></div>
                </div>
                <div className="modal__button">
                  <button
                    className="cancel"
                    onClick={() => setIsModalOpen2(false)}
                  >
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
      {/* modal */}
      <div className="content">
        <div className="logo">
      <Link to="/"> <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/800px-Quora_logo_2015.svg.png"
            alt="logo"
          /></Link>
          </div>
          <div className="icons">
   <Link to="/"> <div className="home icon">
   <i class="fa-solid fa-house"></i>

            </div></Link>
            <div className="notes icon"> 
            <i className="fa-solid fa-list"></i>

            </div>
            <div className="pencil icon">
            <i class="fa-sharp fa-regular fa-pen-to-square"></i>

            </div>
            <div className="users icon">
            <i className="fa-solid fa-people-group"></i>

            </div>
         <Link to ="notification"> <div className="bell icon">
         <i class="fa-regular fa-bell"></i>

            </div></Link>
          </div>  
          <div class="input">
                    <i id="glass" class="fa-solid fa-magnifying-glass"></i>
                    <input id="search" type="search" placeholder="Search" />
                </div>
            <div className="globe icon">
                        <i class="fa-solid fa-globe"></i>

            </div>
          <button onClick={()=> setIsModalOpen(true)}>Add Questions</button>
          <Modal open = {isModalOpen}
          closeIcon = {Close} onClose={()=> setIsModalOpen(false)}
          closeOnEsc center closeOnOverlayClick={false} 
          styles={{
            overlay:{
              height:"auto"
            }
          }}>
        
        <div className="modal_title" style={{display:"flex",justifyContent:"space-around"  }}>
              <h5>Add Question</h5>
              <h5 onClick={() => setIsModalOpen2(true)}>Create Post</h5>
            </div>
            <div className='tips'>
          <h3>Tips on getting good answers quickly</h3>
         <ul>
          <li>Make sure your question has not been asked already</li>
          <li>Keep your question short and to the point</li>
          <li>Double-check grammar and spelling</li>
         </ul>
         </div>
            <div className="modal__info">
              <img src="https://qph.cf2.quoracdn.net/main-thumb-2343499123-200-klaahntbbdzxnxrjcnjiysashxmagsfc.jpeg" alt="" srcset=""className="avatar" />
              <div className="modal__scop">
              <i class="fa-solid fa-users"></i>
                <p>Public</p>
                <i class="fa-solid fa-caret-down"></i>
              </div>
            </div>
            <div className="modal__Field">
              <input style={{outline:"none",padding:'20px'}} type="text" name="" id="" placeholder="Start your Question with what, How, Why, etc."/>
              <div style={{
                display:"flex",
                flexDirection:"column"
              }}>
                {/* <input value={inputUrl}
                onChange={(e)=>{
                  setInputUrl(e.target.value)
                }} style={{
                  margin :"5px 0",
                  border: "1px solid lightgray",
                  padding:"10px",
                  outline: "2px solid #000"
                }} type="text" placeholder="Optional include a link that give context" />
                { */}
                  {/* inputUrl !== "" && <img style={{
                    height:"40vh",
                    objectFit:"contain"
                  }} src={inputUrl} /> */}
                  
                {/* } */}
                {/* <img src={inputUrl} alt="image" /> */}
              </div>
            </div>
            <div className="modal__button">
              <button className="cancel" onClick={()=>setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="adds" type="Submit"  onClick={()=>setIsModalOpen(false)}>
                Add Question
              </button>
            </div>
          </Modal>
      </div>
    </div>
  );
}

export default Quoraheader;
