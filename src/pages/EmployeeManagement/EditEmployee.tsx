// import { useParams } from 'react-router';
import { EmployeeEditor } from '@/components/EmployeeManagement/EmployeeEditor';
import { PageLayout } from '@/components/Layout/PageLayout';

// Static mock employee data

export default function EditEmployee() {
  // Get employeeId from route params
  //   const { employeeId } = useParams();
  const mockEmployee = {
    name: 'Kalyan Sarkar',
    email: 'example@gmail.com',
    joinDate: '11 November 2024',
    gender: 'Male',
    address: 'San Jose, California, USA',
    presentAddress: 'San Jose, California, USA',
    postalCode: '700012',
    mobile: '+1 9874 562103',
    employeeId: 'US748520',
    dob: '20/08/94',
    language: 'English',
    city: 'San Jose',
    country: 'USA',
    bankName: 'Bank of America',
    branch: 'San Jose',
    accountHolderName: 'Kalyan Sarkar',
    accountNumber: '1234567890',
    ifscCode: 'BOFAUS3N',
  };

  return (
    <PageLayout title="Edit Employee" withBack>
      <EmployeeEditor initialData={mockEmployee} />
    </PageLayout>
  );
}
