// Define the packages and its helper.
const exp = require("express") // Handle the Server Load
const hash = require("js-sha512") // Handle the encryption
const fs = require("fs") // Handle The File System
const app = exp() // Express Helper
const chalk = require("chalk") // Add the colors to console.log()
const { exec } = require('child_process') // Handle the code execution
const path = require('path') // Handle the path system
const helmet = require('helmet')

// Setup the "userid" folder (Won't create if the folder if exist)
if (!fs.existsSync("userid/")){
    console.log("userid/ is not exist, creating the folder.")
    fs.mkdirSync("userid/")
}

app.use(helmet())

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
app.get('/registapi', function(req, res){
    // Check if user existed
    fs.stat("userid/" + req.query.id, function(err, stat) {
    if(err == null) {
        // User already exist
        res.send("User already exist.")
        console.log(chalk.red.bold("ERROR> ") + "User already exist")
    }
    else {
        res.send("ID: " + req.query.id + " Register successfully")
        // Hash the password, then store the password at ./userid/[username]
        fs.writeFileSync("./" + req.query.id, hash.sha512(req.query.pw));
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
})

// Login Page
app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, "/html/login.html"))
})

// Add the register Page
app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, "/html/register.html"))
})

// 404 Error Handler
app.use(function(req, res, next) {
    console.log(chalk.yellow("404 No File.") + " Path> " + req.url)
    res.status(404).send('<head><title>404</title><style type="text/css"></style></head><body></body></html>')
})

// 500 Error Handler
app.use(function(err, req, res, next) {
    console.log(chalk.red.bold("500 Server ERROR.") + " Path> " + req.url)
    res.status(500).send('<head><title>500</title><style type="text/css"></style></head><body></body></html>')
})

// Start The Server
app.listen('5000', () => console.log(chalk.green(`Listening on port 5000, Press any key to stop the server and exit..`)))

// Exit Script
process.stdin.setRawMode(true)
process.stdin.resume()
process.stdin.on('data', process.exit.bind(process, 0))