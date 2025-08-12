import { PenLineIcon } from 'lucide-react';
import { Link } from 'react-router';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Mock agent data
const CORPORATE_MOCK = {
  name: 'Kalyan Sarkar',
  avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  phone: '+1 9874 562103',
  country: 'United States',
  dob: '20-08-94',
  email: 'example@gmail.com',
  corporateId: 'AG124563',
  bank: {
    name: 'Lorem Ipsum',
    accountNo: '178458236900127842',
    branch: 'Lorem Ipsum',
    ifsc: '1748529',
  },
  joined: '11-28-2024',
};

const companyFields = [
  [
    {
      label: 'How many employees does he/she has, including himself/herself?',
      value: '89',
    },
    {
      label: 'How would you describe his/her business setting?',
      value: 'In office or remote',
    },
    {
      label: 'Hoe dose his/her company currently run payroll?',
      value: "We're new to running payroll",
    },
    { label: 'Do he/she has a company bank account?', value: 'Yes' },
    {
      label: 'How many team members in the Africa is he/she planning to pay?',
      value: '89',
    },
    { label: 'What industry is he/she in?', value: 'Lorem Ipsum' },
    { label: "What's his desired first payday?", value: '01/31/2024' },
    {
      label:
        'Dose anyone in his/her company need to clock in and out or track the hours they work?',
      value: 'Yes',
    },
  ],
  [
    {
      label: 'How do he/she currently run payroll?',
      value: "We're new to running payroll",
    },
    {
      label: 'Who is his/her company planning to pay?',
      value: 'Employee in the Africa, Non-Africa employee, Vendors',
    },
    {
      label: 'Is his/her company registered as an employer with the IRS?',
      value: 'Yes',
    },
    { label: 'Has he/she already hired your first team member?', value: 'Yes' },
    {
      label:
        'In which African region(s) does he/she and his/her employees work?',
      value: 'Lorem Ipsum',
    },
    {
      label:
        'Does he/she has an accountant or bookkeeper helping his/her business?',
      value: 'Yes',
    },
    {
      label:
        'Dose his/her company want to offer health benefits to your employees?',
      value: 'Yes',
    },
    {
      label: 'Does his/her company has workers compensation insurance',
      value: 'Yes',
    },
  ],
];

export default function AgentDetails() {
  return (
    <PageLayout title={CORPORATE_MOCK.name} withBack>
      <Card className=" flex items-center gap-6 rounded-2xl p-4 shadow-sm">
        <div className="grid flex-1 grid-cols-4 items-center gap-5">
          {/* Avatar */}
          <div className="flex items-center gap-3">
            <Avatar className="h-20 w-20">
              <AvatarImage
                alt="Agent Avatar"
                className="h-20 w-20 object-cover"
                src={CORPORATE_MOCK.avatar}
              />
              <AvatarFallback>{CORPORATE_MOCK.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="font-semibold text-lg">{CORPORATE_MOCK.name}</div>
              <div className="text-gray-500 text-sm">
                {CORPORATE_MOCK.phone}
              </div>
              <div className="text-gray-500 text-sm">
                Country : {CORPORATE_MOCK.country}
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">
              DOB : {CORPORATE_MOCK.dob}
            </div>
            <div className="text-gray-500 text-sm">
              Email ID : {CORPORATE_MOCK.email}
            </div>
            <div className="text-gray-500 text-sm">
              Corporate ID: {CORPORATE_MOCK.corporateId}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">
              Bank Name: {CORPORATE_MOCK.bank.name}
            </div>
            <div className="text-gray-500 text-sm">
              Account No: {CORPORATE_MOCK.bank.accountNo}
            </div>
            <div className="text-gray-500 text-sm">
              Branch: {CORPORATE_MOCK.bank.branch}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="">
              <div className="text-gray-500 text-sm">
                IFSC Code: {CORPORATE_MOCK.bank.ifsc}
              </div>
              <div className="text-gray-400 text-xs">
                Joined : {CORPORATE_MOCK.joined}
              </div>
            </div>
            <Link to={`/corporates/${CORPORATE_MOCK.corporateId}/edit`}>
              <Button className="mt-2" size="icon" variant="ghost">
                <PenLineIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>
      {/* About Company Card */}
      <Card className="mt-6 rounded-2xl p-6 shadow-sm">
        <div className="mb-4 font-semibold text-xl">About Company</div>
        <form autoComplete="off" className="grid grid-cols-2 gap-6">
          {/* Left and Right Columns mapped dynamically */}
          {companyFields.map((column, colIdx) => (
            <div className="flex flex-col gap-4" key={colIdx}>
              {column.map((field, idx) => {
                const inputId = `company-field-${colIdx}-${idx}`;
                return (
                  <div key={inputId}>
                    <Label
                      className="mb-1 block text-gray-600 text-sm"
                      htmlFor={inputId}
                    >
                      {field.label}
                    </Label>
                    <Input
                      className="w-full rounded border px-3 py-2"
                      id={inputId}
                      readOnly
                      value={field.value}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </form>
      </Card>
    </PageLayout>
  );
}
