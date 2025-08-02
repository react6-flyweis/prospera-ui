import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import documentIcon from '@/assets/icons/document.png';
import { ProfileImageUploader } from '../ProfileImageUploader';
import { Button } from '../ui/button';
import { FileInput } from '../ui/FileInput';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const vendorSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email(),
  joinDate: z.string(),
  gender: z.string(),
  address: z.string(),
  postalCode: z.string(),
  mobile: z.string(),
  vendorId: z.string(),
  dob: z.string(),
  language: z.string(),
  city: z.string(),
  country: z.string(),
  bankName: z.string(),
  branch: z.string(),
  accountHolder: z.string(),
  accountNumber: z.string(),
  ifsc: z.string(),
});

type VendorFormValues = z.infer<typeof vendorSchema>;

export function VendorEditor() {
  const form = useForm<VendorFormValues>({
    resolver: zodResolver(vendorSchema),
    defaultValues: {},
  });

  function onSubmit(_data: VendorFormValues) {
    // handle submit
    // console.log(data);
  }

  const documentList = [
    'Business License',
    'Owner / Operator ID',
    'Financial Statements',
    'AML Training Periods',
    'Sample KYC Records',
    'Data Processing Agreements',
    'Compliance Certifications',
    'Business References',
    'Certificate of incorporation',
    'Proof of Address',
    'AML Policy',
    'KYC Policy',
    'Data Protection Policy',
    'Audit Reports',
    'Liability Insurance',
  ];

  // State for document files
  const [documentFiles, setDocumentFiles] = useState<{
    [key: string]: File | null;
  }>({});

  const [profileImage, setProfileImage] = useState<string | File>('');

  const handleFileChange = (doc: string, file: File | null) => {
    setDocumentFiles((prev) => ({ ...prev, [doc]: file }));
  };

  return (
    <Form {...form}>
      <form className="flex gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="">
          <ProfileImageUploader
            onChange={(file) => {
              if (file) {
                setProfileImage(URL.createObjectURL(file));
              }
            }}
            value={profileImage}
          />
        </div>
        <div className="">
          <h2 className="mb-4 font-semibold text-lg">Profile Detail</h2>
          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name Of The Vendor</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="joinDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Join Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Permanent Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="vendorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Give A ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred language</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-8">
            <h2 className="mb-4 font-semibold text-lg">Bank Detail</h2>
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="bankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountHolder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Holder Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ifsc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IFSC Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Branch</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 font-semibold text-lg">Upload Documents</h2>
            <div className="grid grid-cols-2 gap-5">
              {documentList.map((doc) => (
                <FileInput
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="h-full cursor-pointer rounded-l-none"
                  key={doc}
                  onChange={(file) => handleFileChange(doc, file)}
                  value={documentFiles[doc] || null}
                >
                  <div className="flex h-14 items-center justify-between rounded-lg bg-white shadow">
                    <div className="flex items-center gap-3 p-2">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 p-2">
                        <img
                          alt="doc"
                          className="max-h-6 max-w-6 rounded "
                          src={documentIcon}
                        />
                      </div>
                      <span className="font-medium">{doc}</span>
                    </div>
                    <div className="flex h-full items-center rounded-r-md bg-gray-400 px-5 text-sm text-white">
                      upload
                    </div>
                  </div>
                </FileInput>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button className="w-1/2 rounded-full bg-primary-gradient font-semibold text-white shadow">
                Add
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
