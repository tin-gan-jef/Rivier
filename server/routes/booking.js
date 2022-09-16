import express from "express";
import { createBooking, deleteBooking, getAllBookings, getBooking, updateBooking } from "../controllers/booking.js";
const router = express.Router()

// POST BOOKING
router.post('/new', createBooking)

// UPDATE BOOKING
router.put('/:id', updateBooking)

// DELETE BOOKING
router.delete('/:id', deleteBooking)

// Get All BOOKING
router.get('/:id', getBooking)

// Get BOOKING
router.get('/', getAllBookings)

export default router