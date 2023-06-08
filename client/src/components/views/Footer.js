import React from 'react';
import '../styles/footer.scss';
import { BsFacebook,BsTiktok,BsYoutube,BsInstagram, BsTelephone } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <div>
          <img src="/img/logo/logo_lentilab-01.png" alt="Company Logo" />
        </div>
        <div>
          <h1>SHOP ẢNH NỔI</h1>
          <h1>3D LENTICULAR</h1>
        </div>
      </div>

      <hr/>


      <div className='infoNlink'>
        <div className='liinfolink'>
          <h3>Dịch vụ</h3>
          <ul>
            <li>Chuyên in ấn hình ảnh 3D</li>
            <li>Chuyên in các loại card (card giấy C300, PVC, ...)</li>
            {/* <li>Chuye</li> */}
            <li>Rửa ảnh online - chất lượng cao</li>
          </ul>
        </div>
        <div className='liinfolink'>
          <h3>Thông tin cửa hàng</h3>
          <ul>
            <li>Địa chỉ: Trường Thọ, Thủ Đức, Tp. Hồ Chí Minh</li>
            <li>Giờ mở cửa: 8h - 22h, từ thú 2 - thứ 7</li>
          </ul>
        </div>
        <div className='liinfolink'>
          <h3>Liên hệ hỗ trợ</h3>
          <ul>
            <li><BsTelephone/> Hotline: 093 761 7695</li>
            <li><BsTelephone/> Hotline: 096 533 7436</li>
            <li><BiMailSend/> Email: 3dlenticularvn@gmail.com</li>
          </ul>
        </div>
        <div className='liinfolink'>
          <h3>Trang cộng đồng</h3>
          <ul className='contactIcon'>
            <li>
              <a href="https://www.facebook.com/chuyeninanh3dlenticular" 
              target="_blank" rel="noopener noreferrer">
                <BsFacebook className='icon'/> Shop Ảnh nổi 3D Lenticular
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@lenti_lab"
                target="_blank" rel="noopener noreferrer">
                  <BsTiktok className='icon'/> @lenti_lab
              </a>
            </li>
            {/* <li>
              <a 
                href="/"
                target="_blank" rel="noopener noreferrer">
                  <BsInstagram className='icon'/>
              </a>
            </li> */}
            <li>
              <a 
                href="https://www.youtube.com/@3dlenticularvn296"
                target="_blank" rel="noopener noreferrer">
                <BsYoutube className='icon'/> 3D lenticularvn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
