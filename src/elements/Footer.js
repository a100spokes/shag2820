import React from "react";
import Logo from "@comp/logo/Logo";

export default function Footer() {
    const title = "hello";
    const titleNew = title.split("").join(" ");
    return(
        <footer>
            {/* <Logo bgColor={"green"} text={"logo footer"} /> */}
            <Logo/>
            <div>{titleNew}</div>
            <div>{Date.now() + title}</div>
        </footer>
    )
}