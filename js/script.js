function sendMail() {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    from_email: document.getElementById("fromEmail").value,
    message: document.getElementById("msg").value,
  };

  emailjs
    .send("service_qrhnqpq", "template_par0ydh ", tempParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
    });
}
