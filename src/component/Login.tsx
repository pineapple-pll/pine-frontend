import * as React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Login(){
    const [id, setId] = useState<string>('')
    const [pw, setPw] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
    },[])

    async function handleLogin(id : string, password : string){
        setLoading(true)
        try{
            const res = await axios.post('http://183.98.69.129/auth/members/signin', {
                memberId: id,
                password: password
            })
            if(res.status === 200){
                alert('로그인성공')
                console.log(res.data)
            }
        }catch(error){
            throw error
        }finally{
            setLoading(false)
        }
    }

    return(
        <div style={ loading ? { backgroundColor: 'rgba(0, 0, 0, 0.5)', opacity: 0 } : {}}>
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
            <button onClick={() => handleLogin(id, pw)}>로그인</button>
        </div>
    )
}

export default Login