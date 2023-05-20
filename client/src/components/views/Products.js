import React, {useState,useEffect,useCallback}  from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import '../styles/config/content.scss'
import '../styles/product.scss';
import Dropzone from 'react-dropzone'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions'

//import icon
import {BsFileXFill,BsBookmarkHeart,BsBookmarkHeartFill,BsEyeFill} from 'react-icons/bs';
import {RiZoomInLine,RiZoomOutLine} from 'react-icons/ri';
import {TbResize, TbFlipVertical, TbFlipHorizontal} from 'react-icons/tb';
import {MdRotate90DegreesCw} from 'react-icons/md';
import {FaRegHandPaper,FaListAlt,FaTrashAlt} from 'react-icons/fa'
import {IoIosArrowForward} from 'react-icons/io';
import {AiOutlineCheckCircle,AiFillCheckCircle} from 'react-icons/ai'

/**
 * Product information 
 */
const productId=["Cardbogoc","PostCard","Photostrip","Photobook","Frames","NoteBook","Sticker","Poster"]

const PRODUCT_INFOR={
  Cardbogoc:{  
    name:"Card bo góc",
    material:[
      ["Card Giấy C300", "bóng", "mờ", "Hologram", "kim tuyến"],
      ["Card Cứng 4k", "bóng", "lụa", "Hologram", "kim tuyến"],
      ["Card Nhựa PVC", "bóng","nhám", "Hologram", "kim tuyến"],
      ["Card Polar"],
      ["Card Lenti"]
    ],
    size:[
      "13x18cm",
      "20x30cm",
      "30x40cm",
      "40x 60cm",
      "60x90cm"
    ]       
  },
  PostCard:{
    name: "Post Card",
    material:[
      ["Post Card Giấy C300" ,"bóng", "mờ", "Hologram", "kim tuyến"],
      ["Post card Lenti"]
    ],
    size:[
      "13x18cm",
      "20x30cm",
      "30x40cm",
      "40x 60cm",
      "60x90cm"
    ]  
  },
  Photostrip:{
    name: "Photostrip",
    material:[
      ["Photostrip giấy C300" ,"bóng", "mờ", "Hologram", "kim tuyến"],
    ],  
    size:[
      "13x18cm",
      "20x30cm",
      "30x40cm",
      "40x 60cm",
      "60x90cm"
    ]  
  },
  Photobook:{
    name: "Photobook (Sách Ảnh)",
    material:[
      ["Sách ảnh bìa cứng"],
      ["Sách ảnh bìa mềm"]
    ],
    size:[
      "13x18cm",
      "20x30cm",
      "30x40cm",
      "40x 60cm",
      "60x90cm"
    ]     
  },
  Frames:{
    name:"Khung ảnh để bàn vs Treo Tường",
    material:[],
    size:[
      "13x18cm",
      "20x30cm",
      "30x40cm",
      "40x 60cm",
      "60x90cm"
    ]    
  },
  Calenders:{
    name:"Lịch Để bàn",
    material:[],
    size:[
      "13x18cm",
      "20x30cm",
      "30x40cm",
      "40x 60cm",
      "60x90cm"
    ]   
  }, 
  NoteBook:{
    name: "Sổ Tay ,note book (In theo yêu cầu)",
    material:[
      ["Sổ tay"],
      ["Note book"]
    ],
    size:[
      "13x18cm",
      "20x30cm",
      "30x40cm",
      "40x 60cm",
      "60x90cm"
    ]  
  },
  Sticker:{
    name:"Sticker", 
    material:[
     ["Bế Demi","bóng", "mờ", "Hologram", "kim tuyến"],
     ["Cắt rời","bóng", "mờ", "Hologram", "kim tuyến"] 
    ],
    size:[
      "13x18cm",
      "20x30cm",
      "30x40cm",
      "40x 60cm",
      "60x90cm"
    ]    
  },
  Poster:{
    name:"Poster",
    material: [
      ["A3","bóng", "mờ", "kim tuyến"]
      ["A2","bóng", "mờ", "kim tuyến"]
    ],
    size:[
      "13x18cm",
      "20x30cm",
      "30x40cm",
      "40x 60cm",
      "60x90cm"
    ]     
  }
}

/** Upload images from device by clicking button or drag them into area 
 *  This function is called in ClickHereToUpLoadImage
 *  A array name "files" that save image paths
*/

