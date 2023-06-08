import React, {useState, useEffect}  from 'react';
// import { Link } from 'react-router-dom';
// import Popup from 'reactjs-popup';
import '../styles/config/content.scss'
import '../styles/product.scss';
// import Dropzone from 'react-dropzone'
// import { useDispatch, useSelector } from 'react-redux';
// import * as actions from '../../store/actions'

//import icon

// import {FaListAlt} from 'react-icons/fa'
import ProductPreview from '../components-render/ProductPreview';
import BasicParamsRender from '../components-render/BasicParamsRender';
import ProductOptionRender from '../components-render/ProductOptionRender';
import ProductIntroduce from '../components-render/ProductIntroduce';
import PrintAre from '../components-render/PrintingArea';
import Question from '../components-render/Questions';
import RelationProduct from '../components-render/RelationProduct';
// import OrderInfor from '../components-render/OrderInfor';
import { products } from '../models/data';

/**
 * Product information 
 */


/** Upload images from device by clicking button or drag them into area 
 *  This function is called in ClickHereToUpLoadImage
 *  A array name "files" that save image paths
*/


const productInfor={
  description:{
    title:"Card bo góc là gì?",
    content:"Thẻ nhựa hay còn gọi là PVC là loại thẻ được làm từ nhựa, rất được ưa chuộng vì tính tiện dụng, độ bền cao và giá thành rẻ. Ngày nay, thay vì dùng thẻ giấy với giá in khá đắt nhưng không bền, người ta thường chuyển từ in thẻ giấy sang in thẻ nhựa để sử dụng thuận tiện hơn. /br/ Thẻ nhựa hay còn gọi là PVC là loại thẻ được làm từ nhựa, rất được ưa chuộng vì tính tiện dụng, độ bền cao và giá thành rẻ. Ngày nay, thay vì dùng thẻ giấy với giá in khá đắt nhưng không bền, người ta thường chuyển từ in thẻ giấy sang in thẻ nhựa để sử dụng thuận tiện hơn.",
  },

  option_des:{
    material_des : [
      {
        title: "Card Giấy C300",
        content: "Đây là loại thẻ được làm từ chất liệu giấy C300. Thẻ giấy C300 có độ bền tương đối và giá thành phải chăng./br//br/Ưu điểm:/br/- Giá thành phải chăng, phù hợp cho thẻ tạm thời, dễ tái chế./br//br/Nhược điểm:/br/- Không chống nước, độ bền không cao bằng các loại thẻ nhựa khác.",
        img: "https://via.placeholder.com/700x300##https://via.placeholder.com/700x300"
      },
      {
        title: "Card Cứng 4k",
        content: "Thẻ Card Cứng 4k là loại thẻ có độ cứng cao và chất lượng in ấn tốt. Thẻ này thường được sử dụng trong các thẻ thành viên, thẻ VIP, thẻ thư viện, v.v./br//br/Ưu điểm:/br/- Độ cứng cao, chất lượng in ấn tốt, chống nước, lâu phai màu./br//br/Nhược điểm:/br/- Giá thành cao hơn các loại thẻ giấy, không dễ tái chế.",
        img: "https://via.placeholder.com/700x300"
      },
      {
        title: "Card Nhựa PVC",
        content: "Card Nhựa PVC là loại thẻ được làm từ chất liệu nhựa PVC cao cấp. Thẻ này có độ bền cao, chống nước và chất lượng in ấn sắc nét./br//br/Ưu điểm:/br/- Độ bền cao, chống nước, chất lượng in ấn sắc nét./br//br/Nhược điểm:/br/- Giá thành cao hơn các loại thẻ giấy, không dễ tái chế.",
        img: "https://via.placeholder.com/700x300"
      },
      {
        title: "Card Polar",
        content: "Card Polar là loại thẻ có lớp phủ bề mặt bóng mờ. Thẻ này mang lại vẻ sang trọng và chuyên nghiệp cho các loại thẻ cao cấp./br//br/Ưu điểm:/br/- Vẻ sang trọng, chuyên nghiệp, thu hút sự chú ý./br//br/Nhược điểm:/br/- Giá thành cao hơn các loại thẻ thông thường, không dễ tái chế.",
        img: "https://via.placeholder.com/700x300##https://via.placeholder.com/700x300"
      },
      {
        title: "Card Lenti",
        content: "Card Lenti là loại thẻ có lớp phủ bề mặt nhám, tạo cảm giác chống trượt và chống trầy xước./br//br/Ưu điểm:/br/- Chống trượt, chống trầy xước, bền bỉ./br//br/Nhược điểm:/br/- Giá thành cao hơn các loại thẻ thông thường, không dễ tái chế.",
        img: "https://via.placeholder.com/700x300"
      }
    ],
    
    effect_des : [
      {
        title: "Bóng",
        content: "Hiệu ứng bóng tạo cho thẻ một vẻ ngoài sáng bóng và bắt mắt. /br/ Thẻ với hiệu ứng bóng thường được sử dụng trong thẻ VIP, thẻ thành viên, thẻ quà tặng, v.v.",
        img: "https://via.placeholder.com/700x300##https://via.placeholder.com/700x300"
      },
      {
        title: "Mờ",
        content: "Hiệu ứng mờ tạo cho thẻ một vẻ ngoài mịn màng và tinh tế. /br/ Thẻ với hiệu ứng mờ thường được sử dụng trong thẻ công ty, thẻ nhân viên, thẻ tạm thời, v.v.",
        img: "https://via.placeholder.com/700x300"
      },
      {
        title: "Hologram",
        content: "Hiệu ứng hologram tạo cho thẻ một vẻ ngoài lấp lánh và độc đáo. /br/ Thẻ với hiệu ứng hologram thường được sử dụng trong thẻ an ninh, thẻ giảm giá, thẻ thành viên cao cấp, v.v.",
        img: "https://via.placeholder.com/700x300"
      },
      {
        title: "Kim tuyến",
        content: "Hiệu ứng kim tuyến tạo cho thẻ một vẻ ngoài lấp lánh và sang trọng. /br/ Thẻ với hiệu ứng kim tuyến thường được sử dụng trong thẻ quà tặng, thẻ lễ kỷ niệm, thẻ chúc mừng, v.v.",
        img: "https://via.placeholder.com/700x300"
      },
      {
        title: "Lụa",
        content: "Hiệu ứng lụa tạo cho thẻ một vẻ ngoài mềm mại và sang trọng. /br/ Thẻ với hiệu ứng lụa thường được sử dụng trong thẻ VIP, thẻ danh tiếng, thẻ nhân viên cao cấp, v.v.",
        img: "https://via.placeholder.com/700x300"
      },
      {
        title: "Nhám",
        content: "Hiệu ứng nhám tạo cho thẻ một vẻ ngoài chất liệu tự nhiên và độc đáo. /br/ Thẻ với hiệu ứng nhám thường được sử dụng trong thẻ thư viện, thẻ thông tin, thẻ tạm thời, v.v.",
        img: "https://via.placeholder.com/700x300"
      }
    ]
  },
  order_notify :[
    {
      title: "Quy trình đặt hàng",
      content: "",
      img:'../img/thegioiinan-quytrinh.png'
    },
    {
      title: "Thông tin về sản phẩm và file in",
      content:
        "TGIA khuyến khích sử dụng hệ màu CMYK để thiết kế./br/Thành phẩm sẽ có dung sai ±1 mm nên TGIA khuyến khích anh chị thiết kế viền lớn hơn 3mm và khi thành phẩm sẽ có sự chênh lệch giữa các cạnh ±1 mm./br/TGIA chấp nhận file thiết kế xuất từ các phần mềm Adobe Illustrator (Ai), Photoshop (Psd), Indesign (Indd) và Corel (Cdr), xem thêm hướng dẫn xuất file tại đây./br/Các định dạng file có đuôi: psd, tiff, jpg, png… phải đạt độ phân giải 300dpi đối với hình ảnh và 400dpi đối với text./br/Đối với in offset, nếu file của anh chị có nền in màu đen, hãy chỉnh màu C: 20 M: 20 Y: 0 K: 100, nếu file của anh chị có chữ đen, hãy chỉnh màu C: 20 M: 0 Y: 0, K: 100./br/Đối với in kỹ thuật số, nếu file của anh chị có nền in màu đen, hãy chỉnh màu C: 20 M: 0 Y: 0 K: 100",
      img:'../img/he_mau.jpg'
     },
    {
      title: "Thanh toán & in ấn",
      content:
        "Để TGIA tiến hành xử lý đơn hàng, anh chị vui lòng đặt cọc 50% chi phí in ấn và 100% phí thiết kế (nếu anh chị yêu cầu TGIA thiết kế file riêng)./br/Nếu file của anh chị không in ấn được, TGIA sẽ hoàn trả lại số tiền mà anh chị đã đặt cọc./br/Anh chị vui lòng kiểm tra nội dung file in trước khi xác nhận, TGIA có trách nhiệm thực hiện đúng nội dung mà anh chị đã xác nhận./br/Thời gian in ấn sẽ được tính từ khi anh chị xác nhận file in"
    },
    {
      title: "Giao nhận & đổi trả",
      content:
        "Thời gian giao hàng sẽ được tính từ khi đơn hàng thành phẩm./br/Đối với anh chị có địa chỉ giao hàng ở ngoài TPHCM, thời gian giao hàng còn phụ thuộc vào đơn vị vận chuyển thứ 3./br/Nếu sản phẩm bị lỗi do kỹ thuật in, sản phẩm không đúng với các yêu cầu khi đặt hàng, Anh chị vui lòng liên hệ với TGIA trong vòng 05 ngày kể từ khi nhận hàng để được hỗ trợ xử lý./br/TGIA có trách nhiệm đổi trả sản phẩm cho anh chị nếu sản phẩm bị lỗi, TGIA không áp dụng quy đổi sản phẩm thành tiền để hoàn trả"
    }
  ]
  
  
}

