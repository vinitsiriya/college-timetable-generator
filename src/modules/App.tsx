import React, { useState, useMemo, useEffect } from 'react';
import { SUBJECTS, generateTimetable } from '../data/subjects';
import { FormValues, emptyFormValues } from './wizard/types';
import { generateLogo } from '../shared/logo';
import { TimetablePreview } from './wizard/TimetablePreview';
import { Wizard } from './wizard/Wizard';

export const App: React.FC = () => {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<FormValues>(()=> {
    const base = emptyFormValues();
    try { 
      const raw = localStorage.getItem('tt-values'); 
      if(raw){
        const parsed = JSON.parse(raw);
        return { ...base, ...parsed };
      }
    } catch {}
    return base;
  });
  const [logoData, setLogoData] = useState<string>('');
  useEffect(()=> { try { localStorage.setItem('tt-values', JSON.stringify(values)); } catch {} }, [values]);
  const selectedSubjects = useMemo(()=> SUBJECTS.filter(s=> values.selectedCodes.includes(s.code)), [values.selectedCodes]);
  const timetable = useMemo(()=> generateTimetable({ subjectCodes: selectedSubjects.map(s=> s.code), maxDailyTheory: values.maxDailyTheory }), [selectedSubjects, values.maxDailyTheory]);

  const logoSvg = useMemo(()=> generateLogo(
    values.institutionName || 'INSTITUTE',
    values.logoVariant || 0,
    values.logoBaseColor,
    values.logoAccentColor,
    values.logoEmbedShield,
    values.logoBgOuter,
    values.logoBgInner,
    values.logoBgSecondary,
    values.logoLetters
  ), [values.institutionName, values.logoVariant, values.logoBaseColor, values.logoAccentColor, values.logoEmbedShield, values.logoBgOuter, values.logoBgInner, values.logoBgSecondary, values.logoLetters]);

  const proceed = () => setStep(s=> Math.min(steps.length-1, s+1));
  const back = () => setStep(s=> Math.max(0, s-1));
  const steps = ['Institution','Subjects','Options','Preview'];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b bg-white/70 backdrop-blur sticky top-0 z-40 print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <h1 className="text-base font-semibold tracking-wide">Weekly Timetable Generator</h1>
          <div className="ml-auto flex gap-2 text-[11px]">
            {step>0 && step<steps.length-1 && <button onClick={back} className="px-3 py-1.5 rounded-md bg-slate-200 hover:bg-slate-300">Back</button>}
            {step<steps.length-2 && <button onClick={proceed} className="px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Next</button>}
            {step===steps.length-2 && <button onClick={proceed} className="px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Preview</button>}
            {step===steps.length-1 && <button onClick={()=> window.print()} className="px-4 py-2 rounded-lg bg-indigo-700 text-white text-xs font-semibold shadow">Print / PDF</button>}
          </div>
        </div>
        <div className="h-1 w-full bg-slate-200 relative overflow-hidden">
          <div className="h-full bg-indigo-600 transition-all" style={{width: `${(step)/(steps.length-1)*100}%`}} />
        </div>
      </div>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        {step < steps.length-1 && (
          <Wizard step={step} setStep={setStep} steps={steps} values={values} onChange={setValues} logoSvg={logoSvg} />
        )}
        {step === steps.length-1 && (
          <TimetablePreview values={values} timetable={timetable} logoSvg={logoSvg} subjects={selectedSubjects} onBack={back} />
        )}
      </main>
    </div>
  );
};