/**  Open a popup that allow upload images from device */
function ClickHereToUpLoadImage({_files,_handleSetFiles}){

  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  }

  const clearSrc =()=>{
    while (files.length!==0) {
      
      files.pop()
    }
  }

  const getfiles=()=>{
    const updatedFiles = files.map((file, index) => {
      if (index===0) {
        return {
          ...file,
          index: index,
          url: URL.createObjectURL(files[index]),
          quantity: 1,
          accessState: false
        }
      } else {
        return {
          ...file,
          index: index,
          url: URL.createObjectURL(files[index]),
          quantity: 1,
          accessState: false
        }
      }

    });
    _files.pop();
    _handleSetFiles([..._files,...updatedFiles]);
  }

  return(
    <div className='uploading-popup'>              
      <Popup trigger=
          {<button className='open-popup-btn'> Chọn ảnh từ máy </button>}
          modal nested>
          {
            close => (
              // <div className='test'>
                <div className='modal'>
                  <div className='modal-header'>
                  {files.length ===0 &&
                    <p className='drag-them-here'>Kéo ảnh vào đây:</p>
                  }

                  {
                    files.length!==0&&
                    <p className='drag-them-here'>Bạn đã tải lên {files.length} ảnh</p>
                  }
                    <div className='modal-btns'>
                      <button className='reselect-btn' onClick=
                        {() => {
                          close();
                          clearSrc();
                        }}>
                        <div className='reselect-text'>
                            Hủy
                        </div>
                        <BsFileXFill className='reselect-icon'/>
                      </button>

                      <button className='confirm-upload-btn' onClick=
                        {() => {
                          close();
                          getfiles();
                        }} disabled={files.length>0?false:true}>
                        <div className='confirm-upload-text' disabled={true}>
                          OK 
                        </div>
                    
                      </button>
                    </div>
                  </div>
                    <div className='upload-img-box'>
                      <div className='drag-and-drop-zone'>
                        {files.length ===0 &&
                          <>
                            {/* <p className='drag-them-here'>Kéo ảnh vào đây:</p> */}
                            <Dropzone onDrop={onDrop}>
                              {({getRootProps, getInputProps}) => (
                                <div className='get-input' {...getRootProps()}>
                                  <input {...getInputProps()} />            
                                  <button className='from-device-btn'>Chọn từ thiết bị</button>
                                </div>
                              )}
                            </Dropzone>
                          </>      
                        }
                        {files.length !==0 &&
                          <>
                            
                            <div className='display-upload-imgs-box'>
                              
                              {files.map((file) => (
                                  <div className="uploaded-imgs" key={file.name}>
                                    <img className='uploaded-img-src' src={URL.createObjectURL(file)} alt={file.name} />
                                    <p className='uploaded-imgs-name'>{file.name}</p>
                                  </div>
                              ))}

                            </div>
                          </>
                        }
                        
                      </div>
                    </div>
                </div>
              // </div>
            )
          }
      </Popup>
    </div>
  );
};