const productInforSticker={
  description:{
    title:"Card bo góc là gì?",
    content:"Thẻ nhựa hay còn gọi là PVC là loại thẻ được làm từ nhựa, rất được ưa chuộng vì tính tiện dụng, độ bền cao và giá thành rẻ. Ngày nay, thay vì dùng thẻ giấy với giá in khá đắt nhưng không bền, người ta thường chuyển từ in thẻ giấy sang in thẻ nhựa để sử dụng thuận tiện hơn. /br/ Thẻ nhựa hay còn gọi là PVC là loại thẻ được làm từ nhựa, rất được ưa chuộng vì tính tiện dụng, độ bền cao và giá thành rẻ. Ngày nay, thay vì dùng thẻ giấy với giá in khá đắt nhưng không bền, người ta thường chuyển từ in thẻ giấy sang in thẻ nhựa để sử dụng thuận tiện hơn.",
  },

  option_des:{
    material_des : [
      {
        title: "Card Giấy C300",
        content: "Đây là loại thẻ được làm từ chất liệu giấy C300. Thẻ giấy C300 có độ bền tương đối và giá thành phải chăng./br//br/Ưu điểm:/br/- Giá thành phải chăng, phù hợp cho thẻ tạm thời, dễ tái chế./br//br/Nhược điểm:/br/- Không chống nước, độ bền không cao bằng các loại thẻ nhựa khác.",
        img: "../img/imgs_preview_banner/pic_11.jpg"
      },
      {
        title: "Card Cứng 4k",
        content: "Thẻ Card Cứng 4k là loại thẻ có độ cứng cao và chất lượng in ấn tốt. Thẻ này thường được sử dụng trong các thẻ thành viên, thẻ VIP, thẻ thư viện, v.v./br//br/Ưu điểm:/br/- Độ cứng cao, chất lượng in ấn tốt, chống nước, lâu phai màu./br//br/Nhược điểm:/br/- Giá thành cao hơn các loại thẻ giấy, không dễ tái chế.",
        img: "../img/imgs_preview_banner/pic_12.jpg"
      },
      {
        title: "Card Nhựa PVC",
        content: "Card Nhựa PVC là loại thẻ được làm từ chất liệu nhựa PVC cao cấp. Thẻ này có độ bền cao, chống nước và chất lượng in ấn sắc nét./br//br/Ưu điểm:/br/- Độ bền cao, chống nước, chất lượng in ấn sắc nét./br//br/Nhược điểm:/br/- Giá thành cao hơn các loại thẻ giấy, không dễ tái chế.",
        img: "../img/imgs_preview_banner/pic_13.jpg"
      },
      {
        title: "Card Polar",
        content: "Card Polar là loại thẻ có lớp phủ bề mặt bóng mờ. Thẻ này mang lại vẻ sang trọng và chuyên nghiệp cho các loại thẻ cao cấp./br//br/Ưu điểm:/br/- Vẻ sang trọng, chuyên nghiệp, thu hút sự chú ý./br//br/Nhược điểm:/br/- Giá thành cao hơn các loại thẻ thông thường, không dễ tái chế.",
        img: "../img/imgs_preview_banner/pic_14.jpg"
      },
      {
        title: "Card Lenti",
        content: "Card Lenti là loại thẻ có lớp phủ bề mặt nhám, tạo cảm giác chống trượt và chống trầy xước./br//br/Ưu điểm:/br/- Chống trượt, chống trầy xước, bền bỉ./br//br/Nhược điểm:/br/- Giá thành cao hơn các loại thẻ thông thường, không dễ tái chế.",
        img: "../img/imgs_preview_banner/pic_15.jpg"
      }
    ],
    
    effect_des : [
      {
        title: "Bóng",
        content: "Hiệu ứng bóng tạo cho thẻ một vẻ ngoài sáng bóng và bắt mắt. /br/ Thẻ với hiệu ứng bóng thường được sử dụng trong thẻ VIP, thẻ thành viên, thẻ quà tặng, v.v.",
        img: "../img/imgs_preview_banner/pic_16.jpg"
      },
      {
        title: "Mờ",
        content: "Hiệu ứng mờ tạo cho thẻ một vẻ ngoài mịn màng và tinh tế. /br/ Thẻ với hiệu ứng mờ thường được sử dụng trong thẻ công ty, thẻ nhân viên, thẻ tạm thời, v.v.",
        img: "../img/imgs_preview_banner/pic_17.jpg"
      },
      {
        title: "Hologram",
        content: "Hiệu ứng hologram tạo cho thẻ một vẻ ngoài lấp lánh và độc đáo. /br/ Thẻ với hiệu ứng hologram thường được sử dụng trong thẻ an ninh, thẻ giảm giá, thẻ thành viên cao cấp, v.v.",
        img: "../img/imgs_preview_banner/pic_18.jpg"
      },
      {
        title: "Kim tuyến",
        content: "Hiệu ứng kim tuyến tạo cho thẻ một vẻ ngoài lấp lánh và sang trọng. /br/ Thẻ với hiệu ứng kim tuyến thường được sử dụng trong thẻ quà tặng, thẻ lễ kỷ niệm, thẻ chúc mừng, v.v.",
        img: "../img/imgs_preview_banner/pic_19.jpg"
      },
      {
        title: "Lụa",
        content: "Hiệu ứng lụa tạo cho thẻ một vẻ ngoài mềm mại và sang trọng. /br/ Thẻ với hiệu ứng lụa thường được sử dụng trong thẻ VIP, thẻ danh tiếng, thẻ nhân viên cao cấp, v.v.",
        img: "../img/imgs_preview_banner/pic_20.jpg"
      },
      {
        title: "Nhám",
        content: "Hiệu ứng nhám tạo cho thẻ một vẻ ngoài chất liệu tự nhiên và độc đáo. /br/ Thẻ với hiệu ứng nhám thường được sử dụng trong thẻ thư viện, thẻ thông tin, thẻ tạm thời, v.v.",
        img: "../img/imgs_preview_banner/pic_21.jpg"
      }
    ]
  },
  order_notify :[
    {
      title: "Quy trình đặt hàng",
      content: "",
      img:'../img/thegioiinan-quytrinh.png'
    },
    {
      title: "Thông tin về sản phẩm và file in",
      content:
        "TGIA khuyến khích sử dụng hệ màu CMYK để thiết kế./br/Thành phẩm sẽ có dung sai ±1 mm nên TGIA khuyến khích anh chị thiết kế viền lớn hơn 3mm và khi thành phẩm sẽ có sự chênh lệch giữa các cạnh ±1 mm./br/TGIA chấp nhận file thiết kế xuất từ các phần mềm Adobe Illustrator (Ai), Photoshop (Psd), Indesign (Indd) và Corel (Cdr), xem thêm hướng dẫn xuất file tại đây./br/Các định dạng file có đuôi: psd, tiff, jpg, png… phải đạt độ phân giải 300dpi đối với hình ảnh và 400dpi đối với text./br/Đối với in offset, nếu file của anh chị có nền in màu đen, hãy chỉnh màu C: 20 M: 20 Y: 0 K: 100, nếu file của anh chị có chữ đen, hãy chỉnh màu C: 20 M: 0 Y: 0, K: 100./br/Đối với in kỹ thuật số, nếu file của anh chị có nền in màu đen, hãy chỉnh màu C: 20 M: 0 Y: 0 K: 100",
      img:'../img/he_mau.jpg'
     },
    {
      title: "Thanh toán & in ấn",
      content:
        "Để TGIA tiến hành xử lý đơn hàng, anh chị vui lòng đặt cọc 50% chi phí in ấn và 100% phí thiết kế (nếu anh chị yêu cầu TGIA thiết kế file riêng)./br/Nếu file của anh chị không in ấn được, TGIA sẽ hoàn trả lại số tiền mà anh chị đã đặt cọc./br/Anh chị vui lòng kiểm tra nội dung file in trước khi xác nhận, TGIA có trách nhiệm thực hiện đúng nội dung mà anh chị đã xác nhận./br/Thời gian in ấn sẽ được tính từ khi anh chị xác nhận file in"
    },
    {
      title: "Giao nhận & đổi trả",
      content:
        "Thời gian giao hàng sẽ được tính từ khi đơn hàng thành phẩm./br/Đối với anh chị có địa chỉ giao hàng ở ngoài TPHCM, thời gian giao hàng còn phụ thuộc vào đơn vị vận chuyển thứ 3./br/Nếu sản phẩm bị lỗi do kỹ thuật in, sản phẩm không đúng với các yêu cầu khi đặt hàng, Anh chị vui lòng liên hệ với TGIA trong vòng 05 ngày kể từ khi nhận hàng để được hỗ trợ xử lý./br/TGIA có trách nhiệm đổi trả sản phẩm cho anh chị nếu sản phẩm bị lỗi, TGIA không áp dụng quy đổi sản phẩm thành tiền để hoàn trả"
    }
  ]
  
  
}

