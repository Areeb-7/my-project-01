import React, { useState } from 'react';
import { MapPin, Clock, Calendar, CreditCard, Phone } from 'lucide-react';
import PhoneNumberForm from './steps/PhoneNumberForm';
import AddressForm from './steps/AddressForm';
import SlotSelection from './steps/SlotSelection';
import DateTimeSelection from './steps/DateTimeSelection';
import CheckoutSummary from './steps/CheckoutSummary';
import StepIndicator from './StepIndicator';
import './styles.css'

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    phoneNumber: '',
    address: { area: '', city: '', state: '' },
    slot: '',
    date: null,
    time: '',
  });

  const steps = [
    { icon: Phone, label: 'Phone' },
    { icon: MapPin, label: 'Address' },
    { icon: Clock, label: 'Slot' },
    { icon: Calendar, label: 'Date & Time' },
    { icon: CreditCard, label: 'Checkout' },
  ];

  const handleNext = () => setStep(prev => Math.min(prev + 1, 5));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <StepIndicator currentStep={step} steps={steps} />

        <div className="mt-8">
          {step === 1 && (
            <PhoneNumberForm
              phoneNumber={bookingData.phoneNumber}
              onSubmit={({ phoneNumber }) => {
                setBookingData(prev => ({ ...prev, phoneNumber }));
                handleNext();
              }}
            />
          )}
          {step === 2 && (
            <AddressForm
              data={bookingData.address}
              onSubmit={(address) => {
                setBookingData(prev => ({ ...prev, address }));
                handleNext();
              }}
            />
          )}
          {step === 3 && (
            <SlotSelection
              selectedSlot={bookingData.slot}
              onSelect={(slot) => {
                setBookingData(prev => ({ ...prev, slot }));
                handleNext();
              }}
            />
          )}
          {step === 4 && (
            <DateTimeSelection
              selectedDate={bookingData.date}
              selectedTime={bookingData.time}
              onSelect={(date, time) => {
                setBookingData(prev => ({ ...prev, date, time }));
                handleNext();
              }}
            />
          )}
          {step === 5 && (
            <CheckoutSummary
              bookingData={bookingData}
              onEdit={(stepToEdit) => setStep(stepToEdit)}
              onCheckout={() => {
                console.log('Proceeding to checkout with:', bookingData);
              }}
            />
          )}
        </div>

        <div className="btn">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="back"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;