import React, { useState } from 'react';
import { X, Calendar, Clock, Stethoscope, CheckCircle2, User as UserIcon, Phone, Mail, Sparkles } from 'lucide-react';
import { Doctor } from '../types';
import { DOCTORS } from '../data/karatData';
import { bookConsultation } from '../services/firestoreService';
import { User as FirebaseUser } from 'firebase/auth';

interface DoctorBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDoctor?: Doctor | null;
  currentUser: FirebaseUser | null;
}

const TIME_SLOTS = [
  '10:00 AM - 10:30 AM',
  '11:30 AM - 12:00 PM',
  '02:00 PM - 02:30 PM',
  '04:00 PM - 04:30 PM',
  '06:00 PM - 06:30 PM',
  '07:30 PM - 08:00 PM'
];

export const DoctorBookingModal: React.FC<DoctorBookingModalProps> = ({
  isOpen,
  onClose,
  selectedDoctor,
  currentUser,
}) => {
  const [doctorId, setDoctorId] = useState<string>(selectedDoctor?.id || DOCTORS[0].id);
  const [date, setDate] = useState(new Date(Date.now() + 86400000).toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[0]);
  const [userName, setUserName] = useState(currentUser?.displayName || '');
  const [userEmail, setUserEmail] = useState(currentUser?.email || '');
  const [userPhone, setUserPhone] = useState('');
  const [symptoms, setSymptoms] = useState('Dosage guidance for joint flexibility, morning empty stomach consumption, and family Agni balance');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [appointmentId, setAppointmentId] = useState('');

  if (!isOpen) return null;

  const currentDoctor = DOCTORS.find(d => d.id === doctorId) || DOCTORS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !userPhone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await bookConsultation({
        userId: currentUser?.uid,
        userName,
        userEmail,
        userPhone,
        doctorName: currentDoctor.name,
        date,
        timeSlot,
        symptoms
      });

      setAppointmentId(res.id);
      setIsSuccess(true);
    } catch (err) {
      console.error('Failed to book consultation:', err);
      alert('Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fffdfa] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#ebdcc4] animate-in zoom-in-95">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#ebdcc4] bg-[#fbf7ee] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#fdf6e2] text-[#b8860b] border border-[#d4af37]/40 flex items-center justify-center shadow-xs">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-black text-[#1c1815]">
                {isSuccess ? 'Consultation Confirmed' : 'Book Free Vaidya Tele-Consultation'}
              </h2>
              <p className="text-xs text-[#786450]">
                Senior Ayurvedic Physician Guidance on 24 KARAT Bilona Ghee (Complimentary)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black rounded-full hover:bg-gray-200/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-6 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#fdf6e2] text-[#b8860b] border border-[#d4af37]/50 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-black text-[#1c1815]">
                Consultation Reserved with {currentDoctor.name}!
              </h3>
              <p className="text-xs sm:text-sm text-[#675442] mt-2 max-w-sm mx-auto">
                Consultation Ref: <strong>#{appointmentId}</strong>. A tele-consultation link and WhatsApp reminder have been scheduled for <strong>{date}</strong> at <strong>{timeSlot}</strong>.
              </p>
            </div>

            <div className="bg-[#fbf7ee] p-4 rounded-2xl border border-[#ebdcc4] text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-gray-500">Ayurvedic Vaidya:</span>
                <span className="font-bold text-[#1c1815]">{currentDoctor.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Specialization:</span>
                <span className="text-[#1c1815]">{currentDoctor.specialty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Client:</span>
                <span className="text-[#1c1815]">{userName} ({userPhone})</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#332a21] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            
            {/* Doctor Selection */}
            <div>
              <label className="text-xs font-black text-[#1c1815] uppercase tracking-wider block mb-2">
                1. Select Ayurvedic Vaidya
              </label>
              <select
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b] text-[#1c1815] font-medium"
              >
                {DOCTORS.map(doc => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} - {doc.role} ({doc.specialty})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-black text-[#1c1815] uppercase tracking-wider block mb-1.5">
                  Consultation Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                />
              </div>

              <div>
                <label className="text-xs font-black text-[#1c1815] uppercase tracking-wider block mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                >
                  {TIME_SLOTS.map((slot, i) => (
                    <option key={i} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Patient Contact Info */}
            <div>
              <label className="text-xs font-black text-[#1c1815] uppercase tracking-wider block mb-2">
                2. Contact Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="px-3 py-2 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="px-3 py-2 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Mobile *"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="px-3 py-2 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                />
              </div>
            </div>

            {/* Health goals description */}
            <div>
              <label className="text-xs font-black text-[#1c1815] uppercase tracking-wider block mb-1.5">
                Health Goals or Questions for the Vaidya
              </label>
              <textarea
                rows={2}
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="e.g. Empty stomach ghee ritual, joint pain, children memory, or digestion..."
                className="w-full px-3.5 py-2 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Reserving Vaidya Slot...' : 'Confirm Free Vaidya Consultation'}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
