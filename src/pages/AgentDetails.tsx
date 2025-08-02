import { PenLineIcon } from 'lucide-react';
import { DocumentGrid } from '@/components/DocumentGrid';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Mock agent data
const AGENT_MOCK = {
  name: 'Kalyan Sarkar',
  avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  phone: '+1 9874 562103',
  country: 'United States',
  dob: '20-08-94',
  email: 'example@gmail.com',
  agentId: 'AG124563',
  bank: {
    name: 'Lorem Ipsum',
    accountNo: '178458236900127842',
    branch: 'Lorem Ipsum',
    ifsc: '1748529',
  },
  joined: '11-28-2024',
};

export default function AgentDetails() {
  return (
    <PageLayout title={AGENT_MOCK.name} withBack>
      <Card className=" flex items-center gap-6 rounded-2xl p-4 shadow-sm">
        <div className="grid flex-1 grid-cols-4 items-center gap-5">
          {/* Avatar */}
          <div className="flex items-center gap-3">
            <Avatar className="h-20 w-20">
              <AvatarImage
                alt="Agent Avatar"
                className="h-20 w-20 object-cover"
                src={AGENT_MOCK.avatar}
              />
              <AvatarFallback>{AGENT_MOCK.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="font-semibold text-lg">{AGENT_MOCK.name}</div>
              <div className="text-gray-500 text-sm">{AGENT_MOCK.phone}</div>
              <div className="text-gray-500 text-sm">
                Country : {AGENT_MOCK.country}
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">DOB : {AGENT_MOCK.dob}</div>
            <div className="text-gray-500 text-sm">
              Email ID : {AGENT_MOCK.email}
            </div>
            <div className="text-gray-500 text-sm">
              Agent ID: {AGENT_MOCK.agentId}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">
              Bank Name: {AGENT_MOCK.bank.name}
            </div>
            <div className="text-gray-500 text-sm">
              Account No: {AGENT_MOCK.bank.accountNo}
            </div>
            <div className="text-gray-500 text-sm">
              Branch: {AGENT_MOCK.bank.branch}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="">
              <div className="text-gray-500 text-sm">
                IFSC Code: {AGENT_MOCK.bank.ifsc}
              </div>
              <div className="text-gray-400 text-xs">
                Joined : {AGENT_MOCK.joined}
              </div>
            </div>
            <Button className="mt-2" size="icon" variant="ghost">
              <PenLineIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
      {/* Document Categories Grid */}
      <DocumentGrid />
    </PageLayout>
  );
}
