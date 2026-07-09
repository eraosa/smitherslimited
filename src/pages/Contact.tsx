import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

// NEW: Local stock images for Contact page
import businessTeamMeetingImg from '/contact_smithers_limited.webp';
import oilGasEngineersImg from '/contact_smithers_limited2.webp';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Nigeria Office',
    lines: ['26 Aggrey Road', 'Port Harcourt, Rivers State', 'Nigeria'],
  },
  {
    icon: MapPin,
    title: 'UK Office',
    lines: ['25 School Close, Eastville', 'Bristol BS5 6EB', 'United Kingdom'],
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    lines: ['+234 803 835 2745', '+234 803 824 6379', '+44 790 115 0322 (UK)'],
  },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['info@smitherslimited.com'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Monday – Friday: 8:00am – 5:00pm', 'Saturday: 9:00am – 2:00pm', 'Sunday: Closed'],
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const serviceLabel: Record<string, string> = {
      'oil-gas': 'Oil & Gas Services',
      construction: 'Construction Services',
      marine: 'Marine Services',
      multiple: 'Multiple Services',
      other: 'Other / General Enquiry',
      '': 'Not specified',
    };

    const subject = encodeURIComponent(
      `Enquiry from ${form.name}${form.company ? ` – ${form.company}` : ''}`
    );

    const body = encodeURIComponent(
      `Dear Smithers Limited Team,\n\n` +
      `You have received a new enquiry via the website contact form. Details are as follows:\n\n` +
      `Full Name:    ${form.name}\n` +
      `Email:        ${form.email}\n` +
      `Phone:        ${form.phone || 'Not provided'}\n` +
      `Company:      ${form.company || 'Not provided'}\n` +
      `Service:      ${(serviceLabel[form.service] ?? form.service) || 'Not specified'}\n\n` +
      `--- Message ---\n${form.message}\n` +
      `---------------\n\n` +
      `Please reply directly to the sender's email address above.\n\n` +
      `Regards,\nSmithers Limited Website`
    );

    const mailtoHref = `mailto:info@smitherslimited.com?subject=${subject}&body=${body}`;

    // Trigger a real anchor click — browsers allow this as a genuine user gesture
    // and won't silently block it the way they sometimes block window.location.href
    const link = document.createElement('a');
    link.href = mailtoHref;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Brief delay so the OS can handle the protocol before we update state
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 800);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 border rounded-sm text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-700 transition-colors ${errors[field] ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'
    }`;

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your project requirements, request a quote, or learn more about our services."
        image={businessTeamMeetingImg}
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="left">
                <div>
                  <div className="section-tag mb-4">
                    <span className="w-8 h-px bg-amber-500" />
                    Reach Us
                  </div>
                  <h2 className="section-title gold-underline mb-6">Get In Touch</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Whether you need oilfield services, construction support, or marine logistics,
                    our team is ready to discuss how Smithers Limited can support your operations.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-5">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <ScrollReveal key={info.title} delay={i * 80} direction="left">
                      <div className="flex gap-4 p-5 bg-gray-50 rounded-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 bg-green-800 rounded-sm flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-amber-400" />
                        </div>
                        <div>
                          <p className="text-green-900 font-semibold text-sm mb-1">{info.title}</p>
                          {info.lines.map((line) => (
                            <p key={line} className="text-gray-500 text-sm">{line}</p>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Compliance Trust Strip */}
              <ScrollReveal direction="left">
                <div className="p-5 bg-gray-50 border border-gray-100 rounded-sm">
                  <p className="text-green-900 font-semibold text-xs uppercase tracking-wider mb-3">Regulatory Standing</p>
                  <div className="space-y-2">
                    {[
                      { label: 'BPP Registered Contractor', desc: 'Listed on National Database of Federal Contractors' },
                      { label: 'SCUML Compliant', desc: 'AML/CFT Certificate — EFCC verified' },
                      { label: 'D-U-N-S® Registered', desc: 'Dun & Bradstreet business identity verified' },
                      { label: 'NITDA Registered', desc: 'IT Service Provider — Federal Government recognized' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 bg-green-800 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle size={10} className="text-amber-400" />
                        </div>
                        <div>
                          <p className="text-green-900 text-xs font-semibold">{item.label}</p>
                          <p className="text-gray-500 text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="left">
                <div className="p-6 bg-green-900 rounded-sm">
                  <p className="text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">Founder & Director</p>
                  <p className="text-white font-bold">Comr. Minabo Asechemie</p>
                  <p className="text-gray-400 text-sm mt-1">Smithers Limited Oil & Gas Services</p>
                  <div className="mt-4 pt-4 border-t border-green-800">
                    <p className="text-gray-400 text-xs">RC: 618843</p>
                    <p className="text-gray-400 text-xs mt-1">NUPRC & NCDMB Compliant</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="bg-gray-50 border border-gray-100 rounded-sm p-8 lg:p-10">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={36} className="text-green-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-900 mb-3">Your Mail App Should Have Opened</h3>
                      <p className="text-gray-500 mb-2 leading-relaxed">
                        We've pre-filled an email with your details and opened your default mail app.
                        Simply review and hit <strong>Send</strong> to reach our team.
                      </p>
                      <p className="text-gray-400 text-xs mb-6">
                        Didn't open? Email us directly at{' '}
                        <a
                          href="mailto:info@smitherslimited.com"
                          className="text-green-700 underline underline-offset-2"
                        >
                          info@smitherslimited.com
                        </a>
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-green"
                      >
                        Start Over
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-green-900 mb-2">Send Us a Message</h3>
                      <p className="text-gray-500 text-sm mb-8">
                        Fill in the form below and we'll respond within 1–2 business days.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Full Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Your full name"
                              className={inputClass('name')}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Email Address <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              className={inputClass('email')}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+234 XXX XXX XXXX"
                              className={inputClass('phone')}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Company / Organisation</label>
                            <input
                              type="text"
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Your company name"
                              className={inputClass('company')}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Service of Interest</label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className={inputClass('service')}
                          >
                            <option value="">Select a service...</option>
                            <option value="oil-gas">Oil & Gas Services</option>
                            <option value="construction">Construction Services</option>
                            <option value="marine">Marine Services</option>
                            <option value="multiple">Multiple Services</option>
                            <option value="other">Other / General Enquiry</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Message <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Describe your project requirements, questions, or how we can help you..."
                            className={`${inputClass('message')} resize-none`}
                          />
                          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-green w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {submitting ? (
                            <>
                              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message <Send size={16} />
                            </>
                          )}
                        </button>

                        <p className="text-gray-400 text-xs text-center">
                          By submitting this form you agree to our privacy policy. We'll never share your details with third parties.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder + Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Our Locations
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center mb-4">Where to Find Us</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-md">
                <div className="h-56 bg-green-800 relative flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <MapPin size={40} className="text-amber-400 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-1">Nigeria Headquarters</h3>
                    <p className="text-gray-300 text-sm">26 Aggrey Road, Port Harcourt</p>
                    <p className="text-gray-300 text-sm">Rivers State, Nigeria</p>
                  </div>
                  <div className="absolute inset-0 opacity-10">
                    <img
                      src={businessTeamMeetingImg}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <Phone size={14} className="text-green-700 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-700">+234 803 835 2745</p>
                        <p className="text-sm text-gray-700">+234 803 824 6379</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Mail size={14} className="text-green-700 mt-0.5" />
                      <p className="text-sm text-gray-700">info@smitherslimited.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-md">
                <div className="h-56 bg-green-900 relative flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <MapPin size={40} className="text-amber-400 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-1">UK Representative Office</h3>
                    <p className="text-gray-300 text-sm">25 School Close, Eastville</p>
                    <p className="text-gray-300 text-sm">Bristol BS5 6EB, United Kingdom</p>
                  </div>
                  <div className="absolute inset-0 opacity-10">
                    <img
                      src={oilGasEngineersImg}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <Phone size={14} className="text-green-700 mt-0.5" />
                      <p className="text-sm text-gray-700">+44 790 115 0322</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Mail size={14} className="text-green-700 mt-0.5" />
                      <p className="text-sm text-gray-700">info@smitherslimited.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Quick Answers
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: 'What areas does Smithers Limited operate in?',
                a: 'We primarily operate across the Niger Delta region of Nigeria, with capabilities extending to other parts of the country. We serve both onshore and offshore/nearshore locations, including challenging riverine environments.',
              },
              {
                q: 'Is Smithers Limited NUPRC compliant?',
                a: 'Yes. Smithers Limited maintains strict compliance with all NUPRC (Nigerian Upstream Petroleum Regulatory Commission) regulations, DPR legacy guidelines, and all applicable Nigerian laws governing the oil and gas industry.',
              },
              {
                q: 'Does Smithers Limited work with international oil companies?',
                a: 'Yes. We serve a diverse client base including International Oil Companies (IOCs), indigenous E&P companies, marginal field operators, government agencies, and marine operators.',
              },
              {
                q: 'How does Smithers Limited support Nigerian Content Development?',
                a: 'We are fully committed to NCDMB objectives, maximizing the use of Nigerian manpower, local vendors, in-country manufacturing, and skills transfer across all our operations.',
              },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <details className="group border border-gray-100 rounded-sm bg-gray-50 hover:border-green-200 transition-colors">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-green-900 font-semibold text-sm">
                    {faq.q}
                    <span className="text-amber-500 text-xl leading-none group-open:rotate-45 transition-transform duration-200 ml-4 shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
