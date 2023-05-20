import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.scss';
import { TiPrinter,TiHomeOutline, TiShoppingCart } from 'react-icons/ti';
import { BsBoxSeam,BsPersonCircle,BsTelephone } from 'react-icons/bs';
import {IoIosArrowForward} from 'react-icons/io';
import {BiLogIn,BiLogOut,BiUserPlus,BiUserPin} from 'react-icons/bi';
import { policiesAndPromotions } from '../../manager_components/models/FakeData';


const delay = 3000;

function PoliceisSlideshow() {
  
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }


  React.useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === policiesAndPromotions.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='PoliciesAndPromotions'>
      <div className='LeftArrow'><IoIosArrowForward/></div>
        <div className="TextSlideShow">
          <div className="TextSlideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {policiesAndPromotions.map((Text, index) => (
              <div className="TextSlide" key={index} style={{ Text }}>
                {Text}
              </div>
            ))}
          </div>
        </div>
      <div className='RightArrow'><IoIosArrowForward/></div>

    </div>
    
  );
}

function Header(isLogined, {onClick}) {

  const handleSwitchToAccount = (user_id) => {
    const queryParams = { "user-id": user_id};
    const searchParams = new URLSearchParams(queryParams).toString();
    const url = `/account?${searchParams}`;

    // Redirect to the specified URL
    window.location.href = url;
  };

  const [isDropAcc, setIsDropAcc] = useState(false);
  const handleAccBtnClick = () => {
    setIsDropAcc(!isDropAcc);
  };
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state.auth)
  const { currentData} = useSelector(state => state.user)
  // const {userName, setUserName} = useState()

  const location = useLocation();
  useEffect(()=>{
    setTimeout(()=>{

      isLoggedIn && dispatch(actions.getCurrent())
    },100)
    
  },[isLoggedIn])

  // console.log(currentData)

  useEffect(() => {
    console.log('Path changed to:', location.pathname);
  }, [location]);

  const page_breadcrumbs= location.pathname.split('/').filter((substring) => substring !== '');
  
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <ul>
            <li><Link to="/contact"><BsTelephone/> Liên hệ hỗ trợ</Link></li>
            <li onClick={handleAccBtnClick}>
              <a><BsPersonCircle/> {isLoggedIn?currentData.name:'Tài khoản'}</a>
              {isDropAcc &&
                ( !isLoggedIn?
                  <div className='dropdownacc'>
                    <Link to='/login'> <BiLogIn/> Đăng nhập</Link>
                    <Link to='/register'><BiUserPlus/> Đăng ký</Link>
                  </div>
                  :
                  <div className='dropdownacc'>
                    <Link to='#' onClick={()=>handleSwitchToAccount(currentData.userId)}> <BiUserPin/> Thông tin</Link>
                    <Link to='/' onClick={()=>{dispatch(actions.logout())}}> <BiLogOut/> Đăng xuất</Link>
                  </div>
                )
              }
            </li>
          </ul>
        </div>
      
        <div className='navbar'>
          <div className='abc'>
            <Link to='/'>
            <div className="header__logo">
              <div>
                <img src="/img/logo/logo_lentilab-01.png" alt="Company Logo" />
              </div>
              <div>
                <p>3D</p>
                <p>LENTICULAR</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="header-nav">
            <ul>
              {/* Switching to home page */}
                <li>
                  <Link to="/home" className='switchingPage'>
                  <div><TiHomeOutline className='icon'/> </div>
                  <div className='textHeader'>Trang chủ</div>
                  </Link>
                </li>
              <hr></hr>
                {/* Switching to product page*/}
              <li>
                <Link to="/product" className='switchingPage'>
                  <div><TiPrinter className='icon'/></div> 
                  <div className='textHeader'>Sản phẩm</div>
                </Link>
              </li>
              <hr></hr>
              {/* Switching to orders page */}
              <li>
                <Link to="/orders" className='switchingPage'>
                  <div><BsBoxSeam className='icon'/> </div>
                  <div className='textHeader'> Đơn hàng</div>
                </Link>
              </li>
              <hr></hr>
              {/* Switching to Cart page */}
              <li>
                <Link to="/account" className='switchingPage'>
                <div><TiShoppingCart className='icon'/> </div>
                <div className='textHeader'>Giỏ hàng</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <PoliceisSlideshow/>

        {/* Breadcrumb bar */}
        <div className='containerpb'>
        { page_breadcrumbs[0] !=="home" && page_breadcrumbs.length !==0 &&
          <div className='page-breadcrumb'>
            <div className='website-name'>
              3D Lenticular
            </div>
            {page_breadcrumbs.map((Text, index) => (
              <div className="page-name-breadcrumbs" key={index}>
                <IoIosArrowForward className='right-arrow-breadcrumb'/>
                <div className='page-name'>
                  {Text[0].toUpperCase()+Text.substring(1)}
                </div>
              </div>
            ))}
          </div>
        }
        </div>
      </header>

    </>
    
  );
}

export default Header;
