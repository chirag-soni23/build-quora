import React from 'react'
import "../css/Quorabox.css"
import Modal from 'react-responsive-modal'
import { useState } from 'react'
import "../css/Post.css"
function Quorabox() {
  const [isModalOpen,setIsModalOpen] = useState(false)
  const Close =<i class="fa-solid fa-xmark"></i>

  return (
    <>
    <div className='quoraBox'>
    <div className="post__body">+
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
        <div className="quoraBox_info">
            <img src="https://qph.cf2.quoracdn.net/main-thumb-2343499123-50-klaahntbbdzxnxrjcnjiysashxmagsfc.jpeg" alt="" />
        <div className="quoraBox_quora">
          <input type="text" placeholder='What do you want to ask or Share ?'/>
       </div>
        </div>
        <div className="quorabox__btn">
          <span>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd"><g transform="translate(9 7)"><path d="M3 6v-.5A2.5 2.5 0 1 0 .5 3" stroke-linecap="round" stroke-linejoin="round"></path><circle class="icon_svg-fill_as_stroke" fill="#666" cx="3" cy="8.5" r="1" stroke="none"></circle></g><path d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" stroke-linejoin="round"></path></g></svg>
          <button onClick={()=> setIsModalOpen(true)} className='post__btn'>Answer</button>
          </span>
          <hr />
          <span>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
          <button>Answer</button>
          </span>
          <hr />
          <span>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path></g></svg>
          <button>Post</button>
            </span> 
        </div>
       </div>
       </>
       )
  }
      
export default Quorabox;
