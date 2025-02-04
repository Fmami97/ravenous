import React from "react";
import "./HeaderComponent.css";
export const HeaderComponent = React.memo(({ title = "Ravenous" }) => {
    return (<header>
        {title}
    </header>)
});