const productOptions = {
  ma_ef: [
    ["Card Giấy C300", "bóng", "mờ", "Hologram", "kim tuyến"],
    ["Card Cứng 4k", "bóng", "lụa", "Hologram", "kim tuyến"],
    ["Card Nhựa PVC", "bóng", "nhám", "Hologram", "kim tuyến"],
    ["Card Polar"],
    ["Card Lenti"]
  ],
  size: [
    "60x90 mm",
    "85x55 mm",
    "54x86mm",
    "60x60mm",
    "90x54mm",
    "50x150mm"
  ],
  price: {
    unlimitedDesigns: [  
      { quantity: "10", price: "3" },
      { quantity: "50", price: "2.5" },
      { quantity: "100", price: "2.2" },
      { quantity: "300", price: "2" },
      { quantity: "Trên 500", price: "1.5" },
    ],
    limitedDesigns: {
      limit: "5",
      price_table:[  
        { quantity: "100", price: "2" },
        { quantity: "300", price: "1.5" },
        { quantity: "Trên 500", price: "1.2" },
      ], 
    },

    extra:[
      {
        add:"Cán Hologram:",
        price: "Thêm 0.5 k/cái"
      },
      {
        add:"Cán Kim tuyến:",
        price: "Thêm 1 k/cái"
      }
    ],


  }


};


