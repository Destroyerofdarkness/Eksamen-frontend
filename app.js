const express = require("express");

const app = express();

const cors = require("cors");

const path = require("path");

require("dotenv").config();

//Routes
const auth_routes = require("./routes/auth_routes")

//Config
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(cors({
    origin: process.env.ORIGIN,
    methods: ["GET","POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

//Used Routes
app.use(auth_routes);

//Server Start
app.listen(process.env.PORT, (req,res)=>{
        console.log("Server started Succesfully");
})