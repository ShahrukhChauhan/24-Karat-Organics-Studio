import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, ShoppingBag, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (packId: string, delta: number) => void;
  onRemoveItem: (packId: string) => void;
  onProceedToCheckout: () => void;
  appliedCoupon: string;
  onApplyCoupon: (code: string) => boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  appliedCoupon,
  onApplyCoupon,
}) => {
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const isCouponValid = appliedCoupon === 'GOLDEN24' || appliedCoupon === 'BILONA251' || appliedCoupon === 'AYURVEDA251';
  const discountAmount = isCouponValid ? 250 : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    const code = couponInput.trim().toUpperCase();
    const success = onApplyCoupon(code);
    if (success) {
      setCouponSuccess(`Coupon applied: ₹250 discount added!`);
      setCouponInput('');
    } else {
      setCouponError('Invalid code. Try GOLDEN24');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fffdfa] shadow-2xl flex flex-col justify-between border-l border-[#ebdcc4]">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#ebdcc4] flex items-center justify-between bg-[#fbf7ee]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#b8860b]" />
              <h2 className="font-serif text-xl font-black text-[#1c1815]">
                Your 24 KARAT Bag ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-500 hover:text-black rounded-full hover:bg-gray-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#fdf6e2] text-[#b8860b] border border-[#d4af37]/40 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 opacity-70" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1c1815]">Your bag is empty</h3>
                <p className="text-xs text-[#786450] max-w-xs">
                  Discover 100% pure Buffalo Bilona Desi Ghee jars handcrafted in clay pots over slow wood flame.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-[#332a21]"
                >
                  Explore 24 KARAT Ghee
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.packId}
                  className="bg-white rounded-2xl p-4 border border-[#ebdcc4] flex gap-3 relative shadow-2xs"
                >
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-16 h-16 object-cover rounded-xl bg-[#fdf7ee] p-0.5 shrink-0 border border-[#ebdcc4]"
                  />

                  <div className="flex-1 min-w-0 pr-6">
                    <h4 className="font-bold text-xs sm:text-sm text-[#1c1815] line-clamp-2">
                      {item.productName}
                    </h4>
                    <p className="text-[11px] text-[#786450] mt-0.5 font-medium">
                      Pack: {item.packDuration}
                    </p>
                    <p className="text-xs font-black text-[#1c1815] mt-1">
                      ₹{item.unitPrice.toLocaleString('en-IN')}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#ebdcc4] rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.packId, -1)}
                          className="px-2 py-0.5 text-[#1c1815] hover:bg-[#fbf7ee]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#1c1815]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.packId, 1)}
                          className="px-2 py-0.5 text-[#1c1815] hover:bg-[#fbf7ee]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.packId)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-600 p-1 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Order Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#ebdcc4] bg-[#fbf7ee] space-y-4">
              
              {/* Coupon Input */}
              <form onSubmit={handleApply} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter GOLDEN24"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 text-xs uppercase bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {couponSuccess && (
                <p className="text-[11px] text-emerald-800 font-bold">{couponSuccess}</p>
              )}
              {couponError && (
                <p className="text-[11px] text-red-600 font-bold">{couponError}</p>
              )}

              {/* Price calculations */}
              <div className="space-y-1.5 text-xs text-[#675442] pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1c1815]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#b45309] font-bold">
                    <span>Coupon Discount ({appliedCoupon})</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Insured Glass Packaging & Shipping</span>
                  <span className="text-emerald-800 font-bold">FREE</span>
                </div>

                <div className="flex justify-between pt-2 border-t border-[#ebdcc4] text-sm font-black text-[#1c1815]">
                  <span>Total Payable</span>
                  <span className="text-base text-[#1c1815]">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="cart-checkout-btn"
                onClick={onProceedToCheckout}
                className="w-full bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#786450]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>100% Secure Checkout • Shatterproof Insured Delivery</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
