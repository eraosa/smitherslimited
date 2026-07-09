import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, Anchor, Navigation, Ship, Package } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

// NEW: Local stock images for Marine Services page
import cargoShipContainerImg from '/fp_marine_services_smithers_limited.webp';
import offshoreSupplyVesselImg from '/in_marine_smithers_limited.webp';
import portContainerTerminalImg from '/in_marine_smithers_container.webp';
import offshorePlatformSupportImg from '/in_marine_smithers_ltd.webp';

const offerings = [
  {
    icon: Ship,
    title: 'Barge & Vessel Operations',
    desc: 'Professional barge operations and vessel management services for the transportation of equipment, materials, and personnel across Nigeria\'s inland waterways and coastal waters.',
    items: ['Barge Operations', 'Vessel Management', 'Towing & Mooring', 'Charter Services'],
  },
  {
    icon: Anchor,
    title: 'Marine Equipment Installation',
    desc: 'Supply, installation, and maintenance of marine equipment including mooring systems, offshore support structures, safety systems, and subsea components to industry standards.',
    items: ['Mooring Systems', 'Safety Equipment', 'Offshore Structures', 'Subsea Components'],
  },
  {
    icon: Navigation,
    title: 'Navigation Aids & Safety Systems',
    desc: 'Installation and maintenance of navigation aids including buoys, beacons, and electronic navigation systems to ensure safe passage through Niger Delta waterways and offshore areas.',
    items: ['Navigation Buoys', 'Channel Marking', 'Electronic Systems', 'Maintenance Programs'],
  },
  {
    icon: Package,
    title: 'Marine Logistics & Offshore Support',
    desc: 'Integrated marine logistics services including personnel transfer, material handling, dispatch operations, and real-time field support for offshore and nearshore projects.',
    items: ['Personnel Transfer', 'Material Handling', 'Crew Boat Services', 'Dispatch Operations'],
  },
];

const fullOfferings = [
  'Supply, installation, and maintenance of marine equipment',
  'Marine logistics and offshore support services',
  'Barge and vessel operations',
  'Crew boat and personnel transfer services',
  'Offshore material handling and transportation',
  'Mooring and anchoring system installation',
  'Navigation aids installation and maintenance',
  'Jetty and shoreline support services',
  'Offshore installation and subsea service support',
  'Marine safety and HSE management',
  'Vessel coordination and dispatch operations',
  'Near-shore and riverine operations management',
];

const achievements = [
  'Successfully delivered marine logistics support services, including personnel and equipment transportation to offshore and riverine project locations',
  'Executed supply, installation, and maintenance of marine equipment including navigation aids, mooring systems, offshore support structures, and safety systems',
  'Provided marine logistics and offshore support including vessel coordination, dispatch operations, and real-time field support for offshore projects',
  'Delivered barge operations, crew boat services, and material handling logistics ensuring timely movement of personnel and equipment',
  'Maintained strong adherence to HSE standards in marine operations, achieving safe offshore operations with minimal incidents',
  'Demonstrated capability in operating within challenging Niger Delta waterways under varying tidal, weather, and environmental conditions',
  'Supported offshore and nearshore operations through marine equipment installation and maintenance services',
  'Established effective collaboration with offshore operators, marine regulators, and host communities',
];

export default function MarineServices() {
  return (
    <main>
      <PageHero
        title="Marine Services"
        subtitle="Full-spectrum marine logistics, offshore support, and marine equipment services — proven across Nigeria's challenging Niger Delta waterways and offshore environments."
        image={cargoShipContainerImg}
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: 'Marine Services' }]}
      />

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Marine Excellence
                </div>
                <h2 className="section-title gold-underline mb-6">
                  Navigating Nigeria's Waters with Expertise
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Smithers Limited's marine services division delivers comprehensive offshore and nearshore
                  support to oil and gas operators, marine logistics companies, and port authorities
                  operating in Nigeria's complex aquatic environments. Our team brings deep expertise
                  in Niger Delta waterway operations — one of the most operationally demanding marine
                  environments in the world.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  From crew transfers and barge operations to marine equipment installation and navigation
                  aid maintenance, we ensure reliable, safe, and efficient marine service delivery
                  regardless of tidal, weather, or environmental conditions. Our marine HSE record reflects
                  our unwavering commitment to safe offshore operations.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Niger Delta Specialists', 'Marine HSE Certified', 'Offshore & Nearshore', 'Nigeria Registered'].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-green-50 border border-green-200 text-green-800 text-xs font-medium rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src={offshoreSupplyVesselImg}
                    alt="Offshore supply vessel providing marine logistics and support for oil and gas operations"
                    className="w-full h-[460px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-amber-500 rounded-sm -z-10" />
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
              <h2 className="section-title gold-underline-center">Marine Capabilities</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
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

          {/* Full offering list */}
          <ScrollReveal>
            <div className="bg-green-900 rounded-sm p-10">
              <h3 className="text-white font-bold text-xl mb-8 text-center">Complete Marine Service Offering</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {fullOfferings.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-green-800/50 rounded-sm p-3">
                    <CheckCircle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Marine Track Record
                </div>
                <h2 className="section-title gold-underline mb-8">
                  Key Achievements in Marine Services
                </h2>
                <ul className="space-y-4">
                  {achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-800 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle size={12} className="text-amber-400" />
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="img-zoom rounded-sm overflow-hidden shadow-lg">
                  <img
                    src={offshorePlatformSupportImg}
                    alt="Offshore platform support and marine logistics operations"
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '0', label: 'Marine Safety Incidents' },
                    { num: '100%', label: 'On-Time Vessel Ops' },
                    { num: '24/7', label: 'Operational Capability' },
                    { num: '✓', label: 'Niger Delta Certified' },
                  ].map((s) => (
                    <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-sm p-5 text-center">
                      <div className="text-2xl font-bold text-green-800 mb-1">{s.num}</div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Marine Stakeholders
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center mb-4">Who Benefits from Our Marine Services</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Employment Opportunities', desc: 'For marine engineers, seafarers, and offshore technicians' },
              { title: 'Capacity Development', desc: 'In marine equipment installation and logistics' },
              { title: 'Improved Safety', desc: 'Enhanced safety and efficiency in offshore and nearshore operations' },
              { title: 'Community Benefit', desc: 'Support for Niger Delta communities through marine employment' },
              { title: 'Blue Economy Support', desc: 'Support for Nigeria\'s maritime and blue economy sectors' },
              { title: 'Offshore Continuity', desc: 'Reliable offshore support ensuring operational continuity' },
            ].map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 80}>
                <div className="bg-white p-6 rounded-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300">
                  <h3 className="text-green-900 font-bold text-sm mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Port & Logistics Image Section */}
      <section className="py-16 bg-green-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={portContainerTerminalImg}
                  alt="Port container terminal and marine logistics hub supporting Nigeria's maritime trade"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Logistics Hub
                </div>
                <h2 className="section-title-white gold-underline mb-6">
                  Strategic Marine Logistics Network
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our marine logistics network spans Nigeria's major ports, waterways, and offshore locations,
                  enabling rapid mobilization and reliable service delivery for clients across the energy sector.
                </p>
                <div className="space-y-3">
                  {['Port Harcourt base operations', 'Onne port support capabilities', 'Warri/Escravos coverage', 'Lagos liaison and coordination'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle size={14} className="text-amber-400 shrink-0" />
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
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-green-900 mb-4">Need Marine Support Services?</h2>
            <p className="text-green-900/80 mb-8">Contact our marine operations team to discuss your offshore and nearshore service requirements.</p>
            <Link to="/contact" className="btn-green">
              Contact Our Marine Team <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
