import React from "react";

const Header = ({ title }) => {

    return (
        <header >
            <h1 className="text-3xl  p-1 font-semibold">{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;