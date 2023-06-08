import React,{useState} from "react";
import { Link } from "react-router-dom";
import './component_styles/renderPasswordChanging.scss'


export default function RenderPasswordChanging() {
    const [newPass, setNewPass] = useState({
        currentPassword: "",
        newPassword: "",
        retypePassword: ""
    })

    const [tempNewPass, setTempNewPass] = useState({
        currentPassword: "",
        newPassword: "",
        retypePassword: ""
    })

    const [updatePassFlag, setUpdatePassFlag] = useState(false)

    let alert = ""
    const handleUpdatePassFlag = () => {
        setTempNewPass({ ...tempNewPass, ...newPass });
        setUpdatePassFlag(true)
        autoClearNewPass();
    }

    const autoClearNewPass = () => {
        setNewPass({
            currentPassword: "",
            newPassword: "",
            retypePassword: ""
        })
    }

    const printAlert = () => {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const normalCharacter = /[qwertyuioplkjhgfdsazxcvbnm]/
        const upcaseCharacter = /[QWERTYUIOPLKJHGFDSAZXCVBNM]/
        const number = /[1234567890]/
        // handleUpdatePassFlag();
        if (newPass.currentPassword !== "" || newPass.newPassword !== "" || newPass.retypePassword !== "") {
            if (updatePassFlag) {
                setUpdatePassFlag(false)

            }
        }

        if (updatePassFlag) {

            //console.log("tempNewPass in printAlert()/if",tempNewPass.newPassword,tempNewPass.retypePassword)
            if (tempNewPass.newPassword.split(" ").length > 1 ||
                specialChars.test(tempNewPass.newPassword) ||
                !normalCharacter.test(tempNewPass.newPassword) ||
                !upcaseCharacter.test(tempNewPass.newPassword) ||
                !number.test(tempNewPass.newPassword)
            ) {
                alert = "Mật khẩu không hợp lệ"
            }

            if (tempNewPass.newPassword.length < 8) {
                alert = "Mật khẩu chưa đủ 8 ký tự"
            }

            if (tempNewPass.newPassword !== tempNewPass.retypePassword) {
                //console.log(tempNewPass.newPassword)
                alert = "Nhập lại mật khẩu không chính xác. Vui lòng nhập lại"
            }
        }

        return (
            <p className="alert">{alert}</p>
        )
    }

    return (
        <div className="password">
            <div className="title">
                <p>Thay đổi mật khẩu</p>
            </div>
            <p className="password-notice">
                Vui lòng đặt mật khẩu ít nhất có 8 ký tự bao gồm ít
                nhất một chữ viết hoa, một chữ thường và một chữ số. Mật khẩu cũng không gồm ký tự đặc biệt, không có khoảng trắng
                và không có dấu.
            </p>
            <div className="change-password-form">
                <div className="pass-input-box">
                    <label htmlFor="current-pass-input">Mật khẩu hiện tại:
                    </label>
                    <input
                        type="password"
                        className="current-pass-input"
                        name="current-pass-input"
                        // placeholder={addressList[index].name}
                        value={newPass.currentPassword}
                        onChange={(e) =>
                            setNewPass({ ...newPass, currentPassword: e.target.value })
                        }
                    />
                </div>

                <div className="pass-input-box">
                    <label htmlFor="new-pass-input">Mật khẩu mới:</label>
                    <input
                        type="password"
                        className="new-pass-input"
                        name="new-pass-input"
                        // placeholder={addressList[index].name}
                        value={newPass.newPassword}
                        onChange={(e) =>
                            setNewPass({ ...newPass, newPassword: e.target.value })
                        }
                    />
                </div>

                <div className="pass-input-box">
                    <label htmlFor="retype-pass-input">Nhập lại mật khẩu:</label>
                    <input
                        type="password"
                        className="retype-pass-input"
                        name="retype-pass-input"
                        // placeholder={addressList[index].name}
                        value={newPass.retypePassword}
                        onChange={(e) =>
                            setNewPass({ ...newPass, retypePassword: e.target.value })
                        }
                    />
                </div>
                <div className="bottom-bar">
                    <div className="alert-box">
                        {printAlert()}
                    </div>
                    <div className="update-n-forget-pass-btn">
                        <button
                            className="update-pass-btn"
                            onClick={handleUpdatePassFlag}
                            disabled={newPass.currentPassword === "" || newPass.newPassword === "" || newPass.retypePassword === ""}
                            style={newPass.currentPassword === "" || newPass.newPassword === "" || newPass.retypePassword === "" ? { pointerEvents: "none" } : {}}
                        >
                            Thay đổi mật khẩu
                        </button>
                        <Link className="forget-pass-btn" to="./forgetPass">
                            Quên mật khẩu?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}