import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, Shield, Flame, Settings, Truck } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

// NEW: Local stock images for Oil & Gas Services page
import offshoreDrillingRigImg from '/oil_gas_smithers_liited.webp';
import oilRefineryComplexImg from '/in_oil_gas_smithers_limited.webp';
import oilPipelineOperationsImg from '/in3_oil_gas_smithers_limited.webp';

const offerings = [
  {
    icon: Flame,
    title: 'Oilfield Support & Ancillary Services',
    desc: 'Comprehensive field support services for upstream operators including production support, facility maintenance, and site coordination in complex Niger Delta environments.',
    items: ['Production Support', 'Facility Maintenance', 'Site Supervision', 'Field Coordination'],
  },
  {
    icon: Shield,
    title: 'HSE Management & Safety Planning',
    desc: 'Structured HSEQ procedures, site-specific safety plans, and safety management systems that achieve zero-incident performance across all field operations.',
    items: ['Safety Plans & Procedures', 'HSE Audits', 'Incident Prevention', 'Emergency Response'],
  },
  {
    icon: Settings,
    title: 'Maintenance & Integrity Services',
    desc: 'Reliable maintenance and integrity management services that ensure asset performance, minimize downtime, and extend the operational life of oilfield infrastructure.',
    items: ['Routine Maintenance', 'Integrity Assessment', 'Asset Management', 'Reliability Programs'],
  },
  {
    icon: Truck,
    title: 'Oilfield Logistics & Supply Chain',
    desc: 'Efficient logistics coordination for the movement of personnel, equipment, and materials across oilfield locations — including challenging onshore and nearshore sites.',
    items: ['Personnel Logistics', 'Equipment Mobilization', 'Material Supply', 'Vendor Coordination'],
  },
];

const achievements = [
  'Successfully executed oilfield support and ancillary services for operators and service companies within the Niger Delta',
  'Maintained a strong HSE performance record on all oil and gas projects through structured HSEQ procedures',
  'Demonstrated consistent compliance with NUPRC (formerly DPR) operational, safety, and environmental requirements',
  'Delivered field operations under challenging terrain and operational conditions with minimal downtime',
  'Established effective working relationships with operators, supervisors, and regulatory bodies',
  'Completed operations in live environments without disruption to ongoing client activities',
];

export default function OilGasServices() {
  return (
    <main>
      <PageHero
        title="Oil & Gas Services"
        subtitle="Oilfield support and ancillary services for operators and service companies — delivered with NUPRC compliance and zero-compromise HSE standards."
        image={offshoreDrillingRigImg}
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: 'Oil & Gas Services' }]}
      />

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Oil & Gas Operations
                </div>
                <h2 className="section-title gold-underline mb-6">
                  Trusted Oilfield Services in the Niger Delta
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Smithers Limited delivers reliable oilfield support and ancillary services to operators
                  and service companies operating across the Niger Delta. Our operations are characterized
                  by strict NUPRC compliance, a strong HSE culture, and the technical competence to
                  perform under the unique challenges of Nigeria's oil-producing region.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We have built an enviable track record of delivering field operations under challenging
                  terrain and operational conditions with minimal downtime — reflecting strong planning,
                  coordination, and supervision capabilities honed over years of Niger Delta operations.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['NUPRC Compliant', 'HSE Certified', 'Indigenous Expertise', 'Niger Delta Specialists'].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-green-50 border border-green-200 text-green-800 text-xs font-medium rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={oilRefineryComplexImg}
                  alt="Oil refinery complex and petroleum processing facilities supporting upstream and downstream operations"
                  className="w-full h-[460px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Service Offerings
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center">What We Deliver</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((off, i) => {
              const Icon = off.icon;
              return (
                <ScrollReveal key={off.title} delay={i * 100}>
                  <div className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-green-200">
                    <div className="w-12 h-12 bg-green-800 rounded-sm flex items-center justify-center mb-5">
                      <Icon size={20} className="text-amber-400" />
                    </div>
                    <h3 className="text-green-900 font-bold text-lg mb-3">{off.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{off.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {off.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-gray-600">
                          <ChevronRight size={12} className="text-amber-500 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-green-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Track Record
                </div>
                <h2 className="section-title-white gold-underline mb-8">
                  Key Achievements in Oil & Gas
                </h2>
                <ul className="space-y-4">
                  {achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                <div className="img-zoom rounded-sm overflow-hidden">
                  <img
                    src={oilPipelineOperationsImg}
                    alt="Oil pipeline operations and maintenance ensuring safe and efficient petroleum transportation"
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-800/60 p-5 rounded-sm text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-1">0</div>
                    <div className="text-gray-300 text-xs">Major Safety Incidents</div>
                  </div>
                  <div className="bg-green-800/60 p-5 rounded-sm text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-1">100%</div>
                    <div className="text-gray-300 text-xs">NUPRC Compliance Rate</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-green-900 mb-4">Need Oilfield Services Support?</h2>
            <p className="text-green-900/80 mb-8">Contact our team to discuss your operational needs and how Smithers Limited can help.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-green">
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link to="/achievements" className="inline-flex items-center gap-2 border-2 border-green-900 text-green-900 hover:bg-green-900 hover:text-white font-semibold px-8 py-3.5 rounded-sm transition-all duration-300 tracking-wide text-sm uppercase">
                View Achievements
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
