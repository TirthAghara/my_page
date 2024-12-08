import React, { useState } from 'react'
import './login.css'

const Login = () => {
    const [data, setData] = useState(localStorage.getItem("data"))
    return (
        <>
            <div className="m">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                    <div className="input-container ic1">
                        <input id="firstname" className="input" type="text" value={data} onChange={(x)=>{setData(x.target.value)}}/>
                        <div className="cut"></div>
                        <label  className="placeholder">First name</label>
                    </div>

                    {/* <div className="input-container ic2">
                        <input id="lastname" className="input" type="text" value={data.password} onChange={(x)=>{
                            setData({...data,password:x.target.value})
                        }}/>
                        <div className="cut"></div>
                        <label className="placeholder">Password</label>
                    </div> */}
                <button type="text" className="submit" onClick={()=>{
                    localStorage.setItem("data",data);
                }}
                >submit</button>
            </div>
        </>
    )
}

export default Login