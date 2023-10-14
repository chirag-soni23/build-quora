import React from 'react'
import "../css/Notifications.css"


function Notification() {
  return (
    <div className="notification-wrapper">
    <div className="notify-wrap">
      <div className="notify-wrap1">
          <div className="notifying1"></div>
          <div className="notifying2">
              <div className="filter">Filters</div>
           
              <div className="notify">All Notifications</div>
              <div className="notify1">
                
                      <div>Stories</div>
                      <div>Questions</div>
                      <div>Spaces</div>
                      <div>People updates</div>
                      <div>Comments and mentions</div>
                      <div>Upvotes</div>
                      <div>Your content</div>
                      <div>Your Profile</div>
                      <div>Announcements </div>
                      <div>Earnings</div>
                      <div>Subscription</div>
                
              </div>
          </div>
      </div>
      <div className="notify-wrap2">
           <div className="notifywrap-main">
          <div className="notifywrap-main1">
            Notifications
          </div>
          <div className="notifywrap-main2">Settings</div>
        </div>
        {/* <div className="notify-img">
            <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.no_notification_lightmode.png-26-9e0ef76620dd73d3.png" alt="" />
          </div> */}
          {/* <div className="notify-text">No New Notifications</div>
          <div className="notify-text1">Notifications you received in the last 30 days will show up here.</div> */}
          
         


        </div>
      <div className="notify-wrap3">
        
      </div>
   
  
    </div>
  </div>
  )
}

export default Notification



