const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbgr = require("debug")("development:app.js");
const {loginRoute} = require("./routes/loginRoute");
const {contactRoute} = require("./routes/contactRoute");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
}));


app.use((req,res,next)=>{
    dbgr("Middleware working");
    next();
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


try{
    
    app.use("/api/contact", contactRoute);
    app.use("/api/user",loginRoute);
}catch(err){
    dbgr(err.message);
};

app.use((err,req,res,next)=>{
    res.status(500).send("internal server error");
    next();
});


app.get("/",(req,res)=>{
    res.status(200).send("Hello from server");
});

app.listen(PORT,()=>{
    dbgr(`Server is running on port ${PORT}`);
});