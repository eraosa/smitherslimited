import { Link } from 'react-router-dom';
import {
  ArrowRight, Target, Eye, Shield, Users, Globe, Award,
  CheckCircle, Flame, Anchor, HardHat, Star, Waves
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

// NEW: Local stock images for About page
import oilGasEngineersImg from '/construction_about_smithers_limited.webp';
import industrialBuildingImg from '/about_smithers_limited.webp';
import safetyEquipmentWorkersImg from '/regulatory_smithers_limited.webp';

const coreValues = [
  {
    num: '01',
    icon: Shield,
    title: 'HSEQ Excellence',
    desc: 'We operate with zero tolerance for unsafe practices, prioritizing the health and safety of personnel and communities, environmental protection, and continuous improvement in quality, in line with NUPRC guidelines and global best practices.',
    color: 'bg-green-800',
  },
  {
    num: '02',
    icon: Users,
    title: 'Nigerian Content & Local Capacity Development',
    desc: 'We are fully committed to the objectives of the Nigerian Oil and Gas Industry Content Development Act by promoting the use of Nigerian manpower, local vendors, in-country manufacturing, and skills transfer across all our operations.',
    color: 'bg-amber-500',
  },
  {
    num: '03',
    icon: CheckCircle,
    title: 'Regulatory Compliance',
    desc: 'We maintain strict compliance with all applicable Nigerian laws, NUPRC regulations, DPR legacy guidelines, and industry standards, ensuring transparent, accountable, and auditable operations.',
    color: 'bg-green-700',
  },
  {
    num: '04',
    icon: Globe,
    title: 'Environmental Stewardship & Sustainability',
    desc: 'We proactively manage environmental risks, prevent pollution, and adopt sustainable operational practices that protect the Niger Delta ecosystem and support long-term environmental resilience.',
    color: 'bg-green-600',
  },
  {
    num: '05',
    icon: Award,
    title: 'Integrity & Ethical Conduct',
    desc: 'We conduct our business with honesty, professionalism, and transparency, fostering trust with clients, regulators, host communities, and partners.',
    color: 'bg-amber-600',
  },
  {
    num: '06',
    icon: Star,
    title: 'Operational Excellence & Reliability',
    desc: 'We deliver projects efficiently, on schedule, and to specification, leveraging competent personnel, modern technology, and robust project management systems.',
    color: 'bg-green-900',
  },
  {
    num: '07',
    icon: Waves,
    title: 'Community Engagement & Social Responsibility',
    desc: 'We maintain respectful and productive relationships with host communities through structured engagement, employment opportunities, and social investment initiatives aligned with sustainable development goals.',
    color: 'bg-green-700',
  },
];

const capabilities = [
  { icon: Flame, label: 'Oil & Gas Services' },
  { icon: HardHat, label: 'Construction Works' },
  { icon: Anchor, label: 'Marine Services' },
];

export default function About() {
  return (
    <main>
      <PageHero
        title="About Smithers Limited"
        subtitle="A leading indigenous oil servicing, construction, and marine company dedicated to excellence, compliance, and sustainable national development."
        image={oilGasEngineersImg}
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* COMPANY OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Our Story
                </div>
                <h2 className="section-title gold-underline mb-6">
                  An Indigenous Company Built for Nigerian Excellence
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Smithers Limited Oil & Gas Services (RC: 618843) was established with a singular vision:
                  to be a formidable, indigenous player in Nigeria's energy sector — one that competes on
                  quality, safety, and compliance while championing Nigerian Content Development.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Headquartered in Port Harcourt, Rivers State — the heart of Nigeria's oil and gas industry —
                  we have built a reputation for reliability, technical competence, and unwavering commitment
                  to HSE standards across the Niger Delta and beyond.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  With an additional presence in Bristol, United Kingdom, Smithers Limited bridges international
                  best practices with deep local knowledge, delivering projects under challenging terrain and
                  operational conditions with minimal downtime and maximum safety.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {capabilities.map(({ icon: Icon, label }) => (
                    <div key={label} className="text-center p-4 bg-gray-50 rounded-sm border border-gray-100">
                      <div className="w-10 h-10 bg-green-800 rounded-sm flex items-center justify-center mx-auto mb-2">
                        <Icon size={18} className="text-amber-400" />
                      </div>
                      <p className="text-xs font-medium text-gray-700">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src={industrialBuildingImg}
                    alt="Industrial construction facility project delivered by Smithers Limited engineering team"
                    className="w-full h-[480px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-green-900 text-white p-6 rounded-sm shadow-xl">
                  <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase mb-1">Founder & Director</p>
                  <p className="font-bold text-lg">Comr. Minabo Asechemie</p>
                  <p className="text-gray-400 text-xs mt-1">Smithers Limited Oil & Gas Services</p>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-amber-500 rounded-sm -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Our Direction
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center">Mission & Vision</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="bg-green-900 text-white p-10 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-800 rounded-full -translate-y-20 translate-x-20 opacity-40" />
                <div className="relative">
                  <div className="w-14 h-14 bg-amber-500 rounded-sm flex items-center justify-center mb-6">
                    <Target size={24} className="text-green-900" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5">Mission Statement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To deliver safe, efficient, and high-quality oilfield services and construction solutions
                    in Nigeria, with a strong commitment to Nigerian Content Development, strict adherence
                    to NUPRC regulations, and internationally accepted HSE standards. We strive to maximize
                    indigenous participation, build local capacity, protect the environment, and create
                    sustainable value for our clients, host communities, and stakeholders.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-amber-500 text-green-900 p-10 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400 rounded-full -translate-y-20 translate-x-20 opacity-40" />
                <div className="relative">
                  <div className="w-14 h-14 bg-green-900 rounded-sm flex items-center justify-center mb-6">
                    <Eye size={24} className="text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5">Vision Statement</h3>
                  <p className="text-green-900/90 leading-relaxed">
                    To be a leading indigenous oil servicing, construction and marine servicing company
                    in Nigeria, recognized by regulators, operators, and partners for excellence in service
                    delivery, full compliance with NUPRC and NCDMB requirements, strong HSE culture, and
                    measurable contributions to national development and the Niger Delta economy.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Our Principles
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center mb-4">Core Values</h2>
              <p className="text-gray-500 mt-6 leading-relaxed">
                Our seven core values are not just statements — they are the standards by which every
                project, every team member, and every engagement is measured.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={val.num} delay={i * 80}>
                  <div className="group p-7 border border-gray-100 rounded-sm hover:shadow-xl transition-all duration-300 hover:border-green-200 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-gray-50 leading-none select-none">
                      {val.num}
                    </div>
                    <div className={`w-12 h-12 ${val.color} rounded-sm flex items-center justify-center mb-5`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-green-900 font-bold text-base mb-3">{val.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLIANCE & CERTIFICATIONS */}
      <section className="py-20 bg-green-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Regulatory Standing
                </div>
                <h2 className="section-title-white gold-underline mb-6">
                  Full Regulatory Compliance
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Smithers Limited operates in full compliance with all applicable Nigerian laws and
                  regulatory frameworks governing the oil and gas industry. Our transparent, accountable,
                  and auditable operations ensure that every engagement meets or exceeds regulatory requirements.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'NUPRC — Nigerian Upstream Petroleum Regulatory Commission',
                    'NCDMB — Nigerian Content Development & Monitoring Board',
                    'NCEC — Nigerian Content Equipment Certification',
                    'NMDPRA — Oil & Gas Industry Service Permit (OGISP)',
                    'ISO 9001:2015 Quality Management System',
                    'NSITF — Employees\' Compensation Act 2010',
                    'PenCom — Pension Reform Act 2014',
                    'SCUML — AML/CFT Compliance Certificate (EFCC)',
                    'BPP — National Database of Federal Contractors',
                    'NITDA — IT Service Provider Registration',
                    'ITF — Industrial Training Fund Compliance',
                    'D-U-N-S® Registered — Dun & Bradstreet',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 bg-green-800/50 rounded-sm p-3">
                      <CheckCircle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-xs leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="img-zoom rounded-sm overflow-hidden">
                <img
                  src={safetyEquipmentWorkersImg}
                  alt="Safety-equipped workers demonstrating HSE compliance and regulatory standards on industrial site"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Ready to Partner with Smithers Limited?
            </h2>
            <p className="text-green-900/80 mb-8 leading-relaxed">
              Join a growing list of operators, contractors, and agencies who trust Smithers Limited
              for reliable, compliant, and cost-effective energy sector solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-green">
                Contact Us Today <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 border-2 border-green-900 text-green-900 hover:bg-green-900 hover:text-white font-semibold px-8 py-3.5 rounded-sm transition-all duration-300 tracking-wide text-sm uppercase">
                View Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
