/** declare const */
export const DEFAULT_COLUMNS=[
    {
        name:"STT",
        display:"STT",
        status: true,
    }, 
    {
        name:"id_order",
        display:"ID đơn hàng",
        status: true,
    },
    {
        name:"id_user",
        display:"ID khách hàng", 
        status: true,
    },
    {
        name:"user_fullname",
        display:"Tên khách hàng", 
        status: true,
    },
    {
        name:"print_type",
        display:"Loại in",
        status: true,
    },
    {
        name:"material",
        display:"Chất liệu", 
        status: true,
    },
    {
        name:"effect",
        display:"Hiệu ứng", 
        status: true,
    },
    {
        name:"edited_imgs",
        display:"Ảnh đã qua chỉnh sửa", 
        status: true,
    },
    {
        name:"original_imgs",
        display:"Ảnh gốc", 
        status: true,
    },
    {
        name:"img_quantity",
        display:"Số lượng ảnh",
        status: true,
    },
    {
        name:"card_quantity",
        display:"Số lượng card",
        status: true,
    },
    {
        name:"unit_price",
        display:"Đơn giá", 
        status: true,
    },
    {
        name:"delivery_cost",
        display:"Chi phí giao hàng",
        status: true,
    },
    {
        name:"total_cost",
        display:"Tổng tiền",
        status: true,
    },
    {
        name:"order_date",
        display:"Thời gian đặt hàng",
        status: true,
    } ,
    {
        name:"delivery_date",
        display:"Thời gian giao hàng dự kiến",
        status: true,
    },
    {
        name:"order_status",
        display:"Tình trạng",
        status: true,
    } ,
    {
        name:"img_preview",
        display: "none",
        status:true
    }

]

export const DEFAULT_ORDER_STATUS=[
    "Đang xử lý", "Đang in", "Đang giao", "Hoàn thành","Đã hủy"
]

