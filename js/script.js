function sendMail() {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    from_email: document.getElementById("fromEmail").value,
    message: document.getElementById("msg").value,
    phone: document.getElementById("fromPhone").value,

    fundingone: document.getElementById("fundingme").value,
    // fundingtwo: document.getElementById("fundingrents").value,
    // fundingthree: document.getElementById("fundingscho").value,

    levelone: document.getElementById("foundation").value,
    // leveltwo: document.getElementById("undergrad").value,
    // levelthree: document.getElementById("postgrad").value,

    passportone: document.getElementById("yespassport").value,
    // passporttwo: document.getElementById("nopassport").value,
  };

  emailjs
    .send("service_qrhnqpq", "template_xa3ml6k", tempParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
    });
}

function sendOtherMail() {
  var tempParams = {
    f_name: document.getElementById("frName").value,
    f_email: document.getElementById("frEmail").value,
    mess: document.getElementById("frMsg").value,
  };

  emailjs
    .send("service_qrhnqpq", "template_42qa4f2", tempParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
    });
}
