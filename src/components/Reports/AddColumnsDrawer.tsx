import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

export function AddColumnsDrawer({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();

  const columnsList = [
    {
      key: 'grossEarnings',
      label: t('addColumnsDrawer.columnsList.grossEarnings.label'),
      description: t('addColumnsDrawer.columnsList.grossEarnings.description'),
    },
    {
      key: 'employeeDeductions',
      label: t('addColumnsDrawer.columnsList.employeeDeductions.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeDeductions.description'
      ),
    },
    {
      key: 'employerContributions',
      label: t('addColumnsDrawer.columnsList.employerContributions.label'),
      description: t(
        'addColumnsDrawer.columnsList.employerContributions.description'
      ),
    },
    {
      key: 'totalEmployeeTaxes',
      label: t('addColumnsDrawer.columnsList.totalEmployeeTaxes.label'),
      description: t(
        'addColumnsDrawer.columnsList.totalEmployeeTaxes.description'
      ),
    },
    {
      key: 'totalEmployerTaxes',
      label: t('addColumnsDrawer.columnsList.totalEmployerTaxes.label'),
      description: t(
        'addColumnsDrawer.columnsList.totalEmployerTaxes.description'
      ),
    },
    {
      key: 'netPay',
      label: t('addColumnsDrawer.columnsList.netPay.label'),
      description: t('addColumnsDrawer.columnsList.netPay.description'),
    },
    {
      key: 'totalEmployerCost',
      label: t('addColumnsDrawer.columnsList.totalEmployerCost.label'),
      description: t(
        'addColumnsDrawer.columnsList.totalEmployerCost.description'
      ),
    },
    {
      key: 'checkAmount',
      label: t('addColumnsDrawer.columnsList.checkAmount.label'),
      description: t('addColumnsDrawer.columnsList.checkAmount.description'),
    },
    {
      key: 'bereavementEarnings',
      label: t('addColumnsDrawer.columnsList.bereavementEarnings.label'),
      description: t(
        'addColumnsDrawer.columnsList.bereavementEarnings.description'
      ),
    },
    {
      key: 'bereavementHours',
      label: t('addColumnsDrawer.columnsList.bereavementHours.label'),
      description: t(
        'addColumnsDrawer.columnsList.bereavementHours.description'
      ),
    },
    {
      key: 'bereavementRateHourly',
      label: t('addColumnsDrawer.columnsList.bereavementRateHourly.label'),
      description: t(
        'addColumnsDrawer.columnsList.bereavementRateHourly.description'
      ),
    },
    {
      key: 'bonus',
      label: t('addColumnsDrawer.columnsList.bonus.label'),
      description: t('addColumnsDrawer.columnsList.bonus.description'),
    },
    {
      key: 'cashTips',
      label: t('addColumnsDrawer.columnsList.cashTips.label'),
      description: t('addColumnsDrawer.columnsList.cashTips.description'),
    },
    {
      key: 'commission',
      label: t('addColumnsDrawer.columnsList.commission.label'),
      description: t('addColumnsDrawer.columnsList.commission.description'),
    },
    {
      key: 'currentDepartment',
      label: t('addColumnsDrawer.columnsList.currentDepartment.label'),
      description: t(
        'addColumnsDrawer.columnsList.currentDepartment.description'
      ),
    },
    {
      key: 'dismissalReason',
      label: t('addColumnsDrawer.columnsList.dismissalReason.label'),
      description: t(
        'addColumnsDrawer.columnsList.dismissalReason.description'
      ),
    },
    {
      key: 'doubleOvertimeEarnings',
      label: t('addColumnsDrawer.columnsList.doubleOvertimeEarnings.label'),
      description: t(
        'addColumnsDrawer.columnsList.doubleOvertimeEarnings.description'
      ),
    },
    {
      key: 'doubleOvertimeHours',
      label: t('addColumnsDrawer.columnsList.doubleOvertimeHours.label'),
      description: t(
        'addColumnsDrawer.columnsList.doubleOvertimeHours.description'
      ),
    },
    {
      key: 'doubleOvertimeRateHourly',
      label: t('addColumnsDrawer.columnsList.doubleOvertimeRateHourly.label'),
      description: t(
        'addColumnsDrawer.columnsList.doubleOvertimeRateHourly.description'
      ),
    },
    {
      key: 'employeeAdditionalMedicareTax',
      label: t(
        'addColumnsDrawer.columnsList.employeeAdditionalMedicareTax.label'
      ),
      description: t(
        'addColumnsDrawer.columnsList.employeeAdditionalMedicareTax.description'
      ),
    },
    {
      key: 'employeeBankAccount',
      label: t('addColumnsDrawer.columnsList.employeeBankAccount.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeBankAccount.description'
      ),
    },
    {
      key: 'employeeBankAccountNumber',
      label: t('addColumnsDrawer.columnsList.employeeBankAccountNumber.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeBankAccountNumber.description'
      ),
    },
    {
      key: 'employeeBankAccountRouting',
      label: t('addColumnsDrawer.columnsList.employeeBankAccountRouting.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeBankAccountRouting.description'
      ),
    },
    {
      key: 'employeeBankAccountType',
      label: t('addColumnsDrawer.columnsList.employeeBankAccountType.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeBankAccountType.description'
      ),
    },
    {
      key: 'employeeDonations',
      label: t('addColumnsDrawer.columnsList.employeeDonations.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeDonations.description'
      ),
    },
    {
      key: 'employeeEmail',
      label: t('addColumnsDrawer.columnsList.employeeEmail.label'),
      description: t('addColumnsDrawer.columnsList.employeeEmail.description'),
    },
    {
      key: 'employeeEmergencyContact',
      label: t('addColumnsDrawer.columnsList.employeeEmergencyContact.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeEmergencyContact.description'
      ),
    },
    {
      key: 'employeeEmergencyContactEmail',
      label: t(
        'addColumnsDrawer.columnsList.employeeEmergencyContactEmail.label'
      ),
      description: t(
        'addColumnsDrawer.columnsList.employeeEmergencyContactEmail.description'
      ),
    },
    {
      key: 'employeeEmergencyContactName',
      label: t(
        'addColumnsDrawer.columnsList.employeeEmergencyContactName.label'
      ),
      description: t(
        'addColumnsDrawer.columnsList.employeeEmergencyContactName.description'
      ),
    },
    {
      key: 'employeeEmergencyContactPhone',
      label: t(
        'addColumnsDrawer.columnsList.employeeEmergencyContactPhone.label'
      ),
      description: t(
        'addColumnsDrawer.columnsList.employeeEmergencyContactPhone.description'
      ),
    },
    {
      key: 'employeeEmergencyContactRelationship',
      label: t(
        'addColumnsDrawer.columnsList.employeeEmergencyContactRelationship.label'
      ),
      description: t(
        'addColumnsDrawer.columnsList.employeeEmergencyContactRelationship.description'
      ),
    },
    {
      key: 'employeeEndDate',
      label: t('addColumnsDrawer.columnsList.employeeEndDate.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeEndDate.description'
      ),
    },
    {
      key: 'employeeFederalIncomeTax',
      label: t('addColumnsDrawer.columnsList.employeeFederalIncomeTax.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeFederalIncomeTax.description'
      ),
    },
    {
      key: 'employeeFirstName',
      label: t('addColumnsDrawer.columnsList.employeeFirstName.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeFirstName.description'
      ),
    },
    {
      key: 'employeeFirstNamePreferred',
      label: t('addColumnsDrawer.columnsList.employeeFirstNamePreferred.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeFirstNamePreferred.description'
      ),
    },
    {
      key: 'employeeHomeAddress',
      label: t('addColumnsDrawer.columnsList.employeeHomeAddress.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeHomeAddress.description'
      ),
    },
    {
      key: 'employeeHomeAddressCity',
      label: t('addColumnsDrawer.columnsList.employeeHomeAddressCity.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeHomeAddressCity.description'
      ),
    },
    {
      key: 'employeeHomeAddressState',
      label: t('addColumnsDrawer.columnsList.employeeHomeAddressState.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeHomeAddressState.description'
      ),
    },
    {
      key: 'employeeHomeAddressStreet',
      label: t('addColumnsDrawer.columnsList.employeeHomeAddressStreet.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeHomeAddressStreet.description'
      ),
    },
    {
      key: 'employeeHomeAddressZip',
      label: t('addColumnsDrawer.columnsList.employeeHomeAddressZip.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeHomeAddressZip.description'
      ),
    },
    {
      key: 'employeeLastName',
      label: t('addColumnsDrawer.columnsList.employeeLastName.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeLastName.description'
      ),
    },
    {
      key: 'employeeMedicareTax',
      label: t('addColumnsDrawer.columnsList.employeeMedicareTax.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeMedicareTax.description'
      ),
    },
    {
      key: 'employeeMiddleInitial',
      label: t('addColumnsDrawer.columnsList.employeeMiddleInitial.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeMiddleInitial.description'
      ),
    },
    {
      key: 'employeePhoneNumber',
      label: t('addColumnsDrawer.columnsList.employeePhoneNumber.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeePhoneNumber.description'
      ),
    },
    {
      key: 'employeePronouns',
      label: t('addColumnsDrawer.columnsList.employeePronouns.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeePronouns.description'
      ),
    },
    {
      key: 'employeeRiskClassCode',
      label: t('addColumnsDrawer.columnsList.employeeRiskClassCode.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeRiskClassCode.description'
      ),
    },
    {
      key: 'employeeSocialSecurityTax',
      label: t('addColumnsDrawer.columnsList.employeeSocialSecurityTax.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeSocialSecurityTax.description'
      ),
    },
    {
      key: 'employeeSSN',
      label: t('addColumnsDrawer.columnsList.employeeSSN.label'),
      description: t('addColumnsDrawer.columnsList.employeeSSN.description'),
    },
    {
      key: 'employeeSSNLast4',
      label: t('addColumnsDrawer.columnsList.employeeSSNLast4.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeSSNLast4.description'
      ),
    },
    {
      key: 'employeeStartDate',
      label: t('addColumnsDrawer.columnsList.employeeStartDate.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeStartDate.description'
      ),
    },
    {
      key: 'employeeWorkEmail',
      label: t('addColumnsDrawer.columnsList.employeeWorkEmail.label'),
      description: t(
        'addColumnsDrawer.columnsList.employeeWorkEmail.description'
      ),
    },
    {
      key: 'employeeDOB',
      label: t('addColumnsDrawer.columnsList.employeeDOB.label'),
      description: t('addColumnsDrawer.columnsList.employeeDOB.description'),
    },
    {
      key: 'employerFUTATax',
      label: t('addColumnsDrawer.columnsList.employerFUTATax.label'),
      description: t(
        'addColumnsDrawer.columnsList.employerFUTATax.description'
      ),
    },
    {
      key: 'employerMedicareTax',
      label: t('addColumnsDrawer.columnsList.employerMedicareTax.label'),
      description: t(
        'addColumnsDrawer.columnsList.employerMedicareTax.description'
      ),
    },
    {
      key: 'employerSocialSecurityTax',
      label: t('addColumnsDrawer.columnsList.employerSocialSecurityTax.label'),
      description: t(
        'addColumnsDrawer.columnsList.employerSocialSecurityTax.description'
      ),
    },
    {
      key: 'employerSUTATax',
      label: t('addColumnsDrawer.columnsList.employerSUTATax.label'),
      description: t(
        'addColumnsDrawer.columnsList.employerSUTATax.description'
      ),
    },
    {
      key: 'employmentStatus',
      label: t('addColumnsDrawer.columnsList.employmentStatus.label'),
      description: t(
        'addColumnsDrawer.columnsList.employmentStatus.description'
      ),
    },
    {
      key: 'employmentType',
      label: t('addColumnsDrawer.columnsList.employmentType.label'),
      description: t('addColumnsDrawer.columnsList.employmentType.description'),
    },
    {
      key: 'employeeID',
      label: t('addColumnsDrawer.columnsList.employeeID.label'),
      description: t('addColumnsDrawer.columnsList.employeeID.description'),
    },
    {
      key: 'garnishments',
      label: t('addColumnsDrawer.columnsList.garnishments.label'),
      description: t('addColumnsDrawer.columnsList.garnishments.description'),
    },
    {
      key: 'holidayEarnings',
      label: t('addColumnsDrawer.columnsList.holidayEarnings.label'),
      description: t(
        'addColumnsDrawer.columnsList.holidayEarnings.description'
      ),
    },
    {
      key: 'holidayHours',
      label: t('addColumnsDrawer.columnsList.holidayHours.label'),
      description: t('addColumnsDrawer.columnsList.holidayHours.description'),
    },
    {
      key: 'jobCompensationAmount',
      label: t('addColumnsDrawer.columnsList.jobCompensationAmount.label'),
      description: t(
        'addColumnsDrawer.columnsList.jobCompensationAmount.description'
      ),
    },
    {
      key: 'jobCompensationEffectiveDate',
      label: t(
        'addColumnsDrawer.columnsList.jobCompensationEffectiveDate.label'
      ),
      description: t(
        'addColumnsDrawer.columnsList.jobCompensationEffectiveDate.description'
      ),
    },
    {
      key: 'jobCompensationRate',
      label: t('addColumnsDrawer.columnsList.jobCompensationRate.label'),
      description: t(
        'addColumnsDrawer.columnsList.jobCompensationRate.description'
      ),
    },
    {
      key: 'jobCompensationTimePeriod',
      label: t('addColumnsDrawer.columnsList.jobCompensationTimePeriod.label'),
      description: t(
        'addColumnsDrawer.columnsList.jobCompensationTimePeriod.description'
      ),
    },
    {
      key: 'juryDutyEarnings',
      label: t('addColumnsDrawer.columnsList.juryDutyEarnings.label'),
      description: t(
        'addColumnsDrawer.columnsList.juryDutyEarnings.description'
      ),
    },
    {
      key: 'juryDutyHours',
      label: t('addColumnsDrawer.columnsList.juryDutyHours.label'),
      description: t('addColumnsDrawer.columnsList.juryDutyHours.description'),
    },
    {
      key: 'juryDutyRateHourly',
      label: t('addColumnsDrawer.columnsList.juryDutyRateHourly.label'),
      description: t(
        'addColumnsDrawer.columnsList.juryDutyRateHourly.description'
      ),
    },
    {
      key: 'learningDevelopmentTimeOffEarnings',
      label: t(
        'addColumnsDrawer.columnsList.learningDevelopmentTimeOffEarnings.label'
      ),
      description: t(
        'addColumnsDrawer.columnsList.learningDevelopmentTimeOffEarnings.description'
      ),
    },
    {
      key: 'learningDevelopmentTimeOffHours',
      label: t(
        'addColumnsDrawer.columnsList.learningDevelopmentTimeOffHours.label'
      ),
      description: t(
        'addColumnsDrawer.columnsList.learningDevelopmentTimeOffHours.description'
      ),
    },
    {
      key: 'manager',
      label: t('addColumnsDrawer.columnsList.manager.label'),
      description: t('addColumnsDrawer.columnsList.manager.description'),
    },
    {
      key: 'overtimeEarnings',
      label: t('addColumnsDrawer.columnsList.overtimeEarnings.label'),
      description: t(
        'addColumnsDrawer.columnsList.overtimeEarnings.description'
      ),
    },
    {
      key: 'overtimeHours',
      label: t('addColumnsDrawer.columnsList.overtimeHours.label'),
      description: t('addColumnsDrawer.columnsList.overtimeHours.description'),
    },
    {
      key: 'overtimeRateHourly',
      label: t('addColumnsDrawer.columnsList.overtimeRateHourly.label'),
      description: t(
        'addColumnsDrawer.columnsList.overtimeRateHourly.description'
      ),
    },
    {
      key: 'paidTimeOffEarnings',
      label: t('addColumnsDrawer.columnsList.paidTimeOffEarnings.label'),
      description: t(
        'addColumnsDrawer.columnsList.paidTimeOffEarnings.description'
      ),
    },
    {
      key: 'paidTimeOffHours',
      label: t('addColumnsDrawer.columnsList.paidTimeOffHours.label'),
      description: t(
        'addColumnsDrawer.columnsList.paidTimeOffHours.description'
      ),
    },
    {
      key: 'paidTimeOffRateHourly',
      label: t('addColumnsDrawer.columnsList.paidTimeOffRateHourly.label'),
      description: t(
        'addColumnsDrawer.columnsList.paidTimeOffRateHourly.description'
      ),
    },
    {
      key: 'payPeriodEnd',
      label: t('addColumnsDrawer.columnsList.payPeriodEnd.label'),
      description: t('addColumnsDrawer.columnsList.payPeriodEnd.description'),
    },
    {
      key: 'payPeriodStart',
      label: t('addColumnsDrawer.columnsList.payPeriodStart.label'),
      description: t('addColumnsDrawer.columnsList.payPeriodStart.description'),
    },
    {
      key: 'paycheckTips',
      label: t('addColumnsDrawer.columnsList.paycheckTips.label'),
      description: t('addColumnsDrawer.columnsList.paycheckTips.description'),
    },
    {
      key: 'paymentMethod',
      label: t('addColumnsDrawer.columnsList.paymentMethod.label'),
      description: t('addColumnsDrawer.columnsList.paymentMethod.description'),
    },
    {
      key: 'payrollPayDate',
      label: t('addColumnsDrawer.columnsList.payrollPayDate.label'),
      description: t('addColumnsDrawer.columnsList.payrollPayDate.description'),
    },
    {
      key: 'payrollType',
      label: t('addColumnsDrawer.columnsList.payrollType.label'),
      description: t('addColumnsDrawer.columnsList.payrollType.description'),
    },
    {
      key: 'primaryJobTitle',
      label: t('addColumnsDrawer.columnsList.primaryJobTitle.label'),
      description: t(
        'addColumnsDrawer.columnsList.primaryJobTitle.description'
      ),
    },
    {
      key: 'regularEarnings',
      label: t('addColumnsDrawer.columnsList.regularEarnings.label'),
      description: t(
        'addColumnsDrawer.columnsList.regularEarnings.description'
      ),
    },
    {
      key: 'regularHours',
      label: t('addColumnsDrawer.columnsList.regularHours.label'),
      description: t('addColumnsDrawer.columnsList.regularHours.description'),
    },
    {
      key: 'regularRateHourly',
      label: t('addColumnsDrawer.columnsList.regularRateHourly.label'),
      description: t(
        'addColumnsDrawer.columnsList.regularRateHourly.description'
      ),
    },
    {
      key: 'sickRateHourly',
      label: t('addColumnsDrawer.columnsList.sickRateHourly.label'),
      description: t('addColumnsDrawer.columnsList.sickRateHourly.description'),
    },
    {
      key: 'sickTimeOffEarnings',
      label: t('addColumnsDrawer.columnsList.sickTimeOffEarnings.label'),
      description: t(
        'addColumnsDrawer.columnsList.sickTimeOffEarnings.description'
      ),
    },
    {
      key: 'sickTimeOffHours',
      label: t('addColumnsDrawer.columnsList.sickTimeOffHours.label'),
      description: t(
        'addColumnsDrawer.columnsList.sickTimeOffHours.description'
      ),
    },
    {
      key: 'totalMedicareTax',
      label: t('addColumnsDrawer.columnsList.totalMedicareTax.label'),
      description: t(
        'addColumnsDrawer.columnsList.totalMedicareTax.description'
      ),
    },
    {
      key: 'totalOneTimeReimbursements',
      label: t('addColumnsDrawer.columnsList.totalOneTimeReimbursements.label'),
      description: t(
        'addColumnsDrawer.columnsList.totalOneTimeReimbursements.description'
      ),
    },
    {
      key: 'totalRecurringReimbursements',
      label: t(
        'addColumnsDrawer.columnsList.totalRecurringReimbursements.label'
      ),
      description: t(
        'addColumnsDrawer.columnsList.totalRecurringReimbursements.description'
      ),
    },
    {
      key: 'totalReimbursements',
      label: t('addColumnsDrawer.columnsList.totalReimbursements.label'),
      description: t(
        'addColumnsDrawer.columnsList.totalReimbursements.description'
      ),
    },
    {
      key: 'totalSocialSecurityTax',
      label: t('addColumnsDrawer.columnsList.totalSocialSecurityTax.label'),
      description: t(
        'addColumnsDrawer.columnsList.totalSocialSecurityTax.description'
      ),
    },
    {
      key: 'totalTimeOffEarnings',
      label: t('addColumnsDrawer.columnsList.totalTimeOffEarnings.label'),
      description: t(
        'addColumnsDrawer.columnsList.totalTimeOffEarnings.description'
      ),
    },
    {
      key: 'totalTimeOffHours',
      label: t('addColumnsDrawer.columnsList.totalTimeOffHours.label'),
      description: t(
        'addColumnsDrawer.columnsList.totalTimeOffHours.description'
      ),
    },
    {
      key: 'volunteerEarnings',
      label: t('addColumnsDrawer.columnsList.volunteerEarnings.label'),
      description: t(
        'addColumnsDrawer.columnsList.volunteerEarnings.description'
      ),
    },
    {
      key: 'volunteerHours',
      label: t('addColumnsDrawer.columnsList.volunteerHours.label'),
      description: t('addColumnsDrawer.columnsList.volunteerHours.description'),
    },
    {
      key: 'volunteerRateHourly',
      label: t('addColumnsDrawer.columnsList.volunteerRateHourly.label'),
      description: t(
        'addColumnsDrawer.columnsList.volunteerRateHourly.description'
      ),
    },
    {
      key: 'workAddressCity',
      label: t('addColumnsDrawer.columnsList.workAddressCity.label'),
      description: t(
        'addColumnsDrawer.columnsList.workAddressCity.description'
      ),
    },
    {
      key: 'workAddressStreet',
      label: t('addColumnsDrawer.columnsList.workAddressStreet.label'),
      description: t(
        'addColumnsDrawer.columnsList.workAddressStreet.description'
      ),
    },
    {
      key: 'workAddressZip',
      label: t('addColumnsDrawer.columnsList.workAddressZip.label'),
      description: t('addColumnsDrawer.columnsList.workAddressZip.description'),
    },
  ];

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
          <SheetTitle className="text-xl">
            {t('addColumnsDrawer.title')}
          </SheetTitle>
        </SheetHeader>

        <div className="mb-4">
          <Label className="mb-1 block font-semibold" htmlFor="search-columns">
            {t('addColumnsDrawer.searchColumnsLabel')}
          </Label>
          <Input
            className=""
            id="search-columns"
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('addColumnsDrawer.searchColumnsPlaceholder')}
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
            <Button variant="outline">
              {t('addColumnsDrawer.cancelButton')}
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="bg-primary-gradient text-white">
              {t('addColumnsDrawer.saveButton')}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
