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
      {/* <!-- Add more sidebar options with images and text here --> */}
      
      {/* <!-- Option to discover spaces --> */}
      <div className="sidebarOption">
        <i class="fa-solid fa-plus"></i>
        <p className="text">Discover Spaces</p>
      </div>
      
      {/* <!-- Additional information and links --> */}
      <div className="sideinfo">
        <hr />
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
          <a href="">Your Choices•</a>
          <a href="">Officer•</a>
        </div>
      </div>
    </div>
  );
}

export default SidebarOption;

