import React, { useMemo, useEffect } from 'react';
import { FormValues } from './types';
import { InstitutionBrandingForm } from '../../shared/InstitutionBrandingForm';
import { SUBJECTS } from '../../data/subjects';

interface WizardProps {
  step: number;
  setStep: (n:number)=>void;
  steps: string[];
  values: FormValues;
  onChange: (v: FormValues)=>void;
  logoSvg: string;
}

export const Wizard: React.FC<WizardProps> = ({ step, steps, setStep, values, onChange, logoSvg }) => {
  const update = (p: Partial<FormValues>) => onChange({...values, ...p});
  const toggleSubject = (code: string) => {
    const set = new Set(values.selectedCodes);
    if(set.has(code)) set.delete(code); else set.add(code);
    update({ selectedCodes: Array.from(set) });
  };

  const allDepartments = useMemo(()=> Array.from(new Set(SUBJECTS.map(s=> s.department))).sort(), []);
  const subjects = SUBJECTS.filter(s=> (values.subjectDeptFilter==='ALL' || s.department===values.subjectDeptFilter));

  // Auto-pick initial subjects when department changes and none selected
  useEffect(()=>{
    if(values.subjectDeptFilter && values.selectedCodes.length===0){
      const firstFive = subjects.slice(0,6).map(s=> s.code);
      if(firstFive.length) update({selectedCodes:firstFive});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.subjectDeptFilter]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <nav className="flex gap-2 flex-wrap text-[11px] font-medium uppercase tracking-wide text-slate-500">
        {steps.map((s,i)=>(
          <button key={s} onClick={()=>setStep(i)} className={'px-2 py-1 rounded border ' + (i===step? 'bg-indigo-600 text-white':'bg-white hover:bg-slate-50')}>{i+1}. {s}</button>
        ))}
      </nav>

      {step===0 && (
        <div className="grid md:grid-cols-2 gap-6">
          <InstitutionBrandingForm value={values} onChange={p=>update(p)} />
          <div className="p-4 bg-white rounded-xl border shadow-sm flex flex-col items-center justify-center">
            <div className="text-[10px] uppercase tracking-wide text-slate-500 mb-2">Auto Logo Preview</div>
            <div className="w-40 h-40 flex items-center justify-center bg-slate-50 rounded-full border">
              <img src={`data:image/svg+xml;utf8,${encodeURIComponent(logoSvg)}`} alt="logo" className="w-36 h-36" />
            </div>
            <div className="mt-4 text-[11px] text-slate-600 text-center leading-snug px-4">Adjust palette / variant / letters to refresh.</div>
            <div className="mt-3">
              <Field label="Footer Note (optional)"><input value={values.footerNote||''} onChange={e=>update({footerNote:e.target.value})} className="input" placeholder="Generated schedule is provisional" /></Field>
            </div>
          </div>
        </div>
      )}

      {step===1 && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 items-end">
            <Field label="Stream / Department">
              <select value={values.subjectDeptFilter||'ALL'} onChange={e=>update({subjectDeptFilter:e.target.value, selectedCodes: []})} className="input">
                <option value="ALL">All Streams</option>
                {allDepartments.map(d=> <option key={d} value={d}>{d}</option>)}
              </select>
            </Field>
            <Field label="Max Theory / Day"><input type="number" value={values.maxDailyTheory} onChange={e=>update({maxDailyTheory: parseInt(e.target.value,10)||0})} className="input" /></Field>
            <div className="text-[10px] text-slate-500 font-medium">Loaded: {subjects.length}</div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[55vh] overflow-auto pr-1">
            {subjects.map(s=> {
              const active = values.selectedCodes.includes(s.code);
              return (
                <button key={s.code} type="button" onClick={()=>toggleSubject(s.code)} className={'text-left border rounded p-2 text-[11px] leading-tight hover:shadow-sm transition ' + (active? 'bg-indigo-600 text-white border-indigo-600':'bg-white') }>
                  <div className="flex justify-between"><span className="font-semibold">{s.code}</span><span>{s.credits}c</span></div>
                  <div className="font-medium line-clamp-2">{s.name}</div>
                  <div className="opacity-80">{s.type} · {s.hoursPerWeek}h</div>
                </button>
              );
            })}
          </div>
          <div className="text-[10px] text-slate-500">Select subjects to emphasize in preview (placement heuristic still auto-fills semester set).</div>
        </div>
      )}

      {step===2 && (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Student Name"><input value={values.studentName||''} onChange={e=>update({studentName:e.target.value})} className="input font-semibold" placeholder="Student Name" /></Field>
            <Field label="Student Roll #"><input value={values.studentRoll||''} onChange={e=>update({studentRoll:e.target.value.toUpperCase()})} className="input" placeholder="CSE25B123" /></Field>
            <Field label="Term Month"><input value={values.termMonth||''} onChange={e=>update({termMonth:e.target.value})} className="input" placeholder="September 2025" /></Field>
          </div>
          <Field label="Student Address (optional)"><textarea value={values.studentAddress||''} onChange={e=>update({studentAddress:e.target.value})} className="input min-h-[70px]" placeholder={'Hostel / Residence\nCity'} /></Field>
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Academic Year"><input value={values.academicYear} onChange={e=>update({academicYear:e.target.value})} className="input" /></Field>
            <Field label="Generated On"><input type="datetime-local" value={toLocalInput(values.generatedOn)} onChange={e=>update({generatedOn: new Date(e.target.value).toISOString()})} className="input" /></Field>
            <Field label="Contact #"><input value={values.contactNumber||''} onChange={e=>update({contactNumber:e.target.value})} className="input" /></Field>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <label className="flex items-center gap-2 text-[11px] font-medium text-slate-600"><input type="checkbox" checked={!!values.showSubjectNames} onChange={e=>update({showSubjectNames:e.target.checked})} /> Show Subject Names</label>
            <label className="flex items-center gap-2 text-[11px] font-medium text-slate-600"><input type="checkbox" checked={!!values.showElectiveSummary} onChange={e=>update({showElectiveSummary:e.target.checked})} /> Show Elective Summary</label>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">Student identity metadata will appear prominently above the timetable for printing. Ensure roll number format matches institutional records.</p>
        </div>
      )}

      {step===3 && (
        <div className="text-xs text-slate-500">Use the Print / PDF button to export. Scroll further down for full preview.</div>
      )}
    </div>
  );
};

const Field: React.FC<{label:string; children:React.ReactNode}> = ({label, children}) => (
  <label className="block text-[11px] font-medium text-slate-600">
    <span className="block mb-1 uppercase tracking-wide text-[10px] text-slate-500">{label}</span>
    {children}
  </label>
);

function toLocalInput(iso: string){
  try { return iso.slice(0,16); } catch { return ''; }
}
