import React from "react";
import "../css/sidebars.css"
import { NavLink } from "react-router-dom";
const SidebarOption = () =>{
    const space = [
        {
            name:"Business",
            image:"https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg "
        },
        {
            name:"Music",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU "
        },
        {
            name:"Food",
            image:"https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000"
        },
        {
            name:"Art",
            image:"https://www.befunky.com/images/prismic/8378f663-d028-48f1-87de-fc5f872aa948_hero-photo-to-art-5.jpg?auto=avif,webp&format=jpg&width=896"
        },
        {
            name:"Science",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJDjQCaAo3QiynDmiIU-zBiadVWlyoAqt1g&usqp=CAU"
        },
        {
            name:"Health",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhiOiPpiFEtHpJ9TGY8Tw5kUaN3jXCrO9uZA&usqp=CAU"
        },
        {
            name:"Technology",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV59dj378xBvmkO3T8PnLRzFkyaH07PbWLRw&usqp=CAU"
        },
        {
            name:"Skills",
            image:"https://thumbs.dreamstime.com/b/group-business-people-discussing-skills-46461416.jpg"
        }
        
    
    ]
    return(
     <div className="Sidenav">
      
        {
            space.map((e)=>
           {
            let url=`/Sidebardetails/${e.name}`
           return(
            
                
                <NavLink to= {url} className="info">
                    <div className="info1">
                     <img src={e.image}></img>
                     </div>
                     <div className="info2">
                     <p>{e.name}</p>
                     </div>
                </NavLink>
            )})
        }
        <div className="sideinfo">
            <hr/>
            <div>
            <a href="">Home•</a>
            <a href="">Careers•</a>
            </div>
            <div>
            <a href="">Terms•</a>
            <a href="">Privacy•</a>
            </div>
            <div>
            <a href="">Acceptable Use•</a>
            <a href="">Business•</a>
            </div>
            <div>
            <a href="">YourChoices•</a>
            <a href=""> Officier•</a>
            </div>
        </div>
     </div>
    )
}
export default SidebarOption;