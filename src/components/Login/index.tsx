import { BaseButton } from "../Buttons"
import { BaseInput } from "../Inputs"

import "./login.scss"

const Login = () => {
    return (
        <div className="authorization">
            <BaseInput placeholder="User" type="text" />
            <BaseInput type="password" name="password" placeholder="password" />
            <BaseButton onClick={() => null}>Log In</BaseButton>
        </div>
    )
}

export default Login
