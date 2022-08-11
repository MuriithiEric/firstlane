function sendMail() {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    from_email: document.getElementById("fromEmail").value,
    message: document.getElementById("msg").value,
    phone_number: document.getElementById("fromPhone").value,

    fundingone: document.getElementById("fundingme").value,
    fundingtwo: document.getElementById("fundingrents").value,
    fundingthree: document.getElementById("fundingscho").value,

    levelone: document.getElementById("foundation").value,
    leveltwo: document.getElementById("undergrad").value,
    levelthree: document.getElementById("postgrad").value,

    passportone: document.getElementById("yespassport").value,
    passporttwo: document.getElementById("nopassport").value,
  };

  emailjs
    .send("service_qrhnqpq", "template_par0ydh ", tempParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
    });
}
