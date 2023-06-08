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
import Swal from 'sweetalert2'

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

function ProductList({productList}){
  let groupedProducts = {};

  for (let i = 0; i < productList.length; i++) {
      let product = productList[i];
      let category = product.category;
      
      if (groupedProducts[category]) {
          groupedProducts[category].push(product);
      } else {
          groupedProducts[category] = [product];
      }
  }
  
  // Get the keys (categories) of groupedProducts
  let categories = Object.keys(groupedProducts);

  const handleClick = (product_id) => {
    const queryParams = { productId: product_id};
    const searchParams = new URLSearchParams(queryParams).toString();
    const url = `/product?${searchParams}`;

    // Redirect to the specified URL
    window.location.href = url;
  };

  // console.log(groupedProducts)

  return(
    <div className="product-list">
      {categories.map(category=>{
        return(
          <div className='category-box'>
            <div className='title'>
              <p>
                {category}
              </p>
            </div>
            <div className='products'>
              {
                groupedProducts[category].map(product=>{
                  return(
                    <div className='product-name' onClick={()=>handleClick(product.id)}>
                      {product.name}
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Header() {

  const handleSwitchToAccount = (user_id) => {
    // console.log(user_id)
    const queryParams = { "userId": user_id};
    const searchParams = new URLSearchParams(queryParams).toString();
    const url = `/account?${searchParams}`;

    // Redirect to the specified URL
    window.location.href = url;
  };

  const handleSwitchToOrder = (user_id) => {
    const queryParams = { "userId": user_id};
    const searchParams = new URLSearchParams(queryParams).toString();
    const url = `/orders?${searchParams}`
    // console.log(isLoggedIn);
    // Redirect to the specified URL
    window.location.href = url;
  };

  const handleSwitchToCart = (user_id) => {
    const queryParams = { "userId": user_id};
    const searchParams = new URLSearchParams(queryParams).toString();
    const url = `/carts?${searchParams}`;

    // Redirect to the specified URL
    window.location.href = url;
  };

  const handleSwitchToLogin=()=>{
    const url = `/login`;

    // Redirect to the specified URL
    window.location.href = url;
  }

  const data = JSON.parse(localStorage.getItem("persist:auth"));
  const token = JSON.parse(data.token);
  
  // console.log(atob(token?.split(' ')[1].split(".")[1]))

  const decodedToken = token===null?{userId:null}:JSON.parse(atob(token?.split(' ')[1].split(".")[1]));

  const [isDropAcc, setIsDropAcc] = useState(false);
  const handleAccBtnClick = () => {
    if(productToggle){

      setProductToggle(false)
    }
    setIsDropAcc(!isDropAcc);
  };

  const [productToggle,setProductToggle]=useState(false)
  const handleProductListBtnClick = () => {
    setProductToggle(!productToggle)
    if(isDropAcc){
      setIsDropAcc(false);
    }
  };

  
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state.auth)
  const [ currentData,setCurrent] = useState(decodedToken)
  useEffect(() => {

    fetch(`http://localhost:3001/api/v1/user/get?userId=${decodedToken.userId}`)
      .then(response => response.json())
      .then(data => setCurrent({...data.userData,userId:decodedToken.userId}))
      .catch(error => console.error(error));

  }, []);

  // console.log(currentData);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        isLoggedIn && dispatch(actions.getCurrent());
      } catch (error) {
        console.error('Error getting current user:', error);
        // Handle the error appropriately (e.g., display an error message)
      }
    };
  
    const timeout = setTimeout(getCurrentUser, 100);
  
    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  
  }, [isLoggedIn, dispatch]);

  const location = useLocation();
  useEffect(() => {
    console.log('Path changed to:', location.pathname);
  }, [location]);

  const page_breadcrumbs= location.pathname.split('/').filter((substring) => substring !== '');
  
  //Lấy sản phẩm 
  const [products, setProducts] = useState()
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/product/all')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error(error));
  }, []);
  // console.log(isLoggedIn);
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <ul>
            <li><Link to="/contact"><BsTelephone/> Liên hệ hỗ trợ</Link></li>
            <li onClick={handleAccBtnClick}>
              <a><BsPersonCircle/> {isLoggedIn?currentData?.fullname:'Tài khoản'}</a>
              {isDropAcc &&
                ( !isLoggedIn?
                  <div className='dropdownacc'>
                    <Link to='/login'> <BiLogIn/> Đăng nhập</Link>
                    <Link to='/register'><BiUserPlus/> Đăng ký</Link>
                  </div>
                  :
                  <div className='dropdownacc'>
                    <Link to='#' onClick={()=>handleSwitchToAccount(currentData?.userId)}> <BiUserPin/> Thông tin tài khoản</Link>
                    <Link to='#' onClick={()=>handleSwitchToOrder(currentData?.userId)}> <BsBoxSeam/> Đơn hàng của bạn</Link>
                    <Link to='#' onClick={()=>handleSwitchToCart(currentData?.userId)}> <TiShoppingCart/> Giỏ hàng của bạn</Link>
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
              <div className='store-name'>
                <p>SHOP ẢNH NỔI</p>
                <p>3D LENTICULAR</p>
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
              <li onClick={handleProductListBtnClick}>
                <Link to="#" className='switchingPage' >
                  <div><TiPrinter className='icon'/></div> 
                  <div className='textHeader'>Sản phẩm</div>
                </Link>
                {
                  productToggle&&
                  <ProductList productList={products}/>
                }
              </li>
              <hr></hr>
              {/* Switching to orders page */}
              <li onClick={isLoggedIn?()=>handleSwitchToOrder(currentData?.userId):handleSwitchToLogin}>
                <Link to="#" className='switchingPage' >
                  <div><BsBoxSeam className='icon'/> </div>
                  <div className='textHeader'> Đơn hàng</div>
                </Link>
              </li>
              <hr></hr>
              {/* Switching to Cart page */}
              <li onClick={isLoggedIn?()=>handleSwitchToCart(currentData?.userId):handleSwitchToLogin}>
                <Link to="#" className='switchingPage' >
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
