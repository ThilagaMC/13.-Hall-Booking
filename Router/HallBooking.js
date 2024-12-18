import express from 'express';

const Booking_router = express.Router();
const BookingHall=[];

// Creating Room
Booking_router.post('/create', (req, res) => {
    try{
        const { name, date, Starttime, endtime, roomId } =req.body;
        const booking={
            id: Date.now().toString(),
            name,
            date,
            Starttime,
            endtime,
            roomId,
        }
        BookingHall.push(booking);
        res.status(201).json(booking);

    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

// Booking a Room

Booking_router.post('/book', (req, res) => {
    try{
    const { name, date, Starttime,endtime,roomId } = {...req.body,id:Date.now().toString()};
    const booking = BookingHall.find(room => room.id === id);
    if(!booking) return res.status(404).json({error: 'Room not found'});
    booking.booked = true;
    booking.bookedBy = name;
    booking.bookedDate = date;
    booking.bookedTime = Starttime;
    booking.endtime=endtime;
    booking.roomID=roomId;
    res.status(200).json(booking);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

// List all the Rooms with BookedData

Booking_router.get('/rooms', (req, res) => {
    try{
        res.json(BookingHall);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

//List all the customers with Booked data in
Booking_router.get('/customers',(req, res)=>{
    try{
        const customers = BookingHall.filter(booking => booking.booked);
        res.json(customers);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})

// List How many times a customer has booked the room with Customer Name, Room Name, Date, StartTime, End Time, Booking ID, Booking date,Booking status

Booking_router.get('/customer_booking_history/:name', (req, res) => {
    try{
        const { name } = req.params;
        const customerBookings = BookingHall.filter(booking => booking.bookedBy === name);
        res.json(customerBookings);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});
export default Booking_router;