export const fake_data=[
    {
        id_order: Math.ceil(Math.random()*1000000),
        id_user: Math.ceil(Math.random()*1000000),
        user_fullname: "random Name",
        print_type: "random print type",
        material: "random material",
        effect: "random effect",
        edited_imgs: "./path_imgs",
        original_img: "./path_imgs",
        img_quantity: Math.ceil(Math.random()*10),
        card_quantity: Math.ceil(Math.random()*100),
        unit_price: Math.ceil(Math.random()*1000),
        delivery_cost: Math.ceil(Math.random()*10000),
        total_cost: Math.ceil(Math.random()*10000),
        order_date: "random date",
        delivery_date: "random date",
        order_status: DEFAULT_ORDER_STATUS[randomBetween(0,DEFAULT_ORDER_STATUS.length-1)],
        confirmed_order: false,
        payment_status:false,

        img_preview:[
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity:randomBetween(1,5),
                PrintStatus: true 
            }
        ]
    },

    {
        id_order: Math.ceil(Math.random()*1000000),
        id_user: Math.ceil(Math.random()*1000000),
        user_fullname: "random Name",
        print_type: "random print type",
        material: "random material",
        effect: "random effect",
        edited_imgs: "./path_imgs",
        original_img: "./path_imgs",
        img_quantity: Math.ceil(Math.random()*10),
        card_quantity: Math.ceil(Math.random()*100),
        unit_price: Math.ceil(Math.random()*1000),
        delivery_cost: Math.ceil(Math.random()*10000),
        total_cost: Math.ceil(Math.random()*10000),
        order_date: "random date",
        delivery_date: "random date",
        order_status: DEFAULT_ORDER_STATUS[randomBetween(0,DEFAULT_ORDER_STATUS.length-1)],
        confirmed_order: false,
        payment_status:false,
        img_preview:[
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity:randomBetween(1,5),
                PrintStatus: true 
            }
        ]
    },

    {
        id_order: Math.ceil(Math.random()*1000000),
        id_user: Math.ceil(Math.random()*1000000),
        user_fullname: "random Name",
        print_type: "random print type",
        material: "random material",
        effect: "random effect",
        edited_imgs: "./path_imgs",
        original_img: "./path_imgs",
        img_quantity: Math.ceil(Math.random()*10),
        card_quantity: Math.ceil(Math.random()*100),
        unit_price: Math.ceil(Math.random()*1000),
        delivery_cost: Math.ceil(Math.random()*10000),
        total_cost: Math.ceil(Math.random()*10000),
        order_date: "random date",
        delivery_date: "random date",
        order_status: DEFAULT_ORDER_STATUS[randomBetween(0,DEFAULT_ORDER_STATUS.length-1)],
        confirmed_order: false,
        payment_status:false,
        img_preview:[
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity:randomBetween(1,5),
                PrintStatus: true 
            }
        ]
    },

    {
        id_order: Math.ceil(Math.random()*1000000),
        id_user: Math.ceil(Math.random()*1000000),
        user_fullname: "random Name",
        print_type: "random print type",
        material: "random material",
        effect: "random effect",
        edited_imgs: "./path_imgs",
        original_img: "./path_imgs",
        img_quantity: Math.ceil(Math.random()*10),
        card_quantity: Math.ceil(Math.random()*100),
        unit_price: Math.ceil(Math.random()*1000),
        delivery_cost: Math.ceil(Math.random()*10000),
        total_cost: Math.ceil(Math.random()*10000),
        order_date: "random date",
        delivery_date: "random date",
        order_status: DEFAULT_ORDER_STATUS[randomBetween(0,DEFAULT_ORDER_STATUS.length-1)],
        confirmed_order: false,
        payment_status:false,
        img_preview:[
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity:randomBetween(1,5),
                PrintStatus: true 
            }
        ]
    },

    {
        id_order: Math.ceil(Math.random()*1000000),
        id_user: Math.ceil(Math.random()*1000000),
        user_fullname: "random Name",
        print_type: "random print type",
        material: "random material",
        effect: "random effect",
        edited_imgs: "./path_imgs",
        original_img: "./path_imgs",
        img_quantity: Math.ceil(Math.random()*10),
        card_quantity: Math.ceil(Math.random()*100),
        unit_price: Math.ceil(Math.random()*1000),
        delivery_cost: Math.ceil(Math.random()*10000),
        total_cost: Math.ceil(Math.random()*10000),
        order_date: "random date",
        delivery_date: "random date",
        order_status: DEFAULT_ORDER_STATUS[randomBetween(0,DEFAULT_ORDER_STATUS.length-1)],
        confirmed_order: false,
        payment_status:false,
        img_preview:[
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity:randomBetween(1,5),
                PrintStatus: true 
            }
        ]
    },

    {
        id_order: Math.ceil(Math.random()*1000000),
        id_user: Math.ceil(Math.random()*1000000),
        user_fullname: "random Name",
        print_type: "random print type",
        material: "random material",
        effect: "random effect",
        edited_imgs: "./path_imgs",
        original_img: "./path_imgs",
        img_quantity: Math.ceil(Math.random()*10),
        card_quantity: Math.ceil(Math.random()*100),
        unit_price: Math.ceil(Math.random()*1000),
        delivery_cost: Math.ceil(Math.random()*10000),
        total_cost: Math.ceil(Math.random()*10000),
        order_date: "random date",
        delivery_date: "random date",
        order_status: DEFAULT_ORDER_STATUS[randomBetween(0,DEFAULT_ORDER_STATUS.length-1)],
        confirmed_order: false,
        payment_status:false,
        img_preview:[
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity:randomBetween(1,5),
                PrintStatus: true 
            }
        ]
    },

    {
        id_order: Math.ceil(Math.random()*1000000),
        id_user: Math.ceil(Math.random()*1000000),
        user_fullname: "random Name",
        print_type: "random print type",
        material: "random material",
        effect: "random effect",
        edited_imgs: "./path_imgs",
        original_img: "./path_imgs",
        img_quantity: Math.ceil(Math.random()*10),
        card_quantity: Math.ceil(Math.random()*100),
        unit_price: Math.ceil(Math.random()*1000),
        delivery_cost: Math.ceil(Math.random()*10000),
        total_cost: Math.ceil(Math.random()*10000),
        order_date: "random date",
        delivery_date: "random date",
        order_status: DEFAULT_ORDER_STATUS[randomBetween(0,DEFAULT_ORDER_STATUS.length-1)],
        confirmed_order: false,
        payment_status:false,
        img_preview:[
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity:randomBetween(1,5),
                PrintStatus: true 
            }
        ]
    },

    {
        id_order: Math.ceil(Math.random()*1000000),
        id_user: Math.ceil(Math.random()*1000000),
        user_fullname: "random Name",
        print_type: "random print type",
        material: "random material",
        effect: "random effect",
        edited_imgs: "./path_imgs",
        original_img: "./path_imgs",
        img_quantity: Math.ceil(Math.random()*10),
        card_quantity: Math.ceil(Math.random()*100),
        unit_price: Math.ceil(Math.random()*1000),
        delivery_cost: Math.ceil(Math.random()*10000),
        total_cost: Math.ceil(Math.random()*10000),
        order_date: "random date",
        delivery_date: "random date",
        order_status: DEFAULT_ORDER_STATUS[randomBetween(0,DEFAULT_ORDER_STATUS.length-1)],
        confirmed_order: false,
        payment_status:false,
        img_preview:[
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity:randomBetween(1,5),
                PrintStatus: true 
            }
        ]
    },

    {
        id_order: Math.ceil(Math.random()*1000000),
        id_user: Math.ceil(Math.random()*1000000),
        user_fullname: "random Name",
        print_type: "random print type",
        material: "random material",
        effect: "random effect",
        edited_imgs: "./path_imgs",
        original_img: "./path_imgs",
        img_quantity: Math.ceil(Math.random()*10),
        card_quantity: Math.ceil(Math.random()*100),
        unit_price: Math.ceil(Math.random()*1000),
        delivery_cost: Math.ceil(Math.random()*10000),
        total_cost: Math.ceil(Math.random()*10000),
        order_date: "random date",
        delivery_date: "random date",
        order_status:DEFAULT_ORDER_STATUS[randomBetween(0,DEFAULT_ORDER_STATUS.length-1)],
        img_preview:[
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity: randomBetween(1,5),
                PrintStatus: true 
            },
            {
                img:"https://via.placeholder.com/100x150",
                quantity:randomBetween(1,5),
                PrintStatus: true 
            }
        ]
    },
]


