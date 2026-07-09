import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Award, CheckCircle, FileCheck, Globe, Users, Leaf, AlertTriangle, Star
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

// Local stock images for Certifications page
import safetyEquipmentWorkersImg from '/compliance_smithers_limited_certification.webp';
import industrialSafetyHelmetImg from '/certifications_standards_smithers_limited.webp';
import engineeringConsultantsImg from '/engineering-consultants.webp';

const certifications = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System — Certified',
    desc: 'Smithers Limited holds an independently assessed and accredited ISO 9001:2015 certification (No. TQC-26-06-8176), confirming our Quality Management System meets international standards across all service lines. Valid to June 2029.',
    highlights: [
      'Marine Services & Marine Logistics Support',
      'Engineering & Construction Services',
      'Maintenance & Installation Services',
      'Procurement & Supply Services',
      'Supply of Petroleum Products (PMS & AGO)',
      'Painting, Blasting & Corrosion Control Services',
    ],
    color: 'bg-green-800',
  },
  {
    icon: Leaf,
    title: 'Environmental Management System',
    subtitle: 'Environmental Stewardship & Sustainability',
    desc: 'Our environmental management approach ensures proactive risk mitigation, pollution prevention, and sustainable operational practices across the Niger Delta and all project locations.',
    highlights: [
      'Environmental risk assessments',
      'Spill prevention and response',
      'Waste management procedures',
      'Emissions monitoring and control',
      'Ecosystem protection measures',
      'Regulatory compliance assurance',
    ],
    color: 'bg-green-700',
  },
  {
    icon: AlertTriangle,
    title: 'COSHH Compliance',
    subtitle: 'Control of Substances Hazardous to Health',
    desc: 'We maintain comprehensive COSHH compliance, ensuring safe handling, storage, and disposal of hazardous substances across oilfield, construction, and marine operations.',
    highlights: [
      'Hazardous substance identification',
      'Exposure risk assessments',
      'Control measures implementation',
      'Personal protective equipment',
      'Health surveillance programs',
      'Training and competency assurance',
    ],
    color: 'bg-amber-500',
  },
];

const regulatoryCompliance = [
  {
    title: 'NUPRC — Full Regulatory Compliance',
    desc: 'Full compliance with Nigerian Upstream Petroleum Regulatory Commission requirements governing oilfield operations, safety standards, and environmental regulations across the Niger Delta.',
  },
  {
    title: 'NCDMB — Registered Nigerian Content Company',
    desc: 'Active registration and compliance with the Nigerian Content Development and Monitoring Board, maximizing use of Nigerian workforce, local vendors, and in-country manufacturing on every project.',
  },
  {
    title: 'NCEC — Nigerian Content Equipment Certification',
    desc: 'Holds a valid Nigerian Content Equipment Certification (NCEC) issued through the NCDMB NOGIC JQS portal, confirming verified local capacity, equipment, and facilities for oil and gas contract eligibility.',
  },
  {
    title: 'NMDPRA — Oil & Gas Industry Service Permit (OGISP)',
    desc: 'Licensed by the Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA) via the Central Electronic Licensing and Permit System (CELPS), authorizing petroleum-related services delivery.',
  },
  {
    title: 'NSITF — Employees\' Compensation Clearance',
    desc: 'Fully registered and compliant with the Nigeria Social Insurance Trust Fund under the Employees\' Compensation Act 2010, ensuring comprehensive national compensation coverage for all staff.',
  },
  {
    title: 'PenCom — Pension Reform Act Clearance',
    desc: 'Certified compliant with the Pension Reform Act 2014 by the National Pension Commission, with employee contributions consistently and promptly remitted to Retirement Savings Accounts (RSAs).',
  },
  {
    title: 'ITF — Industrial Training Fund Compliance',
    desc: 'Compliant with the Industrial Training Fund Act, contributing 1% of annual payroll to national workforce development. ITF compliance is a mandatory requirement for all federal government procurement.',
  },
  {
    title: 'Nigerian Oil & Gas Industry Content Development Act',
    desc: 'Full alignment with all objectives and obligations of the Nigerian Oil and Gas Industry Content Development Act, operationalized on every project through measurable local content targets.',
  },
];

