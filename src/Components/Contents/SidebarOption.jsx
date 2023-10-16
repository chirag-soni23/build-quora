import React from "react";
import "../css/SidebarOption.css";

function SidebarOption() {
  return (
    <div className="sidebarOptions">
       {/* Individual sidebar options with images and text */}
      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-2307-100-tgwpfzgzdpnbkxjhrhzjzisqgaazhuxl.jpeg"
          alt=""
        />
        <p>Artificial Intelligence</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-3451-100-vvvhwelvamaxjlecyuuxtleqcrihfcdg.jpeg"
          alt=""
        />
        <p>Marvel Comics</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-3451-100-vvvhwelvamaxjlecyuuxtleqcrihfcdg.jpeg"
          alt=""
        />
        <p>Healthy Eatings</p>
      </div>
      <div className="sidebarOption">
        <img
          src="	https://qph.cf2.quoracdn.net/main-thumb-t-3355-100-K90bqEIsedItSh1yxyYRzkGkML594dD1.jpeg"
          alt=""
        />
        <p>Music Industry</p>
      </div>
      <div className="sidebarOption">
        <img
          src="	https://qph.cf2.quoracdn.net/main-thumb-t-5142-100-3oEs32JMpxjxWobEk5LP5rqcAeupxl6c.jpeg"
          alt=""
        />
        <p>Cosmology</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-21456-100-cFV36IfXIHOgPCusvyYzctDdyDzUezJX.jpeg"
          alt=""
        />
        <p>Infectious Disease</p>
      </div>
      <div className="sidebarOption">
        <img
          src="	https://qph.cf2.quoracdn.net/main-thumb-t-25860-100-tVgiHntuFgGvBmSDnPIUyO1fIf4q2iHa.jpeg"
          alt=""
        />
        <p>Body Weight</p>
      </div>
      <div className="sidebarOption">
        <img
          src="	https://qph.cf2.quoracdn.net/main-thumb-t-1510-100-ErS2ihCvcHUYLGS4voHE9gGjje7OreUy.jpeg"
          alt=""
        />
        <p>Indian Cuisine and Food</p>
      </div>
      <div className="sidebarOption">
        <i class="fa-solid fa-plus"></i>
        <p className="text">Discover Spaces</p>
      </div>
      {/* <!-- Additional information and links --> */}
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
  );
}

export default SidebarOption;  