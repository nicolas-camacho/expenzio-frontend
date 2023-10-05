import { ButtonHTMLAttributes } from "react";
import "./buttons.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    alternative?: boolean;
}

const BaseButton = ({alternative = false, children, ...props }: ButtonProps) => {
    return(
        <button
            {...props}
            className={`base-button base-button${alternative && "--alternative"}`}>
                {children}
        </button>
    )
}
 

const LinkButton = ({alternative = false, children, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={`link-button link-button${alternative && "--alternative"}`}>
            {children}
        </button>
    )
}

export {
    BaseButton,
    LinkButton
}
