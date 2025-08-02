import { DocumentCard } from './DocumentCard';

const documentCategories = [
  {
    category: 'Business Registration & Licensing',
    docs: ['Business License', 'Certificate of Incorporation'],
  },
  {
    category: 'Compliance with Anti-Money Laundering Laws Documents',
    docs: ['AML Policy', 'AML Training Periods'],
  },
  {
    category: 'Know your Customer (KYC) Procedures Document',
    docs: ['KYC Policy', 'Sample KYC Records'],
  },
  {
    category: 'Operational & Compliance Audits Document',
    docs: ['Audit Reports', 'Compliance Certifications'],
  },
  {
    category: 'Reference Document',
    docs: ['Business References'],
  },
  {
    category: 'Identity Verification',
    docs: ['Owner / Operator ID', 'Proof of Address'],
  },
  {
    category: 'Financial Information',
    docs: ['Financial Statements'],
  },
  {
    category: 'Data Protection & Privacy Document',
    docs: ['Data Protection Policy', 'Data Processing Agreements'],
  },
  {
    category: 'Financial Insurance Document',
    docs: ['Liability Insurance'],
  },
];

export function DocumentGrid() {
  // Split into two columns for layout
  const col1 = documentCategories.slice(0, 5);
  const col2 = documentCategories.slice(5);
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-8">
          {col1.map((cat) => (
            <div key={cat.category}>
              <div className="mb-2 font-semibold text-lg">{cat.category}</div>
              <div className="flex gap-4">
                {cat.docs.map((doc) => (
                  <DocumentCard key={doc} title={doc} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-8">
          {col2.map((cat) => (
            <div key={cat.category}>
              <div className="mb-2 font-semibold text-lg">{cat.category}</div>
              <div className="flex gap-4">
                {cat.docs.map((doc) => (
                  <DocumentCard key={doc} title={doc} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
