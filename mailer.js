
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Godaddy',
  auth: {
    user: 'tobi.babalola@digimatix.tech',
    pass: '@Babalola1993'
  }
});

var mailOptions = {
  from: 'tobi.babalola@digimatix.tech',
  to: 'easycom2011@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'

};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
