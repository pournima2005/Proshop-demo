import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc  Create new order
// @route POST/api/orders
// @access Private

const addOrderItems= asyncHandler(async (req,res)=>{
        //res.json('add order items');
          const{ orderItems,
               shippingAddress,
               paymentMethod,
               itemsPrice,
               taxPrice,
               shippingPrice,
               totalPrice
          }= req.body;

          if(orderItems && orderItems.length===0){
                res.status(400);
                throw new Error('No order Items');   
          }
          else{
               const order= new Order({     //refer  oderModel
                    orderItems:orderItems.map((x)=>({
                         ...x, product:x._id,
                         _id:undefined
                    })) ,
                    user:req.user._id,
                    shippingAddress,
                    paymentMethod,
                     itemsPrice,
                    taxPrice,
                    shippingPrice,
                    totalPrice
                    
               });

               const createdOrder=await order.save();
               res.status(201).json(createdOrder);
          }




});


// @desc Get logged in user orders   
// @route GET/api/orders/myorders
// @access Private

const getMyOrders= asyncHandler(async (req,res)=>{
        //res.json('get my orders');
        const orders= await Order.find({user: req.user._id});
        res.status(200).json(orders);  



});

// @desc  get order by Id
// @route GET/api/orders/:id
// @access Private

const  getOrderById= asyncHandler(async (req,res)=>{
        //res.json('get order by id');
        const order = await Order.findById(req.params.id).populate('user',
          'name email'
        );  // Add user's name and email in order info from user collection

        if(order){
            res.status(200).json(order);
        }
        else{
           res.status(404);
           throw new Error('Order not found');
        }

});


// @desc  Update order to paid
// @route PUT/api/orders/:id/pay
// @access Private

const updateOrderToPaid= asyncHandler(async (req,res)=>{
        //res.json('Update order to paid');
         const order= await Order.findById(req.params.id);
         
         if(order){
              order.isPaid=true;
              order.paidAt=Date.now();
              order.paymentResult={
                  id:req.body.id,
                  status:req.body.status,
                  update_time:req.body.update_time,
                  email_address:req.body.email_address,
              };

              const updatedOrder= await order.save();
              res.staus(200).json(updatedOrder);
         }else{
            res.status(404);
            throw new Error("Order not found");
         }

});

// @desc  Update order to  Deliverd
// @route PUT/api/orders/:id/deliver
// @access Private

const updateOrderToDeliverd = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save(); // Consistency in naming

    res.status(200).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc   GET all Orders
// @route GET/api/orders  
// @access Private/Admin

const  getOrders= asyncHandler(async (req,res)=>{
        // res.json('Get all orders');
        const orders =await Order.find({}).populate('user','id name');
        res.status(200).json(orders);


});


export {
     getMyOrders,
     getOrderById,
     getOrders,
     updateOrderToDeliverd,
     updateOrderToPaid,
     addOrderItems,
}
