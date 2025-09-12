export interface FormValues {
  institutionName: string;
  department: string;
  address: string;
  institutionEmail?: string;
  contactNumber?: string;
  logoVariant?: number;
  logoBaseColor: string;
  logoAccentColor: string;
  logoLetters: string;
  logoEmbedShield?: boolean;
  logoBgOuter?: string;
  logoBgInner?: string;
  logoBgSecondary?: string;
  logoPalette?: number;
  semester: number;
  maxDailyTheory: number;
  selectedCodes: string[];
  footerNote?: string;
  academicYear: string;
  generatedOn: string;
  studentName?: string;
  termMonth?: string; // e.g. 'September 2025'
  showSubjectNames?: boolean;
  showElectiveSummary?: boolean;
  subjectDeptFilter?: string; // 'ALL' or specific department
  customLogoData?: string; // optional uploaded logo data URI
  studentRoll?: string;
  studentAddress?: string;
}

export const emptyFormValues = (): FormValues => ({
  institutionName: 'National Institute of Technology',
  department: 'Computer Science & Engineering',
  address: '123 Academic Avenue, Knowledge City',
  institutionEmail: 'info@nit.example',
  contactNumber: '+91-8000000000',
  logoVariant: 2, // default v2
  logoBaseColor: '#1e3a8a',
  logoAccentColor: '#f59e0b',
  logoLetters: 'TT',
  logoEmbedShield: true,
  logoBgOuter: '#ffffff',
  logoBgInner: '#f1f5f9',
  logoBgSecondary: '#ffe7a8',
  logoPalette: 1, // palette p1
  semester: 5,
  maxDailyTheory: 3,
  selectedCodes: [],
  academicYear: deriveAcademicYear(),
  generatedOn: new Date().toISOString(),
  termMonth: deriveTermMonth(),
  showSubjectNames: true,
  showElectiveSummary: true,
  subjectDeptFilter: 'ALL',
  studentName: 'Aarav Verma',
  studentRoll: 'CSE25B214',
  studentAddress: 'Hostel Block A, Room 212\nKnowledge City Campus',
});

function deriveAcademicYear(){
  const d = new Date();
  const y = d.getFullYear();
  const start = d.getMonth() >= 5 ? y : y-1; // assume academic year starts in June
  return `${start}-${start+1}`;
}

function deriveTermMonth(){
  const d = new Date();
  return d.toLocaleString(undefined,{month:'long', year:'numeric'});
}

// (Random generators retained for future use if needed)
// function randomStudentName(){ ... }
// function randomRollNumber(){ ... }
