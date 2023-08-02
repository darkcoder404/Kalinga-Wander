import express from 'express'
import { createBooking, getAllBooking, getAllBookingCount } from '../Controllers/bookingController.js'
import {  verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', createBooking)
//router.get('/:id', verifyAdmin, getBooking)
router.get('/getAllBooking', getAllBooking)

router.get('/getAllBookingCount', getAllBookingCount)
export default router