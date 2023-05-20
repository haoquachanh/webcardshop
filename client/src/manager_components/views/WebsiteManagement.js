import React, {useState} from "react";
import { imgs } from "../models/FakeData";
import './styles/websiteManagement.scss'
import { policiesAndPromotions,contactsFake } from "../models/FakeData";

/**import icon */
import {RiFacebookCircleFill,RiInstagramFill,RiYoutubeFill} from "react-icons/ri"
import {BsTwitter,BsPinterest} from "react-icons/bs"
import {FaTiktok,FaPhoneAlt} from "react-icons/fa"
import {IoMail} from "react-icons/io5"
import {SiZalo} from "react-icons/si"

const iconContact={
    RiFacebookCircleFill:RiFacebookCircleFill,
    RiInstagramFill:RiInstagramFill,
    RiYoutubeFill:RiYoutubeFill,
    BsTwitter:BsTwitter,
    BsPinterest:BsPinterest,
    FaTiktok:FaTiktok,
    FaPhoneAlt:FaPhoneAlt,
    IoMail:IoMail,
    SiZalo:SiZalo,
}

function WebsiteManagement(){

    /**For change img in slider mainpage */
    const [sliderElement,setSliderElement]=useState(imgs.slider)
    
    const handleChangeSliderElement = (event,index) => {//Change Image in slider

        const tempSlider=[...sliderElement]
        if (event.target.files && event.target.files[0]) {
            tempSlider[index]=(URL.createObjectURL(event.target.files[0]));
            setSliderElement(tempSlider)
        }
        
    }

    const handleDeleteSliderElement=(index)=>{ //Delete Image in Slider
        const tempSlider=[...sliderElement]
        tempSlider.splice(index,1);
        setSliderElement(tempSlider)
    }

    const handleAddSliderEmlement=(event)=>{ //Add more slider Image
        const tempSlider=[...sliderElement]
        if (event.target.files && event.target.files[0]) {
            tempSlider.unshift(URL.createObjectURL(event.target.files[0]));
            setSliderElement(tempSlider)
        }
    }

    /**For change logo */
    const [logo, setLogo] = useState(imgs.logo[0])

    const handleChangeLogo = (event) => {
        if (event.target.files && event.target.files[0]) {
            setLogo(URL.createObjectURL(event.target.files[0]));
        }
    }

    /**For chang Policy */
    const [policies,setPolicies]= useState(policiesAndPromotions)

    const handleChangePolicies=(event,index)=>{
        const tempPolicies= [...policies];
        tempPolicies[index]=event.target.value;
        setPolicies(tempPolicies)
    }
    // console.log(policies);

    const handleAddNewPolicies=(event)=>{
        const tempPolicies= [...policies];
        tempPolicies.push(event.target.value);
        setPolicies(tempPolicies)
    }

    const handleSavePolicies=()=>{
        const tempPolicies=policies.filter(policy=>policy!=="")
        setPolicies(tempPolicies)
    }

    /**For change contact */
    const [contact,setContact]=useState(contactsFake)

    const handleSetContact=(event,index)=>{
        const tempContact=[...contact]
        tempContact[index].link=event.target.value;
        setContact(tempContact)
    }

    console.log(contact);

    return(
        <div className="website-management-container">
            <div className="img-management">
                <div className="slider-mainpage">
                    <div className="title">
                        Slide trang chủ
                    </div>

                    <div className="website-table-container">
                        <div className="column-titles">
                            <div id="stt">
                                <p>STT</p>
                            </div>
                            <div id="img-display">
                                <p>Hình ảnh</p>
                            </div>
                            <div id="operations">
                                <p>Thao tác</p>
                            </div>
                        </div>

                        <div className="row-data-container">
                            {
                                sliderElement.map((img,index)=>{
                                    return(
                                        <div className="row-data">
                                            <div id="stt">
                                                <p>{index+1}</p>
                                            </div>
                                            <div id="img-display">
                                                <img src={img} alt={img}/>
                                            </div>
                                            <div id="operations">
                                                <label className="change-slider-element" htmlFor="slider-element-input">Thay thế</label>
                                                <input 
                                                    type="file" 
                                                    id="slider-element-input" name="slider-element-input"
                                                    onChange={(event)=>handleChangeSliderElement(event,index)} 
                                                    accept="image/png, image/jpeg"/>

                                                <button className="delete-img" onClick={()=>handleDeleteSliderElement(index)}>
                                                    Xóa
                                                </button>
                                            </div>
                                        
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>

                    <label className="add-slider-element" htmlFor="add-slider-element-input">Thêm ảnh</label>
                    <input 
                        type="file" 
                        id="add-slider-element-input" name="add-slider-element-input"
                        onChange={handleAddSliderEmlement} 
                        accept="image/png, image/jpeg"/>

                </div>

            </div>

            <div className="logo-management">
                <div className="title">
                    Logo
                </div>
                <div className="logo-content">

                    <div className="logo-container">
                        <img src={logo} alt={logo}/>
                    </div>
                    <div className="replace-logo">
                        <label className="upload-logo" htmlFor="logo-input">Chọn Logo từ máy</label>
                        <input 
                            type="file" 
                            id="logo-input" name="logo-input"
                            onChange={handleChangeLogo} 
                            accept="image/png, image/jpeg"/>
                        <button className="replace-logo-btn">
                            Lưu thay đổi
                        </button>
                    </div>
                </div>
            </div>

            <div className="color-management">
                <div className="title">
                    Màu sắc
                </div>
                <div className="color-picker-zone">
                    <div className="color-element">
                        <input type="color" id="head" name="head" value="#e66465"/>
                        <label for="head">Head</label>
                    </div>

                </div>
                <button className="save-color-btn">
                    Lưu thay đổi
                </button>
            </div>

            <div className="policies-management">
                <div className="title">
                    Chín sách và khuyến mãi
                </div>
                <div className="policies-container">
                    {
                        policies.map((policy,index)=>{
                            return(

                                <input 
                                    type="text" 
                                    className="policy"
                                    value={policy}
                                    onChange={(e)=>handleChangePolicies(e,index)}
                                />
                            )
                        })
                    }

                    
                </div>
                <div className="policy-btns">

                    <button className="add-policy-btn" onClick={(e)=>handleAddNewPolicies(e)}>
                        Thêm chính sách
                    </button>
                    <button className="save-policies-btn" onClick={handleSavePolicies}>
                        Lưu thay đổi
                    </button>
                </div>
            </div>

            <div className="contact-management">
                <div className="title">
                    Fanpage và liên hệ
                </div>

                <div className="contact-element">
                    {
                        contact.map((item,index)=>{
                            const IconContact = iconContact[item.icon];
                            return(

                                <div className="contact">
                                    <div className="contact-icon">
                                        <IconContact/>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="contact-content"
                                        value={item.link}
                                        onChange={(e)=>handleSetContact(e,index)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="contact-btns">
                    <button className="save-contact-btn">
                        Lưu thay đổi
                    </button>

                </div>
            </div>
        </div>
    )
}export default WebsiteManagement