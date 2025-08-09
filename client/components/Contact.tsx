import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Loader2, Phone, Mail, Map, Send, SquareArrowOutUpRight, SendHorizonal, CheckCircle2, CircleX, Info } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  // Contact data
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+855 86 397 836',
      href: 'tel:+85586397836',
      description: 'Call me directly'
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@cheatzx',
      href: 'https://t.me/cheatzx',
      description: 'Quick chat on Telegram'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@example.com',
      href: 'mailto:alex@example.com',
      description: 'Professional inquiries'
    },
    {
      icon: Map,
      label: 'Location',
      value: 'Sangkat Toeuk Thla, Khan Sen Sok, Phnom Penh, Cambodia.',
      href: '#',
      description: 'Available for meetings'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToTelegram = async (data: typeof formData) => {
    const BOT_TOKEN = '7762199917:AAFvdAJQZRrZm_ouEoHHDGxPPMr4lUT6T4Y'; // Replace with your bot token
    const CHAT_ID = '5058242890'; // Replace with your chat ID

    const message = `🔔 *New Contact Form Submission*

👤 *Name:* ${data.name}
📧 *Telegram:* ${data.telegram}
📝 *Subject:* ${data.subject}

💬 *Message:*
${data.message}

⏰ *Sent:* ${new Date().toLocaleString()}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Telegram
      const success = await sendToTelegram(formData);

      if (success) {
        // Show success toast
        toast({
          title: "Success!",
          description: (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Your message was sent.</span>
            </div>
          ),
          duration: 6000,
        });
        // Reset form on success
        setFormData({ name: '', telegram: '', subject: '', message: '' });
      } else {
        // Show error toast
        toast({
          title: "Error!",
          description: (
            <div className="flex items-center gap-2">
              <CircleX className="w-5 h-5 text-red-500" />
              <span>Something went wrong. Please try again or contact me directly via Telegram.</span>
            </div>
          ),
          duration: 6000,
        });
      }
    } catch (error) {
      // Show error toast for unexpected errors
      toast({
        title: "Connection Error!",
        description: (
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-yellow-500" />
            <span>Unable to connect to server. Please check your internet connection and try again.</span>
          </div>
        ),
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-80 h-80 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 border border-white/5 rounded-full"></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
              <Mail className="w-5 h-5" />
              <span className="text-sm text-white font-medium tracking-wide">CONTACT</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
              GET IN
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
              >
                TOUCH
              </motion.span>
            </h2>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Let's discuss your next project and create something extraordinary together.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">Connect With Me</h2>

              {/* Response time indicator */}
              <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-95"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                  </span>
                  <div>
                    <p className="text-white font-semibold">Quick Response</p>
                    <p className="text-gray-400 text-sm">I will get back to you as soon as possible. Usually within 24 hours.</p>
                  </div>
                </div>
              </div>

              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                      <contact.icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold text-lg">{contact.label}</h3>
                        <SquareArrowOutUpRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      <p className="text-white font-medium mb-1">{contact.value}</p>
                      <p className="text-gray-400 text-sm">{contact.description}</p>
                    </div>
                  </div>
                </a>
              ))}

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 relative overflow-hidden">
                {/* Form decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 border border-white/5 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border border-white/5 rounded-full"></div>

                <div className="relative z-10">
                  <div className="mb-10">
                    <h2 className="text-4xl font-bold text-white mb-3">Send a Message</h2>
                    <p className="text-gray-300">Connected to Telegram for instant notifications</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="block text-white font-semibold text-sm uppercase tracking-wide">Full Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-14 bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-white focus:ring-white/20 transition-all rounded-xl text-lg"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="block text-white font-semibold text-sm uppercase tracking-wide">Telegram</label>
                        <Input
                          name="telegram"
                          type="text"
                          value={formData.telegram}
                          onChange={handleInputChange}
                          required
                          className="h-14 bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-white focus:ring-white/20 transition-all rounded-xl text-lg"
                          placeholder="@yourusername"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-white font-semibold text-sm uppercase tracking-wide">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="h-14 bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-white focus:ring-white/20 transition-all rounded-xl text-lg"
                        placeholder="What would you like to discuss?"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="block text-white font-semibold text-sm uppercase tracking-wide">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-white focus:ring-white/20 transition-all rounded-xl resize-none text-lg"
                        placeholder="Tell me about your project, ideas, or just say hello..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-transparent border-2 text-white hover:bg-transparent font-semibold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-white/10"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <SendHorizonal className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}