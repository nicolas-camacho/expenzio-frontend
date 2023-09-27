import { InputHTMLAttributes } from "react";
import "./inputs.scss"

interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
    alternative?: boolean;
}

const BaseInput = ({ alternative = false, ...props }: InputsProps) => {
    return <input {...props} className={`base-input base-input${alternative && "--alternative"}`}></input>
}

export {
    BaseInput
}