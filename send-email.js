// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('M0aYbT4hlNeaXMuvO2tdag');

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"amal.mehta@gmail.com",
        "to":[{"email":"amal.mehta@gmail.com"}],
        "subject": "Sending a text email from the Mandrill API",
        "text": ""
    }
};

function sendTheMail() {
// Send the email!

    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}