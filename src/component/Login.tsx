import * as React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

function Login(){
    const [id, setId] = useState<string>('')
    const [pw, setPw] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const history = useHistory()

    useEffect(() => {
    },[])

    async function handleLogin(id : string, password : string){
        try{
            setLoading(true)
            const res = await axios.post('http://183.98.69.129/auth/members/signin', {
                memberId: id,
                password: password
            })
            if(res.status === 200){
                alert('success login')
                history.push('/')
            }
        }catch(error){
            alert('fail login')
            throw error
        }finally{
            setLoading(false)
        }
    }

    return(
        <div style={loading ? {backgroundColor: 'rgb(0, 0, 0, 0.1)'} : {}}>
            Login Page
            <div>
                <span>ID: </span>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div>
                <span>PASSWOD: </span>
                <input
                    type="text"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
            </div>
            <button onClick={() => handleLogin(id, pw)}>LOGIN</button>
        </div>
    )
}

export default Login