import { useTranslation } from 'react-i18next';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { NotificationForm } from '@/components/PushNotifications/NotificationForm';
import { getNotificationColumns } from '@/components/PushNotifications/notificationColumns';
import { notificationData } from '@/components/PushNotifications/notificationData';
import { Button } from '@/components/ui/button';

export default function PushNotifications() {
  const { t } = useTranslation();
  const notificationColumns = getNotificationColumns(t);
  return (
    <PageLayout title={t('pushNotificationsPage.title')}>
      <NotificationForm />
      <div className="mt-8">
        <DataTable
          columns={notificationColumns}
          data={notificationData}
          pageSize={8}
          showPagination={false}
        />
        <Button className="mt-4 w-32 rounded bg-primary-gradient" type="button">
          {t('pushNotificationsPage.deleteAllButton')}
        </Button>
      </div>
    </PageLayout>
  );
}
