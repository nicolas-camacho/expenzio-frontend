import { ButtonHTMLAttributes } from "react";
import "./buttons.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    alternative?: boolean;
}

const BaseButton = ({alternative = false, children }: ButtonProps) => {
    return(
        <button 
            className={`base-button base-button${alternative && "--alternative"}`}>
                {children}
        </button>
    )
}

export {
    BaseButton
}