import db from '../models'
// const cloudinary = require('cloudinary').v2;

const generateOrderCode = () => {
  const timestamp = Date.now().toString(); // Lấy thời gian hiện tại dưới dạng chuỗi
  const randomDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0'); // Sinh số ngẫu nhiên và chuyển thành chuỗi 3 chữ số
  const orderCode = `${timestamp}${randomDigits}`; // Kết hợp thời gian và số ngẫu nhiên để tạo mã đơn hàng
  return orderCode;
};


export const createOrder = async (orderData) => {
  const t = await db.sequelize.transaction(); // Bắt đầu một transaction

  try {
    const { userId, nameReceive, address, phone, productList } = orderData;

    // Create the order
    const order = await db.Order.create(
      {
        userId,
        orderCode: generateOrderCode(),
        nameReceive,
        address,
        phone,
        status: 'pending', // Set the initial status of the order
      },
      { transaction: t } // Thêm transaction cho create order
      );
      
      // Create the order items
      const orderItems = [];
      for (const product of productList) {
        const { name, productId, material, size, effect, quantity, isDesigned, img_src } = product;
      const orderItem = await db.OrderItem.create(
        {
          orderId: order.id,
          productId,
          name,
          material,
          size,
          effect,
          quantity,
          isDesigned,
          img_src,
          sides,
        },
        { transaction: t } // Thêm transaction cho create order item
      );
      orderItems.push(orderItem);
    }

    await t.commit(); // Commit transaction nếu tất cả các hoạt động thành công
    return true;
  } catch (error) {
    await t.rollback(); // Rollback transaction nếu có lỗi
    return {
      err: 1,
      mes: error.message,
    };
  }
};


export const getAll = async (userId) => {
  try {
    const orders = await db.Order.findAll({
      where: {
        userId: userId,
      },
      include: [
        {
          model: db.OrderItem,
          include: {
            model: db.Product,
          },
        },
      ],
    });

    const result = orders.map((order) => {
      const orderData = {
        orderId: order.id,
        orderCode: order.orderCode,
        createdAt: order.createdAt,
        userId: order.userId,
        nameRecieve: order.nameReceive,
        address: order.address,
        phone: order.phone,
        productList: order.OrderItems.map((orderItem) => {
          return {
            name: orderItem.Product.name,
            productId: orderItem.Product.id,
            material: orderItem.material,
            size: orderItem.size,
            sides: orderItem.sides,
            effect: orderItem.effect,
            quantity: orderItem.quantity,
            isDesigned: orderItem.isDesigned,
            img_src: orderItem.img_src,
          };
        }),
      };
      return orderData;
    });

    if (result.length!==0) return {
      err: 0,
      mes: 'Got',
      orderLists: result
    };
    return {
      err: 0,
      mes: "You don't have any order",
    };
    
  } catch (error) {
    return res.status(500).json({
      err: 1,
      mes: 'Failed to retrieve orders',
      error: error.message
    });
  }
};

export const addToOrder = async (userId, dataToAdd) => {
  try {
      const newData = await db.Order.create({...dataToAdd, userId: userId});

      return {
        err: 0,
        mes: 'Created',
      };
  } catch (error) {
    return {
      err: 1,
      mes: 'Failed in retrieving order',
      error: error.message
    };
  }
};

export const deleteItem = async (req,res) => {
  try {
    const item = await db.Order.findByPk(req.orderId);

    if (!item) {
      return {
        err: 1,
        mes: 'Order not found'
      };
    }

    console.log(item);
    if (item.dataValues.userId==req.userId) {
      await item.destroy();
    }
    else{
      return {
        err: 1,
        mes: 'You are not allowed to delete this Item'
      }
    }

    return {
      err: 0,
      mes: 'Item deleted successfully'
    };
  } catch (error) {
    return {
      err: 2,
      msg: 'Failed retrieve data',
      error: error.message
    };
  }
};

export const updateItem = async(orderId,updatedData) => {
  try {
    await db.Order.update(updatedData, {where: {orderId: orderId}});

    return {
      err: 0,
      mes: 'Order updated successfully',
    };
  } catch (error) {
    return {
      err: 1,
      mes: 'Failed to update product',
      error: error.message
    };
  }
  
}