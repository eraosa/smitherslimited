import { Link } from 'react-router-dom';
import {
  ArrowRight, Building2, Briefcase, Landmark, HardHat,
  Factory, Anchor, Users, Globe, Heart, Flame
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

// NEW: Local stock images for Clients page
import corporateOfficeTeamImg from '/clients_smithers.webp';
import professionalPartnershipImg from '/clients_boardroom_smithers_limited.webp';
import teamMeetingImg from '/content_development_smithers_limited.webp';

const clientSegments = [
  {
    icon: Flame,
    title: 'Oil & Gas Operators',
    color: 'bg-green-800',
    clients: [
      'International Oil Companies (IOCs)',
      'Indigenous Exploration & Production (E&P) companies',
      'Marginal field operators',
      'Integrated energy companies',
    ],
  },
  {
    icon: Briefcase,
    title: 'Oil & Gas Service Companies',
    color: 'bg-amber-600',
    clients: [
      'Drilling and well services companies',
      'Pipeline, flowline, and facility operators',
      'Production, maintenance, and integrity service providers',
    ],
  },
  {
    icon: Landmark,
    title: 'Government & Regulatory Bodies',
    color: 'bg-green-700',
    clients: [
      'Federal, State, and Local Government agencies',
      'Ministries, Departments, and Agencies (MDAs)',
      'Niger Delta development institutions and intervention agencies',
    ],
  },
  {
    icon: HardHat,
    title: 'Construction & Infrastructure Clients',
    color: 'bg-green-900',
    clients: [
      'Industrial and civil construction firms',
      'Infrastructure developers and project owners',
      'Energy and utility companies',
    ],
  },
  {
    icon: Factory,
    title: 'Private Sector & Institutional Clients',
    color: 'bg-amber-500',
    clients: [
      'Manufacturing and industrial companies',
      'Power generation and transmission companies',
      'Real estate and industrial estate developers',
    ],
  },
  {
    icon: Anchor,
    title: 'Marine & Offshore Clients',
    color: 'bg-green-800',
    clients: [
      'Offshore oil and gas operators (FPSOs, platforms, rigs)',
      'Marine logistics and support companies',
      'Dredging and marine construction companies',
      'Port authorities and terminal operators',
      'Ship owners and vessel management companies',
      'Offshore installation and subsea service providers',
    ],
  },
];

const beneficiaries = [
  {
    icon: Heart,
    title: 'Host Communities (Niger Delta & Project Areas)',
    color: 'bg-green-800',
    items: [
      'Employment and skills development opportunities',
      'Community-based contracting and vendor participation',
      'Social investment and capacity-building initiatives',
    ],
  },
  {
    icon: Users,
    title: 'Nigerian Workforce & Professionals',
    color: 'bg-amber-600',
    items: [
      'Engineers, technicians, and skilled tradesmen',
      'Young professionals through training and mentorship',
      'Local subcontractors and artisans',
    ],
  },
  {
    icon: Globe,
    title: 'Government & the Nigerian Economy',
    color: 'bg-green-700',
    items: [
      'Increased Nigerian Content participation',
      'Local value retention and economic growth',
      'Support for national development and energy security goals',
    ],
  },
  {
    icon: Building2,
    title: 'Clients & Project Partners',
    color: 'bg-green-900',
    items: [
      'Reliable, compliant, and cost-effective project delivery',
      'Reduced operational risk through strong HSE practices',
      'Long-term partnerships built on trust and performance',
    ],
  },
  {
    icon: Anchor,
    title: 'Marine & Coastal Stakeholders',
    color: 'bg-amber-500',
    items: [
      'Employment opportunities for marine engineers, seafarers, and offshore technicians',
      'Capacity development in marine equipment installation and logistics',
      'Improved safety and efficiency in offshore and nearshore operations',
      'Support for Nigeria\'s maritime and blue economy sectors',
    ],
  },
];

export default function Clients() {
  return (
    <main>
      <PageHero
        title="Clients & Beneficiaries"
        subtitle="Serving a diverse range of clients across the energy, construction, and marine sectors — while creating lasting value for Nigerian communities, workforce, and the wider economy."
        image={corporateOfficeTeamImg}
        breadcrumbs={[{ label: 'Clients' }]}
      />

      {/* Client Segments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Who We Serve
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center mb-4">Targeted Client Segments</h2>
              <p className="text-gray-500 mt-6 leading-relaxed">
                Smithers Limited serves a broad spectrum of clients across the energy, construction,
                and marine sectors — from international oil majors to government agencies and marine operators.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientSegments.map((seg, i) => {
              const Icon = seg.icon;
              return (
                <ScrollReveal key={seg.title} delay={i * 80}>
                  <div className="bg-white border border-gray-100 rounded-sm p-7 hover:shadow-xl hover:border-green-200 transition-all duration-300 group">
                    <div className={`w-12 h-12 ${seg.color} rounded-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-green-900 font-bold text-base mb-4">{seg.title}</h3>
                    <ul className="space-y-2.5">
                      {seg.clients.map((client) => (
                        <li key={client} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          {client}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Client Value
                </div>
                <h2 className="section-title-white gold-underline mb-6">
                  What Our Clients Get
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  When you partner with Smithers Limited, you gain more than a service provider —
                  you gain a reliable, compliant, and performance-driven partner committed to your
                  project's success and your operational objectives.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Regulatory Assurance', desc: 'Full NUPRC and NCDMB compliance, giving you confidence in every regulatory interaction.' },
                    { title: 'HSE Excellence', desc: 'A zero-incident approach backed by structured safety management systems and proven procedures.' },
                    { title: 'Cost Effectiveness', desc: 'Competitive indigenous pricing with no compromise on quality, safety, or compliance.' },
                    { title: 'Long-Term Partnership', desc: 'Built on trust, transparency, and consistent performance across every engagement.' },
                  ].map((v) => (
                    <div key={v.title} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">{v.title}</h4>
                        <p className="text-gray-400 text-sm">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={professionalPartnershipImg}
                  alt="Professional business partnership meeting discussing energy sector collaboration"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Impact & Value
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center mb-4">Targeted Beneficiaries</h2>
              <p className="text-gray-500 mt-6 leading-relaxed">
                Beyond our direct clients, Smithers Limited creates tangible value for communities,
                workers, the Nigerian economy, and the nation's maritime sector.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficiaries.map((ben, i) => {
              const Icon = ben.icon;
              return (
                <ScrollReveal key={ben.title} delay={i * 80} className={i === 4 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white border border-gray-100 rounded-sm p-7 hover:shadow-xl hover:border-green-200 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 ${ben.color} rounded-sm flex items-center justify-center mb-5`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-green-900 font-bold text-base mb-4">{ben.title}</h3>
                    <ul className="space-y-2.5">
                      {ben.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nigerian Content Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={teamMeetingImg}
                  alt="Engineering consultants team meeting for Nigerian Content Development and local capacity building"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Nigerian Content
                </div>
                <h2 className="section-title gold-underline mb-6">
                  Committed to Nigerian Content Development
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  As a fully indigenous company, Nigerian Content Development is at the heart of
                  everything we do. We are fully aligned with the objectives of the Nigerian Oil and
                  Gas Industry Content Development Act, and we operationalize this commitment on every project.
                </p>
                <div className="space-y-3">
                  {[
                    'Maximum use of Nigerian manpower and professionals',
                    'Preference for local vendors and suppliers',
                    'In-country manufacturing and fabrication',
                    'Skills transfer and capacity building programs',
                    'Employment for host community residents',
                    'Support for local subcontractors and artisans',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
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
              Become a Smithers Limited Partner
            </h2>
            <p className="text-green-900/80 mb-8 leading-relaxed">
              Whether you're an operator, contractor, or institutional client, we welcome the opportunity
              to discuss how Smithers Limited can serve your specific operational needs.
            </p>
            <Link to="/contact" className="btn-green">
              Get In Touch Today <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
