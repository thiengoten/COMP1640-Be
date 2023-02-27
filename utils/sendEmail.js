  const nodemailer = require("nodemailer");

  const sendEmail = async (email, username) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PASSWORD,
        },
      });
  
      await transporter.sendMail({
        from: 'no-reply@blogspot.com',
        to: email,
        subject: "Verify Email",
        html: `<div><h1>Hi ${email}</h1><br/><p>Click the button to verify your email</p></div>`,
      });
      console.log("email sent sucessfully");
    } catch (error) {
      console.log("email not sent");
      console.log(error);
    }
  };
  
  module.exports = {
    sendEmail,
  };