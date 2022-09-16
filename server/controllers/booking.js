import Booking from "../models/Booking.js"


// CREATING BOOKING
export const createBooking = async(req, res)=>{
    try {
        const newBooking = new Booking(req.body)
        const booking = await newBooking.save()
        res.status(200).json(booking)
    } catch (error) {
        res.status(500).json(error)
    }
}


// UPDATE BOOKING
export const updateBooking = async(req, res)=>{
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(booking)
    } catch (error) {
        res.status(500).json(error)
    }
}

// DELETE BOOKING
export const deleteBooking = async(req, res)=>{
    try {
        const delete_Booking = await Booking.findByIdAndDelete(req.params.id)
        res.status(200).json(`Booking ${delete_Booking.first_name} Deleted Successfully!`)
    } catch (error) {
        res.status(500).json(error)
    }
}


// GET BOOKING
export const getBooking= async(req, res)=>{
    try {
        const eachBooking = await Booking.findById(req.params.id)
        res.status(200).json(eachBooking)
    } catch (error) {
        res.status(500).json(error)
    }
}


// GET ALL BOOKING
export const getAllBookings = async(req, res)=>{
    try {
        const allBookings = await Booking.find()
        res.status(200).json(allBookings)
    } catch (error) {
        next(error)
    }
}
