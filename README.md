# College Timetable Generator

A React + TypeScript + Vite application that generates a provisional weekly timetable automatically from a large subject dataset.

## Features
- Large synthetic subject dataset (100+ entries) across departments.
- Simple heuristic scheduler (theory first, labs in contiguous blocks).
- Adjustable constraints: semester selection and max theory classes per day.
- Warnings list if insufficient slots for required hours.
- Clean Tailwind-based UI.

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Future Enhancements (Ideas)
- Faculty availability & room allocation.
- Clash detection and alternative schedule proposals.
- Export to PDF / ICS calendar.
- Weighted elective prioritization.
- Genetic algorithm / constraint solver integration.
