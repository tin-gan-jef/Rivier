import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import bookingRoutes from './routes/booking.js'
import adminRoutes from './routes/auth.js'
import cors from 'cors'
import path from 'path';

dotenv.config()
const app = express()


app.use(express.json())
app.use(cors())


const mongo_connection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Mongo Connection Successfully')
      } catch (error) {
        handleError(error);
      }
}



app.use('/api/booking', bookingRoutes)
app.use('/api/auth', adminRoutes)

// --------------------- Deployment --------------------
const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client/build")))

  app.use("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  });
}


app.listen(process.env.PORT, ()=>{
    mongo_connection()
    console.log(`Server running on port : ${process.env.PORT}`)
})