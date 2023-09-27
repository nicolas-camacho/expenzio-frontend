import { BaseButton } from "../Buttons"

import "./login.scss"

const Login = () => {
    return (
        <div className="login">
            <input placeholder="User" type="text"></input>
            <input type="password" name="password" placeholder="password" />
            <BaseButton onClick={() => null}>Log In</BaseButton>
        </div>
    )
}

export default Login