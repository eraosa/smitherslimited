import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, HardHat, Layers, Wrench, Users } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

// NEW: Local stock images for Construction Services page
import constructionSiteAerialImg from '/construction_services_smithers_limited_fp.webp';
import constructionWorkersTeamImg from '/in_construction_smithers_limited.webp';
import heavyEquipmentMachineryImg from '/construction-site-sunset_smithers_limited.webp';

const offerings = [
  {
    icon: Layers,
    title: 'Site Preparation & Earthworks',
    desc: 'Comprehensive site preparation including clearing, grading, excavation, and earthworks for industrial and civil construction projects, ensuring a stable and compliant foundation.',
    items: ['Site Clearing', 'Grading & Levelling', 'Excavation Works', 'Ground Stabilization'],
  },
  {
    icon: HardHat,
    title: 'Civil & Structural Construction',
    desc: 'Quality civil and structural works delivered to approved designs — from concrete works and structural steel to masonry and finishing — ensuring durability, safety, and regulatory compliance.',
    items: ['Concrete Structures', 'Structural Steel', 'Masonry Works', 'Finishing Works'],
  },
  {
    icon: Wrench,
    title: 'Industrial Facility Construction',
    desc: 'End-to-end industrial facility construction services including oilfield-related facilities, warehouses, workshops, and operational buildings — built to specification and client requirements.',
    items: ['Oilfield Facilities', 'Warehouses & Workshops', 'Operational Buildings', 'Utility Infrastructure'],
  },
  {
    icon: Users,
    title: 'Project Management & QA/QC',
    desc: 'Rigorous project management and quality assurance systems that ensure every construction project is delivered on time, within budget, and to the highest quality standards.',
    items: ['Project Planning', 'Quality Control', 'Schedule Management', 'Cost Management'],
  },
];

const achievements = [
  'Successfully delivered civil and industrial construction works including site preparation, structural works, and facility-related projects in line with approved designs and timelines',
  'Implemented quality control and assurance measures that ensured durable, safe, and regulation-compliant construction outcomes',
  'Executed projects with zero major safety incidents through strict adherence to HSE standards and site safety management practices',
  'Utilized skilled Nigerian artisans, technicians, and engineers, contributing to capacity development and employment within project locations',
  'Completed construction projects in operational and live environments without disruption to client activities, demonstrating strong coordination and risk management',
  'Maintained positive host community relations during construction activities through engagement, local employment, and conflict prevention strategies',
];

const process = [
  { step: '01', title: 'Project Assessment', desc: 'Detailed site assessment, design review, and project scoping to define requirements and deliverables.' },
  { step: '02', title: 'Planning & Mobilization', desc: 'Comprehensive project planning, resource mobilization, and safety planning before work begins.' },
  { step: '03', title: 'Construction Execution', desc: 'Skilled execution by qualified Nigerian tradesmen, engineers, and technicians under rigorous supervision.' },
  { step: '04', title: 'Quality Assurance', desc: 'Systematic quality inspections at every stage to ensure compliance with design specifications.' },
  { step: '05', title: 'HSE Monitoring', desc: 'Continuous HSE monitoring, toolbox talks, and safety audits throughout construction activities.' },
  { step: '06', title: 'Handover & Documentation', desc: 'Complete project documentation, as-built records, and formal handover to client satisfaction.' },
];

export default function ConstructionServices() {
  return (
    <main>
      <PageHero
        title="Construction Services"
        subtitle="Civil and industrial construction solutions delivered with precision, quality, and zero-compromise HSE standards — on schedule and to specification."
        image={constructionSiteAerialImg}
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: 'Construction Services' }]}
      />

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Construction Excellence
                </div>
                <h2 className="section-title gold-underline mb-6">
                  Building Nigeria's Industrial Future
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Smithers Limited's construction services division delivers civil and industrial
                  construction works to the energy, oil and gas, and infrastructure sectors. Our
                  approach combines technically skilled Nigerian workforce, modern construction
                  management practices, and uncompromising quality standards.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We are uniquely positioned to execute construction projects in complex, live
                  operational environments — from oilfield facility upgrades to industrial developments —
                  without disrupting ongoing client operations. This capability, combined with our
                  strong HSE culture and host community engagement approach, makes us the preferred
                  indigenous construction partner in the Niger Delta region.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '100%', label: 'Projects On Schedule' },
                    { num: '0', label: 'Major Safety Incidents' },
                    { num: '100%', label: 'Nigerian Workforce' },
                    { num: '✓', label: 'NUPRC Compliant' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 border border-gray-100 p-4 rounded-sm text-center">
                      <div className="text-2xl font-bold text-green-800 mb-1">{stat.num}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src={constructionWorkersTeamImg}
                    alt="Construction workers team executing civil engineering and infrastructure projects"
                    className="w-full h-[460px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 border-2 border-amber-500 rounded-sm -z-10" />
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
              <h2 className="section-title gold-underline-center">Construction Capabilities</h2>
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

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Our Approach
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center">Construction Process</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 80}>
                <div className="relative p-6 border border-gray-100 rounded-sm hover:shadow-lg transition-all duration-300 hover:border-green-200">
                  <div className="text-6xl font-bold text-gray-50 absolute top-4 right-4 leading-none select-none">{p.step}</div>
                  <div className="text-amber-500 font-bold text-lg mb-2">{p.step}</div>
                  <h3 className="text-green-900 font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
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
                  Key Achievements
                </div>
                <h2 className="section-title-white gold-underline mb-8">
                  Construction Track Record
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
              <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={heavyEquipmentMachineryImg}
                  alt="Heavy equipment and machinery for construction and civil engineering projects"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-green-900 mb-4">Have a Construction Project?</h2>
            <p className="text-green-900/80 mb-8">Talk to our construction team about your project requirements.</p>
            <Link to="/contact" className="btn-green">
              Request a Consultation <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