function ImageEditor({_orderData,_productId,_files, _handleUpdateFile, _handleDeleteFiles, _handleDeleteFilesAccessed, _handleSendOrderInfor}){

  const { isLoggedIn} = useSelector(state => state.auth)
  const dispatch= useDispatch()

  const handleSetCart =async()=>{
    dispatch(actions.set_cart(_orderData))
}

  /* Atribute: name, icon, property, value, range(min,max), unit */
  const ICONS = {
    RiZoomOutLine: RiZoomOutLine,
    RiZoomInLine: RiZoomInLine,
    TbResize: TbResize,
    TbFlipVertical: TbFlipVertical,
    TbFlipHorizontal: TbFlipHorizontal,
    MdRotate90DegreesCw: MdRotate90DegreesCw,
    FaRegHandPaper: FaRegHandPaper,
  };

  const DEFAULT_TOOLS=[
    {
      name: "Zoom out",
      icon: "RiZoomOutLine",
      property: "",
      value: 50,
      range:{
        min: 0,
        max: 200,
      },
      unit: "%"
    },

    {
      name: "Zoom in",
      icon: "RiZoomInLine",
      property: "",
      value: 50,
      range:{
        min: 0,
        max: 200,
      },
      unit: "%"
    },

    {
      name: "Resize tool",
      icon: "TbResize",
      property: "",
      value: 50,
      range:{
        min: 0,
        max: 200,
      },
      unit: "%"
    },

    {
      name: "Rotate tool",
      icon: "MdRotate90DegreesCw",
      property: "",
      value: 50,
      range:{
        min: 0,
        max: 200,
      },
      unit: "%"
    },

    {
      name: "Hand tool",
      icon: "FaRegHandPaper",
      property: "",
      value: 50,
      range:{
        min: 0,
        max: 200,
      },
      unit: "%"
    },

    {
      name: "Vertical Flip",
      icon: "TbFlipVertical",
      property: "",
      value: 50,
      range:{
        min: 0,
        max: 200,
      },
      unit: "%"
    },

    {
      name: "Horizontal Flip",
      icon: "TbFlipHorizontal",
      property: "",
      value: 50,
      range:{
        min: 0,
        max: 200,
      },
      unit: "%"
    },
  ];

  const [changedCheck, setChanged]= useState(false)

  const [tools, setTools] = useState(DEFAULT_TOOLS)
  const [imgIndex,setIndex] =useState([
    {
      prev:0,
      current:0
    }
  ]);

  const [checkMultiChoice,setMultiChoice]= useState(false)

  const handleSetMultiChoice=()=>{
    if(checkMultiChoice){
      setMultiChoice(false)
    }else{
      setMultiChoice(true)
    }
  }

  const [quantityTyping,setQuantity]= useState(0)

  const handleSetQuantity = useCallback((quantity)=>{
    setQuantity(quantity);
  }, []);

  useEffect(() => {
    handleSetQuantity(_files[imgIndex[0].current].quantity)
  }, [imgIndex, _files, handleSetQuantity]);

  const prevImgIndex=()=>{
    var temp=imgIndex[0].current;

    const updatedIndex = {
      ...imgIndex[0],
      prev: temp,
      current: temp<1?temp:--temp
    };
    setIndex([updatedIndex]);
    // console.log("current:"+imgIndex[0].current)
    // console.log("previous:"+ imgIndex[0].prev)
    handleSetQuantity(_files[imgIndex[0].current].quantity)
  }

  const nextImgIndex=()=>{
    var temp=imgIndex[0].current;
    const updatedIndex = {
      ...imgIndex[0],
      prev: temp,
      current: imgIndex[0].current>=(_files.length-1)?temp:++temp
    };
    setIndex([updatedIndex]);
    // console.log("current:"+imgIndex[0].current)
    // console.log("previous:"+ imgIndex[0].prev)
  }

  const setCurrentImg=(index, check)=>{
    const updatedIndex = {
      ...imgIndex[0],
      prev: imgIndex[0].current,
      current: index
    };
    setIndex([updatedIndex]);
    // console.log("current:"+imgIndex[0].current)
    // console.log("previous:"+ imgIndex[0].prev)
    if (check===true) {

      // console.log("accessState: "+_files[imgIndex[0].current].accessState===true)
      if (_files[index].accessState===true) {
        _handleUpdateFile(index,'accessState',false)
        // console.log("set True")
      } else {
        _handleUpdateFile(index,'accessState',true)
        // console.log("set False")
      }

    }

  }

  const increaseQuan=()=>{
    let temp=quantityTyping;
    setQuantity(++temp);
    if(temp!==_files[imgIndex[0].current].quantity){

      setChanged(true)
    }else{
      setChanged(false)
    }
  }

  const decreaseQuan=()=>{
    let temp=quantityTyping;
    setQuantity(--temp);
    if(temp!==_files[imgIndex[0].current].quantity){

      setChanged(true)
    }else{
      setChanged(false)
    }
  }
  
  const changeQuantity=()=>{
    setChanged(false)
    _handleUpdateFile(imgIndex[0].current,'quantity', quantityTyping)
  }
  // console.log(imgIndex[0].current+"/n"+imgIndex[0].prev);
  // console.log(_files.length)
  function ToolBtn({tool_name, tool_icon}) {
    const IconComponent = ICONS[tool_icon];
    return (
      <button className='tool-btn' disabled>
        <div className='tool-name'>
          {tool_name}
        </div>
        <IconComponent className="tool-icon"/>
      </button>
    );
  };

  const deleteImage=()=>{
    if (checkMultiChoice) {
      const updatedIndex = {
        ...imgIndex[0],
        prev: 0,
        current: 0
      };
      setIndex([updatedIndex]);
      _handleDeleteFilesAccessed();
      return
    } else {
      let tmp=imgIndex[0].current
      if (_files.length===1) {
        _handleUpdateFile(0,'index',1);
        _handleUpdateFile(0,'url',"");
        _handleUpdateFile(0,'quantity',1);
        _handleUpdateFile(0,'accessState',false);
        return
      }else{

        if(tmp===_files.length-1){
          --tmp;
        }
      }
      setCurrentImg(tmp)
      _handleDeleteFiles(imgIndex[0].current);
      // console.log(_files)
    }
  }

  const setSelected=()=>{
    if (_files[imgIndex[0].current].accessState===true) {
      _handleUpdateFile(imgIndex[0].current, 'accessState', false);
    } else {
      
      _handleUpdateFile(imgIndex[0].current, 'accessState', true);
    }
  }

  const [selectedMaterial, setSelectedMaterial] = useState('');

  function handleMaterialChange(event) {
    setSelectedMaterial(event.target.value);
  }
  // console.log("selected: "+selectedMaterial)
  function renderMaterialOptions() {
    if (PRODUCT_INFOR[_productId].material.length !== 1) {
      return PRODUCT_INFOR[_productId].material.map((product) => {
        return (
          <div className='material-option-box' htmlFor={product[0]}>
            <input 
                  className='material-option'
                  type='radio' 
                  id={product[0]} 
                  name='material' 
                  value={product[0]} 
                  checked={selectedMaterial === product[0]}
                  onChange={handleMaterialChange}
              /> 
            <label htmlFor={product[0]}>{product[0]}</label>
          </div>
        );
      });
    } else {
      return (
        <>
          <p>Sản phẩm này không có lựa chọn chất liệu</p>
        </>
      );
    }
  }

  function renderEffectOptions(){
    return PRODUCT_INFOR[_productId].material.map((product) => {
      if (product[0]===selectedMaterial) {
        // console.log(product[0])
        if(product.length>=2){
          // console.log(product.length)
          const effect_list= product.slice(1)
          return effect_list.map((effect)=>{
            return(
              <div className='effect-option-box'>
                <input 
                  className='effect-option'
                  type='radio' 
                  id={effect} 
                  name='effect' 
                  value={effect} 
                /> 
                <label htmlFor={effect}>{effect}</label>
              </div>
            )
          })
        }else{
          return (
            <>
              <p className='non-effect'>Không có hiệu ứng cho chất liệu này </p>
            </>
          )
        }
      }

    })
  }

  function renderSizeOptions(){
    return PRODUCT_INFOR[_productId].size.map((size)=>{
      return(
        <div className='size-option-box'>
          <input 
                  className='size-option'
                  type='radio' 
                  id={size} 
                  name='size' 
                  value={size} 
                  
              /> 
          <label htmlFor={size}>{size}</label>
        </div>
      )
    })
  }

  // console.log(PRODUCT_INFOR[_productId].material[0][0])
  return(
    <div className='image-editor'>
      {/* Show image edittor 
          It include 2 component: image-editor-component and show-image-comonent
      */}
      <div className='images-editor-component'> {/** Include tool-bar and preview-box */}
        <div className='tool-bar'>{/** Include tools are declared in object named tools  */}
          <p className='tools-text'>Thanh công cụ:</p>
          <div className='tools'>
            {tools.map((tool,index) => {
              return(
                <ToolBtn 
                  key = {index}
                  tool_name= {tool.name}
                  tool_icon= {tool.icon}
                />
              )
            })}
          </div>
          
          <hr className='line'></hr>
          <div className='love'> 
            <p className='love-amount-text'>100</p>
            <BsBookmarkHeart className='love-icon'/>
          </div>
          <div className='change-quantity-card'>
            <p className='amount-text'>Số lượng: </p>
            <div className='quantity-show'>
              
              <input type='text' className='quantity' 
                      name='quantity-name' 
                      value={_files.length === 1
                        ?(_files[0].url === ""?"":quantityTyping)
                        :( _files.length > 1
                          ? quantityTyping
                          : "")
                        }
                      onChange={(e)=>setQuantity(e.target.value)}
                      disabled={_files.length === 1
                                ?_files[0].url === ""
                                : _files.length > 1
                                  ? false
                                  : true
                      }
              />
              <div className='change-quantity'>
                <button className='increase' onClick={increaseQuan} disabled={_files.length===1&&_files[0].url===""?true:false}>
                  <IoIosArrowForward className='icon'/>
                </button>
                <button className='decrease' onClick={decreaseQuan} disabled={quantityTyping<=1?true:false}>
                  <IoIosArrowForward className='icon'/>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='preview-box'>
          
          <div className='switch-img-tool'>

            <button className='previous-img' onClick={prevImgIndex} disabled={imgIndex[0].current<=0}>
              <IoIosArrowForward/>
            </button>
            <p className='img-index-text'>
              Đang chỉnh sửa ảnh số: {_files.length>=1 && _files[0].url!==""?imgIndex[0].current+1:""}
            </p>
            <button className='next-img' onClick={nextImgIndex} disabled={imgIndex[0].current>=_files.length-1}>
              <IoIosArrowForward/>
            </button>

          </div>

          <div className='preview-zone'>
            <div className='current-img'>
              
              {_files.length>0 && 
                <img src={_files[imgIndex[0].current].url} alt={_files[imgIndex[0].current].name}></img>                
              }
            </div>
          </div>
          <button className='confirm-changing-btn' onClick={changeQuantity} disabled={changedCheck?false:true}> 
            XONG
          </button>
        </div>
        <div className='product-option'>
            <div className='product-marterial'>
              <p className='material-title'> Các loại chất liệu</p>
              {renderMaterialOptions()}
            </div>

            <div className='product-effect'>
              <p className='effect-title'> Các hiệu ứng</p>
              {renderEffectOptions()}
            </div>

            <div className='product-size'>
              <p className='product-title'> Kích thước</p>
              {renderSizeOptions()}
            </div>
        </div>
      </div>

      <div className='show-image-component'>
        <div className='show-img-tools'>
          <div className='show-img-text'>
            Số lượng ảnh: {_files.length === 1
                                ?(_files[0].url === ""?0:1)
                                : _files.length > 1? _files.length: 0
                          }
          </div>
          <div className='show-img-tool'>
            <button className='delete' 
                    onClick={deleteImage}
                    disabled={_files.length === 1
                                ?_files[0].url === ""
                                : _files.length > 1
                                  ? false
                                  : true
                      }>
              <FaTrashAlt/>
              <p>Xóa</p>
            </button>
            <button className='multiple-choice' 
                    onClick={handleSetMultiChoice}
                    disabled={_files.length === 1
                      ?_files[0].url === ""
                      : _files.length > 1
                        ? false
                        : true
                    }
            >
              Chọn nhiều
            </button>
          </div>
        </div>
        <div className='show-img-box' 
          style={_files.length>0 && _files[0].url!==""?{
            height:_files.length<=15?(
              Math.ceil(_files.length/5)*15.625+"em"):(50+"em")
            }:{
            height:0+"em"
            }
          }
        >
          {/* {_files.length} */}
          {
            _files.length>0 && _files[0].url!==""&&
            _files.map((file,index)=>{
              return(
                <div className='image-box' id={file.index} onClick={()=>setCurrentImg(index,checkMultiChoice)}>
                  <div className='frame'>
                    <div className='check-box' style={checkMultiChoice?{}:{display: "none"}}>
                      {_files[index].accessState===true?
                        <AiFillCheckCircle id="checked"/>:
                        <AiOutlineCheckCircle id="uncheck"/>
                      }
                    </div>
                    <img 
                      className='display-uploaded-img' 
                      key={index} 
                      src={file.url} 
                      alt={file.name} 
                    />
                  </div>
                  <div className='infor'>
                    <p className='infor-stt'>STT: {index+1}</p>
                    <p className='infor-quantity'>Số lượng: {file.quantity}</p>
                  </div>
                  {index===imgIndex[0].current&&!checkMultiChoice&&
                    <div className='editing-signal'>
                      <BsEyeFill/>
                    </div>
                  
                  }
                  
                </div>
              )
              
            })
          }
        </div>

        <div className='show-img-bottom-bar'>
          <textarea className='user-note' 
                    placeholder='Ghi chú thêm ...'
                    disabled={_files.length === 1
                      ?_files[0].url === ""
                      : _files.length > 1
                        ? false
                        : true
                  }
                    ></textarea>
          <div className='let-order'>
            <Link 
              className='add-to-cart' 
              onClick={()=>handleSetCart()}
              to={                
                isLoggedIn
                ? _files.length === 1
                  ? _files[0].url === "" ? "" : "../orderConfirmation"
                  : _files.length > 1 ? "../orderConfirmation" : ""
                : "../login"
              }
            >
                    Thêm vào giỏ hàng
            </Link>
            <Link   
              className='add-to-order'
              onClick={() => _handleSendOrderInfor()} 
              to={
                isLoggedIn
                  ? _files.length === 1
                    ? _files[0].url === "" ? "" : "../orderConfirmation"
                    : _files.length > 1 ? "../orderConfirmation" : ""
                  : "../login"
              }
            >
                    Bắt đầu đặt hàng
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
};

function Product({orderData,onOrderData}) {

  const [files,setFiles] = useState([
    {
      index:1,
      url:"",
      quantity:1,
      accessState:false
    }
  ]);

  const _handleSetFiles=(newFiles)=>{
    // console.log(newFiles);
    setFiles([...files, ...newFiles]);
  }

  const _handleUpdateFile = (index, attribute, value) => {
    setFiles(prevFiles => {
      // make a copy of the previous files array
      const updatedFiles = [...prevFiles];
      // update the attribute of the file at the given index
      updatedFiles[index] = { ...updatedFiles[index], [attribute]: value };
      // return the updated files array
      return updatedFiles;
    });
  };

  const _handleDeleteFiles = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  }

  const _handleDeleteFilesAccessed = () => {
    
    let accessCounter=0;
    files.map(file=>{
      if(file.accessState===true){
        ++accessCounter;
      }
    })

    if(accessCounter===files.length){
      setFiles([{      
        index:1,
        url:"",
        quantity:1,
        accessState:false
      }])
    }else{

      const updatedFiles = files.filter(file => !file.accessState);
      setFiles(updatedFiles);
    }
  };

  const [typeSprintListTrigger,setTypeSprintListTrigger]=useState(false);
  
  const _handleSetTypeSprintListTrigger=()=>{
    setTypeSprintListTrigger(!typeSprintListTrigger)
  }

  //Get products list
  //Get product name to render side column
  const [productList,setProductList]=useState()
  
  useEffect(() => {
      fetch('http://localhost:3001/api/v1/client/home/productList')
        .then(response => response.json())
        .then(data => setProductList(data))
        .catch(error => console.error(error));
    }, []);

  //Get product from product_id
  const [product,setProduct]=useState()
  
  useEffect(() => {
      fetch('http://localhost:3001/api/v1/client/home/productList?id=')
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className='main'>
        <div className='side-column'>
          <div className='type-sprint-big-screen'>
            <h2>Các loại in ấn khác</h2>
            <ul className='typesprint'>
              <li><Link to="/products"> Postcard</Link></li>
              <li><Link to="/products"> Photostrip giấy C300</Link></li>
              <li><Link to="/products"> Photobook (Sách Ảnh)</Link></li>
              <li><Link to="/products"> Khung ảnh để bàn</Link></li>
              <li><Link to="/products"> Khung Treo Tường</Link></li>
              <li><Link to="/products"> Lịch Để bàn</Link></li>
              <li><Link to="/products"> Sổ tay</Link></li>
              <li><Link to="/products"> Sticker</Link></li>
              <li><Link to="/products"> Poster</Link></li>
              <li><Link to="/products"> Ảnh thẻ</Link></li>
            </ul>
          </div>

          <div className='type-sprint-small-screen'>
            <div className='type-sprint-title'
              onClick={_handleSetTypeSprintListTrigger}
            > <FaListAlt/> <h2>Các loại in ấn khác </h2> 
            </div>
            <ul 
              className='typesprint'
              style={!typeSprintListTrigger?{display:"none"}:{}}
            >
              <li><Link to="/products"> Postcard</Link></li>
              <li><Link to="/products"> Photostrip giấy C300</Link></li>
              <li><Link to="/products"> Photobook (Sách Ảnh)</Link></li>
              <li><Link to="/products"> Khung ảnh để bàn</Link></li>
              <li><Link to="/products"> Khung Treo Tường</Link></li>
              <li><Link to="/products"> Lịch Để bàn</Link></li>
              <li><Link to="/products"> Sổ tay</Link></li>
              <li><Link to="/products"> Sticker</Link></li>
              <li><Link to="/products"> Poster</Link></li>
              <li><Link to="/products"> Ảnh thẻ</Link></li>
            </ul>
          </div>
        </div>
        <div className='content'>
            <img className='banner-product' src="https://via.placeholder.com/700x300" alt=""/>
            <ClickHereToUpLoadImage _files={files} _handleSetFiles={_handleSetFiles}/>
            <ImageEditor 
              _orderData={orderData}
              _productId={productId[0]}
              _files={files} 
              _handleUpdateFile={_handleUpdateFile} 
              _handleDeleteFiles={_handleDeleteFiles}
              _handleDeleteFilesAccessed={_handleDeleteFilesAccessed}
              _handleSendOrderInfor={onOrderData}
            />
        </div>
        
      </div>
    </>
  );
}

export default Product;
