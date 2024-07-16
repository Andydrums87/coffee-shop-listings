import React from "react";
import Image from "../images/MyImage.jpg"

function Header() {
    return (
        <header class="img__container">
            <img src={Image} alt="image" class="header__img" />
        </header>
    )

}

export default Header;