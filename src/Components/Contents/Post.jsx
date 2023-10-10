import React from 'react'
import "../css/Post.css"
import Modal from 'react-responsive-modal'
import "react-responsive-modal/styles.css"
import { useState } from 'react'
import ReactQuil from "react-quill"
import 'react-quill/dist/quill.snow.css'

function Post() {
   const [isModalOpen,setIsModalOpen] = useState(false)
   const Close =<i class="fa-solid fa-xmark"></i>

  return (
    <div className='post'>
        <div className="post__info">
          <img src="https://qph.cf2.quoracdn.net/main-thumb-1654305932-50-balkitbmgugurhhnwpwbvgilvkdmagbw.jpeg" alt="" />
          <div className="author">
         <h4><span className='username'>Humanity</span> .<span className='span'>Follow</span></h4> 
         <p>Posted by Actbiggy .jan28</p>

          </div>
        </div>
         <small>Actor, film director, film producer and musician Keanu Charles Reeves (Keanu Charles Reeves), missed the first 20 minutes of the party dedicated to the end of filming of his new film in one of the clubs in New York.</small>
        <div className="post__body">
            <div className='post__question'>
            {/* <p>This is a test Question</p>   */}
            <img src="https://qph.cf2.quoracdn.net/main-qimg-b2bc19e5060f50945cd08c91387f336b" alt="" srcset="" />
            <button onClick={()=> setIsModalOpen(true)} className='post__btn'>Answer</button>
            <Modal open = {isModalOpen}
          closeIcon = {Close} onClose={()=> setIsModalOpen(false)}
          closeOnEsc center closeOnOverlayClick={false} 
          styles={{
            overlay:{
              height:"auto"
            }
          }}>
            <div className="modal__question">
                <h1>This is a test question</h1>
                <p>Asked by {" "}</p><span>Username</span>{" "}on {" "}TimeStamp
            </div>
            <div className="modal__answer">
                <ReactQuil placeholder='Enter Your answer'/>
                <div className="modal__buttons">

                </div>

            </div>
            <div className="modal__button">
              <button className="cancel" onClick={()=>setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="add" type="Submit"  onClick={()=>setIsModalOpen(false)}>
                Add Question
              </button>
            </div>

            </Modal>
            </div>
        </div>
        <div className="post__footer">
            <div className="post__footerAction">
            <i class="fa-solid fa-arrow-up"></i>
            <i class="fa-solid fa-arrow-down"></i>
            </div>
            <i class="fa-solid fa-repeat"></i>
            <i class="fa-solid fa-comment"></i>
            <div className="post__footerLeft">
            <i class="fa-solid fa-share"></i>
            <i class="fa-solid fa-grip"></i>
            </div>
        </div>
        <p style={{
            color:"rgba(0,0,0,0.5)",
            fontSize:"12px",
            fontWeight:"bold",
            margin:"10px 0"
        }}>1 Answer</p>
        <div className="post__answer" style={{
            margin:"5px 0px 0px 6px",padding:"5px 0px 0px 20px",
            borderTop:"1px solid lightgray"
        }}>
            {/* <div style={{display:"flex",flexDirection:"column",width:"100%",padding:"10px 5px",borderTop:"1px solid lightgray"}} className="post-answer__container">
                   <div style={{display:"flex",
                 alignItems:"center",color:
                 "#888",
                 marginBottom:"10px",fontSize:"12px",fontWeight:"bold",borderTop:"1px solid lightgray"}}  className="post-answered">
                 <img src="https://qph.cf2.quoracdn.net/main-thumb-1654305932-50-balkitbmgugurhhnwpwbvgilvkdmagbw.jpeg" alt="" />
                 <div style={{
                    margin:"0px 10px"
                 }} className="post-info">
                    <p> Username</p>
                    <span>Timestamp</span>
                 </div>
                </div>
                <div className="post-answer">
                    This is test answer
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Post