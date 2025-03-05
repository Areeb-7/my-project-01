import Booking from '../models/Booking.js';
import { validateRequest } from '../utils/validation.js';

export async function createBooking(req, res) {
  try {
    validateRequest(req, res);

    const booking = new Booking({
      ...req.body,
      customer: req.user.id
    });
    
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function getUserBookings(req, res) {
  try {
    const bookings = await Booking.find({ customer: req.user.id })
      .populate('service')
      .populate('provider', 'name phone');
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function updateBookingStatus(req, res) {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}