const printArea={
  img: 
  ['../img/example_printing_area_v1.jpg',
    '../img/example_printing_area_v2.jpg']
}

const questionSet = [
  {
    ques: "Thẻ nhựa hay PVC có những ưu điểm gì?",
    ans: "Thẻ nhựa hay còn gọi là PVC là loại thẻ được làm từ nhựa, rất được ưa chuộng vì tính tiện dụng, độ bền cao và giá thành rẻ. Thay vì dùng thẻ giấy có giá in đắt nhưng không bền, người ta thường chuyển sang in thẻ nhựa để sử dụng thuận tiện hơn."
  },
  {
    ques: "Có những loại thẻ nào được sản xuất từ chất liệu giấy?",
    ans: "Có hai loại thẻ được làm từ chất liệu giấy là Card Giấy C300 và Card Cứng 4k. Card Giấy C300 có độ bền tương đối và giá thành phải chăng, trong khi Card Cứng 4k có độ cứng cao và chất lượng in ấn tốt."
  },
  {
    ques: "Thẻ nhựa PVC có những ưu điểm gì?",
    ans: "Card Nhựa PVC được làm từ chất liệu nhựa PVC cao cấp, có độ bền cao, chống nước và chất lượng in ấn sắc nét. Thẻ này đảm bảo khả năng sử dụng lâu dài và chịu được các điều kiện môi trường khác nhau."
  },
  {
    ques: "Thẻ Polar có đặc điểm gì?",
    ans: "Card Polar là loại thẻ có lớp phủ bề mặt bóng mờ, mang lại vẻ sang trọng và chuyên nghiệp cho các loại thẻ cao cấp."
  },
  {
    ques: "Có những hiệu ứng nào có thể được áp dụng cho thẻ?",
    ans: "Có nhiều hiệu ứng được áp dụng cho thẻ bao gồm bóng, mờ, hologram, kim tuyến, lụa và nhám. Mỗi hiệu ứng đều tạo ra vẻ ngoài độc đáo và thu hút sự chú ý cho thẻ."
  },
  {
    ques: "Có những dịch vụ giao hàng nào được cung cấp?",
    ans: "Công ty chúng tôi cung cấp dịch vụ giao hàng nhanh chóng và tin cậy. Chúng tôi đảm bảo sản phẩm được vận chuyển an toàn và đúng hẹn để đáp ứng nhu cầu của khách hàng."
  },
  {
    ques: "Có thể tái chế thẻ nhựa PVC được không?",
    ans: "Thẻ nhựa PVC không dễ tái chế do chất liệu nhựa cao cấp được sử dụng. Tuy nhiên, chúng có độ bền cao và có thể sử dụng trong thời gian dài, giúp giảm lượng thẻ giấy không cần thiết."
  },
  {
    ques: "Có thể sử dụng thẻ giấy trong thời gian ngắn không?",
    ans: "Card Giấy C300 là loại thẻ giấy phù hợp cho việc sử dụng tạm thời hoặc cần tái chế sau khi sử dụng. Chúng có giá thành phải chăng và dễ dàng tái chế."
  }
];

