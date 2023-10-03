import { BaseButton } from "../Buttons"
import { BaseInput } from "../Inputs"

import "./signup.scss"

const SignUp = () => {
    return (
        <div className="authorization">
            <BaseInput placeholder="User" type="text" />
            <BaseInput type="password" name="password" placeholder="password" />
            <BaseInput type="password" name="repeat password" placeholder="repeat password" />
            <BaseButton onClick={() => null}>Sign Up</BaseButton>
        </div>
    )
}

export default SignUp
