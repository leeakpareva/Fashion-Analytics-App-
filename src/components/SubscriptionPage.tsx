import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Zap, Shield, Star, CreditCard, Lock } from 'lucide-react';
import { DemoSitePopup } from './DemoSitePopup';

const plans = [
  {
    name: 'Basic',
    price: '9',
    features: [
      'Basic analytics dashboard',
      'Weekly reports',
      'Up to 5 social accounts',
      'Email support'
    ],
    icon: Star
  },
  {
    name: 'Pro',
    price: '29',
    features: [
      'Advanced analytics',
      'Daily reports',
      'Up to 15 social accounts',
      'Priority support',
      'Custom exports',
      'Team collaboration'
    ],
    popular: true,
    icon: Zap
  },
  {
    name: 'Enterprise',
    price: '99',
    features: [
      'Full analytics suite',
      'Real-time reporting',
      'Unlimited social accounts',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced security',
      'API access'
    ],
    icon: Shield
  }
];

export function SubscriptionPage() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubscribe = () => {
    if (selectedPlan && !showCardDetails) {
      setShowCardDetails(true);
    } else if (selectedPlan && showCardDetails) {
      setIsProcessing(true);
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        setShowConfirmation(true);
        setTimeout(() => {
          setShowConfirmation(false);
          setShowDemoPopup(true);
        }, 2000);
      }, 1500);
    }
  };

  const handleDemoClose = () => {
    setShowDemoPopup(false);
    navigate('/dashboard');
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + (v.length > 2 ? '/' + v.slice(2, 4) : '');
    }
    return v;
  };

  return (
    <>
      <div className="min-h-screen bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Select the perfect plan for your needs. Upgrade or downgrade at any time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative bg-zinc-900 rounded-xl p-6 border-2 transition-all cursor-pointer ${
                    selectedPlan === plan.name
                      ? 'border-white scale-105'
                      : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    setShowCardDetails(false);
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-white">£{plan.price}</span>
                        <span className="text-zinc-400">/month</span>
                      </div>
                    </div>
                    <div className="p-3 bg-zinc-800 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zinc-400">
                        <Check className="h-5 w-5 text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setSelectedPlan(plan.name);
                      setShowCardDetails(false);
                    }}
                    className={`w-full py-2 rounded-lg transition-colors ${
                      selectedPlan === plan.name
                        ? 'bg-white text-black'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}
                  >
                    {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              );
            })}
          </div>

          {selectedPlan && !showCardDetails && (
            <div className="mt-12 text-center">
              <button
                onClick={handleSubscribe}
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
              >
                Continue with {selectedPlan}
              </button>
            </div>
          )}

          {showCardDetails && (
            <div className="mt-12 max-w-md mx-auto bg-zinc-900 rounded-xl p-6 border-2 border-zinc-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-zinc-800 rounded-lg">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white">Payment Details</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    maxLength={19}
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({ ...cardDetails, number: formatCardNumber(e.target.value) })}
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-white focus:border-white"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      maxLength={5}
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({ ...cardDetails, expiry: formatExpiry(e.target.value) })}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-white focus:border-white"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      maxLength={3}
                      value={cardDetails.cvc}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value.replace(/\D/g, '') })}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-white focus:border-white"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-white focus:border-white"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-400 mt-4">
                  <Lock className="h-4 w-4" />
                  Your payment info is secure and encrypted
                </div>

                <button
                  onClick={handleSubscribe}
                  disabled={isProcessing}
                  className="w-full bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed mt-6"
                >
                  {isProcessing ? 'Processing...' : `Pay £${plans.find(p => p.name === selectedPlan)?.price}/month`}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full animate-scale-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Payment Successful!</h3>
              <p className="text-zinc-600">
                Thank you for subscribing to the {selectedPlan} plan.
              </p>
            </div>
          </div>
        </div>
      )}

      <DemoSitePopup isOpen={showDemoPopup} onClose={handleDemoClose} />
    </>
  );
}