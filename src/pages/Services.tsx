import { Link } from 'react-router-dom';
import { ArrowRight, Flame, HardHat, Anchor, CheckCircle, ChevronRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

// NEW: Local stock images for Services page
import offshoreOilPlatformImg from '/oil_gas_smithers_liited.webp';
import oilGasEngineersImg from '/oil_gas_services_banner_smithers_limited.webp';
import constructionSiteAerialImg from '/construction_services_smithers_limited_fp.webp';
import cargoShipContainerImg from '/fp_marine_services_smithers_limited.webp';

const services = [
  {
    icon: Flame,
    title: 'Oil & Gas Services',
    tagline: 'Oilfield Excellence in the Niger Delta',
    desc: 'Comprehensive oilfield support and ancillary services delivered with strict NUPRC compliance, strong HSE culture, and proven operational capability across challenging Niger Delta terrain.',
    image: offshoreOilPlatformImg,
    to: '/services/oil-gas',
    offerings: [
      'Oilfield Support & Ancillary Services',
      'NUPRC-Compliant Field Operations',
      'HSE Management & Safety Plans',
      'Production Support Services',
      'Maintenance & Integrity Services',
      'Oilfield Logistics & Supply Chain',
    ],
    color: 'from-green-900',
  },
  {
    icon: HardHat,
    title: 'Construction Services',
    tagline: 'Delivering Infrastructure with Precision',
    desc: 'Civil and industrial construction solutions including site preparation, structural works, and facility construction — executed on schedule, within budget, and with zero major safety incidents.',
    image: constructionSiteAerialImg,
    to: '/services/construction',
    offerings: [
      'Site Preparation & Earthworks',
      'Civil & Structural Construction',
      'Industrial Facility Construction',
      'Quality Control & Assurance',
      'Project Management',
      'Construction in Live Environments',
    ],
    color: 'from-amber-900',
  },
  {
    icon: Anchor,
    title: 'Marine Services',
    tagline: 'Offshore & Nearshore Marine Excellence',
    desc: 'Full-spectrum marine logistics and offshore support spanning vessel operations, crew transfer, marine equipment installation, and navigation aids — proven across Nigeria\'s demanding Niger Delta waterways.',
    image: cargoShipContainerImg,
    to: '/services/marine',
    offerings: [
      'Marine Logistics & Offshore Support',
      'Barge & Vessel Operations',
      'Crew Boat & Personnel Transfer',
      'Marine Equipment Installation',
      'Mooring & Anchoring Systems',
      'Navigation Aids Installation',
    ],
    color: 'from-blue-900',
  },
];

const differentiators = [
  { title: 'NUPRC Compliance', desc: 'Every operation meets or exceeds NUPRC and DPR regulatory standards.' },
  { title: 'Zero-Incident Culture', desc: 'Structured HSEQ procedures and site-specific safety plans on every project.' },
  { title: 'Nigerian Content', desc: 'Maximizing use of Nigerian manpower, vendors, and in-country resources.' },
  { title: 'Proven Track Record', desc: 'Successfully delivered projects across oil & gas, construction, and marine sectors.' },
  { title: 'Indigenous Expertise', desc: 'Deep knowledge of Niger Delta terrain, waterways, and operational conditions.' },
  { title: 'Reliable Delivery', desc: 'Projects completed on schedule, within budget, and to specification.' },
];

export default function Services() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Three integrated service lines — Oil & Gas, Construction, and Marine — delivered with world-class HSE standards and full regulatory compliance."
        image={oilGasEngineersImg}
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 1;
            return (
              <div key={svc.title}>
                <div className={`grid lg:grid-cols-2 gap-14 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <ScrollReveal direction={isEven ? 'right' : 'left'}>
                    <div className={`relative img-zoom rounded-sm overflow-hidden shadow-2xl ${isEven ? 'lg:order-2' : ''}`}>
                      <img
                        src={svc.image}
                        alt={`${svc.title} - Smithers Limited professional energy sector solutions`}
                        className="w-full h-[420px] object-cover"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${svc.color}/60 to-transparent opacity-50`} />
                      <div className="absolute top-5 left-5">
                        <div className="w-12 h-12 bg-amber-500 rounded-sm flex items-center justify-center">
                          <Icon size={22} className="text-green-900" />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction={isEven ? 'left' : 'right'}>
                    <div className={isEven ? 'lg:order-1' : ''}>
                      <div className="section-tag mb-3">
                        <span className="w-8 h-px bg-amber-500" />
                        {svc.tagline}
                      </div>
                      <h2 className="section-title gold-underline mb-5">{svc.title}</h2>
                      <p className="text-gray-600 leading-relaxed mb-7">{svc.desc}</p>

                      <h4 className="text-green-900 font-semibold text-sm mb-4 uppercase tracking-wide">Service Offerings</h4>
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {svc.offerings.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                            <ChevronRight size={14} className="text-amber-500 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>

                      <Link to={svc.to} className="btn-green">
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Smithers */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Our Advantage
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center mb-4">What Sets Smithers Apart</h2>
              <p className="text-gray-500 mt-6">
                We don't just deliver services — we deliver assurance, compliance, and lasting value across every engagement.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 80}>
                <div className="p-6 bg-white border border-gray-100 rounded-sm hover:shadow-lg hover:border-green-200 transition-all duration-300">
                  <CheckCircle size={20} className="text-green-700 mb-3" />
                  <h3 className="font-bold text-green-900 mb-2">{d.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Tailored Energy Solution?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Speak with our team to discuss your specific project requirements. We'll provide a compliant,
              cost-effective solution designed for your operational needs.
            </p>
            <Link to="/contact" className="btn-primary">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
