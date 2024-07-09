const nodemailer = require("nodemailer");
const customerService = require("../services/customer.service");

const sendOrderEmail = async (orderDetails, order_id, message) => {
  console.log("id in email sender ", order_id);
  console.log("msg in email sender ", message);

  try {
    // const [orderData] = await getOrderByID(order_id);
    console.log("in email", orderDetails);
    if (!orderDetails) {
      throw new Error("Order not found");
    }

    const customer_id = orderDetails.customer_id;
    const order_hash = orderDetails.order_hash;

    console.log("Customer email: ", customer_id);
    console.log("Order hash: ", order_hash);

    //get customer by id
    const customer = await customerService.getCustomerById(customer_id);

    const customer_email = customer[0].customer_email;

    console.log("in email send email", customer_email);

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 587,
      secure: false,
      auth: {
        user: "G3autorepair@yahoo.com",
        pass: "ixkylyhnqqkzlqnr",
      },
      logger: true,
      debug: true,
    });

    const orderUrl = `http://g3autorepair.com/admin/order/${order_id}/${order_hash}`;

    console.log(orderUrl);

    let info = await transporter.sendMail({
      from: '"G3 Auto Repair" <G3autorepair@yahoo.com>',
      to: customer_email,
      subject: "Your Order Details and Progress",
      text: `${message}. You can view your order details and progress at the following link: ${orderUrl}`,
      html: `<p>${message}. You can view your order details at the following link: <a href="${orderUrl}">${orderUrl}</a></p>`,
    });

    console.log("Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

module.exports = {
  sendOrderEmail,
};
