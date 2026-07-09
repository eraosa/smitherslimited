import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Flame, HardHat, Anchor, Award } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import StatCounter from '../components/ui/StatCounter';

// NEW: Local stock images for Achievements page
import oilGasEngineersImg from '/oil_platform_smithers_limited.webp';
import offshoreDrillingRigImg from '/oil_archivement_smithers.webp';
import constructionSiteAerialImg from '/construction_archievement_smithers.webp';
import maritimeShippingOperationsImg from '/marine_archievement_smithers.webp';

const categories = [
  {
    icon: Flame,
    color: 'bg-green-800',
    accent: 'border-green-700',
    title: 'Oil & Gas Services',
    image: offshoreDrillingRigImg,
    achievements: [
      'Successfully executed oilfield support and ancillary services for operators and service companies within the Niger Delta, in compliance with client specifications and regulatory requirements.',
      'Maintained a strong HSE performance record on oil and gas projects through the implementation of structured HSEQ procedures and site-specific safety plans.',
      'Demonstrated consistent compliance with NUPRC (formerly DPR) guidelines, including operational, safety, and environmental requirements across all engagements.',
      'Delivered field operations under challenging terrain and operational conditions with minimal downtime, reflecting strong planning, coordination, and supervision capabilities.',
      'Established effective working relationships with operators, supervisors, and regulatory bodies, ensuring seamless project execution and regulatory satisfaction.',
      'Completed field operations in live environments without disruption to ongoing client activities, demonstrating strong risk management and coordination.',
    ],
  },
  {
    icon: HardHat,
    color: 'bg-amber-600',
    accent: 'border-amber-500',
    title: 'Construction Services',
    image: constructionSiteAerialImg,
    achievements: [
      'Successfully delivered civil and industrial construction works, including site preparation, structural works, and facility-related projects in line with approved designs and timelines.',
      'Implemented quality control and assurance measures that ensured durable, safe, and regulation-compliant construction outcomes across all projects.',
      'Executed projects with zero major safety incidents through strict adherence to HSE standards and site safety management practices throughout construction activities.',
      'Utilized skilled Nigerian artisans, technicians, and engineers, contributing to capacity development and employment within project locations and host communities.',
      'Completed construction projects in operational and live environments without disruption to client activities, demonstrating strong coordination and risk management capabilities.',
      'Maintained positive host community relations during construction activities through structured engagement, local employment, and conflict prevention strategies.',
    ],
  },
  {
    icon: Anchor,
    color: 'bg-green-700',
    accent: 'border-green-600',
    title: 'Marine Services',
    image: maritimeShippingOperationsImg,
    achievements: [
      'Successfully delivered marine logistics support services, including personnel and equipment transportation to offshore and riverine project locations across the Niger Delta.',
      'Executed supply, installation, and maintenance of marine equipment including navigation aids, mooring systems, offshore support structures, and safety systems in compliance with industry standards.',
      'Provided marine logistics and offshore support, including vessel coordination, dispatch operations, and real-time field support for offshore projects.',
      'Delivered barge operations, crew boat services, and material handling logistics, ensuring timely movement of personnel and equipment across project sites.',
      'Maintained strong adherence to HSE standards in marine operations, achieving safe offshore operations with minimal incidents through structured marine safety procedures.',
      'Demonstrated capability in operating within challenging Niger Delta waterways, ensuring reliable service delivery under varying tidal, weather, and environmental conditions.',
    ],
  },
];

const highlights = [
  { icon: Award, title: 'Zero Major Incidents', desc: 'Consistent zero major safety incident record across all service lines and project types.' },
  { icon: CheckCircle, title: 'NUPRC Compliance', desc: '100% compliance rate with NUPRC, DPR legacy guidelines, and all applicable Nigerian regulations.' },
  { icon: Award, title: 'On-Time Delivery', desc: 'Strong track record of delivering projects on schedule and within agreed specifications.' },
  { icon: CheckCircle, title: 'Community Relations', desc: 'Positive host community relations maintained across all project locations through structured engagement.' },
];

export default function Achievements() {
  return (
    <main>
      <PageHero
        title="Key Achievements"
        subtitle="A proven track record of excellence across oil & gas services, construction, and marine operations — built on compliance, safety, and outstanding project delivery."
        image={oilGasEngineersImg}
        breadcrumbs={[{ label: 'Achievements' }]}
      />

      {/* Stats */}
      <section className="gradient-green py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={200} suffix="+" label="Projects Completed" />
            <StatCounter end={0} suffix="" label="Major Safety Incidents" />
            <StatCounter end={15} suffix="+" label="Years of Excellence" />
            <StatCounter end={100} suffix="%" label="Compliance Rate" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Performance Highlights
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center">What We've Achieved</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <ScrollReveal key={h.title} delay={i * 100}>
                  <div className="text-center p-8 bg-gray-50 rounded-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
                    <div className="w-14 h-14 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={22} className="text-amber-400" />
                    </div>
                    <h3 className="text-green-900 font-bold mb-2">{h.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievement Categories */}
      <section className="py-10 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {categories.map((cat, catIdx) => {
            const Icon = cat.icon;
            const isEven = catIdx % 2 === 1;
            return (
              <div key={cat.title}>
                <ScrollReveal>
                  <div className={`flex items-center gap-4 mb-10 ${isEven ? 'flex-row-reverse justify-end' : ''}`}>
                    <div className={`w-12 h-12 ${cat.color} rounded-sm flex items-center justify-center`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <div className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-1">Achievements</div>
                      <h2 className="text-2xl font-bold text-green-900">{cat.title}</h2>
                    </div>
                  </div>
                </ScrollReveal>

                <div className={`grid lg:grid-cols-2 gap-12 items-start`}>
                  <ScrollReveal direction={isEven ? 'right' : 'left'}>
                    <div className={isEven ? 'lg:order-2' : ''}>
                      <div className="img-zoom rounded-sm overflow-hidden shadow-xl mb-6">
                        <img src={cat.image} alt={`${cat.title} achievements and track record`} className="w-full h-64 object-cover" loading="lazy" />
                      </div>
                      <div className={`h-1 rounded-full ${cat.color} w-16 mb-4`} />
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Smithers Limited has built a strong track record in {cat.title.toLowerCase()}, consistently delivering
                        results that meet client expectations, regulatory requirements, and the highest safety standards.
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction={isEven ? 'left' : 'right'}>
                    <div className={`space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                      {cat.achievements.map((item, i) => (
                        <div key={i} className={`flex items-start gap-4 p-4 bg-gray-50 rounded-sm border-l-2 ${cat.accent} hover:bg-gray-100 transition-colors`}>
                          <CheckCircle size={16} className="text-green-700 mt-0.5 shrink-0" />
                          <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="section-tag justify-center mb-4">
              <span className="w-8 h-px bg-amber-500" />
              Partner With Us
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Add Your Project to Our Success Story
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Join the growing number of operators and clients who have benefited from Smithers Limited's
              proven track record of safe, compliant, and excellent project delivery.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline">
                View Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
