import { useState } from 'react';

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('stripe');

  const donationAmounts = [5, 10, 25, 50, 100];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      alert('Please select or enter a valid amount.');
      return;
    }

    // In a real app, this would redirect to payment processor
    alert(`Thank you for your donation of $${amount}! This would redirect to ${selectedMethod} payment processing.`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support My Work</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            If you find my blog posts helpful and would like to support my work, 
            consider making a donation. Your support helps me continue creating 
            quality content and maintaining this website.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>
            
            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Amount
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                      selectedAmount === amount
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter custom amount"
                  className="input-field pl-8"
                  min="1"
                  step="0.01"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Payment Method
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="stripe"
                    checked={selectedMethod === 'stripe'}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Credit/Debit Card (Stripe)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={selectedMethod === 'paypal'}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">PayPal</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="crypto"
                    checked={selectedMethod === 'crypto'}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Cryptocurrency</span>
                </label>
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              className="w-full btn-primary py-3 text-lg font-semibold"
            >
              Donate Now
            </button>
          </div>

          {/* Information */}
          <div className="space-y-6">
            {/* What Your Support Means */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Your Support Means</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Helps me create more high-quality blog posts and tutorials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Supports the maintenance and hosting of this website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Enables me to invest in better tools and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Motivates me to continue sharing knowledge with the community</span>
                </li>
              </ul>
            </div>

            {/* Alternative Ways to Support */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Ways to Support</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Share My Content</h4>
                  <p className="text-gray-600 text-sm">
                    Share my blog posts on social media or with your network. 
                    This helps reach more people who might find the content valuable.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Leave Comments</h4>
                  <p className="text-gray-600 text-sm">
                    Engage with my posts by leaving thoughtful comments. 
                    Your feedback helps me understand what content is most valuable.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Suggest Topics</h4>
                  <p className="text-gray-600 text-sm">
                    Let me know what topics you'd like me to cover in future posts. 
                    Your suggestions help me create more relevant content.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions?</h3>
              <p className="text-gray-700 text-sm mb-3">
                If you have any questions about donations or would like to discuss 
                other ways to support my work, feel free to reach out.
              </p>
              <a
                href="mailto:john.doe@example.com"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Contact me →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
