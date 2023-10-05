import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { BaseButton, LinkButton } from "../Buttons"
import { BaseInput } from "../Inputs"
import { PageContext } from "../../contexts/PageContext"

import "./signup.scss"

type userData = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const SignUp = () => {
    const {switchPages} = useContext(PageContext)
    const [user, setUser] = useState<userData>({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        e.stopPropagation()
        const url = import.meta.env.VITE_API_URL
        fetch(url + "user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user})
        }).then(response => {
            if (response.status === 200) {
                switchPages()
            } else {
                console.error("cambia")
            }
        })
    }

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target
        setUser({...user, [name]: value})
    }


    return (
        <form className="authetication-container" onSubmit={handleSubmit}>
            <BaseInput name="first_name" placeholder="First Name" type="text" onChange={handleChange} value={user.first_name} />
            <BaseInput name="last_name" placeholder="Last Name" type="text" onChange={handleChange} value={user.last_name} />
            <BaseInput name="email" placeholder="Email" type="text" onChange={handleChange} value={user.email} />
            <BaseInput name="password" type="password" placeholder="password" onChange={handleChange} value={user.password} />
            <BaseInput name="password_confirmation" type="password" placeholder="repeat password" onChange={handleChange} value={user.password_confirmation} />
            <BaseButton type="submit">Sign Up</BaseButton>
            <LinkButton onClick={switchPages}>I already have an account</LinkButton>
        </form>
    )
}

export default SignUp
