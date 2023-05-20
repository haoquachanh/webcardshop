// import React, {useEffect, useState} from "react";
// import GoogleLogin from "react-google-login";
// // import ReactDOM from 'react-dom';
// import FacebookLogin from 'react-facebook-login';
// import React, {useState} from 'react';
import {FaFacebook,FaGoogle} from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
// import { apiLogin} from '../../services/auth';
import "../styles/loginform.scss"
import { useState,useEffect} from 'react';
import * as actions from '../../store/actions'
import {useDispatch,useSelector} from 'react-redux'
import Swal from 'sweetalert2'

export default function Login(){

    const [payload,setPayload]=useState({
        email:"",
        password:"",
    })

    const dispatch =useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn,msg,update} = useSelector(state => state.auth)
    // const authMsg = useSelector((state) => state.auth.msg);
    const [invalidFields, setInvalidFields] = useState([])

    useEffect(() => {
        isLoggedIn && navigate('/')
    }, [isLoggedIn])
 
    useEffect(() => {
        let invalids = validate(payload)
        if (invalids === 0) {
            msg && Swal.fire('Oops !', msg, 'error')
        }
    }, [msg,update])

    const handleSubmit = async()=>{
        // console.log(payload)
        let invalids = validate(payload)
        if (invalids === 0) {
            await dispatch(actions.login(payload));
        }
    }

    const validate = (payload) => {
        let invalids = 0
        let fields = Object.entries(payload)
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    message: 'Bạn không được bỏ trống trường này.'
                }])
                invalids++
            }
        })

        return invalids
    }

    return (
        <div className="main-login">
            <p className='welcome-text'>
                Chào mừng bạn đến với Shop ảnh nổi 3D Lenticular!
            </p>
            <div className='login-container'>

                <div className='login-input-container'>
                    
                    <div className='get-input'>
                        <span>Email: </span>
                        <input 
                            type="text" value={payload.email} 
                            placeholder={invalidFields.length > 0 && invalidFields.some(i => i.name === "email") ?invalidFields.find(i => i.name === 'email')?.message:"Điền vào đây..."} 
                            onChange={(event) => setPayload(prev=>({...prev,['email']:event.target.value}))}
                            // onFocus={() => setInvalidFields([])}
                        />
                    </div>

                    <div className='get-input'>
                        <span>Mật khẩu: </span>
                        <input 
                            type="password" value={payload.password} 
                            placeholder={invalidFields.length > 0 && invalidFields.some(i => i.name === "password") ?invalidFields.find(i => i.name === 'password')?.message:"Điền vào đây..."}
                            onChange={(event) => setPayload(prev=>({...prev,['password']:event.target.value}))} />
                    </div>
                </div>
                <div className='login-btns'>

                    <button className="login-btn" onClick={handleSubmit}>Đăng nhập</button>
                    <p className='other-login-method'>
                        <i>Hoặc đăng nhập bằng:</i>
                    </p>
                    <div className='other-way-login-btn'>
                        <button className='fb'><FaFacebook/> Facebook</button>
                        <button className='gg'><FaGoogle/> Google</button>
                    </div>
                </div>
                <div className='register-container'>

                    {/* <Link className='reset-password' to='resetPassword'>Quên mật khẩu</Link> */}
                    <div className='register-hint'>
                        <p className='no-account-text'>Nếu bạn chưa có tài khoản thì nhấn vào đây:</p> 
                        <Link className='sign-up' to='../register'>
                            <button>

                                Đăng ký 
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

