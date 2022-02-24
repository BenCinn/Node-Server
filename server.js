// Define the packages and its helper.
const exp = require("express") // Handle the Server Load
const hash = require("js-sha512") // Handle the encryption
const fs = require("fs") // Handle The File System
const app = exp() // Express Helper
const colors = require("colors") // Add the colors to console.log()
const { exec } = require('child_process') // Handle the code execution
const path = require('path') // Handle the path system

// Setup the "userid" folder (Won't create if the folder if exist)
if (!fs.existsSync("userid/")){
    console.log("userid/ is not exist, creating the folder.")
    fs.mkdirSync("userid/")
}

// Home Page
app.get('/', function(req, res){
    // Send the index.html
    res.sendFile(path.join(__dirname, "/html/index.html"))
})

// CSS Handler
app.get('/css/:css', function(req, res){
    res.sendFile(path.join(__dirname, "/html/css", req.params.css))
})

// Registration API
app.get('/registapi/id=:id/pw=:pw', function(req, res){
    // Check if user existed
    fs.stat("userid/" + req.params.id, function(err, stat) {
    if(err == null) {
        // User already exist
        res.send("User already exist.")
        console.log("ERROR> ".red + "User already exist")
    }
    else {
        res.send("ID: " + req.params.id + " Register successfully")
        // Hash the password, then store the password at ./userid/[username]
        exec("echo " + hash.sha512(req.params.pw) + " >> userid/" + req.params.id)
    }
    })
})

// Login API
app.get('/loginapi', async function(req, res) {
    if (req.query.id == null || req.query.pw == null){res.send("Login Page ERROR")} // Not enough information
    else {
        let id = req.query.id
        let pw = req.query.pw
        fs.readFile('userid/' + id, 'utf8', function (err, data) {if (err) {return res.send("Wrong Username!")} // Read the password hash stored.
            if (data.includes(hash.sha512(pw)) == true) {res.send("Login Successfully!")} // Correct password ( data.includes seems to be the only solution. )
            else {res.send("Wrong Password!")} // Wrong password
        })
    }
});

// Login Page
app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, "/html/login.html"))
})

// 404 Error Handler
app.use(function(req, res, next) {
    var fullUrl = req.protocol + '://' + req.get('host') // Get the home page url.
    console.log("404 Error.".yellow + " Path> " + req.url)
    return res.status(404).send('<title>Oops.</title>'+req.url+' Not found.<br>Go back to <a href=' + fullUrl + '>home page<a> if your want.')
});

// 500 Error Handler
app.use(function(err, req, res, next) {
    var fullUrl = req.protocol + '://' + req.get('host') // Get the home page url.
    console.log("500 Server ERROR.".bgRed + " Path> " + req.url)
    return res.status(500).send('<html><head><title>Oops.</title>Oops. Server error lol.<br>Go back to <a href=' + fullUrl + '>home page<a> if your want, But that probably not even work.</head></html>') // Return the 500 error page.
});

// Start The Server
app.listen('5000', () => console.log(`Listening on port 5000..`.green))
