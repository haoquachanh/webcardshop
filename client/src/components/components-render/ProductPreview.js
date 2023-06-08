import React, {useState, useRef} from "react"
import {BsFillPlayCircleFill} from 'react-icons/bs'
import {TbSquareRoundedChevronLeftFilled,TbSquareRoundedChevronRightFilled} from 'react-icons/tb'
import {IoCloseSharp} from 'react-icons/io5'
import 'reactjs-popup'
import Popup from "reactjs-popup"
import '../components-render/component_styles/popup.scss'

const contact_infor=[
    {
        phone:"093 761 7695",
    },
    {
        phone:"096 533 7436",
    }
]

export default function ProductPreview ({product_preview}){

    const thumbBarRef = useRef(null); // make the thumb-item-active into the overflow range

    //from line 10 to 50: Make crolling thumbnail bar
    const [showIndex,SetShowIndex]= useState(0)

    const handleSetShowindex=(index)=>{
        // console.log(showIndex);
        SetShowIndex(index)
    }
    const handleIncShowindex=()=>{
        let temp=showIndex+1
        
        handleSetShowindex(temp)
        if(temp>product_preview?.length-1){
            SetShowIndex(0)
            temp=0;
        }  

        const thumbItems = thumbBarRef.current.getElementsByClassName('thumb-item');
        if (thumbItems[temp]) {
          thumbItems[temp].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        }
    }

    const handleDecShowindex=()=>{
        let temp=showIndex-1
        SetShowIndex(temp)
        if(temp<0){
            SetShowIndex(product_preview.length-1)
            temp=product_preview?.length-1
        }  
        // console.log('temp:',temp);
        const thumbItems = thumbBarRef.current.getElementsByClassName('thumb-item');
        if (thumbItems[temp-1]) {
          thumbItems[temp-1].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        }
    }
    // console.log(product_preview)

    const renderProductPreview=()=>{
        return(

            <Popup  className="fullscreen-preview" trigger=
                {
                    showIndex===0?
                        <div className="product-preview-container">
                            {/* <iframe className='show' src={`https://www.youtube.com/embed/${product_preview?.[0]}?autoplay=1&mute=1`}>
                            </iframe>     */}
                            <iframe

                                className='video-show' src={`https://www.youtube.com/embed/1Xfdjqa5dfY?autoplay=1&mute=1`} title="video">
                            </iframe>
        
                        </div>
                        :
                        <div className="product-preview-container">
                            
                            <img className='show' src={product_preview?.[showIndex]} alt="product-img"/>
                        </div>


                }
                modal nested>
                {
                    close => (
                        <div className='fullscreen-preview-modal'>
                            <div className="preview-btns">
                                <button className="fullscreen-off-btn" onClick=
                                    {() => close()}>
                                        <IoCloseSharp/>
                                </button>
                            </div>
                            <div className='content'>
                                <div className="product-show-fullscreen">
                                    {
                                        showIndex===0?
                                        <div className="product-preview-container">
                                            {/* <iframe className='show' src={`https://www.youtube.com/embed/${product_preview?.[0]}?autoplay=1&mute=1`}>
                                            </iframe>     */}
                                            <iframe
                                                className='video-show' src={`https://www.youtube.com/embed/1Xfdjqa5dfY?autoplay=1&mute=1`} title="video">
                                            </iframe>
                        
                                        </div>
                                        :
                                        <div className="product-preview-container">
                                            
                                            <img className='show' src={product_preview?.[showIndex]} alt="product-img"/>
                                        </div>
                                    }
                                </div>
                                <div className='product-thumb-bar-fullscreen'>
                                    <button className="switch-btn" onClick={handleDecShowindex}>
                                        <TbSquareRoundedChevronLeftFilled/>
                                    </button>
                                    <div className="product-thumb-bar-content" ref={thumbBarRef}>

                                        <div className='product-thumb-container'>

                                            {product_preview?.map((thumb_src,index)=>{
                                                return(
                                                    <div className={showIndex===index?'thumb-item-active':'thumb-item'} onClick={()=>handleSetShowindex(index)}>
                                                        <img className='thumb' src={thumb_src} alt='thumbail-item' />
                                                        {
                                                            index===0&&
                                                                <div className="play-video">
                                                                <BsFillPlayCircleFill/>
                                                                </div>
                                                        }
                                                    
                                                    </div>  
                                                    
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <button className="switch-btn" onClick={handleIncShowindex}>
                                        <TbSquareRoundedChevronRightFilled/>
                                    </button>

                                    </div>  
                                </div>
                        </div>
                    )
                }
            </Popup>    
        )

    }

    return(
        <div className='product-images'>

          <div className='product-show'>

            {renderProductPreview()}
          </div>
        <div className="contact-infor">


            <p className="title">Tư vấn đặt hàng:</p>
            <div className="contact-infor-item">
                <p className="value">{contact_infor[0].phone} hoặc {contact_infor[1].phone} (Zalo)</p>
            </div>

   

        </div>
        <div className='product-thumb-bar'>
        <button className="switch-btn" onClick={handleDecShowindex}>
            <TbSquareRoundedChevronLeftFilled/>
        </button>
        <div className="product-thumb-bar-content" ref={thumbBarRef}>

            <div className='product-thumb-container'>

                {product_preview?.map((thumb_src,index)=>{
                    return(
                        <div className={showIndex===index?'thumb-item-active':'thumb-item'} onClick={()=>handleSetShowindex(index)}>
                            <img className='thumb' src={thumb_src} alt='thumbail-item' />
                            {
                                index===0&&
                                    <div className="play-video">
                                    <BsFillPlayCircleFill/>
                                    </div>
                            }
                        
                        </div>  
                        
                    )
                })}
            </div>
        </div>
        <button className="switch-btn" onClick={handleIncShowindex}>
            <TbSquareRoundedChevronRightFilled/>
        </button>

        </div>   

      </div>
    )
}