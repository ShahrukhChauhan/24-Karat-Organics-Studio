import React, { useState, useEffect } from 'react';
import { X, User, ShoppingBag, Calendar, Sparkles, LogOut, Package, Clock, ShieldCheck } from 'lucide-react';
import { User as FirebaseUser } from 'firebase/auth';
import { getUserOrders, getUserConsultations } from '../services/firestoreService';
import { Order, ConsultationBooking } from '../types';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: FirebaseUser | null;
  onLogout: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'consultations'>('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [consultations, setConsultations] = useState<ConsultationBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadUserData() {
      if (!currentUser) return;
      setLoading(true);
      try {
        const [ord, con] = await Promise.all([
          getUserOrders(currentUser.uid),
          getUserConsultations(currentUser.uid, currentUser.email || undefined)
        ]);
        if (isMounted) {
          setOrders(ord);
          setConsultations(con);
          setLoading(false);
        }
      } catch (err) {
        console.warn('Could not load user data:', err);
        if (isMounted) setLoading(false);
      }
    }

    if (isOpen) {
      loadUserData();
    }
    return () => { isMounted = false; };
  }, [isOpen, currentUser]);

  if (!isOpen || !currentUser) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fffdfa] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#ebdcc4] animate-in zoom-in-95 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-[#ebdcc4] bg-[#fbf7ee] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt="User avatar"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#b8860b]"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] flex items-center justify-center font-black text-lg">
                {(currentUser.displayName?.[0] || currentUser.email?.[0] || 'K').toUpperCase()}
              </div>
            )}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-black text-[#1c1815]">
                {currentUser.displayName || '24 KARAT Member'}
              </h2>
              <p className="text-xs text-[#786450]">{currentUser.email || 'Guest Anonymous Account'}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              title="Sign Out"
              className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-gray-200/60 transition-colors cursor-pointer"
            >
              <LogOut className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#ebdcc4] bg-[#fcfaf7] px-6 text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3.5 px-4 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'border-[#b8860b] text-[#1c1815]'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            <Package className="w-4 h-4 text-[#b8860b]" />
            <span>Orders ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('consultations')}
            className={`py-3.5 px-4 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'consultations'
                ? 'border-[#b8860b] text-[#1c1815]'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#b8860b]" />
            <span>Vaidya Consultations ({consultations.length})</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {loading ? (
            <div className="py-12 text-center text-xs text-gray-500">
              Retrieving records from Firestore database...
            </div>
          ) : activeTab === 'orders' ? (
            orders.length === 0 ? (
              <div className="text-center py-10 text-gray-500 text-xs">
                <ShoppingBag className="w-8 h-8 mx-auto text-[#b8860b]/40 mb-2" />
                <p>No orders placed yet. Explore our 24 KARAT Buffalo Bilona Ghee editions!</p>
              </div>
            ) : (
              orders.map((ord) => (
                <div key={ord.id} className="bg-white p-4 rounded-2xl border border-[#ebdcc4] space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xs sm:text-sm text-[#1c1815]">Order #{ord.id}</span>
                    <span className="text-[11px] bg-[#fdf6e2] text-[#854d0e] font-bold px-2.5 py-0.5 rounded-full border border-[#f0da9c]">
                      {ord.status}
                    </span>
                  </div>

                  <div className="text-xs text-[#675442] space-y-1">
                    <p>Total: <strong className="text-[#1c1815]">₹{ord.finalAmount.toLocaleString('en-IN')}</strong> ({ord.items.length} items)</p>
                    <p>Method: {ord.paymentMethod}</p>
                    <p>Ordered on: {new Date(ord.createdAt).toLocaleDateString()}</p>
                  </div>

                  <div className="pt-2 border-t border-[#f2e7d5] flex gap-2 overflow-x-auto">
                    {ord.items.map((it, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-[#fdfaf3] px-2.5 py-1 rounded-lg border border-[#ebdcc4] shrink-0 text-xs">
                        <img src={it.image} alt={it.productName} className="w-6 h-6 object-cover rounded-md" />
                        <span className="truncate max-w-[140px] font-semibold text-[#1c1815]">{it.productName}</span>
                        <span className="text-[#857463]">x{it.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )
          ) : (
            consultations.length === 0 ? (
              <div className="text-center py-10 text-gray-500 text-xs">
                <Calendar className="w-8 h-8 mx-auto text-[#b8860b]/40 mb-2" />
                <p>No appointments booked yet. Free tele-consultations are available with all Ayurvedic Vaidyas!</p>
              </div>
            ) : (
              consultations.map((con) => (
                <div key={con.id} className="bg-white p-4 rounded-2xl border border-[#ebdcc4] space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-xs sm:text-sm text-[#1c1815]">
                      Consultation with {con.doctorName}
                    </h4>
                    <span className="text-[11px] bg-[#fdf6e2] text-[#854d0e] font-bold px-2.5 py-0.5 rounded-full border border-[#f0da9c]">
                      Confirmed
                    </span>
                  </div>

                  <div className="text-xs text-[#675442] space-y-0.5">
                    <p>Date: <strong>{con.date}</strong> at <strong>{con.timeSlot}</strong></p>
                    <p>Client: {con.userName} ({con.userPhone})</p>
                    <p>Questions / Goals: {con.symptoms}</p>
                  </div>
                </div>
              ))
            )
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#fbf7ee] border-t border-[#ebdcc4] flex items-center justify-between text-xs text-[#786450]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#b8860b]" />
            Data securely synced to Firestore
          </span>
          <button
            onClick={onClose}
            className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] px-5 py-2 rounded-full font-bold uppercase text-[11px] cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
