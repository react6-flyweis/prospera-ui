import { Edit2Icon, Trash2Icon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { ContactDialog } from '@/components/Settings/ContactDialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const contacts = [
  {
    id: 1,
    name: 'Jaxson Press',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    mobile: '+1 321 0945 3345',
    email: 'admin@mail.com',
    region: 'United States',
  },
  {
    id: 2,
    name: 'Roger Saris',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    mobile: '+1 321 0945 3345',
    email: 'admin@mail.com',
    region: 'United States',
  },
  {
    id: 3,
    name: 'Abram Geidt',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    mobile: '+1 321 0945 3345',
    email: 'admin@mail.com',
    region: 'United States',
  },
  {
    id: 4,
    name: 'Jordyn Mango',
    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
    mobile: '+1 321 0945 3345',
    email: 'admin@mail.com',
    region: 'United States',
  },
];

export default function HelpSupport() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('helpSupportPage.title')} withBack>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm">{t('helpSupportPage.description')}</span>
        <ContactDialog>
          <Button
            className="w-32 rounded bg-primary-gradient text-white"
            size="lg"
          >
            {t('helpSupportPage.addButton')}
          </Button>
        </ContactDialog>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {contacts.map((contact) => (
          <div
            className="rounded-lg border bg-white p-4 shadow-sm"
            key={contact.id}
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage alt={contact.name} src={contact.avatar} />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-semibold text-sm">{contact.name}</span>
              </div>
              <Button
                aria-label={t('helpSupportPage.deleteAriaLabel')}
                className="rounded-md p-2 text-red-600 shadow-none"
                size="icon"
                variant="ghost"
              >
                <Trash2Icon size={20} strokeWidth={2.2} />
              </Button>
            </div>
            <div className="space-y-4 text-xs">
              {/* Mobile number */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {t('helpSupportPage.mobileNumber')}
                  </div>
                  <div className="text-gray-400">{contact.mobile}</div>
                </div>
                <ContactDialog initialValues={contact}>
                  <Button
                    aria-label={t('helpSupportPage.editAriaLabel')}
                    className="rounded-md p-1 text-blue-600 shadow-none"
                    size="icon"
                    variant="ghost"
                  >
                    <Edit2Icon size={16} strokeWidth={2.2} />
                  </Button>
                </ContactDialog>
              </div>
              {/* Email ID */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {t('helpSupportPage.emailId')}
                  </div>
                  <div className="text-gray-400">{contact.email}</div>
                </div>
                <ContactDialog initialValues={contact}>
                  <Button
                    aria-label={t('helpSupportPage.editAriaLabel')}
                    className="rounded-md p-1 text-blue-600 shadow-none"
                    size="icon"
                    variant="ghost"
                  >
                    <Edit2Icon size={16} strokeWidth={2.2} />
                  </Button>
                </ContactDialog>
              </div>
              {/* Region */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {t('helpSupportPage.region')}
                  </div>
                  <div className="text-gray-400">{contact.region}</div>
                </div>
                <ContactDialog initialValues={contact}>
                  <Button
                    aria-label={t('helpSupportPage.editAriaLabel')}
                    className="rounded-md p-1 text-blue-600 shadow-none"
                    size="icon"
                    variant="ghost"
                  >
                    <Edit2Icon size={16} strokeWidth={2.2} />
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
