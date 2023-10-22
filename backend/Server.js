const express = require ("express")
const  mongoose = require ("mongoose") 
require("dotenv").config()

const routes= require("./routes/TaskRoute.JS")

const cors = require ("cors")
const app=  express()
const PORT = 5000
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log(err))

app.use("/api",routes)


app.listen(PORT, ()=> console.log (`listening on ${PORT}`))
