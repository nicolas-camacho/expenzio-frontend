import React from "react";
import "./buttons.scss"

interface ButtonProps {
    onClick: () => void;
    alt?: boolean;
    children: React.ReactNode;
}

const BaseButton= ({onClick, alt = false, children }: ButtonProps) => {
    return(
        <button 
            className={`base-button base-button${alt && "--alternative"}`} 
            onClick={onClick}>
                {children}
        </button>
    )
}

export {
    BaseButton
}