import { BaseButton } from "../Buttons"

const Login = () => {
    return (
        <>
            <input placeholder="User" type="text"></input>
            <input type="password" name="password" placeholder="password" />
            <BaseButton onClick={() => null}>Log In</BaseButton>
        </>
    )
}

export default Login