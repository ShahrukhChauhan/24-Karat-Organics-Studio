import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Sparkles } from 'lucide-react';
import { CartItem, Order } from '../types';
import { createOrder } from '../services/firestoreService';
import { User as FirebaseUser } from 'firebase/auth';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  appliedCoupon: string;
  currentUser: FirebaseUser | null;
  onOrderSuccess: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  appliedCoupon,
  currentUser,
  onOrderSuccess,
}) => {
  const [fullName, setFullName] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi' | 'card'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const isCouponValid = appliedCoupon === 'GOLDEN24' || appliedCoupon === 'BILONA251' || appliedCoupon === 'AYURVEDA251';
  const discount = isCouponValid ? 250 : 0;
  const finalTotal = Math.max(0, subtotal - discount);

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !address || !city || !pincode) {
      alert('Please fill out all required shipping details.');
      return;
    }

    setIsSubmitting(true);
    try {
      const order = await createOrder({
        userId: currentUser?.uid || 'guest-' + Date.now(),
        items,
        totalAmount: subtotal,
        discountAmount: discount,
        finalAmount: finalTotal,
        couponApplied: appliedCoupon || undefined,
        customerDetails: {
          fullName,
          email,
          phone,
          address,
          city,
          pincode
        },
        paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : paymentMethod === 'upi' ? 'UPI Instant Pay' : 'Debit/Credit Card'
      });

      setPlacedOrder(order);
      onOrderSuccess(order);
    } catch (err) {
      console.error('Order creation failed:', err);
      alert('Could not place order. Please check network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fffdfa] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#ebdcc4] animate-in zoom-in-95">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#ebdcc4] bg-[#fbf7ee] flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-black text-[#1c1815]">
              {placedOrder ? '24 KARAT Order Confirmed!' : 'Secure Delivery & Checkout'}
            </h2>
            <p className="text-xs text-[#786450] mt-0.5">
              {placedOrder ? 'Thank you for choosing 24 KARAT Buffalo Bilona Desi Ghee' : 'Direct Dispatch from 24 KARAT Certified Bilona Gaushala'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black rounded-full hover:bg-gray-200/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success State */}
        {placedOrder ? (
          <div className="p-6 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#fdf6e2] text-[#b8860b] border border-[#d4af37]/50 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-black text-[#1c1815]">Order #{placedOrder.id} Placed!</h3>
              <p className="text-xs sm:text-sm text-[#675442] mt-2 max-w-md mx-auto">
                Your 24 KARAT handcrafted ghee jar is being prepared with tamper-evident foam packaging. Tracking updates sent to <strong>{placedOrder.customerDetails.email}</strong>.
              </p>
            </div>

            <div className="bg-[#fbf7ee] p-4 rounded-2xl border border-[#ebdcc4] text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between font-black text-[#1c1815]">
                <span>Total Amount:</span>
                <span className="text-[#854d0e]">₹{placedOrder.finalAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#675442]">
                <span>Payment Mode:</span>
                <span>{placedOrder.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-[#675442]">
                <span>Delivery Address:</span>
                <span className="truncate max-w-[200px]">{placedOrder.customerDetails.address}, {placedOrder.customerDetails.city}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onClose}
                className="bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#332a21] cursor-pointer"
              >
                Return to Store
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6">
            
            {/* Customer Details */}
            <div>
              <h4 className="text-xs font-black text-[#1c1815] uppercase tracking-wider mb-3">1. Shipping Address</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="px-3.5 py-2.5 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                />
                <input
                  type="tel"
                  required
                  placeholder="10-Digit Mobile Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-3.5 py-2.5 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                />
                <input
                  type="text"
                  required
                  placeholder="Pincode *"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="px-3.5 py-2.5 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                />
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="House/Flat No, Street, Landmark *"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="City & State *"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="text-xs font-black text-[#1c1815] uppercase tracking-wider mb-3">2. Payment Method</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'cod' ? 'border-[#b8860b] bg-[#fdfaf3]' : 'border-[#ebdcc4]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="text-[#b8860b]"
                  />
                  <span className="text-xs font-bold text-[#1c1815]">Cash on Delivery</span>
                </label>

                <label className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'upi' ? 'border-[#b8860b] bg-[#fdfaf3]' : 'border-[#ebdcc4]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                    className="text-[#b8860b]"
                  />
                  <span className="text-xs font-bold text-[#1c1815]">UPI / QR Pay</span>
                </label>

                <label className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'border-[#b8860b] bg-[#fdfaf3]' : 'border-[#ebdcc4]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="text-[#b8860b]"
                  />
                  <span className="text-xs font-bold text-[#1c1815]">Credit / Debit Card</span>
                </label>
              </div>
            </div>

            {/* Order Price Summary */}
            <div className="bg-[#fbf7ee] p-4 rounded-2xl border border-[#ebdcc4] flex items-center justify-between">
              <div>
                <p className="text-xs text-[#786450]">Total Payable ({items.length} items):</p>
                <p className="text-xl font-black text-[#1c1815]">₹{finalTotal.toLocaleString('en-IN')}</p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Confirming...' : 'Place Order Now'}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
