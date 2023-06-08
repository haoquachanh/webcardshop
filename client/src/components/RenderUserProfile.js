import React, {useState} from "react";
import './components-render/component_styles/renderUserProfile.scss'

export default function RenderUserProfile({userInfor, setUserState}){
    const [isEditable1, setIsEditable1] = useState(false)
    const [isEditable2, setIsEditable2] = useState(false)
    const [isEditable3, setIsEditable3] = useState(false)

    const handleUpdateAccInfor = async() => {
        // console.log(registerPayload)
        // setUpdatePassFlag(true)
        console.log(userInfor);
        
    };


    //Change avatar
    const [avatarImg, setAvatar] =useState("https://via.placeholder.com/150x150")
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
        
            img.onload = () => {
                if (file.size > 500000) { // limit to 500KB
                alert("File size is too large!");
                } else {
                setAvatar(event.target.result);
                }
            };
            };
        
            reader.readAsDataURL(file);
    };    

    return(
        <div className="my-profile">
        <div className="title">
            <p>Thông tin của tôi</p>
        </div>
        <div className="avt">
            <div className="show-avatar-box">

                <img className="show-avatar" src={avatarImg} alt='avatar'/>
            </div>
            <div className="upload-new-avt">
                <div className="upload-btn">
                    <label className="select-new-avt" htmlFor="avatar-uploads">Chọn ảnh mới</label>
                    <p className="img-size-limit">Ảnh chỉ được tối đa 500KB</p>
                
                </div>
                <input
                    type="file"
                    id="avatar-uploads"
                    name="avatar-uploads"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleImageChange}
                />
            </div>
        
        </div>
        <div className="detail-infor">

            <div className="line">
                <p className="name">Họ tên:</p>
                {isEditable1 ?
                    <span className="infoandbutton">
                        <input className="data" defaultValue={userInfor?.fullname} onChange={(e) => { setUserState({ ...userInfor, name: e.target.value }) }} />
                        <button onClick={() => { setIsEditable1(!isEditable1); }}>Lưu</button>
                    </span>
                    :
                    <span className="infoandbutton">
                        {/* <p className="data">{userInfor.name}</p> */}
                        <p className="data">{userInfor?.fullname}</p>
                        <button onClick={() => { setIsEditable1(!isEditable1) }}>Thay đổi</button>
                    </span>
                }
            </div>

            <div className="line">
                <p className="name">Email:</p>
                {isEditable2 ?
                    <span className="infoandbutton">
                        <input className="data" defaultValue={userInfor?.email} onChange={(e) => { setUserState({ ...userInfor, email: e.target.value }) }} />
                        <button onClick={() => { setIsEditable2(!isEditable2) }}>Lưu</button>
                    </span>
                    :
                    <span className="infoandbutton">
                        <p className="data">{userInfor?.email}</p>
                        <button onClick={() => { setIsEditable2(!isEditable2) }}>Thay đổi</button>
                    </span>
                }
            </div>
            <div className="line">
                <p className="name">Sđt:</p>
                {isEditable3 ?
                    <span className="infoandbutton">
                        <input className="data" defaultValue={userInfor?.phone} onChange={(e) => { setUserState({ ...userInfor, phone: e.target.value }) }} />
                        <button onClick={() => { setIsEditable3(!isEditable3) }}>Lưu</button>
                    </span>
                    :
                    <span className="infoandbutton">
                        <p className="data">{userInfor?.phone}</p>
                        <button onClick={() => { setIsEditable3(!isEditable3) }}>Thay đổi</button>
                    </span>
                }
            </div>
                
            <div className="submit-user">
                <button onClick={handleUpdateAccInfor}>Cập nhật</button>
            </div>



        </div>
    </div>
    )
}