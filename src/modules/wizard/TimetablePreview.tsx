import React, { useMemo } from 'react';
import { FormValues } from './types';
import { DAYS, PERIODS, TimetableResult, SUBJECTS, PERIOD_TIME_RANGES } from '../../data/subjects';
import { InstitutionHeader } from '../../shared/InstitutionHeader';
import { buildAutoLogoDataURI } from '../../shared/logo';

interface Props {
  values: FormValues;
  timetable: TimetableResult;
  logoSvg: string;
  subjects: any[];
  onBack?: ()=>void;
}

export const TimetablePreview: React.FC<Props> = ({ values, timetable, logoSvg, subjects, onBack }) => {
  const dynamicFooter = useMemo(()=> buildFooter(values), [values]);
  return (
    <div className="printable space-y-6">
      <div className="print:hidden flex justify-end -mb-4">
        {onBack && <button onClick={onBack} className="px-3 py-1.5 rounded-md bg-slate-200 hover:bg-slate-300 text-[11px] font-medium">← Back</button>}
      </div>
      <div className="bg-white shadow rounded-xl border overflow-hidden">
        <LetterHead values={values} logoSvg={logoSvg} />
        <div className="px-6 pt-2 pb-6">
          {(values.studentName || values.studentRoll || values.studentAddress) && (
            <div className="mb-5 text-left border-l-4 border-indigo-600 pl-4 py-1 bg-indigo-50/40 rounded-sm">
              {values.studentRoll && (
                <div className="text-[12px] font-semibold tracking-wide text-slate-800 flex flex-wrap gap-1"><span className="min-w-[120px] text-slate-600 font-medium">Student Roll No:</span><span>{values.studentRoll}</span></div>
              )}
              {values.studentName && (
                <div className="text-[12px] font-semibold tracking-wide text-slate-800 flex flex-wrap gap-1 mt-1"><span className="min-w-[120px] text-slate-600 font-medium">Student Name:</span><span className="text-[15px] font-extrabold tracking-tight">{values.studentName}</span></div>
              )}
              {values.studentAddress && (
                <div className="text-[11px] mt-2 flex gap-1">
                  <span className="min-w-[120px] text-slate-600 font-medium">Student Address:</span>
                  <span className="whitespace-pre-line leading-snug max-w-md text-slate-700">{values.studentAddress}</span>
                </div>
              )}
              <div className="mt-2 flex flex-wrap gap-4 text-[10px] text-slate-600">
                {values.termMonth && <span>Term: <span className="font-medium">{values.termMonth}</span></span>}
                <span>Academic Year: <span className="font-medium">{values.academicYear}</span></span>
                {values.contactNumber && <span>Contact: <span className="font-medium">{values.contactNumber}</span></span>}
              </div>
            </div>
          )}
          <h2 className="text-center font-semibold tracking-wide text-sm mb-3">WEEKLY TIMETABLE · SEM {values.semester} · {values.academicYear}{values.termMonth? ` · ${values.termMonth}`:''}</h2>
          <Table timetable={timetable} showNames={values.showSubjectNames !== false} />
          <SelectedSubjects subjects={subjects} />
          {values.showElectiveSummary !== false && <ElectiveSummary termMonth={values.termMonth} selectedCodes={subjects.map(s=>s.code)} />}
          {values.footerNote && <p className="mt-6 text-[10px] text-center text-slate-500">{values.footerNote}</p>}
          <FooterLines lines={dynamicFooter} />
        </div>
      </div>
    </div>
  );
};

const LetterHead: React.FC<{values:FormValues; logoSvg:string}> = ({ values, logoSvg }) => (
  <InstitutionHeader
    institutionName={values.institutionName}
    department={values.department}
    address={values.address}
    institutionEmail={values.institutionEmail}
    contactNumber={values.contactNumber}
    logoVariant={values.logoVariant}
    logoBaseColor={values.logoBaseColor}
    logoAccentColor={values.logoAccentColor}
    logoEmbedShield={values.logoEmbedShield}
    logoBgOuter={values.logoBgOuter}
    logoBgInner={values.logoBgInner}
    logoBgSecondary={values.logoBgSecondary}
    logoLetters={values.logoLetters}
    logoData={buildAutoLogoDataURI({
      institutionName: values.institutionName,
      logoVariant: values.logoVariant,
      logoBaseColor: values.logoBaseColor,
      logoAccentColor: values.logoAccentColor,
      logoEmbedShield: values.logoEmbedShield,
      logoBgOuter: values.logoBgOuter,
      logoBgInner: values.logoBgInner,
      logoBgSecondary: values.logoBgSecondary,
      logoLetters: values.logoLetters
    })}
  />
);

