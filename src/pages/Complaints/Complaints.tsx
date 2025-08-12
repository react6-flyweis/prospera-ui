import { ComplaintsCard } from '@/components/Complaints/ComplaintsCard';
import { PageLayout } from '@/components/Layout/PageLayout';

const complaintsData = [
  {
    id: 'US123451',
    type: 'User',
    name: 'Maria Siphron',
    headline: 'Headline shows here...',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 'EM123451',
    type: 'Employee',
    name: 'Skylar Herwitz',
    headline: 'Headline shows here...',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 'CO123451',
    type: 'Corporate',
    name: 'Jakob Torff',
    headline: 'Headline shows here...',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

export default function Complaints() {
  return (
    <PageLayout title="Complaints">
      <div className="space-y-6">
        {complaintsData.map((complaint) => (
          <ComplaintsCard complaint={complaint} key={complaint.id} />
        ))}
      </div>
    </PageLayout>
  );
}
