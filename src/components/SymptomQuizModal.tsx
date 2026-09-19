import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, Award } from 'lucide-react';
import { saveSymptomAssessment } from '../services/firestoreService';
import { User as FirebaseUser } from 'firebase/auth';
import { PRODUCTS } from '../data/karatData';

interface SymptomQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: FirebaseUser | null;
  onSelectProduct: (productId: string) => void;
}

const HEALTH_GOALS = [
  'Daily Family Wellness & Rich Dal/Roti Flavor',
  'Joint Lubrication, Bone Density & Physical Vigor',
  'Deep Gut Healing, Acid Reflux & Agni Balance',
  'Royal Vitality, Anti-Aging & Ojas Enhancement',
  'Children’s Memory, Brain Sharpness & Exam Focus'
];

const PREFERENCE_OPTIONS = [
  { id: 'bilona_curd', label: '100% Traditional Curd Churned (No Cream Separator)' },
  { id: 'murrah_buffalo', label: 'Grass-Fed Murrah Buffalo A2 Milk Fat' },
  { id: 'clay_pot', label: 'Slow Chulha Cooked in Mitti Ke Bartan (Clay Pots)' },
  { id: 'gold_bhasma', label: '24K Gold Bhasma & Kashmiri Saffron Infused' },
  { id: 'medhya_herbs', label: 'Medhya Ghrita with Brahmi & Shankhpushpi' },
  { id: 'gift_box', label: 'Royal Wooden Heirloom Box with Brass Diya' }
];

