import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Shield, Users, Globe, Award, Flame,
  Anchor, HardHat, Waves, ChevronRight
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import StatCounter from '../components/ui/StatCounter';
import InstagramEmbed from '../components/ui/InstagramEmbed';

// NEW: Local stock images for each service category
import offshoreOilPlatformImg from '/oil_gas_smithers_limited_frontpage.webp';
import constructionSiteAerialImg from '/construction_smithers_limited-willbillurban-30449458.webp';
import cargoShipContainerImg from '/marine_smithers_limited.webp';
import businessTeamMeetingImg from '/oil_gas_engineers_smithers_limited.webp';
import engineeringConsultantsImg from '/smithers_partner_oil.webp';
import oilRefineryComplexImg from '/hse_smithers_limited.webp';
import offshoreSupplyVesselImg from '/compliance_smithers_limited.webp';
import craneConstructionImg from '/construction_compliance_smithers_limited-willbillurban-30449458.webp';

const services = [
  {
    icon: Flame,
    title: 'Oil & Gas Services',
    desc: 'Comprehensive oilfield support and ancillary services for operators and service companies across the Niger Delta, delivered with strict NUPRC compliance and zero-compromise HSE standards.',
    image: offshoreOilPlatformImg,
    to: '/services/oil-gas',
    items: ['Field Operations Support', 'NUPRC Compliance', 'HSE Management', 'Oilfield Logistics'],
  },
  {
    icon: HardHat,
    title: 'Construction Services',
    desc: 'Civil and industrial construction services including site preparation, structural works, and facility projects delivered on schedule, within budget, and to the highest quality standards.',
    image: constructionSiteAerialImg,
    to: '/services/construction',
    items: ['Site Preparation', 'Structural Works', 'Facility Construction', 'Quality Assurance'],
  },
  {
    icon: Anchor,
    title: 'Marine Services',
    desc: 'Full-spectrum marine logistics and offshore support including vessel operations, crew transfer, equipment installation, and navigation aids across Nigeria\'s demanding Niger Delta waterways.',
    image: cargoShipContainerImg,
    to: '/services/marine',
    items: ['Vessel Operations', 'Crew Transfer', 'Marine Equipment', 'Offshore Logistics'],
  },
];

const values = [
  { icon: Shield, label: 'HSEQ Excellence', color: 'bg-green-700' },
  { icon: Users, label: 'Nigerian Content', color: 'bg-amber-500' },
  { icon: CheckCircle, label: 'Regulatory Compliance', color: 'bg-green-800' },
  { icon: Globe, label: 'Environmental Stewardship', color: 'bg-green-600' },
  { icon: Award, label: 'Operational Excellence', color: 'bg-amber-600' },
  { icon: Waves, label: 'Community Engagement', color: 'bg-green-900' },
];