const registrations = [
  {
    icon: Shield,
    type: 'Regulatory Registration',
    title: 'NITDA',
    authority: 'National Information Technology Development Agency',
    desc: 'Registered as an indigenous IT Service Provider with NITDA — the Federal Government body mandated to regulate Nigeria\'s IT sector. This registration is required for companies providing technology-related services to all Federal Ministries, Departments, and Agencies (MDAs).',
    value: 'Enables digital service delivery to the FG\'s entire MDA ecosystem',
    color: 'bg-green-800',
  },
  {
    icon: Award,
    type: 'Professional Registration',
    title: 'CPN',
    authority: 'Computer Professionals (Registration Council of Nigeria)',
    desc: 'Registered with the statutory body established by Act No. 49 of 1993 to regulate and supervise the practice of computer professionalism in Nigeria. CPN registration confirms that Smithers Limited\'s technology personnel meet nationally recognized professional standards.',
    value: 'Statutory compliance for all IT service engagements',
    color: 'bg-amber-600',
  },
  {
    icon: FileCheck,
    type: 'Statutory Compliance',
    title: 'SCUML',
    authority: 'Special Control Unit Against Money Laundering (EFCC)',
    desc: 'Holds a valid SCUML Compliance Certificate issued by the Special Control Unit Against Money Laundering, a unit of the Economic and Financial Crimes Commission (EFCC). SCUML compliance is mandatory for all oil and gas companies and is required by Nigerian banks for corporate account operations.',
    value: 'Confirms full AML/CFT compliance and financial integrity',
    color: 'bg-green-700',
  },
  {
    icon: Globe,
    type: 'International Business Identity',
    title: 'D-U-N-S® Registered',
    authority: 'Dun & Bradstreet (D&B)',
    desc: 'Holds a Data Universal Numbering System (D-U-N-S®) number issued by Dun & Bradstreet — the globally recognized 9-digit business identifier used by multinational corporations, International Oil Companies (IOCs), and global procurement platforms for supplier verification and vendor onboarding.',
    value: 'Recognized by all major IOCs for global supplier qualification',
    color: 'bg-green-900',
  },
  {
    icon: CheckCircle,
    type: 'Sector Certification',
    title: 'NCEC',
    authority: 'Nigerian Content Development and Monitoring Board (NCDMB)',
    desc: 'Certified under the Nigerian Content Equipment Certification (NCEC) scheme administered via the NOGIC JQS portal. The NCEC is a mandatory certification for participation in Nigerian oil and gas tenders, verifying that a company has the physical equipment, facilities, and local capacity to deliver contracted services.',
    value: 'Mandatory prerequisite for all NCDMB-regulated tender participation',
    color: 'bg-amber-500',
  },
  {
    icon: Shield,
    type: 'Regulatory Licence',
    title: 'NMDPRA',
    authority: 'Nigerian Midstream & Downstream Petroleum Regulatory Authority',
    desc: 'Licensed by the NMDPRA under the Oil and Gas Industry Service Permit (OGISP) framework, authorizing Smithers Limited to provide services within the midstream and downstream petroleum sector. Operating without this permit constitutes a regulatory violation.',
    value: 'Authorizes lawful petroleum sector service delivery',
    color: 'bg-green-800',
  },
  {
    icon: Star,
    type: 'Procurement Registration',
    title: 'BPP',
    authority: 'Bureau of Public Procurement, Federal Republic of Nigeria',
    desc: 'Listed on the National Database of Federal Contractors, Consultants, and Service Providers maintained by the Bureau of Public Procurement (BPP). This registration is a legal prerequisite for bidding on any Federal Government of Nigeria contract or tender, and confirms full compliance with the Public Procurement Act.',
    value: 'Eligible to tender for all Federal Government of Nigeria contracts',
    color: 'bg-green-700',
  },
  {
    icon: Users,
    type: 'Labour & Workforce Compliance',
    title: 'ITF',
    authority: 'Industrial Training Fund, Nigeria',
    desc: 'Fully compliant with the Industrial Training Fund Act, with 1% annual payroll contributions remitted to support national skills development and vocational training. ITF compliance is required for all federal government procurement and reflects Smithers Limited\'s genuine investment in developing Nigerian technical talent.',
    value: 'Demonstrates verifiable investment in Nigerian workforce development',
    color: 'bg-amber-600',
  },
];

