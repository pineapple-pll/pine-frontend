import * as React from 'react'
import { useState } from 'react'

type SignUpForm = {
    memberId: string,
    name: string,
    age: number,
    gender: string,
    address: string,
    profile: string,
    active: string,
    country: string,
    phone: string,
    email: string,
    password: string
}

function SignUp(){
    const [loading, setLoading] = useState<boolean>(false)
    const [signUp, setSignUp] = useState<SignUpForm>({
        memberId: '',
        name: '',
        age: 20,
        gender: 'M',
        address: '',
        profile: '',
        active: 'Y',
        country: '',
        phone: '',
        email: '',
        password: ''
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        let val = {...signUp}
        setSignUp({...val, [e.target.name]: e.target.value})
    }

    function handleSelectChange(e : React.ChangeEvent<HTMLSelectElement>){
        let val = {...signUp}
        setSignUp({...val, [e.target.name]: parseInt(e.target.value)})
    }

    function optionValue(){
        let arr = []
        for(let i=1;i<100;i++){
            arr.push(<option key={i} value={i}>{i}</option>)
        }
        return arr
    }

    async function handleSignUp(SignUpValue: SignUpForm){
    }

    return(
        <div style={loading ? {backgroundColor: 'rgb(0, 0, 0, 0.1)'} : {}}>
            Sign up Page
            <div>
                <span>ID: </span>
                <input
                    type="text"
                    value={signUp.memberId}
                    name="memberId"
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>PASSWORD: </span>
                <input
                    type="text"
                    value={signUp.password}
                    name="password"
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>NAME: </span>
                <input
                    type="text"
                    value={signUp.name}
                    name="name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>ADDRESS: </span>
                <input
                    type="text"
                    value={signUp.address}
                    name="address"
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>PROFILE: </span>
                <input
                    type="text"
                    value={signUp.profile}
                    name="profile"
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>COUNTRY: </span>
                <input
                    type="text"
                    value={signUp.country}
                    name="country"
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>PHONE: </span>
                <input
                    type="text"
                    value={signUp.phone}
                    name="phone"
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>EMAIL: </span>
                <input
                    type="text"
                    value={signUp.email}
                    name="email"
                    onChange={handleChange}
                />
            </div>
            <div onChange={handleChange}>
                <span>GENDER: </span>
                <span>
                    <input
                        type="radio"
                        id="gender_M"
                        name="gender"
                        value={"M"}
                        checked={signUp.gender === "M"}
                        readOnly
                    />
                    <label htmlFor="gender_M">Male</label>
                </span>
                <span>
                    <input
                        type="radio"
                        id="gender_W"
                        name="gender"
                        value={"W"}
                        checked={signUp.gender === "W"}
                        readOnly
                    />
                    <label htmlFor="gender_W">Female</label>
                </span>
            </div>
            <div onChange={handleChange}>
                <span>ACTIVE: </span>
                <span>
                    <input
                        type="radio"
                        id="active_y"
                        name="active"
                        value={"Y"}
                        checked={signUp.active === "Y"}
                        readOnly
                    />
                    <label htmlFor="active_y">YES</label>
                </span>
                <span>
                    <input
                        type="radio"
                        id="active_n"
                        name="active"
                        value={"N"}
                        checked={signUp.active === "N"}
                        readOnly
                    />
                    <label htmlFor="active_n">NO</label>
                </span>
            </div>
            <div>
                <span>AGE: </span>
                <select onChange={handleSelectChange} name="age" value={signUp.age}>
                    {optionValue()}
                </select>
            </div>
            <button onClick={() => handleSignUp(signUp)}>SignUp</button>
        </div>
    )
}

export default SignUp