export const SymptomQuizModal: React.FC<SymptomQuizModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSelectProduct,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedGoal, setSelectedGoal] = useState(HEALTH_GOALS[0]);
  const [selectedPrefs, setSelectedPrefs] = useState<string[]>(['bilona_curd', 'murrah_buffalo']);
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const togglePref = (id: string) => {
    if (selectedPrefs.includes(id)) {
      setSelectedPrefs(selectedPrefs.filter(s => s !== id));
    } else {
      setSelectedPrefs([...selectedPrefs, id]);
    }
  };

  const handleFinishQuiz = async () => {
    setIsSaving(true);
    try {
      const recs: string[] = [];
      if (selectedPrefs.includes('gold_bhasma') || selectedGoal.includes('Royal Vitality')) {
        recs.push('24k-swarna-bilona-ghee');
      }
      if (selectedPrefs.includes('medhya_herbs') || selectedGoal.includes('Children’s Memory')) {
        recs.push('medhya-rasayana-ghee');
      }
      if (selectedPrefs.includes('clay_pot')) {
        recs.push('clay-pot-bilona-ghee');
      }
      if (recs.length === 0 || selectedGoal.includes('Daily Family') || selectedGoal.includes('Joint')) {
        recs.unshift('karat-buffalo-bilona-1kg');
      }

      await saveSymptomAssessment({
        userId: currentUser?.uid,
        ageRange: selectedGoal,
        primarySymptoms: selectedPrefs,
        severity: 'Vedic Match',
        recommendedProducts: recs
      });

      setStep(3);
    } catch (err) {
      console.warn('Quiz assessment save fallback:', err);
      setStep(3);
    } finally {
      setIsSaving(false);
    }
  };

  // Recommendations calculated
  const recommendedProductList = PRODUCTS.filter(p => {
    if (selectedPrefs.includes('gold_bhasma') && p.id === '24k-swarna-bilona-ghee') return true;
    if (selectedPrefs.includes('medhya_herbs') && p.id === 'medhya-rasayana-ghee') return true;
    if (selectedPrefs.includes('clay_pot') && p.id === 'clay-pot-bilona-ghee') return true;
    if (selectedPrefs.includes('gift_box') && p.id === 'royal-vintage-brass-combo') return true;
    if (p.id === 'karat-buffalo-bilona-1kg') return true;
    return false;
  }).slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fffdfa] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#ebdcc4] animate-in zoom-in-95">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#ebdcc4] bg-[#fbf7ee] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif text-xl sm:text-2xl font-black text-[#1c1815]">
              24 KARAT Vedic Ghee Assessment
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black rounded-full hover:bg-gray-200/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#f3e9d8] h-1.5">
          <div
            className="bg-[#b8860b] h-1.5 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Step 1: Health Goal */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#b8860b] uppercase tracking-wider">Step 1 of 3</span>
              <h3 className="font-serif text-2xl font-bold text-[#1c1815] mt-1">
                What is your primary wellness or culinary goal?
              </h3>
              <p className="text-xs sm:text-sm text-[#675442] mt-1">
                Select your focus to align with ancient Ayurvedic Rasayana principles.
              </p>
            </div>

            <div className="space-y-3">
              {HEALTH_GOALS.map((goal, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedGoal(goal)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                    selectedGoal === goal
                      ? 'border-[#b8860b] bg-[#fdfaf3] ring-1 ring-[#b8860b]'
                      : 'border-[#ebdcc4] hover:border-[#cfba95]'
                  }`}
                >
                  <span className="font-semibold text-xs sm:text-sm text-[#1c1815]">{goal}</span>
                  {selectedGoal === goal && (
                    <div className="w-5 h-5 rounded-full bg-[#1c1815] text-[#f5d77f] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] px-7 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37]" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Preferences */}
        {step === 2 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#b8860b] uppercase tracking-wider">Step 2 of 3</span>
              <h3 className="font-serif text-2xl font-bold text-[#1c1815] mt-1">
                What qualities matter most to you?
              </h3>
              <p className="text-xs sm:text-sm text-[#675442] mt-1">
                Choose the traditional clarification attributes you value in your ghee.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PREFERENCE_OPTIONS.map((sym) => {
                const isSelected = selectedPrefs.includes(sym.id);
                return (
                  <div
                    key={sym.id}
                    onClick={() => togglePref(sym.id)}
                    className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between text-left ${
                      isSelected
                        ? 'border-[#b8860b] bg-[#fdfaf3]'
                        : 'border-[#ebdcc4] hover:border-[#cfba95]'
                    }`}
                  >
                    <span className="text-xs font-semibold text-[#1c1815] leading-snug">{sym.label}</span>
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-2 ${
                      isSelected ? 'bg-[#1c1815] border-[#1c1815] text-[#f5d77f]' : 'border-gray-300'
                    }`}>
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-bold text-[#675442] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={handleFinishQuiz}
                disabled={selectedPrefs.length === 0 || isSaving}
                className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] px-7 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
              >
                <span>{isSaving ? 'Finding Match...' : 'Show My Ideal Ghee'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Diagnostic Results */}
        {step === 3 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#fdf6e2] text-[#b8860b] border border-[#d4af37]/40 mx-auto flex items-center justify-center mb-2 shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-black text-[#1c1815]">
                Your Tailored Vedic Ghee Protocol
              </h3>
              <p className="text-xs sm:text-sm text-[#675442] mt-1 max-w-sm mx-auto">
                Based on your preference for <strong>{selectedGoal}</strong>, here are the optimal small-batch clarified editions crafted for you.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#854d0e] uppercase tracking-wider">
                Recommended 24 KARAT Editions:
              </h4>

              {(recommendedProductList.length > 0 ? recommendedProductList : [PRODUCTS[0], PRODUCTS[1]]).map(prod => (
                <div
                  key={prod.id}
                  className="bg-[#fffdfa] rounded-2xl p-4 border border-[#ebdcc4] flex items-center justify-between gap-4 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <img src={prod.image} alt={prod.name} className="w-12 h-12 object-cover rounded-lg bg-[#fbf7ee] p-0.5 shrink-0 border border-[#e8dcc4]" />
                    <div>
                      <h5 className="font-bold text-xs sm:text-sm text-[#1c1815] line-clamp-1">{prod.name}</h5>
                      <p className="text-[11px] text-[#675442] line-clamp-1">{prod.benefitsSummary}</p>
                      <p className="text-xs font-black text-[#1c1815] mt-0.5">₹{prod.price.toLocaleString('en-IN')} <span className="text-gray-400 line-through text-[10px]">₹{prod.mrp.toLocaleString('en-IN')}</span></p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onSelectProduct(prod.id);
                      onClose();
                    }}
                    className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors shrink-0 cursor-pointer"
                  >
                    View Jar
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-[#fbf7ee] p-4 rounded-2xl border border-[#ebdcc4] text-xs text-[#625141] leading-relaxed">
              <strong>Vaidya Tip:</strong> For maximum Agni absorption and joint lubrication, take 1 teaspoon of warm 24 KARAT Bilona Ghee with warm water on an empty stomach every morning.
            </div>

            <div className="pt-2 flex justify-center">
              <button
                onClick={onClose}
                className="bg-[#d4af37] hover:bg-[#b8860b] text-[#1c1815] font-black px-8 py-3 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Browse All 24 KARAT Ghee Editions
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
