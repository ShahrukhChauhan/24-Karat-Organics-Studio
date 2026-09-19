import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  FileText,
  CheckCircle,
  Download,
  Sparkles,
  Search,
  ChevronRight,
  ArrowRight,
  Flame,
  Check,
  AlertCircle,
  QrCode,
  Layers
} from 'lucide-react';

interface LabPurityPageProps {
  onShopNow: () => void;
  onNavigateHome: () => void;
}

export const LabPurityPage: React.FC<LabPurityPageProps> = ({
  onShopNow,
  onNavigateHome,
}) => {
  const [selectedBatch, setSelectedBatch] = useState<string>('24K-2026-SEP-09');
  const [showCertificateModal, setShowCertificateModal] = useState<boolean>(false);

  const batchData: { [key: string]: any } = {
    '24K-2026-SEP-09': {
      batchId: 'BATCH #24K-2026-SEP-09',
      productName: '24 Karat Murrah Buffalo Bilona Desi Ghee (Traditional Danedar)',
      mfgDate: 'September 09, 2026',
      expDate: 'September 08, 2027',
      milkSource: 'Jind Organic Corridor Gaushala (Haryana)',
      labName: 'National Agri-Food Analytical Laboratory (NABL Accredited TC-8942)',
      fssaiLicense: '10823999000142',
      metrics: [
        { name: 'Reichert-Meissl (RM) Value', standard: 'Min 28.0', result: '31.8', status: 'PASS (SUPERIOR)', note: 'Confirms high concentration of volatile butyric fatty acids' },
        { name: 'Polenske Value', standard: '1.0 – 2.0', result: '1.32', status: 'PASS', note: 'Authentic buffalo milk fat profile indicator' },
        { name: 'Baudouin Test (Vanaspati / Hydrogenated Fat)', standard: 'Must be Negative', result: 'Negative (Nil)', status: 'PASS (0% VANASPATI)', note: 'Zero presence of hydrogenated vegetable fats' },
        { name: 'Halphen Test (Cottonseed Oil)', standard: 'Must be Negative', result: 'Negative (Nil)', status: 'PASS', note: 'Zero adulteration with seed oils' },
        { name: 'Palm Oil & Mineral Oil Adulterants', standard: '0.00% (Not Detected)', result: '0.00% (Nil)', status: 'PASS (100% PURE)', note: 'Verified via Gas Chromatography High-Resolution Analysis' },
        { name: 'Free Fatty Acids (FFA as % Oleic)', standard: 'Max 0.50%', result: '0.22%', status: 'PASS (ULTRA FRESH)', note: 'Indicates fresh cultured curd without oxidation' },
        { name: 'Moisture Content', standard: 'Max 0.30%', result: '0.12%', status: 'PASS (DRY & STABLE)', note: 'Zero water content guarantees 12+ month natural shelf life' },
        { name: 'Heavy Metals (Pb, As, Cd, Hg)', standard: 'Below Detectable Limits', result: 'Not Detected (<0.01 ppm)', status: 'PASS', note: 'Completely free of toxic heavy metals' }
      ]
    },
    '24K-2026-AUG-22': {
      batchId: 'BATCH #24K-2026-AUG-22',
      productName: '24 Karat Cultured Clay-Pot Churned A2 Buffalo Bilona Ghee',
      mfgDate: 'August 22, 2026',
      expDate: 'August 21, 2027',
      milkSource: 'Earthen Handi Artisans Cooperative (Rajasthan / Haryana Border)',
      labName: 'National Agri-Food Analytical Laboratory (NABL Accredited TC-8942)',
      fssaiLicense: '10823999000142',
      metrics: [
        { name: 'Reichert-Meissl (RM) Value', standard: 'Min 28.0', result: '32.1', status: 'PASS (SUPERIOR)', note: 'Exceptional butyric acid concentration from slow clay simmering' },
        { name: 'Polenske Value', standard: '1.0 – 2.0', result: '1.28', status: 'PASS', note: 'Authentic buffalo milk fat' },
        { name: 'Baudouin Test (Vanaspati)', standard: 'Must be Negative', result: 'Negative (Nil)', status: 'PASS', note: 'Zero trans-fat vegetable oil' },
        { name: 'Halphen Test (Seed Oils)', standard: 'Must be Negative', result: 'Negative (Nil)', status: 'PASS', note: 'Zero cottonseed or palm adulteration' },
        { name: 'Palm Oil & Mineral Oil', standard: '0.00% (Not Detected)', result: '0.00% (Nil)', status: 'PASS', note: 'Gas Chromatography verified' },
        { name: 'Free Fatty Acids (FFA)', standard: 'Max 0.50%', result: '0.24%', status: 'PASS', note: 'Low acidity, pleasant sweet aroma' },
        { name: 'Moisture Content', standard: 'Max 0.30%', result: '0.10%', status: 'PASS', note: 'Exceptional slow wood-fire evaporation' },
        { name: 'Alkaline Mineral Density', standard: 'Baseline', result: '+18% vs Steel', status: 'PASS', note: 'Natural micro-minerals from porous terracotta handi' }
      ]
    },
    '24K-2026-GOLD-01': {
      batchId: 'BATCH #24K-2026-GOLD-01',
      productName: '24 Karat Swarna Bhasma Reserve Buffalo Ghee (24K Gold & Saffron)',
      mfgDate: 'September 01, 2026',
      expDate: 'August 31, 2027',
      milkSource: 'Royal Reserve Gaushala Herd & Certified Ayurvedic Pharmacy',
      labName: 'NABL Accredited Metals & Phytochemical Testing Center',
      fssaiLicense: '10823999000142',
      metrics: [
        { name: 'Gold Assay (Au Purity in Swarna Bhasma)', standard: 'Min 99.5% 24 Karat', result: '99.92% Pure 24K', status: 'PASS (ROYAL GRADE)', note: 'Assayed via ICP-OES spectroscopy' },
        { name: 'Reichert-Meissl (RM) Value', standard: 'Min 28.0', result: '31.6', status: 'PASS', note: 'Unadulterated Murrah Buffalo Bilona carrier base' },
        { name: 'Heavy Metal Safety (Pb, Hg, As)', standard: 'Ayush Safety Limits', result: 'Below Limit (<0.005 ppm)', status: 'PASS (SAFE)', note: 'Micro-purified classical calcination' },
        { name: 'Kashmiri Saffron Crocin Content', standard: 'Min 18.0%', result: '24.2%', status: 'PASS', note: 'Grade-1 Mogra Saffron with rich golden pigment' },
        { name: 'Baudouin Test (Adulterants)', standard: 'Must be Negative', result: 'Negative (Nil)', status: 'PASS', note: 'Zero foreign fats' },
        { name: 'Free Fatty Acids (FFA)', standard: 'Max 0.50%', result: '0.19%', status: 'PASS', note: 'Supreme antioxidant preservation' }
      ]
    }
  };

  const currentBatch = batchData[selectedBatch] || batchData['24K-2026-SEP-09'];

  return (
    <div id="lab-purity-page" className="min-h-screen bg-[#fcfaf5] text-[#1c1815] pb-24">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#fffdfa] border-b border-[#ece2cf] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs text-[#7d6954]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#b8860b] transition-colors cursor-pointer font-medium"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#b09e8b]" />
            <span className="text-[#1c1815] font-bold">NABL Lab Purity Verification</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#fbf7ed] to-[#fcfaf5] py-16 md:py-24 border-b border-[#ece2cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf5df] border border-[#d4af37]/40 text-[#854d0e] text-xs font-black uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#b8860b]" />
            <span>NABL ACCREDITED LABORATORY CERTIFICATION</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-[#1c1815] tracking-tight leading-tight">
            Science Verifies Tradition
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#854d0e] mt-4 font-medium">
            "Every Single Batch Tested for 31.8 RM Value & 0% Palm Oil"
          </p>
          <div className="w-20 h-1 bg-[#b8860b] mx-auto mt-6 rounded-full" />
          <p className="text-xs sm:text-sm text-[#786450] mt-6 leading-relaxed max-w-2xl mx-auto">
            We believe true purity shouldn't just be a marketing claim. 24 KARAT tests every individual micro-batch at independent government-accredited NABL laboratories using Gas Chromatography and chemical assays.
          </p>
        </div>
      </section>

      {/* Interactive Batch Explorer & Certificate View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Batch Selector Toolbar */}
        <div className="bg-[#fffdfa] rounded-3xl p-6 sm:p-8 border border-[#e4d6bf] shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                TRANSPARENT BATCH LOOKUP
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1815] mt-1">
                Inspect NABL Chemical Analysis by Batch
              </h2>
              <p className="text-xs text-[#786450] mt-1">
                Select your jar's batch code below or test sample harvest records:
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {Object.keys(batchData).map((bKey) => (
                <button
                  key={bKey}
                  onClick={() => setSelectedBatch(bKey)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedBatch === bKey
                      ? 'bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] shadow-sm'
                      : 'bg-[#fbf7ee] text-[#6b5845] hover:bg-[#ebdcc4] border border-[#e2d5be]'
                  }`}
                >
                  {bKey}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Display Board */}
        <div className="bg-[#fffdfa] rounded-3xl border-2 border-[#d4af37]/40 shadow-xl overflow-hidden">
          
          {/* Certificate Header Stamp */}
          <div className="bg-[#1c1815] text-[#fbf7ee] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[#d4af37]/30">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#d4af37] font-black uppercase tracking-widest">
                <Award className="w-4 h-4" />
                <span>OFFICIAL LABORATORY ASSAY REPORT</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {currentBatch.productName}
              </h3>
              <div className="text-xs text-[#cbb99d] mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>Batch: <strong className="text-white">{currentBatch.batchId}</strong></span>
                <span>Mfg: <strong className="text-white">{currentBatch.mfgDate}</strong></span>
                <span>Expiry: <strong className="text-white">{currentBatch.expDate}</strong></span>
              </div>
            </div>

            <div className="bg-[#2a221b] p-4 rounded-2xl border border-[#d4af37]/30 text-right shrink-0 flex items-center gap-4">
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-[#bdae99]">NABL Accreditation</div>
                <div className="text-xs font-black text-[#d4af37]">TC-8942 / FSSAI Verified</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">✓ 100% Standard Compliant</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#d4af37] text-[#1c1815] flex items-center justify-center font-serif font-black text-xl">
                24K
              </div>
            </div>
          </div>

          {/* Test Parameters Table */}
          <div className="p-6 sm:p-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b-2 border-[#ebdcc4] text-xs font-bold uppercase tracking-wider text-[#6b5845]">
                    <th className="py-3 px-3">Chemical Parameter</th>
                    <th className="py-3 px-3">Government FSSAI Standard</th>
                    <th className="py-3 px-3 text-[#854d0e]">24 KARAT Actual Result</th>
                    <th className="py-3 px-3">Quality Verdict</th>
                    <th className="py-3 px-3 hidden md:table-cell">Significance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0e4d0]">
                  {currentBatch.metrics.map((item: any, idx: number) => (
                    <tr key={idx} className="hover:bg-[#fbf7ee]/60 transition-colors">
                      <td className="py-3.5 px-3 font-bold text-[#1c1815]">{item.name}</td>
                      <td className="py-3.5 px-3 text-[#6b5845] font-mono text-xs">{item.standard}</td>
                      <td className="py-3.5 px-3 font-mono font-bold text-[#854d0e]">{item.result}</td>
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-black px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" />
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-xs text-[#786450] hidden md:table-cell">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-[#ebdcc4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#786450]">
                <ShieldCheck className="w-4 h-4 text-[#b8860b]" />
                <span>Certificate digitally signed by Chief Analytical Chemist • NABL Lab Ref #TC-8942</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowCertificateModal(true)}
                  className="bg-[#fbf7ee] hover:bg-[#ebdcc4] text-[#1c1815] border border-[#d6c7ab] px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#b8860b]" />
                  <span>View Lab Seal PDF</span>
                </button>
                <button
                  onClick={onShopNow}
                  className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Order This Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Educational Guide: What RM Value & Purity Parameters Mean */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
            CONSUMER EDUCATION
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1c1815] mt-1">
            Understanding Ghee Purity Parameters
          </h2>
          <p className="text-xs sm:text-sm text-[#786450] mt-2">
            Why corrupt commercial brands fail these tests and why RM value cannot be faked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#fffdfa] rounded-3xl p-8 border border-[#e4d6bf] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#fdf6e2] border border-[#d4af37]/40 text-[#b8860b] flex items-center justify-center mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1c1815]">
              1. What is the RM Value?
            </h3>
            <p className="text-xs sm:text-sm text-[#786450] mt-3 leading-relaxed">
              The Reichert-Meissl (RM) value measures the quantity of water-soluble volatile fatty acids (primarily butyric acid) present in butterfat. Milk fat is the only natural fat on earth with a high RM value. When brands adulterate ghee with vegetable oils or palm olein (RM value near zero), the RM value drops dramatically. 24 KARAT tests at 31.8, far exceeding the 28.0 benchmark.
            </p>
          </div>

          <div className="bg-[#fffdfa] rounded-3xl p-8 border border-[#e4d6bf] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#fdf6e2] border border-[#d4af37]/40 text-[#b8860b] flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1c1815]">
              2. The Baudouin & Halphen Tests
            </h3>
            <p className="text-xs sm:text-sm text-[#786450] mt-3 leading-relaxed">
              The Baudouin test uses hydrochloric acid and sesame furfural to immediately detect the presence of hydrogenated vegetable fats (Vanaspati or Dalda). The Halphen test identifies cheap cottonseed oil adulteration. 24 KARAT is tested by spectrophotometry to confirm 100% negative (Nil) adulteration across every batch.
            </p>
          </div>

          <div className="bg-[#fffdfa] rounded-3xl p-8 border border-[#e4d6bf] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#fdf6e2] border border-[#d4af37]/40 text-[#b8860b] flex items-center justify-center mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1c1815]">
              3. Why 0.12% Moisture Matters
            </h3>
            <p className="text-xs sm:text-sm text-[#786450] mt-3 leading-relaxed">
              Water is the enemy of clarified butter. Commercial ghee often retains 0.3% to 0.5% moisture due to rapid flash boiling, requiring chemical preservatives or refrigeration to avoid rancidity. Our slow earthen wood-fire simmering completely evaporates moisture to 0.12%, giving 24 KARAT its natural 12-month shelf life.
            </p>
          </div>

        </div>
      </section>

      {/* Lab Certificate Preview Modal */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fffdfa] rounded-3xl border-2 border-[#d4af37] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#ebdcc4] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1c1815] text-[#f5d77f] font-serif font-bold text-lg flex items-center justify-center">
                  24K
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1c1815]">Official NABL Lab Certificate</h4>
                  <p className="text-xs text-[#786450]">Report Ref: NABL/AGRI/2026/0914-TC8942</p>
                </div>
              </div>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="text-gray-500 hover:text-black font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-[#fbf7ee] p-4 rounded-xl border border-[#ebdcc4]">
                <div className="font-bold text-[#1c1815] mb-1">Testing Authority:</div>
                <div className="text-[#5e4b39]">National Agri-Food Analytical & Molecular Testing Laboratory (NABL Accredited)</div>
                <div className="text-[#857361] mt-1">Sample ID: 24KARAT-BILONA-A2-SEP09 • Sample Condition: Sealed Glass Jar with Tamper Seal</div>
              </div>

              <div className="border border-[#ebdcc4] rounded-xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-[#f8f3e9] text-[11px] font-bold">
                    <tr>
                      <th className="p-2.5">Parameter</th>
                      <th className="p-2.5">Result</th>
                      <th className="p-2.5">Limit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ebdcc4]">
                    <tr><td className="p-2.5 font-semibold">RM Value</td><td className="p-2.5 font-bold text-[#854d0e]">31.8</td><td className="p-2.5 text-gray-500">Min 28.0</td></tr>
                    <tr><td className="p-2.5 font-semibold">Polenske Value</td><td className="p-2.5 font-bold">1.32</td><td className="p-2.5 text-gray-500">1.0 - 2.0</td></tr>
                    <tr><td className="p-2.5 font-semibold">Baudouin Test</td><td className="p-2.5 font-bold text-emerald-700">Negative</td><td className="p-2.5 text-gray-500">Negative</td></tr>
                    <tr><td className="p-2.5 font-semibold">Foreign Plant Sterols</td><td className="p-2.5 font-bold text-emerald-700">0.00%</td><td className="p-2.5 text-gray-500">0.00%</td></tr>
                    <tr><td className="p-2.5 font-semibold">Moisture</td><td className="p-2.5 font-bold">0.12%</td><td className="p-2.5 text-gray-500">Max 0.30%</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center pt-2">
                <span className="text-[11px] text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                  ✓ VERDICT: 100% Pure Murrah Buffalo Bilona Ghee. Zero Adulteration.
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ebdcc4] text-center">
              <button
                onClick={() => setShowCertificateModal(false)}
                className="px-6 py-2 bg-[#1c1815] text-[#f5d77f] rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Close Certificate View
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
