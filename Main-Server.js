import express from 'express';
import Booking_router from './Router/HallBooking.js';

const app = express();
app.use(express.json());


app.use("/HallBooking", Booking_router)

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})