const clients = [
  'International Oil Companies (IOCs)',
  'Indigenous E&P Companies',
  'Marginal Field Operators',
  'Marine & Offshore Operators',
  'Government & MDAs',
  'Industrial Construction Firms',
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0" ref={heroRef}>
          <img
            src={offshoreOilPlatformImg}
            alt="Offshore oil and gas platform in the Niger Delta showcasing Smithers Limited energy sector operations"
            className="w-full h-full object-cover scale-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/90 via-green-900/80 to-green-950/95 md:bg-gradient-to-r md:from-green-950/95 md:via-green-900/80 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent" />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 w-full">
          <div className="max-w-3xl">
            <div className="section-tag mb-4 sm:mb-5 animate-fade-in">
              <span className="w-8 h-px bg-amber-500" />
              Indigenous Oil Servicing Company · RC: 618843
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 sm:mb-6 animate-fade-in animation-delay-200">
              Delivering Excellence{' '}
              <span className="text-gold-gradient">Across Nigeria's</span>{' '}
              Energy Sector
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl animate-fade-in animation-delay-300">
              Smithers Limited provides safe, efficient, and high-quality oilfield services,
              construction solutions, and marine logistics — fully compliant with NUPRC
              regulations and internationally accepted HSE standards.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in animation-delay-400">
              <Link to="/services" className="btn-primary w-full sm:w-auto justify-center">
                Explore Our Services <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline w-full sm:w-auto justify-center">
                Get In Touch
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-6 mt-8 sm:mt-12 animate-fade-in animation-delay-500">
              {['NUPRC Compliant', 'ISO 9001:2015 Certified', 'BPP Registered Contractor', 'SCUML Compliant'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-amber-400 shrink-0" />
                  <span className="text-gray-300 text-xs sm:text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-fade-in animation-delay-600">
          <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-amber-500 to-transparent" />
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="gradient-green py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={15} suffix="+" label="Years of Experience" />
            <StatCounter end={100} suffix="%" label="NUPRC Compliance" />
            <StatCounter end={0} suffix="" label="Major Safety Incidents" />
            <StatCounter end={200} suffix="+" label="Projects Delivered" />
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src={businessTeamMeetingImg}
                    alt="Smithers Limited professional engineering team collaborating on energy sector projects in Nigeria"
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-amber-500 text-green-900 p-6 rounded-sm shadow-xl w-48">
                  <div className="stat-number text-4xl font-bold">15+</div>
                  <div className="text-xs font-semibold mt-1 uppercase tracking-wide">Years Delivering Excellence</div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-amber-500 rounded-sm -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Who We Are
                </div>
                <h2 className="section-title gold-underline mb-6">
                  Nigeria's Trusted Indigenous Oil Servicing Partner
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Smithers Limited is a fully Nigerian-owned oil servicing, construction, and
                  marine servicing company committed to delivering world-class energy sector solutions
                  across the Niger Delta and beyond. Founded with a clear vision of indigenous excellence,
                  we combine deep local knowledge with international best practices.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our operations span oilfield services, civil and industrial construction, and comprehensive
                  marine logistics — all underpinned by strict NUPRC regulatory compliance, a strong HSEQ
                  culture, and genuine commitment to Nigerian Content Development.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['NUPRC Compliant', 'NCDMB Registered', 'BPP & NITDA Registered', 'NCEC Certified'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle size={16} className="text-green-700 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link to="/about" className="btn-green">
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                What We Do
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center mb-4">
                Comprehensive Energy Sector Solutions
              </h2>
              <p className="text-gray-500 leading-relaxed mt-6">
                From upstream oilfield operations to marine logistics and industrial construction,
                Smithers Limited delivers end-to-end services with precision, safety, and compliance.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <ScrollReveal key={svc.title} delay={i * 120}>
                  <div className="bg-white rounded-sm shadow-lg overflow-hidden card-hover group">
                    <div className="img-zoom h-52 relative">
                      <img src={svc.image} alt={`${svc.title} - professional energy sector solutions by Smithers Limited`} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
                      <div className="absolute bottom-4 left-5 flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-sm flex items-center justify-center">
                          <Icon size={18} className="text-green-900" />
                        </div>
                        <h3 className="text-white font-bold text-lg">{svc.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{svc.desc}</p>
                      <ul className="space-y-2 mb-6">
                        {svc.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                            <ChevronRight size={14} className="text-amber-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={svc.to}
                        className="inline-flex items-center gap-2 text-green-800 font-semibold text-sm hover:text-amber-600 transition-colors group"
                      >
                        View Service Details
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-green">
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Why Choose Smithers
                </div>
                <h2 className="section-title-white gold-underline mb-6">
                  Built on Trust, Driven by Excellence
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  With deep roots in the Niger Delta and a firm commitment to Nigerian Content Development,
                  we bring together technical expertise, regulatory compliance, and genuine community
                  partnership to deliver results that matter.
                </p>

                <div className="space-y-5">
                  {[
                    { title: 'Zero-Compromise HSE Standards', desc: 'Proven track record of zero major safety incidents across all operations.' },
                    { title: 'Full NUPRC & NCDMB Compliance', desc: 'Transparent, auditable operations meeting all Nigerian regulatory requirements.' },
                    { title: 'Indigenous Expertise', desc: 'Deep local knowledge of Niger Delta terrain, waterways, and operational conditions.' },
                    { title: 'End-to-End Capabilities', desc: 'From oilfield services to marine logistics and construction — one reliable partner.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle size={14} className="text-green-900" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom rounded-sm overflow-hidden h-56 col-span-2">
                  <img
                    src={oilRefineryComplexImg}
                    alt="Oil refinery complex showcasing petroleum processing and energy sector infrastructure"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="img-zoom rounded-sm overflow-hidden h-40">
                  <img
                    src={offshoreSupplyVesselImg}
                    alt="Offshore supply vessel providing marine logistics support for oil and gas operations"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="img-zoom rounded-sm overflow-hidden h-40">
                  <img
                    src={craneConstructionImg}
                    alt="Construction crane and heavy equipment for civil engineering and infrastructure projects"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
                Our Foundation
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center mb-4">Core Values That Drive Us</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.label} delay={i * 100}>
                  <div className="group p-6 border border-gray-100 rounded-sm hover:border-green-200 hover:shadow-lg transition-all duration-300 bg-white">
                    <div className={`w-12 h-12 ${v.color} rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-green-900 text-sm">{v.label}</h3>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENTS STRIP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Who We Serve
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center mb-4">
                Trusted Across Sectors
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, i) => (
              <ScrollReveal key={client} delay={i * 80}>
                <div className="bg-white border border-gray-100 rounded-sm p-4 text-center hover:border-green-300 hover:shadow-md transition-all duration-300">
                  <p className="text-gray-600 text-xs font-medium leading-snug">{client}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link to="/clients" className="inline-flex items-center gap-2 text-green-800 font-semibold hover:text-amber-600 transition-colors text-sm">
                View All Client Segments <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INSTAGRAM REEL */}
      <section className="py-24 bg-green-950 relative overflow-hidden">
        {/* Subtle dot grid texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                See Us in Action
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest from{' '}
                <span className="text-amber-400">@smitherslimited</span>
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
                Follow our operations across Nigeria's energy sector — oilfield services,
                construction, and marine logistics from the Niger Delta and beyond.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <InstagramEmbed permalink="https://www.instagram.com/reel/DZVCdlnSyeP/" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-10">
              <a
                href="https://www.instagram.com/smitherslimited/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Follow Us on Instagram
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={engineeringConsultantsImg}
            alt="Engineering consultants strategizing on major energy and infrastructure projects in Nigeria"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 overlay-green" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="section-tag justify-center mb-6">
              <span className="w-8 h-px bg-amber-400" />
              Let's Work Together
              <span className="w-8 h-px bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
              Partner With Nigeria's Premier Indigenous Oilfield Services Company
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're an IOC, indigenous E&P company, marine operator, or infrastructure developer,
              Smithers Limited is your reliable, compliant, and capable partner in Nigeria.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Request a Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
