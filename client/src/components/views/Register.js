import React, { useState,useEffect} from "react";
// import GoogleLogin from "react-google-login";
// // import ReactDOM from 'react-dom';
// import FacebookLogin from 'react-facebook-login';
import "../styles/register.scss"
import { Link ,useNavigate} from 'react-router-dom';
import * as actions from '../../store/actions'
import {useDispatch,useSelector} from 'react-redux'


export default function Register(){

    const [agreePoliciesFlag, setAgreePoliciesFelag]= useState(false)
    const [alert,setAlert]=useState('')

    const [updatePassFlag, setUpdatePassFlag]=useState(false)

    /*
        Send user_name, full_name, email, phone, birth, password
    */
    const [registerPayload, setRegisterPayload]= useState({
        // username: "",
        email: "",
        name: "", //full name
        phone:"",
        birth: "",
        password:"",
        retypePassword:""
    })

    const [invalidFields, setInvalidFields] = useState([])

    const dispatch=useDispatch()
    
    const handleSubmit = async() => {
        // console.log(registerPayload)
        // setUpdatePassFlag(true)
        let invalids = validate(registerPayload)
        if (invalids === 0) {
            const { retypePassword, ...attributes } = registerPayload;
            dispatch(actions.register(attributes))
        }
        
    };
    const {isLoggedIn}= useSelector(state=>state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        isLoggedIn && navigate('/')
    }, [isLoggedIn])

    const printAlert=()=>{
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const normalCharacter= /[qwertyuioplkjhgfdsazxcvbnm]/
        const upcaseCharacter= /[QWERTYUIOPLKJHGFDSAZXCVBNM]/
        const number=/[1234567890]/
        // handleUpdatePassFlag();
        if(registerPayload.password!==""||registerPayload.retypePassword!==""){
            if(updatePassFlag){
                setUpdatePassFlag(false)
                
            }
        }
        
        if(updatePassFlag){

            //console.log("tempNewPass in printAlert()/if",tempNewPass.newPassword,tempNewPass.retypePassword)
            if(registerPayload.password.split(" ").length>1||
                specialChars.test(registerPayload.password)||
                !normalCharacter.test(registerPayload.password)||
                !upcaseCharacter.test(registerPayload.password||
                !number.test(registerPayload.password))
            ){
                setAlert("Mật khẩu không hợp lệ")
            }

            if(registerPayload.password.length<8){
                setAlert("Mật khẩu chưa đủ 8 ký tự")
            }

            if(registerPayload.password!==registerPayload.retypePassword){
                //console.log(tempNewPass.newPassword)
                setAlert("Nhập lại mật khẩu không chính xác. Vui lòng nhập lại")
            }
        
        }
        return(
            <p className="alert">{alert}</p>
        )
    }

    const validate = (payload) => {

        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const normalCharacter= /[qwertyuioplkjhgfdsazxcvbnm]/
        const upcaseCharacter= /[QWERTYUIOPLKJHGFDSAZXCVBNM]/
        const number=/[1234567890]/

        let invalids = 0
        let fields = Object.entries(payload)
        // console.log(fields)
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    message: 'Bạn không được bỏ trống trường này.'
                }])
                invalids++
            }
        })
        fields.forEach((item,index) => {
            switch (item[0]) {
                    
                case 'password':
                    if (item[1].length < 8) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Mật khẩu phải có tối thiểu 8 kí tự.'
                        }])
                        invalids++
                    }

                    if (item[1].split(" ").length>1||
                        specialChars.test(item[1])||
                        !normalCharacter.test(item[1])||
                        !upcaseCharacter.test(item[1])||
                        !number.test(item[1])
                    ) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Mật khẩu không hợp lệ.'
                        }])
                        invalids++
                    }

                    if(item[1] !== fields[index+1][1]){
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Nhập lại mật khẩu không trùng khớp.'
                        }])
                        invalids++
                    }
                    break;
                
                case 'phone':
                    // console.log(+item[1]===NaN)
                    if (!+item[1]||
                        item[1][0]!=='0'||
                        item[1].length!==10
                    ) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Số điện thoại không hợp lệ.'
                        }])
                        invalids++
                    }
                    break

                default:
                    break;
            }
        })
        return invalids
    }


    // console.log(agreePoliciesFlag)
    return (
        <div className="main">

            <div className="main-register">
                <h1>Chào mừng bạn đến với Shop ảnh nổi 3D Lenticular!</h1>
                <div className="register-form">
                    <label>
                        Họ và tên:
                        <input 
                            type="text" 
                            placeholder="Nguyễn Văn A" 
                            name="fullName" required
                            value={registerPayload.name}
                            onChange={(event)=>setRegisterPayload(prev=>({...prev,['name']:event.target.value}))}
                            onFocus={() => setInvalidFields([])}
                        />
                        {invalidFields.length > 0 && invalidFields.some(i => i.name === "name") && <small className='input-error' >{invalidFields.find(i => i.name === 'name')?.message}</small>}
                    </label>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            placeholder="example@gmail.com" 
                            name="email" required
                            value={registerPayload.email}
                            onChange={(event)=>setRegisterPayload(prev=>({...prev,['email']:event.target.value}))}
                            onFocus={() => setInvalidFields([])}
                        />
                        {invalidFields.length > 0 && invalidFields.some(i => i.name === "email") && <small className='input-error' >{invalidFields.find(i => i.name === 'email')?.message}</small>}
                    </label>
                    <label>
                        Số điện thoại:
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            placeholder="0..." required
                            value={registerPayload.phone}
                            onChange={(event)=>setRegisterPayload(prev=>({...prev,['phone']:event.target.value}))}
                            onFocus={() => setInvalidFields([])}
                        />
                        {invalidFields.length > 0 && invalidFields.some(i => i.name === "phone") && <small className='input-error' >{invalidFields.find(i => i.name === 'phone')?.message}</small>}
                    </label>
                    <label>
                        Ngày sinh:
                        <input 
                            type="date" 
                            name="birthday" 
                            required
                            value={registerPayload.birth}
                            onChange={(event)=>setRegisterPayload(prev=>({...prev,['birth']:event.target.value}))}
                            onFocus={() => setInvalidFields([])}
                        />
                        {invalidFields.length > 0 && invalidFields.some(i => i.name === "birth") && <small className='input-error' >{invalidFields.find(i => i.name === 'birth')?.message}</small>}
                    </label>
                    <label className='password-input'>
                        Mật khẩu:
                        <input 
                            type="password" 
                            name="password" 
                            value={registerPayload.password}
                            onChange={(event)=>setRegisterPayload(prev=>({...prev,['password']:event.target.value}))}
                            onFocus={() => setInvalidFields([])}
                            required/>
                        {invalidFields.length > 0 && invalidFields.some(i => i.name === "password") && <small className='input-error' >{invalidFields.find(i => i.name === 'password')?.message}</small>}
                        <p className="password-notice">
                            Vui lòng đặt mật khẩu ít nhất có 8 ký tự bao gồm ít 
                            nhất một chữ viết hoa, một chữ thường và một chữ số. Mật khẩu cũng không gồm ký tự đặc biệt, không có khoảng trắng
                            và không có dấu.
                        </p>
                        
                        {printAlert()}
                    </label>
                    <label>
                        Nhập lại mật khẩu:
                        <input 
                            type="password" 
                            name="repassword" 
                            value={registerPayload.retypePassword}
                            onChange={(event)=>setRegisterPayload(prev=>({...prev,['retypePassword']:event.target.value}))}
                            onFocus={() => setInvalidFields([])}
                            required/>
                        {invalidFields.length > 0 && invalidFields.some(i => i.name === "retypePassword") && <small className='input-error' >{invalidFields.find(i => i.name === 'retypePassword')?.message}</small>}
                    </label>
                    <div className='agree-policies' onClick={()=>setAgreePoliciesFelag(!agreePoliciesFlag)}>

                        <input type="checkbox" name="agreePolicies" checked={agreePoliciesFlag} required/>
                        <label htmlFor='arragreePolicies'>
                            Tôi đồng ý với tất cả điều khoản trong <i><Link to="./home">chính sách</Link></i> của Shop
                        </label>
                    </div>

                    <button 
                        // type="submit"
                        onClick={handleSubmit} 
                        style={!agreePoliciesFlag?{pointerEvents:"none"}:{}}
                        className="login-btn">Đăng ký
                    </button>
                </div>

            </div>
        </div>
    )
}
