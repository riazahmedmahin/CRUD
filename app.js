// app.js
import express from "express";


import router from "./routers/itemRoutes.js"
import mongoose from "mongoose";


const PORT = 3000
const app = express();
const DATABASE= 'mongodb+srv://riazahmedmahin:mahin60@cluster0.ihs08.mongodb.net/CURD?retryWrites=true&w=majority&appName=Cluster0'



// Middleware


app.use(express.json()); // To handle JSON payloads


//app.use(express.urlencoded({ extended: true }));

// Use the router
app.use("/api", router);

//connect momgodb
mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log("mongodb connceted")
}).catch(()=>{
    console.log("mongodb disconnected")
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});