export interface SubjectEntry {
  code: string;
  name: string;
  department: string;
  credits: number;
  semester: number;
  type: 'THEORY' | 'LAB' | 'SEMINAR' | 'ELECTIVE';
  hoursPerWeek: number; // expected contact hours
  preferredSlots?: string[]; // e.g. ['MON-1','WED-3']
  group?: string; // to group labs or multi-part sessions
}

// Large dataset (sample representative spread). In a real project this could be loaded from JSON.
export const SUBJECTS: SubjectEntry[] = [
  { code: 'CSE501', name: 'Advanced Algorithms', department: 'CSE', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'CSE502', name: 'Distributed Systems', department: 'CSE', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'CSE503', name: 'Operating Systems Lab', department: 'CSE', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'OSLAB' },
  { code: 'CSE504', name: 'Machine Learning', department: 'CSE', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'CSE505', name: 'Database Systems', department: 'CSE', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'CSE506', name: 'Computer Networks', department: 'CSE', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'ECE501', name: 'Digital Signal Processing', department: 'ECE', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'ECE502', name: 'VLSI Design', department: 'ECE', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'ECE503', name: 'Embedded Systems Lab', department: 'ECE', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'EMBLAB' },
  { code: 'MTH401', name: 'Linear Algebra', department: 'MATH', credits: 4, semester: 4, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MTH402', name: 'Probability & Statistics', department: 'MATH', credits: 4, semester: 4, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'PHY301', name: 'Quantum Mechanics I', department: 'PHYS', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'CHM201', name: 'Organic Chemistry', department: 'CHEM', credits: 4, semester: 2, type: 'THEORY', hoursPerWeek: 4 },
  // Humanities & Social Sciences
  { code: 'HSS101', name: 'Introduction to Psychology', department: 'HSS', credits: 3, semester: 2, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'HSS201', name: 'Sociology of Technology', department: 'HSS', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'HSS301', name: 'Professional Ethics & Governance', department: 'HSS', credits: 2, semester: 5, type: 'SEMINAR', hoursPerWeek: 2 },
  // Management / Commerce
  { code: 'MGT401', name: 'Principles of Management', department: 'MGT', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'MGT402', name: 'Financial Accounting Basics', department: 'MGT', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'MGT501', name: 'Entrepreneurship & Innovation', department: 'MGT', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  // Biotechnology / Life Sciences
  { code: 'BIO301', name: 'Genetics & Molecular Biology', department: 'BIO', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BIO302', name: 'Cell Biology Lab', department: 'BIO', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'CELL' },
  { code: 'BIO401', name: 'Bioprocess Engineering', department: 'BIO', credits: 4, semester: 4, type: 'THEORY', hoursPerWeek: 4 },
  // Law / Policy
  { code: 'LAW101', name: 'Foundations of Law', department: 'LAW', credits: 3, semester: 1, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'LAW201', name: 'Cyber Law & IPR', department: 'LAW', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'LAW301', name: 'Corporate Regulations', department: 'LAW', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  // Media / Arts
  { code: 'ART101', name: 'Visual Communication Basics', department: 'ART', credits: 2, semester: 1, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'ART201', name: 'Digital Media Production', department: 'ART', credits: 3, semester: 3, type: 'LAB', hoursPerWeek: 3, group: 'MEDIA' },
  { code: 'ART301', name: 'Design Thinking Studio', department: 'ART', credits: 2, semester: 5, type: 'SEMINAR', hoursPerWeek: 2 },
  // Medical / Health Sciences
  { code: 'MED101', name: 'Human Anatomy I', department: 'MED', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MED201', name: 'Physiology Lab', department: 'MED', credits: 2, semester: 2, type: 'LAB', hoursPerWeek: 2, group: 'PHYS' },
  { code: 'MED301', name: 'Pathology Fundamentals', department: 'MED', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  // Agriculture / Environment
  { code: 'AGR301', name: 'Soil Science & Microbiology', department: 'AGR', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'AGR401', name: 'Sustainable Farming Systems', department: 'AGR', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'ENV401', name: 'Environmental Impact Analysis', department: 'ENV', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  // Extended Multi-Disciplinary Additions
  { code: 'FIN301', name: 'Corporate Finance', department: 'FIN', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'FIN302', name: 'Investment Analysis Lab', department: 'FIN', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'FINLAB' },
  { code: 'MAR401', name: 'Digital Marketing Strategy', department: 'MKT', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'MAR402', name: 'Market Research Lab', department: 'MKT', credits: 2, semester: 4, type: 'LAB', hoursPerWeek: 2, group: 'MRLAB' },
  { code: 'EDU101', name: 'Foundations of Education', department: 'EDU', credits: 2, semester: 1, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'EDU201', name: 'Instructional Design', department: 'EDU', credits: 3, semester: 2, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'LANG101', name: 'Foreign Language – Spanish I', department: 'LANG', credits: 2, semester: 1, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'LANG201', name: 'Foreign Language – French II', department: 'LANG', credits: 2, semester: 2, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'SPORT101', name: 'Sports Science Fundamentals', department: 'SPRT', credits: 2, semester: 1, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'SPORT201', name: 'Athletic Training Lab', department: 'SPRT', credits: 1, semester: 2, type: 'LAB', hoursPerWeek: 1, group: 'ATHL' },
  { code: 'ARCH301', name: 'Architectural Design Studio', department: 'ARCH', credits: 4, semester: 3, type: 'LAB', hoursPerWeek: 4, group: 'ARST' },
  { code: 'ARCH302', name: 'History of Architecture', department: 'ARCH', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  // --- Expanded Streams (added for richer timetable population) ---
  // Finance
  { code: 'FIN303', name: 'Risk Management Principles', department: 'FIN', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'FIN304', name: 'Equity Research Lab', department: 'FIN', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'FINLAB2' },
  { code: 'FIN305', name: 'Derivatives & Hedging', department: 'FIN', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'FIN306', name: 'Banking Regulations Seminar', department: 'FIN', credits: 1, semester: 5, type: 'SEMINAR', hoursPerWeek: 1 },
  // Marketing (MKT)
  { code: 'MAR403', name: 'Brand Management', department: 'MKT', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'MAR404', name: 'Consumer Behaviour Analytics Lab', department: 'MKT', credits: 2, semester: 4, type: 'LAB', hoursPerWeek: 2, group: 'MKTRES' },
  { code: 'MAR405', name: 'Retail Strategy', department: 'MKT', credits: 2, semester: 4, type: 'THEORY', hoursPerWeek: 2 },
  // Education
  { code: 'EDU202', name: 'Assessment & Evaluation Methods', department: 'EDU', credits: 2, semester: 2, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'EDU203', name: 'Educational Technology Lab', department: 'EDU', credits: 2, semester: 2, type: 'LAB', hoursPerWeek: 2, group: 'EDTECH' },
  { code: 'EDU301', name: 'Curriculum Design Seminar', department: 'EDU', credits: 1, semester: 3, type: 'SEMINAR', hoursPerWeek: 1 },
  // Languages
  { code: 'LANG102', name: 'Foreign Language – Spanish II', department: 'LANG', credits: 2, semester: 1, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'LANG202', name: 'Foreign Language – French III', department: 'LANG', credits: 2, semester: 2, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'LANG301', name: 'Comparative Linguistics Basics', department: 'LANG', credits: 2, semester: 3, type: 'THEORY', hoursPerWeek: 2 },
  // Sports / Physical Education
  { code: 'SPORT202', name: 'Team Sports Strategy', department: 'SPRT', credits: 2, semester: 2, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'SPORT203', name: 'Strength & Conditioning Lab', department: 'SPRT', credits: 1, semester: 2, type: 'LAB', hoursPerWeek: 1, group: 'FITLAB' },
  { code: 'SPORT301', name: 'Sports Psychology Seminar', department: 'SPRT', credits: 1, semester: 3, type: 'SEMINAR', hoursPerWeek: 1 },
  // Architecture
  { code: 'ARCH303', name: 'Sustainable Architecture', department: 'ARCH', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'ARCH304', name: 'Digital Modeling Lab', department: 'ARCH', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'ARCAD' },
  { code: 'ARCH305', name: 'Urban Design Studio', department: 'ARCH', credits: 4, semester: 4, type: 'LAB', hoursPerWeek: 4, group: 'URBST' },
  { code: 'ARCH306', name: 'Heritage Conservation Seminar', department: 'ARCH', credits: 1, semester: 4, type: 'SEMINAR', hoursPerWeek: 1 },
  // AI
  { code: 'AI503', name: 'Explainable AI', department: 'AI', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'AI504', name: 'Computer Vision Lab', department: 'AI', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'CVLAB' },
  { code: 'AI505', name: 'AI Policy & Ethics Seminar', department: 'AI', credits: 1, semester: 5, type: 'SEMINAR', hoursPerWeek: 1 },
  // Data Science
  { code: 'DS403', name: 'Big Data Processing', department: 'DS', credits: 4, semester: 4, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'DS404', name: 'Visualization & Dashboard Lab', department: 'DS', credits: 2, semester: 4, type: 'LAB', hoursPerWeek: 2, group: 'VIZ' },
  { code: 'DS405', name: 'Data Ethics Seminar', department: 'DS', credits: 1, semester: 4, type: 'SEMINAR', hoursPerWeek: 1 },
  // Civil
  { code: 'CIV303', name: 'Transportation Engineering', department: 'CIV', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'CIV304', name: 'Surveying & GIS Lab', department: 'CIV', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'SURV' },
  { code: 'CIV305', name: 'Hydraulics & Water Resources', department: 'CIV', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  // Mechanical
  { code: 'MECH403', name: 'Dynamics of Machinery', department: 'MECH', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'MECH404', name: 'CAD / CAM Lab', department: 'MECH', credits: 2, semester: 4, type: 'LAB', hoursPerWeek: 2, group: 'CADCAM' },
  { code: 'MECH405', name: 'Manufacturing Processes', department: 'MECH', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  // Electrical / EEE
  { code: 'EEE303', name: 'Control Systems', department: 'EEE', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'EEE304', name: 'Instrumentation Lab', department: 'EEE', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'INST' },
  { code: 'EEE305', name: 'Smart Grid Technologies', department: 'EEE', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  // Pharmacy
  { code: 'PHAR203', name: 'Drug Formulation Techniques', department: 'PHAR', credits: 3, semester: 2, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'PHAR204', name: 'Pharmacognosy Lab', department: 'PHAR', credits: 2, semester: 2, type: 'LAB', hoursPerWeek: 2, group: 'PHARL' },
  { code: 'PHAR205', name: 'Clinical Pharmacy Seminar', department: 'PHAR', credits: 1, semester: 2, type: 'SEMINAR', hoursPerWeek: 1 },
  // Nursing
  { code: 'NURS103', name: 'Pathophysiology Basics', department: 'NURS', credits: 3, semester: 1, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'NURS104', name: 'Nutrition & Diet Lab', department: 'NURS', credits: 1, semester: 1, type: 'LAB', hoursPerWeek: 1, group: 'NUTR' },
  { code: 'NURS105', name: 'Patient Care Seminar', department: 'NURS', credits: 1, semester: 1, type: 'SEMINAR', hoursPerWeek: 1 },
  // Psychology
  { code: 'PSY202', name: 'Developmental Psychology', department: 'PSY', credits: 3, semester: 2, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'PSY302', name: 'Experimental Psychology Lab', department: 'PSY', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'PSYEXP' },
  { code: 'PSY303', name: 'Counselling Techniques Seminar', department: 'PSY', credits: 1, semester: 3, type: 'SEMINAR', hoursPerWeek: 1 },
  // -- Duplicate & variant sets to simulate large dataset
  ...Array.from({length: 80}).map((_,i)=> ({
    code: 'ELE' + (600+i),
    name: 'Special Elective Topic ' + (i+1),
    department: ['CSE','ECE','MATH','PHYS','CHEM'][i%5],
    credits: 3,
    semester: 6,
    type: 'ELECTIVE' as const,
    hoursPerWeek: 3
  })),
  // === Additional Deepened Dataset (Enrichment Layer) ===
  // CSE Advanced / Capstone Style (treated as THEORY or LAB / SEMINAR to fit existing union)
  { code: 'CSE581', name: 'Parallel Programming Paradigms', department: 'CSE', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'CSE582', name: 'Advanced Compiler Construction Lab', department: 'CSE', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'CCLAB' },
  { code: 'CSE583', name: 'Software Architecture Seminar', department: 'CSE', credits: 1, semester: 5, type: 'SEMINAR', hoursPerWeek: 1 },
  { code: 'CSE584', name: 'Graph Mining & Network Science', department: 'CSE', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'CSE585', name: 'Applied Blockchain Systems', department: 'CSE', credits: 3, semester: 5, type: 'ELECTIVE', hoursPerWeek: 3 },
  // AI / DS Deepening
  { code: 'AI506', name: 'Reinforcement Learning Foundations', department: 'AI', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'AI507', name: 'Generative Models Lab', department: 'AI', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'GENLAB' },
  { code: 'DS406', name: 'Time Series Analytics', department: 'DS', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'DS407', name: 'Responsible Data Governance', department: 'DS', credits: 2, semester: 4, type: 'SEMINAR', hoursPerWeek: 2 },
  { code: 'DS408', name: 'Cloud-native Data Pipelines Lab', department: 'DS', credits: 2, semester: 4, type: 'LAB', hoursPerWeek: 2, group: 'DATPIPE' },
  // ECE / EEE Extended
  { code: 'ECE504', name: 'RF Circuit Design', department: 'ECE', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'ECE505', name: 'FPGA Prototyping Lab', department: 'ECE', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'FPGAL' },
  { code: 'EEE306', name: 'Electric Drives & Motors', department: 'EEE', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'EEE307', name: 'Embedded Power Control Lab', department: 'EEE', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'EPC' },
  // Mechanical / Civil Extended
  { code: 'MECH406', name: 'Finite Element Methods', department: 'MECH', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'MECH407', name: 'Energy Systems Lab', department: 'MECH', credits: 2, semester: 4, type: 'LAB', hoursPerWeek: 2, group: 'ENLAB' },
  { code: 'CIV306', name: 'Concrete Mix Design Lab', department: 'CIV', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'CMIX' },
  { code: 'CIV307', name: 'Earthquake Engineering Basics', department: 'CIV', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  // Bio / Medical / Pharma Extended
  { code: 'BIO402', name: 'Systems Biology Modeling', department: 'BIO', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'BIO403', name: 'Genome Data Analysis Lab', department: 'BIO', credits: 2, semester: 4, type: 'LAB', hoursPerWeek: 2, group: 'GENOM' },
  { code: 'MED302', name: 'Clinical Diagnostics Seminar', department: 'MED', credits: 1, semester: 3, type: 'SEMINAR', hoursPerWeek: 1 },
  { code: 'PHAR206', name: 'Pharmacokinetics & Modeling', department: 'PHAR', credits: 3, semester: 2, type: 'THEORY', hoursPerWeek: 3 },
  // Humanities / Social Science / Law Enrichment
  { code: 'HSS302', name: 'Technology & Society Field Study', department: 'HSS', credits: 2, semester: 5, type: 'SEMINAR', hoursPerWeek: 2 },
  { code: 'LAW302', name: 'International Trade Compliance', department: 'LAW', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'LAW303', name: 'Privacy & Data Protection Seminar', department: 'LAW', credits: 1, semester: 5, type: 'SEMINAR', hoursPerWeek: 1 },
  // Architecture / Design Enrichment
  { code: 'ARCH307', name: 'Parametric Design Studio', department: 'ARCH', credits: 4, semester: 4, type: 'LAB', hoursPerWeek: 4, group: 'PARAM' },
  { code: 'ARCH308', name: 'Environmental Simulation Lab', department: 'ARCH', credits: 2, semester: 4, type: 'LAB', hoursPerWeek: 2, group: 'SIMLAB' },
  // Language / Soft Skills Extension
  { code: 'LANG302', name: 'Professional Communication Workshop', department: 'LANG', credits: 2, semester: 3, type: 'SEMINAR', hoursPerWeek: 2 },
  { code: 'LANG303', name: 'Advanced Presentation Skills', department: 'LANG', credits: 1, semester: 3, type: 'SEMINAR', hoursPerWeek: 1 },
  // Psychology / Education Extended
  { code: 'PSY304', name: 'Research Methods in Psychology', department: 'PSY', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'EDU302', name: 'Inclusive Education Strategies', department: 'EDU', credits: 2, semester: 3, type: 'THEORY', hoursPerWeek: 2 },
  // Environment / Sustainability / Energy
  { code: 'ENV402', name: 'Climate Risk Assessment', department: 'ENV', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'ENV403', name: 'Sustainability Metrics Lab', department: 'ENV', credits: 2, semester: 4, type: 'LAB', hoursPerWeek: 2, group: 'SUSLAB' },
  { code: 'AGR402', name: 'Precision Agriculture Systems', department: 'AGR', credits: 3, semester: 4, type: 'THEORY', hoursPerWeek: 3 },
  // Elective Innovation Themes
  { code: 'ELE900', name: 'Innovation Incubation Elective I', department: 'MGT', credits: 2, semester: 6, type: 'ELECTIVE', hoursPerWeek: 2 },
  { code: 'ELE901', name: 'Innovation Incubation Elective II', department: 'MGT', credits: 2, semester: 6, type: 'ELECTIVE', hoursPerWeek: 2 },
  { code: 'ELE902', name: 'Open Hardware Systems Elective', department: 'ECE', credits: 3, semester: 6, type: 'ELECTIVE', hoursPerWeek: 3 },
  { code: 'ELE903', name: 'Applied Human-Computer Interaction', department: 'CSE', credits: 3, semester: 6, type: 'ELECTIVE', hoursPerWeek: 3 },
  { code: 'ELE904', name: 'Neurotechnology Foundations', department: 'AI', credits: 3, semester: 6, type: 'ELECTIVE', hoursPerWeek: 3 },
  { code: 'ELE905', name: 'Green Energy Entrepreneurship', department: 'EEE', credits: 2, semester: 6, type: 'ELECTIVE', hoursPerWeek: 2 },
  { code: 'ELE906', name: 'GeoSpatial Analytics Elective', department: 'CIV', credits: 3, semester: 6, type: 'ELECTIVE', hoursPerWeek: 3 },
  { code: 'ELE907', name: 'Bioinformatics Translational Elective', department: 'BIO', credits: 3, semester: 6, type: 'ELECTIVE', hoursPerWeek: 3 },
  { code: 'ELE908', name: 'Medical Device Regulatory Pathways', department: 'MED', credits: 2, semester: 6, type: 'ELECTIVE', hoursPerWeek: 2 },
  { code: 'ELE909', name: 'Pharmaceutical Industry Landscape', department: 'PHAR', credits: 2, semester: 6, type: 'ELECTIVE', hoursPerWeek: 2 }
];
// --- Supplemental Balancing Additions (Underrepresented Streams) ---
// Nursing (add intermediate progression)
export const NURSING_SUPP: SubjectEntry[] = [
  { code: 'NURS201', name: 'Pharmacology Introduction', department: 'NURS', credits: 3, semester: 2, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'NURS202', name: 'Community Health Field Lab', department: 'NURS', credits: 2, semester: 2, type: 'LAB', hoursPerWeek: 2, group: 'NHFL' },
  { code: 'NURS203', name: 'Patient Simulation Lab', department: 'NURS', credits: 2, semester: 2, type: 'LAB', hoursPerWeek: 2, group: 'SIMPT' },
  { code: 'NURS204', name: 'Medical Records Seminar', department: 'NURS', credits: 1, semester: 2, type: 'SEMINAR', hoursPerWeek: 1 },
];

// Psychology
export const PSY_SUPP: SubjectEntry[] = [
  { code: 'PSY305', name: 'Psychometrics & Assessment', department: 'PSY', credits: 3, semester: 3, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'PSY306', name: 'Therapeutic Techniques Lab', department: 'PSY', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'THLAB' },
];

// Education
export const EDU_SUPP: SubjectEntry[] = [
  { code: 'EDU303', name: 'Educational Leadership Basics', department: 'EDU', credits: 2, semester: 3, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'EDU304', name: 'Learning Analytics Seminar', department: 'EDU', credits: 1, semester: 3, type: 'SEMINAR', hoursPerWeek: 1 },
];

// Languages
export const LANG_SUPP: SubjectEntry[] = [
  { code: 'LANG304', name: 'Business English Lab', department: 'LANG', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'BELAB' },
  { code: 'LANG305', name: 'Academic Writing Seminar', department: 'LANG', credits: 1, semester: 3, type: 'SEMINAR', hoursPerWeek: 1 },
];

// Sports / Physical Education
export const SPORT_SUPP: SubjectEntry[] = [
  { code: 'SPORT302', name: 'Sports Nutrition', department: 'SPRT', credits: 2, semester: 3, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'SPORT303', name: 'Performance Analytics Lab', department: 'SPRT', credits: 1, semester: 3, type: 'LAB', hoursPerWeek: 1, group: 'SPRAL' },
];

// Finance
export const FIN_SUPP: SubjectEntry[] = [
  { code: 'FIN307', name: 'Portfolio Optimization', department: 'FIN', credits: 3, semester: 5, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'FIN308', name: 'Financial Data Lab', department: 'FIN', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'FNDL' },
];

// Marketing
export const MKT_SUPP: SubjectEntry[] = [
  { code: 'MAR406', name: 'Services Marketing', department: 'MKT', credits: 2, semester: 4, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'MAR407', name: 'Advertising Strategy Lab', department: 'MKT', credits: 2, semester: 4, type: 'LAB', hoursPerWeek: 2, group: 'ADLAB' },
];

// Law
export const LAW_SUPP: SubjectEntry[] = [
  { code: 'LAW304', name: 'International Arbitration Basics', department: 'LAW', credits: 2, semester: 5, type: 'THEORY', hoursPerWeek: 2 },
  { code: 'LAW305', name: 'Legal Drafting Workshop', department: 'LAW', credits: 1, semester: 5, type: 'SEMINAR', hoursPerWeek: 1 },
];

// Pharmacy
export const PHAR_SUPP: SubjectEntry[] = [
  { code: 'PHAR207', name: 'Industrial Pharmacy Operations', department: 'PHAR', credits: 3, semester: 2, type: 'THEORY', hoursPerWeek: 3 },
  { code: 'PHAR208', name: 'Drug Stability Lab', department: 'PHAR', credits: 2, semester: 2, type: 'LAB', hoursPerWeek: 2, group: 'DSTAB' },
];

// Merge supplemental arrays into main SUBJECTS for consumers if needed
SUBJECTS.push(
  ...NURSING_SUPP,
  ...PSY_SUPP,
  ...EDU_SUPP,
  ...LANG_SUPP,
  ...SPORT_SUPP,
  ...FIN_SUPP,
  ...MKT_SUPP,
  ...LAW_SUPP,
  ...PHAR_SUPP,
);

export interface SlotCell { slotId: string; subjectCode?: string; }
export interface TimetableResult { grid: Record<string, SlotCell>; warnings: string[]; }

export const DAYS = ['MON','TUE','WED','THU','FRI'];
export const PERIODS = ['1','2','3','4','5','6','7'];
// Human-readable time ranges for each period (approximate institutional slots)
export const PERIOD_TIME_RANGES: Record<string,string> = {
  '1':'09:00-10:00','2':'10:00-11:00','3':'11:00-12:00','4':'12:00-13:00','5':'14:00-15:00','6':'15:00-16:00','7':'16:00-17:00'
};
export const buildAllSlots = () => DAYS.flatMap(d=> PERIODS.map(p=> `${d}-${p}`));

export interface GenerateOptions {
  semester?: number; // retained for backward compatibility
  subjectCodes?: string[]; // explicit subject codes to schedule
  maxDailyTheory?: number; // limit of major theory classes per day
}

function shuffle<T>(arr:T[], seed= Date.now()):T[] { const a=[...arr]; let r=seed; for(let i=a.length-1;i>0;i--){ r=(r*1664525+1013904223)>>>0; const j=r%(i+1); [a[i],a[j]]=[a[j],a[i]];} return a; }

export function generateTimetable(opts: GenerateOptions): TimetableResult {
  const warnings: string[] = [];
  const slots = buildAllSlots();
  const grid: Record<string, SlotCell> = Object.fromEntries(slots.map(s=> [s,{slotId:s}]));

  let subjects: SubjectEntry[] = [];
  if(opts.subjectCodes && opts.subjectCodes.length){
    subjects = SUBJECTS.filter(s=> opts.subjectCodes!.includes(s.code));
  } else if(typeof opts.semester === 'number') {
    subjects = SUBJECTS.filter(s=> s.semester===opts.semester);
  } else {
    subjects = SUBJECTS.slice(0,12); // fallback: first 12 subjects
  }
  if(subjects.length===0) return { grid, warnings: ['No subjects to schedule'] };

  // Separate labs (place later) and theory
  const labs = subjects.filter(s=> s.type==='LAB');
  const theory = subjects.filter(s=> s.type!=='LAB');

  // Strategy: place theory first, then labs requiring contiguous blocks (2 periods)
  let placedTheory = 0;
  const allTheorySlots = shuffle(slots.filter(s=> parseInt(s.split('-')[1],10) <=5));

  for(const subj of theory){
    let needed = subj.hoursPerWeek;
    for(const slot of allTheorySlots){
      if(needed<=0) break;
      if(grid[slot].subjectCode) continue;
      // simple daily theory cap
      if(opts.maxDailyTheory){
        const [day] = slot.split('-');
        const dayCount = PERIODS.filter(p=> grid[`${day}-${p}`].subjectCode && theory.some(t=> t.code===grid[`${day}-${p}`].subjectCode)).length;
        if(dayCount >= opts.maxDailyTheory) continue;
      }
      grid[slot].subjectCode = subj.code;
      needed--; placedTheory++;
    }
    if(needed>0) warnings.push(`Insufficient slots for ${subj.code}`);
  }

  // Place labs: need 2 contiguous free periods same day
  const labSlots = slots.filter(s=> ['1','2','3','4','5'].includes(s.split('-')[1]));
  for(const lab of labs){
    let placed=false;
    outer: for(const day of DAYS){
      for(let p=1;p<=5;p++){
        const a=`${day}-${p}`; const b=`${day}-${p+1}`;
        if(!grid[a].subjectCode && !grid[b].subjectCode){
          grid[a].subjectCode = lab.code;
          grid[b].subjectCode = lab.code;
          placed=true; break outer;
        }
      }
    }
    if(!placed) warnings.push(`Could not place lab ${lab.code}`);
  }

  return { grid, warnings };
}
