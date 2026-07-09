import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  to?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Breadcrumb[];
  children?: ReactNode;
}

export default function PageHero({ title, subtitle, image, breadcrumbs, children }: Props) {
  return (
    <div className="relative min-h-[420px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/75 to-green-800/50" />
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" />

      <div className="relative max-w-7xl mx-auto px-6 pb-12 pt-32 w-full">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <div className="flex items-center gap-1.5 text-gray-300 text-sm mb-4">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            {breadcrumbs.map((bc, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-amber-400" />
                {bc.to ? (
                  <Link to={bc.to} className="hover:text-amber-400 transition-colors">{bc.label}</Link>
                ) : (
                  <span className="text-amber-400">{bc.label}</span>
                )}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-lg mt-4 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}
