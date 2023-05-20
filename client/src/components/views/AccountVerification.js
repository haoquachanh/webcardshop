import React, { useState, useRef, useEffect } from 'react'
import "../styles/accountVerification.scss"

function AccountVerification(){

    const [verificationCode,setVerificationCode]=useState("")

    const [remainingTime, setRemainingTime] = useState(120); // in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [remainingTime]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds - minutes * 60;
    return `${minutes} phút ${seconds < 10 ? '0' : ''}${seconds} giây`;
  };

  const handleResetClick = () => {
    setRemainingTime(120);
  };
  console.log(verificationCode)
    return(
        <div className="main-content-av">
            <p>Hệ thống đã gửi cho bạn một mã xác minh gồm 6 chữ số vào email của bạn. Bạn vui lòng nhập vào ô bên dưới trước khi mã sô hết hạn.</p>
            <p className='remain-time-code'>Mã xác minh sẽ hết hiệu lực sau:
              <p> {formatTime(remainingTime)} </p>
            </p>
            <div className='verify-zone'>
                
                <input 
                    type='text' 
                    className="code-input" 
                    name='verifyCode'
                    value={verificationCode}
                    onChange={(e) =>
                        setVerificationCode(e.target.value)
                    }
                />
                <div className='verify-acc-btns'>
                  
                  <button   
                      className='verify-btn'
                      disabled={verificationCode.length<6||verificationCode.length>6?true:false}
                  >Xác minh</button>
                  <button className='resend-code-btn' onClick={handleResetClick}>Gửi lại</button>
                </div>
            </div>
        </div>
    )
}export default AccountVerification