export const imgs={
    slider:[
        'https://via.placeholder.com/1200x400',
        'https://via.placeholder.com/1200x400',
        'https://via.placeholder.com/1200x400',
        'https://via.placeholder.com/1200x400',
    ],
    logo:[
        'https://via.placeholder.com/400x400',
        'https://via.placeholder.com/400x400',
        'https://via.placeholder.com/400x400',
        'https://via.placeholder.com/400x400',
    ]
}

export const policiesAndPromotions =[
    'Sản phẩm tiêu biểu 1',
    'Sản phẩm tiêu biểu 2',
    'Sản phẩm tiêu biểu 3'
]

export const contactsFake=[
    {
        name: "Facebook",
        icon: "RiFacebookCircleFill",
        link: "",
    },
    {
        name: "Instagram",
        icon: "RiInstagramFill",
        link: "",
    },
    {
        name: "YouTube",
        icon: "RiYoutubeFill",
        link: "",
    },
    {
        name: "Twitter",
        icon: "BsTwitter",
        link: "",
    },
    {
        name: "Pinterest",
        icon: "BsPinterest",
        link: "",
    },
    {
        name: "TikTok",
        icon: "FaTiktok",
        link: "",
    },
    {
        name: "Phone",
        icon: "FaPhoneAlt",
        link: "",
    },
    {
        name: "Email",
        icon: "IoMail",
        link: "",
    },
    {
        name: "Zalo",
        icon: "SiZalo",
        link: "",
    },
]

/**declare function */
export function randomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}