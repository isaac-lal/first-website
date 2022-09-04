function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "isaaclal124@gmail.com",
        Password: "tkpcipgofenzuvdu",
        To: 'isaaclal124@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Contact from isaaclal.com!",
        Body: "Name:" + document.getElementById("name").value
              + "<br> Email: " + document.getElementById("email").value
              + "<br><br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Thank you for filling out the form!")
    );
}