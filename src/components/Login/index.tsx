import { useContext } from "react"
import { BaseButton, LinkButton } from "../Buttons"
import { BaseInput } from "../Inputs"
import { PageContext } from "../../contexts/PageContext"

import "./login.scss"

const Login = () => {
    const {switchPages} = useContext(PageContext) 

    return (
        <div className="authetication-container">
            <BaseInput placeholder="User" type="text" />
            <BaseInput type="password" name="password" placeholder="password" />
            <BaseButton onClick={() => null}>Log In</BaseButton>
            <div className="register-redirection">
                <span>Not register yet?</span>
                <LinkButton onClick={switchPages}>click here</LinkButton>
            </div>
        </div>
    )
}

export default Login
