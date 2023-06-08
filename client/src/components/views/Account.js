import React, { useState,useEffect } from "react";
import '../styles/config/content.scss'
import '../styles/account.scss'
import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom';

import RenderUserProfile from "../RenderUserProfile";
import RenderPasswordChanging from "../components-render/RenderPasswordChanging";


function Account() {
    // const {currentData}= useSelector(state=>state.user)

    const [ userState,setUserState] = useState()

    const currentURL = window.location.href;
    const user_id = currentURL.match(/userId=(\d+)/)[1];
    useEffect(() => {
      fetch(`http://localhost:3001/api/v1/user/get?userId=${user_id}`)
        .then(response => response.json())
        .then(data => setUserState(data.userData))
        .catch(error => console.error(error));
    }, []);
    // const dispatch = useDispatch()
    return (

        <div className="main">
            <div className="account-content">

                <div className="title-account">
                    <p>THÔNG TIN TÀI KHOẢN CỦA BẠN</p>
                    <hr></hr>
                </div>
                <RenderUserProfile userInfor={userState} setUserState={setUserState}/>
                <RenderPasswordChanging/>

            </div>
        </div>

    )
}

export default Account;