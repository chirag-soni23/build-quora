import React from 'react'
import FollowerData from '../context/FollowerData'
import SidebarOption from '../context/SidebarOption'



function Users() {
  return (
    <div>
            <div className="box">
    <div className="boxes">
      <div className="box1">
    <SidebarOption/>
      </div>
      <div className="box2">
        <div className="boxes1">
          <div className="boxes1img">
          <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.all_caught_up_feed_lightmode.png-26-1b95f406729630f5.png" alt="" />
          </div>
          <div className="box-thought">You're all caught up</div>
          <div className="box-thoughts">Follow more Spaces to discover new stories in your feed. You can also visit <a href="">Home.</a></div>

        </div>
        <div className="boxes2">
          <div className="boxhead">
            Discover Spaces
          </div>
          <div className="boxhead1">
          Spaces you might like
         
          </div>
          <hr/>
          <div className="boxhead3">
          <FollowerData />
          </div>
        </div>
      </div>
      <div className="box3">
       
      </div>
      </div>
    </div>
    </div>
  )
}

export default Users