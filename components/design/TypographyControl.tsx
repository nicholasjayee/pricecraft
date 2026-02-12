import React from 'react';
import { GlobalDesign } from '../../types';
import { ChevronDown } from 'lucide-react';

interface TypographyControlProps {
  design: GlobalDesign;
  updateDesign: (design: Partial<GlobalDesign>) => void;
}

const fonts = [
    { name: 'Inter', font: 'Inter' },
    { name: 'Poppins', font: 'Poppins' },
    { name: 'Roboto', font: 'Roboto' },
    { name: 'Playfair Display', font: 'Playfair Display' },
];

export const TypographyControl: React.FC<TypographyControlProps> = ({ design, updateDesign }) => {
  return (
    <section className="space-y-4">
      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
        Typography
      </h3>
      <div>
          <label className="block text-xs font-medium text-slate-700 mb-2">Font Family</label>
          <div className="relative">
            <select
                value={design.fontFamily}
                onChange={(e) => updateDesign({ fontFamily: e.target.value })}
                className="w-full appearance-none px-3 py-2 bg-white border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer pr-10"
                style={{ fontFamily: design.fontFamily }}
            >
                {fonts.map((f) => (
                    <option key={f.name} value={f.font} style={{ fontFamily: f.font }}>
                        {f.name}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
                <ChevronDown size={16} />
            </div>
          </div>
      </div>
    </section>
  );
};