const relationProducts = [
  {
    productName: "Postcard",
    price: `${(Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)} k/cái`,
    love: `${(Math.random() * (3.0 - 0.5) + 0.5).toFixed(1)} k`
  },
  {
    productName: "Photostrip giấy C300",
    price: `${(Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)} k/cái`,
    love: `${(Math.random() * (3.0 - 0.5) + 0.5).toFixed(1)} k`
  },
  {
    productName: "Photobook (Sách Ảnh)",
    price: `${(Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)} k/cái`,
    love: `${(Math.random() * (3.0 - 0.5) + 0.5).toFixed(1)} k`
  },
  {
    productName: "Khung ảnh để bàn",
    price: `${(Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)} k/cái`,
    love: `${(Math.random() * (3.0 - 0.5) + 0.5).toFixed(1)} k`
  },
  {
    productName: "Khung Treo Tường",
    price: `${(Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)} k/cái`,
    love: `${(Math.random() * (3.0 - 0.5) + 0.5).toFixed(1)} k`
  },
  {
    productName: "Lịch Để bàn",
    price: `${(Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)} k/cái`,
    love: `${(Math.random() * (3.0 - 0.5) + 0.5).toFixed(1)} k`
  },
  {
    productName: "Sổ tay",
    price: `${(Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)} k/cái`,
    love: `${(Math.random() * (3.0 - 0.5) + 0.5).toFixed(1)} k`
  },
  {
    productName: "Sticker",
    price: `${(Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)} k/cái`,
    love: `${(Math.random() * (3.0 - 0.5) + 0.5).toFixed(1)} k`
  },
  {
    productName: "Poster",
    price: `${(Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)} k/cái`,
    love: `${(Math.random() * (3.0 - 0.5) + 0.5).toFixed(1)} k`
  },
  {
    productName: "Ảnh thẻ",
    price: `${(Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)} k/cái`,
    love: `${(Math.random() * (3.0 - 0.5) + 0.5).toFixed(1)} k`
  }
];

