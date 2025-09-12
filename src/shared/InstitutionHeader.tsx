import React from 'react';
import { AutoLogoParams, buildAutoLogoDataURI } from './logo';

export interface InstitutionHeaderProps extends AutoLogoParams {
  institutionName: string;
  department?: string;
  address?: string;
  institutionEmail?: string;
  contactNumber?: string;
  logoData?: string;
  compact?: boolean;
}

export const InstitutionHeader: React.FC<InstitutionHeaderProps> = ({
  institutionName,
  department,
  address,
  institutionEmail,
  contactNumber,
  logoData,
  compact,
  ...logo
}) => {
  const autoLogo = buildAutoLogoDataURI({institutionName, ...logo});
  return (
    <div className={"flex gap-4 "+(compact? 'p-3':'p-6')+" border-b items-center"}>
      <div className="w-24 h-24 flex items-center justify-center bg-slate-50 rounded-md border shrink-0">
        <img src={logoData || autoLogo} alt="logo" className="w-20 h-20" />
      </div>
      <div className="flex-1 min-w-0">
        <h1 className="text-lg font-semibold tracking-wide leading-tight truncate">{institutionName || 'Institution Name'}</h1>
        <div className="text-[11px] text-slate-600 leading-snug">{department || 'Department / Division'}</div>
        {address && !compact && <div className="text-[10px] text-slate-500 mt-1 whitespace-pre-line">{address}</div>}
        <div className="mt-1 text-[10px] text-slate-500 space-x-2">
          {institutionEmail && <span>{institutionEmail}</span>}
          {contactNumber && <span>• {contactNumber}</span>}
        </div>
      </div>
    </div>
  );
};
