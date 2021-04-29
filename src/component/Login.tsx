import * as React from 'react'
import { useState, useEffect } from 'react'

function Login(){
    const [id, setId] = useState<string>('')
    const [pw, setPw] = useState<string>('')

    useEffect(() => {
    },[])

    return(
        <>
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
            <button>로그인</button>
        </>
    )
}

export default Login