const contactInfor=[
  {
    avt:'https://via.placeholder.com/300x300',
    name:"Hà Đức Thắng",
    phone:"0123456789",
    email:"tzirw@example.com",
  },
  {
    avt:'https://via.placeholder.com/300x300',
    name:"Nguyễn Thị Hưng",
    phone:"0123456789",
    email:"tzirw@example.com",
  },
]

const product_preview={
  frames:[
      'NO8vzqREokE',
      '../img/imgs_preview_banner/pic_1.jpg',
      '../img/imgs_preview_banner/pic_6.jpg',
      '../img/imgs_preview_banner/pic_7.jpg',
      '../img/imgs_preview_banner/pic_8.jpg',
      '../img/imgs_preview_banner/pic_9.jpg',
      '../img/imgs_preview_banner/pic_10.jpg',
  ],
  thumbnail:[
      '../img/imgs_preview_banner/pic_3.jpg',
      '../img/imgs_preview_banner/pic_1.jpg',
      '../img/imgs_preview_banner/pic_6.jpg',
      '../img/imgs_preview_banner/pic_7.jpg',
      '../img/imgs_preview_banner/pic_8.jpg',
      '../img/imgs_preview_banner/pic_9.jpg',
      '../img/imgs_preview_banner/pic_10.jpg',
  ]
}

