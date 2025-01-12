import { useState } from 'react';
import { Mail, Phone, Send, MessageSquare, MapPin, Loader2, Star, ThumbsUp, ThumbsDown } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FeedbackData {
  rating: number;
  type: 'positive' | 'negative' | null;
  details: string;
}

export function Engage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    rating: 0,
    type: null,
    details: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'contact' | 'feedback'>('contact');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFeedbackData({ rating: 0, type: null, details: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Forms Section */}
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">Engage With Us</h1>
            <p className="text-zinc-600">
              Share your thoughts, questions, or feedback. We're here to help and improve.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex border-b border-zinc-200">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-4 py-2 border-b-2 transition-colors ${
                  activeTab === 'contact'
                    ? 'border-black text-black'
                    : 'border-transparent text-zinc-500 hover:text-black'
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`px-4 py-2 border-b-2 transition-colors ${
                  activeTab === 'feedback'
                    ? 'border-black text-black'
                    : 'border-transparent text-zinc-500 hover:text-black'
                }`}
              >
                Give Feedback
              </button>
            </div>
          </div>

          {activeTab === 'contact' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors disabled:bg-zinc-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-3">
                  How would you rate your experience?
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setFeedbackData({ ...feedbackData, rating })}
                      className={`p-2 rounded-lg transition-colors ${
                        feedbackData.rating >= rating
                          ? 'text-yellow-500'
                          : 'text-zinc-300 hover:text-yellow-500'
                      }`}
                    >
                      <Star className="h-6 w-6" fill={feedbackData.rating >= rating ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-3">
                  What type of feedback do you have?
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFeedbackData({ ...feedbackData, type: 'positive' })}
                    className={`flex-1 p-4 rounded-lg border transition-colors ${
                      feedbackData.type === 'positive'
                        ? 'border-green-500 bg-green-50'
                        : 'border-zinc-200 hover:border-green-500'
                    }`}
                  >
                    <ThumbsUp className={`h-6 w-6 mx-auto ${
                      feedbackData.type === 'positive' ? 'text-green-500' : 'text-zinc-400'
                    }`} />
                    <p className="text-sm mt-2 text-center">Positive</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFeedbackData({ ...feedbackData, type: 'negative' })}
                    className={`flex-1 p-4 rounded-lg border transition-colors ${
                      feedbackData.type === 'negative'
                        ? 'border-red-500 bg-red-50'
                        : 'border-zinc-200 hover:border-red-500'
                    }`}
                  >
                    <ThumbsDown className={`h-6 w-6 mx-auto ${
                      feedbackData.type === 'negative' ? 'text-red-500' : 'text-zinc-400'
                    }`} />
                    <p className="text-sm mt-2 text-center">Needs Improvement</p>
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-zinc-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="details"
                  required
                  value={feedbackData.details}
                  onChange={(e) => setFeedbackData({ ...feedbackData, details: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black resize-none"
                  placeholder="Tell us more about your experience..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors disabled:bg-zinc-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Feedback'
                )}
              </button>
            </form>
          )}

          {submitted && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                Thank you for your {activeTab === 'contact' ? 'message' : 'feedback'}! We'll get back to you soon.
              </p>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="lg:pl-12">
          <div className="bg-zinc-50 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-black mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-medium text-black">Email</p>
                  <a href="mailto:hello@navada.com" className="text-zinc-600 hover:text-black transition-colors">
                    hello@navada.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-medium text-black">Phone</p>
                  <a href="tel:+442045876390" className="text-zinc-600 hover:text-black transition-colors">
                    +44 204 587 6390
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg">
                  <MessageSquare className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-medium text-black">Social Media</p>
                  <div className="space-y-1">
                    <a href="#" className="block text-zinc-600 hover:text-black transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="block text-zinc-600 hover:text-black transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-medium text-black">Location</p>
                  <p className="text-zinc-600">
                    London, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}