const hseElements = [
  {
    icon: FileCheck,
    title: 'Risk Assessment Methodology',
    desc: 'Systematic 5-step risk assessment process: identify hazards, determine who might be harmed, evaluate risks, record findings, and review controls.',
  },
  {
    icon: Users,
    title: 'Competency & Training',
    desc: 'Comprehensive training programs ensuring all personnel possess the skills, knowledge, and certifications required for safe operations.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Response',
    desc: 'Site-specific emergency response plans with established procedures, trained responders, and regular drill exercises.',
  },
  {
    icon: Globe,
    title: 'Permit-to-Work Systems',
    desc: 'Rigorous permit-to-work procedures for high-risk activities including hot work, confined space entry, and working at heights.',
  },
  {
    icon: Shield,
    title: 'PPE Management',
    desc: 'Comprehensive PPE program with hazard-specific equipment selection, inspection, maintenance, and proper usage protocols.',
  },
  {
    icon: Award,
    title: 'Safe Systems of Work',
    desc: 'Documented safe work procedures for all operational activities, regularly reviewed and updated based on lessons learned.',
  },
];

export default function Certifications() {
  return (
    <main>
      <PageHero
        title="Certifications & Compliance"
        subtitle="Our commitment to excellence is demonstrated through internationally recognized HSE management systems, full regulatory compliance, and zero-incident safety culture."
        image={safetyEquipmentWorkersImg}
        breadcrumbs={[{ label: 'Certifications' }]}
      />

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Quality & Safety Assurance
                </div>
                <h2 className="section-title gold-underline mb-6">
                  Internationally Recognized Standards
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Smithers Limited operates under a comprehensive Health, Safety, and Environmental
                  Management System aligned with ISO 9001:2015 international standards. Our management
                  system provides the framework for identifying, assessing, and controlling risks across
                  all oilfield, construction, and marine operations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our zero-incident safety culture is built on structured procedures, continuous training,
                  and proactive risk management — ensuring every project is delivered safely, compliantly,
                  and to the highest professional standards.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['ISO 9001:2015 Certified', 'NUPRC Compliant', 'NCEC Certified', 'SCUML Compliant', 'BPP Registered', 'NITDA Registered', 'D-U-N-S® Listed', 'ITF Compliant'].map((tag) => (
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
                    src={industrialSafetyHelmetImg}
                    alt="Industrial safety equipment and PPE representing Smithers Limited HSE compliance and safety standards"
                    className="w-full h-[460px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-green-900 text-white p-6 rounded-sm shadow-xl">
                  <div className="text-3xl font-bold text-amber-400">0</div>
                  <div className="text-xs text-gray-300 mt-1">Major Safety Incidents</div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-amber-500 rounded-sm -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Management Systems
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center">Quality & HSE Management Systems</h2>
              <p className="text-gray-500 mt-6 leading-relaxed">
                Our independently certified Quality Management System and integrated HSE framework provide
                comprehensive coverage across quality, occupational health, safety, and environmental performance.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <ScrollReveal key={cert.title} delay={i * 100}>
                  <div className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-green-200 h-full flex flex-col">
                    <div className={`w-14 h-14 ${cert.color} rounded-sm flex items-center justify-center mb-5`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-green-900 font-bold text-lg mb-1">{cert.title}</h3>
                    <p className="text-amber-600 text-xs font-semibold uppercase tracking-wide mb-3">{cert.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{cert.desc}</p>
                    <div className="mt-auto">
                      <ul className="space-y-2">
                        {cert.highlights.slice(0, 4).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle size={12} className="text-green-600 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HSE Elements */}
      <section className="py-24 bg-green-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  HSE Framework
                </div>
                <h2 className="section-title-white gold-underline mb-6">
                  Risk Assessment & Control
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Our HSE management system employs a systematic 5-step risk assessment methodology:
                  identify hazards, determine who might be harmed and how, evaluate risks and decide
                  on precautions, record findings and implement them, and review assessment and update
                  as necessary.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: '0', label: 'Major Incidents' },
                    { stat: '100%', label: 'Compliance Rate' },
                    { stat: '24/7', label: 'Safety Monitoring' },
                    { stat: '100%', label: 'Staff Trained' },
                  ].map((item) => (
                    <div key={item.label} className="bg-green-800/60 p-4 rounded-sm text-center">
                      <div className="text-2xl font-bold text-amber-400">{item.stat}</div>
                      <div className="text-gray-300 text-xs mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                {hseElements.map((el) => {
                  const Icon = el.icon;
                  return (
                    <div key={el.title} className="flex gap-4 bg-green-800/40 p-5 rounded-sm border border-green-700/50 hover:border-amber-500/50 transition-colors">
                      <div className="w-10 h-10 bg-amber-500 rounded-sm flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-green-900" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">{el.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{el.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Regulatory Standards
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="section-title gold-underline-center">Full Regulatory Compliance</h2>
              <p className="text-gray-500 mt-6 leading-relaxed">
                Smithers Limited maintains strict, verified compliance with all applicable Nigerian laws and
                regulatory frameworks governing the oil and gas, marine, construction, and labour sectors — with active clearance certificates held across all key statutory bodies.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {regulatoryCompliance.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm hover:shadow-lg hover:border-green-200 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle size={20} className="text-green-700" />
                    <h3 className="font-bold text-green-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations, Licences & Business Accreditations */}
      <section className="py-24 bg-green-950">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="section-tag justify-center mb-4">
                <span className="w-8 h-px bg-amber-500" />
                Registrations &amp; Licences
                <span className="w-8 h-px bg-amber-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Registrations, Licences &amp;
                <span className="block text-amber-400">Business Accreditations</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Beyond HSE certifications, Smithers Limited holds a comprehensive portfolio of statutory
                registrations, government licences, and international business accreditations — confirming
                our eligibility for federal procurement, IOC vendor onboarding, and sector-regulated engagements.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrations.map((reg, i) => {
              const Icon = reg.icon;
              return (
                <ScrollReveal key={reg.title} delay={i * 80}>
                  <div className="bg-green-900/60 border border-green-800 rounded-sm p-6 hover:border-amber-500/60 hover:bg-green-900 transition-all duration-300 h-full flex flex-col group">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 ${reg.color} rounded-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider text-right leading-tight max-w-[100px]">
                        {reg.type}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1">{reg.title}</h3>
                    <p className="text-amber-400/80 text-xs font-medium mb-4 leading-snug">{reg.authority}</p>
                    <p className="text-gray-300 text-xs leading-relaxed mb-5 flex-grow">{reg.desc}</p>
                    <div className="mt-auto pt-4 border-t border-green-800">
                      <div className="flex items-start gap-2">
                        <CheckCircle size={12} className="text-amber-400 mt-0.5 shrink-0" />
                        <p className="text-amber-400/90 text-xs leading-snug">{reg.value}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nigerian Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={engineeringConsultantsImg}
                  alt="Professional engineering team demonstrating Nigerian Content Development and local capacity building"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="section-tag mb-4">
                  <span className="w-8 h-px bg-amber-500" />
                  Nigerian Content Commitment
                </div>
                <h2 className="section-title gold-underline mb-6">
                  Building Local Capacity
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Smithers Limited is fully committed to the objectives of the Nigerian Oil and Gas
                  Industry Content Development Act. We maximize the use of Nigerian manpower, local
                  vendors, in-country manufacturing, and skills transfer across all our operations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our Nigerian Content strategy includes employment of qualified Nigerian personnel
                  at all levels, partnerships with local service providers, procurement from Nigerian
                  suppliers, and structured training programs for capacity development.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users, label: 'Nigerian Workforce' },
                    { icon: Globe, label: 'Local Vendors' },
                    { icon: Star, label: 'Skills Transfer' },
                    { icon: Award, label: 'Capacity Building' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-3 p-3 bg-white rounded-sm border border-gray-100">
                        <div className="w-8 h-8 bg-green-800 rounded-sm flex items-center justify-center">
                          <Icon size={14} className="text-amber-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      </div>
                    );
                  })}
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
              Partner With a Fully Compliant Organization
            </h2>
            <p className="text-green-900/80 mb-8 leading-relaxed">
              Smithers Limited delivers certified, compliant operations across oil & gas, construction,
              and marine services. Contact us to learn how our HSE standards protect your projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-green">
                Request Documentation <ArrowRight size={16} />
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
