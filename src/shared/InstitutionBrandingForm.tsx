import React, { useMemo } from 'react';
import { palettePresets, generateLogo } from './logo';

export interface InstitutionBrandingFormValue {
  institutionName?: string;
  department?: string;
  address?: string;
  institutionEmail?: string;
  contactNumber?: string;
  logoVariant?: number;
  logoBaseColor?: string;
  logoAccentColor?: string;
  logoEmbedShield?: boolean;
  logoLetters?: string;
  logoBgOuter?: string;
  logoBgInner?: string;
  logoBgSecondary?: string;
  logoPalette?: number;
}

export interface InstitutionBrandingFormProps<V extends InstitutionBrandingFormValue = InstitutionBrandingFormValue> {
  value: V;
  onChange: (patch: Partial<V>) => void;
  onLogo?: (f?: File) => void;
  className?: string;
  variantCount?: number; // default 5
}

export const InstitutionBrandingForm: React.FC<InstitutionBrandingFormProps> = ({ value, onChange, onLogo, className='', variantCount=5 }) => {
  const update = (patch: Partial<InstitutionBrandingFormValue & {customLogoData?:string}>) => onChange(patch as any);
  const applyPalette = (idx: number) => { if(idx<0||idx>=palettePresets.length) return; const p=palettePresets[idx]; update({logoPalette:idx, logoBaseColor:p[0], logoAccentColor:p[1], logoBgOuter:p[2], logoBgInner:p[3], logoBgSecondary:p[4]}); };
  const defaultLogoSvg = useMemo(()=> generateLogo(value.institutionName||'INSTITUTE', value.logoVariant||2, value.logoBaseColor,value.logoAccentColor,value.logoEmbedShield,value.logoBgOuter,value.logoBgInner,value.logoBgSecondary,value.logoLetters), [value]);
  const handleCustomLogo = (file?: File) => {
    if(!file){ update({customLogoData: undefined}); return; }
    const reader = new FileReader();
    reader.onload = () => update({customLogoData: reader.result as string});
    reader.readAsDataURL(file);
  };
  return (
    <div className={className+" space-y-4"}>
      <Field label="Institution Name"><input value={value.institutionName||''} onChange={e=>update({institutionName:e.target.value})} className="input" placeholder="Example College" /></Field>
      <Field label="Department / Division"><input value={value.department||''} onChange={e=>update({department:e.target.value})} className="input" placeholder="Science & Engineering" /></Field>
      <Field label="Address"><textarea value={value.address||''} onChange={e=>update({address:e.target.value})} className="input h-24 resize-y" placeholder={'123 Academic Way\nCity, Country'} /></Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Official Email"><input value={value.institutionEmail||''} onChange={e=>update({institutionEmail:e.target.value})} className="input" placeholder="info@college.edu" /></Field>
        <Field label="Contact Number"><input value={value.contactNumber||''} onChange={e=>update({contactNumber:e.target.value})} className="input" placeholder="+91-XXXXXXXXXX" /></Field>
      </div>
      <Field label="Logo Style Variant">
        <div className="flex gap-2 flex-wrap text-[10px]">
          {Array.from({length:variantCount}).map((_,v)=>(<button type="button" key={v} onClick={()=>update({logoVariant:v})} className={"px-2 py-1 rounded border "+((value.logoVariant||0)===v? 'bg-indigo-600 text-white':'bg-white hover:bg-slate-50')}>V{v+1}</button>))}
          <button type="button" onClick={()=>update({logoVariant: Math.floor(Math.random()*variantCount)})} className="px-2 py-1 rounded border bg-white hover:bg-slate-50">Random</button>
        </div>
      </Field>
      <Field label="Color Palette Presets">
        <div className="flex flex-wrap gap-2">
          {palettePresets.map((p,i)=>(<button key={i} type="button" onClick={()=>applyPalette(i)} className={"px-2 py-1 rounded border text-[10px] "+((value.logoPalette||0)===i? 'bg-indigo-600 text-white':'bg-white hover:bg-slate-50')}>P{i+1}</button>))}
          <button type="button" onClick={()=>applyPalette(Math.floor(Math.random()*palettePresets.length))} className="px-2 py-1 rounded border bg-white text-[10px] hover:bg-slate-50">Random</button>
        </div>
      </Field>
      <div className="grid grid-cols-3 gap-4">
        <Field label="Base Color"><input type="color" value={value.logoBaseColor||'#1e3a8a'} onChange={e=>update({logoBaseColor:e.target.value})} className="h-9 w-full cursor-pointer" /></Field>
        <Field label="Accent Color"><input type="color" value={value.logoAccentColor||'#2563eb'} onChange={e=>update({logoAccentColor:e.target.value})} className="h-9 w-full cursor-pointer" /></Field>
        <Field label="Logo Letters"><input maxLength={6} value={value.logoLetters||''} onChange={e=>update({logoLetters:e.target.value.toUpperCase()})} className="h-9 w-full rounded border border-base/60 px-2 text-xs" placeholder="TT" /></Field>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Field label="Outer BG"><input type="color" value={value.logoBgOuter||'#f1f5ff'} onChange={e=>update({logoBgOuter:e.target.value})} className="h-9 w-full cursor-pointer" /></Field>
        <Field label="Inner BG"><input type="color" value={value.logoBgInner||'#ffffff'} onChange={e=>update({logoBgInner:e.target.value})} className="h-9 w-full cursor-pointer" /></Field>
        <Field label="Secondary BG"><input type="color" value={value.logoBgSecondary||'#e0edff'} onChange={e=>update({logoBgSecondary:e.target.value})} className="h-9 w-full cursor-pointer" /></Field>
      </div>
      <label className="flex items-center gap-2 text-[11px] font-medium text-slate-600"><input type="checkbox" checked={!!value.logoEmbedShield} onChange={e=>update({logoEmbedShield:e.target.checked})} /><span className="select-none">Embed shield backdrop</span></label>
      <Field label="Custom Logo (override)">
        <input type="file" accept="image/*,.svg" onChange={e=> handleCustomLogo(e.target.files?.[0])} className="text-xs" />
        { (value as any).customLogoData && (
          <div className="mt-2 flex items-center gap-3">
            <img src={(value as any).customLogoData} alt="custom" className="w-14 h-14 object-contain rounded border" />
            <button type="button" onClick={()=>update({customLogoData: undefined})} className="text-[10px] text-red-600 hover:underline">Remove</button>
          </div>
        )}
        <p className="text-[10px] text-slate-500 mt-1">If provided, replaces generated emblem in preview & print.</p>
      </Field>
      {!(value as any).customLogoData && <div className="mt-2 inline-block border rounded p-1 bg-white" dangerouslySetInnerHTML={{__html: defaultLogoSvg}} />}
    </div>
  );
};

interface FieldProps { label: string; children: React.ReactNode; }
const Field: React.FC<FieldProps> = ({ label, children }) => (<label className="block text-xs font-medium text-slate-600"><span className="block mb-1 uppercase tracking-wide text-[10px] text-slate-500">{label}</span>{children}</label>);
