import React,{useEffect,useState} from 'react';
//import {BiBarChartAlt2} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/home.scss'
import { getProducts } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

/**import icon */
import { RiHeartsFill } from 'react-icons/ri'
import { BsFillHeartFill } from 'react-icons/bs'
import { MdDesignServices } from 'react-icons/md'
import { IoMdPricetag } from 'react-icons/io'

const images = [
  'https://via.placeholder.com/1500x400',
  'https://via.placeholder.com/1500x400',
  'https://via.placeholder.com/1500x400',
  'https://via.placeholder.com/1500x400',
];
const delay = 3000;

function ImageSlideshow(slides) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((backgroundImage, index) => (
          <img
            className='slide'
            src={backgroundImage} alt={backgroundImage}
            style={{ backgroundImage }}
          />

        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

const trendingProducts = [
  {
    id: 1,
    name: 'Product 1',
    image: 'img/card.jpg',
    option1: ["option 1", "option 3", "option 3"],
    price: 10.99,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'img/card.jpg',
    option1: ["option 1", "option 3", "option 3"],
    price: 19.99,
    rating: 3.5,
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'img/card.jpg',
    option1: ["option 1", "option 3", "option 3"],
    price: 5.99,
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Product 4',
    image: 'img/card.jpg',
    option1: ["option 1", "option 3", "option 3"],
    price: 10.99,
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Product 5',
    image: 'img/card.jpg',
    option1: ["option 1", "option 3", "option 3"],
    price: 19.99,
    rating: 3.5,
  },
  {
    id: 6,
    name: 'Product 6',
    image: 'img/card.jpg',
    option1: ["option 1", "option 3", "option 3"],
    price: 5.99,
    rating: 5.0,
  },
  {
    id: 6,
    name: 'Product 6',
    image: 'img/card.jpg',
    option1: ["option 1", "option 3", "option 3"],
    price: 5.99,
    rating: 5.0,
  },
  {
    id: 6,
    name: 'Product 6',
    image: 'img/card.jpg',
    option1: ["option 1", "option 3", "option 3"],
    price: 5.99,
    rating: 5.0,
  },
];

function TrendingProductList(trendingList) {

  return (
    <div>
      <div className='trending-list-title'>
        <RiHeartsFill className='trending-heart-icon' />
        Top
        <p className='high-light'>Trending</p>
        tháng 3
      </div>
      <div className='trending-list-container'>

        <div className='trending-list'>

          {trendingProducts.map((product) => (

            <div className='trending-item-box'>
              <div className='sample-pic-with-rank'>
                <img className='sample-image' src="/img/card.jpg" alt='card.jpg' />
                <p className='rank'>1</p>
              </div>
              <div className='sample-infor'>
                <p className='sample-name'>
                  Card bo góc
                </p>

                <ul className='options'>
                  <li>
                    option 1
                  </li>
                  <li>
                    option 1
                  </li>
                  <li>
                    option 1
                  </li>

                </ul>

              </div>
            </div>

          ))}
        </div>
      </div>

    </div>
  )

}

function ProductLists(productList) {

  let product_id=10

  const handleClick = (product_id) => {
    const queryParams = { id: product_id};
    const searchParams = new URLSearchParams(queryParams).toString();
    const url = `/product?${searchParams}`;

    // Redirect to the specified URL
    window.location.href = url;
  };

  return (
    <div className='product-list-show'>
      <div className='product-list-title'>
        <div className='start-your-design'>
          BẮT ĐẦU THIẾT KẾ CỦA BẠN NÀO
          <MdDesignServices className='design-icon' />
        </div>

        <div className='please-chose-product-type'>
          Hãy chọn loại sản phẩm bạn muốn in ấn:
        </div>
      </div>
      <div className='product-list'>
        {
          trendingProducts.map(product =>
          (

            <Link to="#" onClick={()=>handleClick(product_id)} className='product-box'>

              <img className='product-img' src='\img\card.jpg' alt='card'></img>
              <div className='product-infor'>
                <div className='product-name'>
                  Card bo góc
                </div>
                <div className='product-detail'>
                  <div className='unit-price'>
                    <IoMdPricetag />
                    1 200đ/thẻ
                  </div>

                  <div className='number-of-favorites-box'>
                    <BsFillHeartFill className='favorite-icon' />
                    <div className='number-of-favorites'>
                      1,2 K
                    </div>

                  </div>
                </div>
              </div>

            </Link>

          )
          )
        }
      </div>


    </div>
  )
}

function Home() {

  const dispatch= useDispatch()
  const {products} = useSelector(state=> state.product)
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  //Get img slide show
  const [slides, setSlides] = useState()
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/client/home/slides')
      .then(response => response.json())
      .then(data => setSlides(data))
      .catch(error => console.error(error));
  }, []);

  //Get trending list
  const [trendingList, setTrendingList] = useState()
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/client/home/trendingList')
      .then(response => response.json())
      .then(data => setTrendingList(data))
      .catch(error => console.error(error));
  }, []);

  //Get products list
  const [productList,setProductList]=useState()
    
  useEffect(() => {
      fetch('http://localhost:3001/api/v1/client/home/productList')
        .then(response => response.json())
        .then(data => setProductList(data))
        .catch(error => console.error(error));
    }, []);
  return (
    <>
      <ImageSlideshow slides={slides}/>
      <div className="main-content">
        <TrendingProductList trendingList={trendingList}/>
        <ProductLists productList={products}/>
      </div>
    </>
  );
}

export default Home;
