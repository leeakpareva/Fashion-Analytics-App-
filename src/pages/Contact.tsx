import { useState } from 'react';
import { Mail, Phone, Send, MessageSquare, MapPin, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">Get in Touch</h1>
            <p className="text-zinc-600">
              Have a question or want to work together? Drop me a message.
            </p>
          </div>

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

            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            )}
          </form>
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
                  <a href="mailto:leslie@navada.com" className="text-zinc-600 hover:text-black transition-colors">
                    leslie@navada.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-medium text-black">Phone</p>
                  <a href="tel:+1234567890" className="text-zinc-600 hover:text-black transition-colors">
                    +1 (234) 567-890
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