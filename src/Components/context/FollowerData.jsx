import React from "react";
import "../css/Followdata.css"
const FollowerData =() =>{
    const Follower =[
        {
           name:"Brain Killer",
           quote:"This Space offers valuable information about an important topic.",
           follower:"1.5 followers",
           image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2EPIsAi52SXd1Km5GV9EK77MTFD9oYqTNvuWDuQHEq_r9JiOjXn_wXxHN_-fHvrkaYA&usqp=CAU"

        },
        {
            name:"Right Wing Nationalism",
            quote:"Space for Right Wing views.",
            follower:"7.3K followers",
            image:" https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/09/28194445/nationalism-in-india-class-10.jpg"
 
         },
         {
            name:"Mutual Funds ",
            quote:"Aim of this space is to promote awareness regarding personal finance.",
            follower:" 17.7K followers",
            image:"https://assets.entrepreneur.com/content/3x2/2000/20190927120434-mutualfund.jpeg "
 
         },
         {
            name:"Banking ",
            quote:" Banking is an industry that handles cash, credit, and other financial transactions for individual consumers and businesses alike.",
            follower:" 1.7K followers",
            image:"https://indiaforensic.com/certifications/wp-content/uploads/banking-frauds-certification.jpg  "
 
         },

    ]
    return(
        <div className="followdata">
            {
                Follower.map((ele)=>(
                    <>
                    <div className="followdata1">
                        <div className="followdata2">
                       <img src={ele.image} />
                       </div>
                       <div className="followdata3">
                        <div className="though1">{ele.name}</div>
                        <div className="though2">{ele.follower}</div>
                        <div className="though3">{ele.quote}</div>
                       </div>
                    </div>
                    <hr/>
                    </>
                ))
            }
        </div>
    )
}
export default FollowerData ;