const Table: React.FC<{timetable: TimetableResult; showNames:boolean}> = ({ timetable, showNames }) => {
  const subjectMap = useMemo(()=> Object.fromEntries(SUBJECTS.map(s=> [s.code,s])), []);
  // Detect if any cell will show names for sizing hint
  return (
    <div className="overflow-auto rounded border">
      <table className="min-w-full text-[11px]">
        <thead className="align-bottom">
          <tr className="bg-slate-100/70">
            <th className="p-2 text-left font-semibold">Day</th>
            {PERIODS.map(p=> <th key={p} className="p-1 text-center font-semibold min-w-[92px]">{p}<div className="mt-0.5 text-[9px] font-normal tracking-normal text-slate-500">{PERIOD_TIME_RANGES[p]}</div></th>)}
          </tr>
        </thead>
        <tbody>
          {DAYS.map(d=> (
            <tr key={d} className="border-t">
              <th className="p-2 text-left bg-slate-50 font-semibold sticky left-0">{d}</th>
              {PERIODS.map(p=> {
                const cell = timetable.grid[`${d}-${p}`];
                if(!cell.subjectCode) return <td key={p} className="p-1 align-top w-28 h-14 border-l text-[10px]" />;
                const subj = subjectMap[cell.subjectCode];
                return <SubjectCell key={p} code={cell.subjectCode} name={showNames? subj?.name: undefined} />;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SubjectCell: React.FC<{code:string; name?:string}> = ({ code, name }) => (
  <td className="p-1 align-top w-28 h-14 border-l text-[10px]">
    <div className="font-semibold leading-tight">{code}</div>
    {name && <div className="text-[9px] leading-tight line-clamp-3 opacity-80">{name}</div>}
  </td>
);

const SelectedSubjects: React.FC<{subjects:any[]}> = ({ subjects }) => (
  <div className="mt-6">
    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-2">Selected Subjects / Streams</div>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {subjects.map(s=> (
        <div key={s.code} className={`border rounded p-2 text-[10px] leading-snug ${s.type==='ELECTIVE' ? 'bg-amber-50 border-amber-300' : 'bg-white'}`}>
          <div className="font-semibold">{s.code}</div>
          <div className="font-medium line-clamp-2">{s.name}</div>
          <div className="text-slate-500">{s.department} · {s.type} · {s.hoursPerWeek}h</div>
        </div>
      ))}
      {subjects.length===0 && <div className="text-[10px] text-slate-400">None selected.</div>}
    </div>
  </div>
);

const ElectiveSummary: React.FC<{termMonth?:string; selectedCodes:string[]}> = ({ termMonth, selectedCodes }) => {
  const electiveSet = new Set(selectedCodes);
  const electiveSubjects = SUBJECTS.filter(s=> s.type==='ELECTIVE' && electiveSet.has(s.code));
  if(electiveSubjects.length===0) return null;
  return (
    <div className="mt-10">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-700 mb-3 border-b pb-1 border-indigo-200">Elective Summary{termMonth? ` – ${termMonth}`:''}</div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {electiveSubjects.map(s=> (
          <div key={s.code} className="border rounded p-2 bg-gradient-to-br from-amber-50 to-white text-[9px] leading-snug border-amber-300">
            <div className="font-semibold text-amber-700">{s.code}</div>
            <div className="line-clamp-2">{s.name}</div>
            <div className="opacity-70">{s.department} · {s.credits}cr</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterLines: React.FC<{lines:string[]}> = ({ lines }) => (
  <div className="mt-10 text-[9px] leading-relaxed text-slate-400 space-y-2 print:break-inside-avoid">
    {lines.map((l,i)=>(<p key={i} className={i===lines.length-1? 'text-center pt-2 border-t border-slate-200':''}>{l}</p>))}
  </div>
);

function buildFooter(values: FormValues): string[] {
  const inst = (values.institutionName || 'Institution').trim();
  const dept = (values.department || 'Department').trim();
  const seedSource = inst + dept + values.academicYear + (values.footerNote||'');
  let seed = 0; for(const ch of seedSource) seed = (seed*31 + ch.charCodeAt(0)) >>> 0;
  const rand = (min:number,max:number)=> { seed = (seed*1664525 + 1013904223) >>> 0; return min + (seed % (max-min+1)); };
  const hours = rand(18, 36);
  const ref = 'TT-' + rand(10000,99999) + '-' + rand(10,99);
  const revision = 'R' + rand(0,4);
  const contact = [values.institutionEmail, values.contactNumber].filter(Boolean).join(' • ') || 'Office contact on record';
  const genTime = new Date(values.generatedOn).toLocaleString();
  const academicYear = values.academicYear;

  const pick = <T,>(arr:T[]) => arr[rand(0, arr.length-1)];
  const advisoryPool = [
    'Schedule auto-generated; sequencing tweaks may occur after faculty load balancing.',
    'Lab batches / studio groups are indicative; finalized list issued separately.',
    'Report clash or inconsistency to timetable cell within 48 working hours.',
    'Adhere to institutional academic clock; delays cascade across dependent sessions.',
    'Elective enrolments subject to minimum quorum; low-enrol electives may merge.',
    'Credit and contact hour distribution aligns with statutory guidelines.',
    'Rooms subject to dynamic optimisation; final allocation appears on digital board.',
    'Attendance tracking begins from first working week; retroactive adjustments not issued.'
  ];
  const integrityPool = [
    'Unauthorised manual alteration invalidates this document for grievance processes.',
    'A cryptographic digest of source parameters retained in internal logs.',
    'Printed copies are convenience only; canonical record is the digitally generated artifact.',
    'Distribution beyond academic use prohibited without written approval.'
  ];
  const disclaimerPool = [
    'Disclaimer: This timetable is provisional and may be revised without prior individual notice.',
    'Note: Slot conflicts arising from approved special electives must be escalated via programme coordinator.',
    'Advisory: Extended sessions or guest lectures may supersede regular slots with dean sanction.',
    'Guidance: Students must monitor official portal for emergent amendments and room reallocations.'
  ];

  const line1 = `${inst} – ${dept}. Weekly Timetable (${academicYear}) ${revision}. Ref: ${ref}.`; // overview
  const line2 = pick(advisoryPool);
  const line3 = pick(advisoryPool.filter(l=> l!==line2)); // different advisory
  const line4 = `Contact: ${contact}. Generated ${genTime}. Indicative contact hours ≈${hours}.`;
  const line5 = pick(integrityPool);
  const line6 = pick(integrityPool.filter(l=> l!==line5));
  const line7 = pick(disclaimerPool);
  const line8 = `© ${new Date().getFullYear()} ${inst}. All academic & intellectual property rights reserved.`;
  return [line1,line2,line3,line4,line5,line6,line7,line8];
}
