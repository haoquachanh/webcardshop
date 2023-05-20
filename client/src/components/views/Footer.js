import React from 'react';
import '../styles/footer.scss';
import { BsFacebook,BsTiktok,BsYoutube,BsInstagram, BsTelephone } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <div>
          <img src="/img/logo.jpg" alt="Company Logo" />
        </div>
        <div>
          <h1>3D</h1>
          <h1>LENTICULAR</h1>
        </div>
      </div>

      <hr/>


      <div className='infoNlink'>
        <div className='liinfolink'>
          <h3>Dịch vụ</h3>
          <ul>
            <li>Chuyên in ấn hình ảnh 3D</li>
            <li>Rửa ảnh online - giá rẻ</li>
          </ul>
        </div>
        <div className='liinfolink'>
          <h3>Shop Info</h3>
          <ul>
            <li>Địa chỉ: </li>
            <li>Giờ mở cửa: 9am - 5pm</li>
          </ul>
        </div>
        <div className='liinfolink'>
          <h3>Liên hệ hỗ trợ</h3>
          <ul>
            <li><BsTelephone/> Hotline: </li>
            <li><BiMailSend/> Email: </li>
          </ul>
        </div>
        <div className='liinfolink'>
          <h3>Social Media</h3>
          <ul className='contactIcon'>
            <li><a href="https://www.facebook.com/chuyeninanh3dlenticular" target="_blank" rel="noopener noreferrer"><BsFacebook className='icon'/></a></li>
            <li><a href="/"><BsTiktok className='icon'/> </a></li>
            <li><a href="/"><BsInstagram className='icon'/></a></li>
            <li><a href="/"><BsYoutube className='icon'/></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
