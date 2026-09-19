import React, { useState } from 'react';
import { X, Star, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import { addProductReview } from '../services/firestoreService';
import { User as FirebaseUser } from 'firebase/auth';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
  productName: string;
  currentUser: FirebaseUser | null;
  onReviewAdded: () => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  productId,
  productName,
  currentUser,
  onReviewAdded,
}) => {
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState(currentUser?.displayName || '');
  const [location, setLocation] = useState('India');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) {
      alert('Please provide your name and your review feedback.');
      return;
    }

    setIsSubmitting(true);
    try {
      await addProductReview({
        productId,
        author,
        rating,
        title: title || 'Verified 24 KARAT Tasting Experience',
        comment,
        verified: true,
        userLocation: location,
        userId: currentUser?.uid
      });

      setIsSuccess(true);
      onReviewAdded();
    } catch (err) {
      console.error('Failed to post review:', err);
      alert('Could not post review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fffdfa] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#ebdcc4] animate-in zoom-in-95">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#ebdcc4] bg-[#fbf7ee] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquarePlus className="w-5 h-5 text-[#b8860b]" />
            <div>
              <h2 className="font-serif text-xl font-black text-[#1c1815]">
                {isSuccess ? 'Review Submitted!' : 'Share Your 24 KARAT Experience'}
              </h2>
              <p className="text-xs text-[#786450] truncate max-w-xs">{productName}</p>
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
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#fdf6e2] text-[#b8860b] border border-[#d4af37]/50 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-black text-[#1c1815]">
              Thank you for your review!
            </h3>
            <p className="text-xs sm:text-sm text-[#675442] max-w-sm mx-auto">
              Your verified review has been recorded to Firestore and added to the product page.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#332a21] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Rating Stars */}
            <div>
              <label className="text-xs font-black text-[#1c1815] uppercase tracking-wider block mb-1.5">
                Rating
              </label>
              <div className="flex items-center gap-1.5 text-[#d97706]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 cursor-pointer transition-transform hover:scale-115"
                  >
                    <Star
                      className={`w-7 h-7 ${star <= rating ? 'fill-current' : 'text-stone-300'}`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-xs font-bold text-[#1c1815]">{rating} / 5 Stars</span>
              </div>
            </div>

            {/* Author Name & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-black text-[#1c1815] uppercase tracking-wider block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyadarshini S."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                />
              </div>

              <div>
                <label className="text-xs font-black text-[#1c1815] uppercase tracking-wider block mb-1">
                  Your City / Region
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Maharashtra"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
                />
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="text-xs font-black text-[#1c1815] uppercase tracking-wider block mb-1">
                Review Headline
              </label>
              <input
                type="text"
                placeholder="e.g. Incredible danedar texture, nostalgic childhood bilona aroma"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
              />
            </div>

            {/* Comment */}
            <div>
              <label className="text-xs font-black text-[#1c1815] uppercase tracking-wider block mb-1">
                Detailed Feedback *
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe aroma, taste on hot rotis/khichdi, morning empty stomach experience, or packaging quality..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#ebdcc4] rounded-xl focus:outline-none focus:border-[#b8860b]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Posting Review...' : 'Submit Verified Review'}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
