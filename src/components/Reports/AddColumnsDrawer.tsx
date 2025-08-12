import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const columnsList = [
  {
    key: 'grossEarnings',
    label: 'Search columns',
    description:
      'Total earnings before deductions, including salary, bonuses, and commissions',
  },
  {
    key: 'employeeDeductions',
    label: 'Employee deductions',
    description: 'Sum of employee deductions, both pre- and post- tax',
  },
  {
    key: 'employerContributions',
    label: 'Employer contributions',
    description: 'Sum of employer benefit contributions',
  },
  {
    key: 'totalEmployeeTaxes',
    label: 'Total employee taxes',
    description: 'Sum of taxes withheld from an employee’s paycheck',
  },
  {
    key: 'totalEmployerTaxes',
    label: 'Total employer taxes',
    description: 'Sum of taxes that are paid by the employer',
  },
  {
    key: 'netPay',
    label: 'Net pay',
    description:
      'Employee earnings after deductions, representing the actual take-home pay',
  },
  {
    key: 'totalEmployerCost',
    label: 'Total employer cost',
    description: 'Total cost for an employee',
  },
  { key: 'checkAmount', label: 'Check amount', description: '' },
  {
    key: 'bereavementEarnings',
    label: 'Bereavement earnings',
    description: '',
  },
  { key: 'bereavementHours', label: 'Bereavement hours', description: '' },
  {
    key: 'bereavementRateHourly',
    label: 'Bereavement rate (hourly)',
    description: '',
  },
  { key: 'bonus', label: 'Bonus', description: '' },
  { key: 'cashTips', label: 'Cash tips', description: '' },
  { key: 'commission', label: 'Commission', description: '' },
  { key: 'currentDepartment', label: 'Current department', description: '' },
  { key: 'dismissalReason', label: 'Dismissal reason', description: '' },
  {
    key: 'doubleOvertimeEarnings',
    label: 'Double overtime earnings',
    description: '',
  },
  {
    key: 'doubleOvertimeHours',
    label: 'Double overtime hours',
    description: '',
  },
  {
    key: 'doubleOvertimeRateHourly',
    label: 'Double overtime rate (hourly)',
    description: '',
  },
  {
    key: 'employeeAdditionalMedicareTax',
    label: 'Employee additional medicare tax',
    description: '',
  },
  {
    key: 'employeeBankAccount',
    label: 'Employee bank account',
    description: '',
  },
  {
    key: 'employeeBankAccountNumber',
    label: 'Employee bank account (account number)',
    description: '',
  },
  {
    key: 'employeeBankAccountRouting',
    label: 'Employee bank account (routing number)',
    description: '',
  },
  {
    key: 'employeeBankAccountType',
    label: 'Employee bank account (type)',
    description: '',
  },
  { key: 'employeeDonations', label: 'Employee donations', description: '' },
  { key: 'employeeEmail', label: 'Employee email', description: '' },
  {
    key: 'employeeEmergencyContact',
    label: 'Employee emergency contact',
    description: '',
  },
  {
    key: 'employeeEmergencyContactEmail',
    label: 'Employee emergency contact (email address)',
    description: '',
  },
  {
    key: 'employeeEmergencyContactName',
    label: 'Employee emergency contact (name)',
    description: '',
  },
  {
    key: 'employeeEmergencyContactPhone',
    label: 'Employee emergency contact (phone number)',
    description: '',
  },
  {
    key: 'employeeEmergencyContactRelationship',
    label: 'Employee emergency contact (relationship)',
    description: '',
  },
  { key: 'employeeEndDate', label: 'Employee end date', description: '' },
  {
    key: 'employeeFederalIncomeTax',
    label: 'Employee federal income tax',
    description: '',
  },
  { key: 'employeeFirstName', label: 'Employee first name', description: '' },
  {
    key: 'employeeFirstNamePreferred',
    label: 'Employee first name (preferred)',
    description: '',
  },
  {
    key: 'employeeHomeAddress',
    label: 'Employee home address',
    description: '',
  },
  {
    key: 'employeeHomeAddressCity',
    label: 'Employee home address (city)',
    description: '',
  },
  {
    key: 'employeeHomeAddressState',
    label: 'Employee home address (state)',
    description: '',
  },
  {
    key: 'employeeHomeAddressStreet',
    label: 'Employee home address (street)',
    description: '',
  },
  {
    key: 'employeeHomeAddressZip',
    label: 'Employee home address (zip)',
    description: '',
  },
  { key: 'employeeLastName', label: 'Employee last name', description: '' },
  {
    key: 'employeeMedicareTax',
    label: 'Employee medicare tax',
    description: '',
  },
  {
    key: 'employeeMiddleInitial',
    label: 'Employee middle initial',
    description: '',
  },
  {
    key: 'employeePhoneNumber',
    label: 'Employee phone number',
    description: '',
  },
  { key: 'employeePronouns', label: 'Employee pronouns', description: '' },
  {
    key: 'employeeRiskClassCode',
    label: 'Employee risk class code',
    description: '',
  },
  {
    key: 'employeeSocialSecurityTax',
    label: 'Employee Social Security tax',
    description: '',
  },
  { key: 'employeeSSN', label: 'Employee SSN', description: '' },
  { key: 'employeeSSNLast4', label: 'Employee SSN (last 4)', description: '' },
  { key: 'employeeStartDate', label: 'Employee start date', description: '' },
  { key: 'employeeWorkEmail', label: 'Employee work email', description: '' },
  { key: 'employeeDOB', label: 'Employee’s date of birth', description: '' },
  { key: 'employerFUTATax', label: 'Employer FUTA Tax', description: '' },
  {
    key: 'employerMedicareTax',
    label: 'Employer medicare tax',
    description: '',
  },
  {
    key: 'employerSocialSecurityTax',
    label: 'Employer Social Security tax',
    description: '',
  },
  { key: 'employerSUTATax', label: 'Employer SUTA Tax', description: '' },
  { key: 'employmentStatus', label: 'Employment status', description: '' },
  { key: 'employmentType', label: 'Employment type', description: '' },
  { key: 'employeeID', label: 'Employee ID', description: '' },
  { key: 'garnishments', label: 'Garnishments', description: '' },
  { key: 'holidayEarnings', label: 'Holiday earnings', description: '' },
  { key: 'holidayHours', label: 'Holiday hours', description: '' },
  {
    key: 'jobCompensationAmount',
    label: 'Job compensation amount',
    description: '',
  },
  {
    key: 'jobCompensationEffectiveDate',
    label: 'Job compensation effective date',
    description: '',
  },
  {
    key: 'jobCompensationRate',
    label: 'Job compensation rate',
    description: '',
  },
  {
    key: 'jobCompensationTimePeriod',
    label: 'Job compensation time period',
    description: '',
  },
  { key: 'juryDutyEarnings', label: 'Jury duty earnings', description: '' },
  { key: 'juryDutyHours', label: 'Jury duty hours', description: '' },
  {
    key: 'juryDutyRateHourly',
    label: 'Jury duty rate (hourly)',
    description: '',
  },
  {
    key: 'learningDevelopmentTimeOffEarnings',
    label: 'Learning and development time off earnings',
    description: '',
  },
  {
    key: 'learningDevelopmentTimeOffHours',
    label: 'Learning and development time off hours',
    description: '',
  },
  { key: 'manager', label: 'Manager', description: '' },
  { key: 'overtimeEarnings', label: 'Overtime earnings', description: '' },
  { key: 'overtimeHours', label: 'Overtime hours', description: '' },
  {
    key: 'overtimeRateHourly',
    label: 'Overtime rate (hourly)',
    description: '',
  },
  {
    key: 'paidTimeOffEarnings',
    label: 'Paid time off earnings',
    description: '',
  },
  { key: 'paidTimeOffHours', label: 'Paid time off hours', description: '' },
  {
    key: 'paidTimeOffRateHourly',
    label: 'Paid time off rate (hourly)',
    description: '',
  },
  { key: 'payPeriodEnd', label: 'Pay period end', description: '' },
  { key: 'payPeriodStart', label: 'Pay period start', description: '' },
  { key: 'paycheckTips', label: 'Paycheck tips', description: '' },
  { key: 'paymentMethod', label: 'Payment method', description: '' },
  { key: 'payrollPayDate', label: 'Payroll pay date', description: '' },
  { key: 'payrollType', label: 'Payroll type', description: '' },
  { key: 'primaryJobTitle', label: 'Primary job title', description: '' },
  { key: 'regularEarnings', label: 'Regular earnings', description: '' },
  { key: 'regularHours', label: 'Regular hours', description: '' },
  { key: 'regularRateHourly', label: 'Regular rate (hourly)', description: '' },
  { key: 'sickRateHourly', label: 'Sick rate (hourly)', description: '' },
  {
    key: 'sickTimeOffEarnings',
    label: 'Sick time off earnings',
    description: '',
  },
  { key: 'sickTimeOffHours', label: 'Sick time off hours', description: '' },
  { key: 'totalMedicareTax', label: 'Total medicare tax', description: '' },
  {
    key: 'totalOneTimeReimbursements',
    label: 'Total one time reimbursements',
    description: '',
  },
  {
    key: 'totalRecurringReimbursements',
    label: 'Total recurring reimbursements',
    description: '',
  },
  {
    key: 'totalReimbursements',
    label: 'Total reimbursements',
    description: '',
  },
  {
    key: 'totalSocialSecurityTax',
    label: 'Total Social Security tax',
    description: '',
  },
  {
    key: 'totalTimeOffEarnings',
    label: 'Total time off earnings',
    description: '',
  },
  { key: 'totalTimeOffHours', label: 'Total time off hours', description: '' },
  { key: 'volunteerEarnings', label: 'Volunteer earnings', description: '' },
  { key: 'volunteerHours', label: 'Volunteer hours', description: '' },
  {
    key: 'volunteerRateHourly',
    label: 'Volunteer rate (hourly)',
    description: '',
  },
  { key: 'workAddressCity', label: 'Work address (city)', description: '' },
  { key: 'workAddressStreet', label: 'Work address (street)', description: '' },
  { key: 'workAddressZip', label: 'Work address (zip)', description: '' },
];

export function AddColumnsDrawer({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string[]>(
    columnsList.map((c) => c.key)
  );

  const filteredColumns = columnsList.filter(
    (c) =>
      c.label.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
  );

  const toggleColumn = (key: string) => {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full px-6 sm:max-w-md" side="right">
        <SheetHeader>
          <SheetTitle className="text-xl">Add columns</SheetTitle>
        </SheetHeader>

        <div className="mb-4">
          <Label className="mb-1 block font-semibold" htmlFor="search-columns">
            Search columns
          </Label>
          <Input
            className=""
            id="search-columns"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search columns"
            value={search}
          />
        </div>
        <div className="max-h-96 space-y-3 overflow-y-auto">
          {filteredColumns.map((col) => (
            <div className="flex items-start gap-3" key={col.key}>
              <Checkbox
                checked={selected.includes(col.key)}
                className="mt-1"
                id={`col-${col.key}`}
                onCheckedChange={() => toggleColumn(col.key)}
              />
              <div>
                <Label className="font-semibold" htmlFor={`col-${col.key}`}>
                  {col.label}
                </Label>
                <div className="text-muted-foreground text-sm">
                  {col.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter className="mt-6 flex-row justify-end gap-2">
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="bg-primary-gradient text-white">Save</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