const product_preview_Sticker={
  frames:[
      'NO8vzqREokE',
      '../img/imgs_preview_banner/pic_11.jpg',
      '../img/imgs_preview_banner/pic_12.jpg',
      '../img/imgs_preview_banner/pic_13.jpg',
      '../img/imgs_preview_banner/pic_14.jpg',
      '../img/imgs_preview_banner/pic_15.jpg',
      '../img/imgs_preview_banner/pic_16.jpg',
  ],
  thumbnail:[
      '../img/imgs_preview_banner/pic_11.jpg',
      '../img/imgs_preview_banner/pic_11.jpg',
      '../img/imgs_preview_banner/pic_12.jpg',
      '../img/imgs_preview_banner/pic_13.jpg',
      '../img/imgs_preview_banner/pic_14.jpg',
      '../img/imgs_preview_banner/pic_15.jpg',
      '../img/imgs_preview_banner/pic_16.jpg',
  ]
}


function PostRender({product_infor}){
  // const test='abcdef <a>haha</a> ajas'

  const [products, setProducts] = useState()
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/product/all')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);
  // console.log(product_infor.name)
  return (
    <div className='post-render'>
      
      <ProductPreview product_preview={product_infor?.img}/>
      <BasicParamsRender product_infor={product_infor}/>
      {/* <OrderInfor contactInfor={contactInfor} /> */}
      <ProductOptionRender productOptions={productOptions}/>
      <ProductIntroduce productInfor={productInforSticker}/>
      {
        product_infor?.category==="Card bo góc"&&

        <PrintAre printArea={printArea}/>
      }
      {/* <Question questionSet={questionSet}/> */}
      <RelationProduct relationProducts={products?.products} currentProduct={product_infor}/>
      {/* <OrderInfor contactInfor={contactInfor}/> */}
      {/* <p>{test}</p> */}
    </div>
  )
}

function Product() {


  const [typeSprintListTrigger,setTypeSprintListTrigger]=useState(false);
  
  const _handleSetTypeSprintListTrigger=()=>{
    setTypeSprintListTrigger(!typeSprintListTrigger)
  }

  // //Get products list
  // //Get product name to render side column
  // const [productList,setProductList]=useState()
  
  // useEffect(() => {
  //     fetch('http://localhost:3001/api/v1/client/home/productList')
  //       .then(response => response.json())
  //       .then(data => setProductList(data))
  //       .catch(error => console.error(error));
  //   }, []);

  // //Get product from product_id
  const [product,setProduct]=useState()
  const currentURL = window.location.href;
  const product_id = currentURL.match(/productId=(\d+)/)[1];
  useEffect(() => {
      fetch(`http://localhost:3001/api/v1/product/get?productId=${product_id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error(error));
  }, []);

  // console.log(product);

  return (
    <>
      <div className='main'>
        <div className='product-content'>
          {product!==null&&
          
            <PostRender product_infor={product?.product}/>
          }
        </div>
        
      </div>
    </>
  );
}

export default Product;
