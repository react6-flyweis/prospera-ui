import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { SocialLogin } from '@/components/auth/SocialLogin';

export default function RegisterPage() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <h2 className="mb-6 text-center font-semibold text-2xl">
        {t('registerPage.createAccount')}
      </h2>
      <SocialLogin />
      <div className="my-3 flex items-center">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="mx-2 text-gray-400 text-sm">{t('loginPage.or')}</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>
      <RegisterForm />
      <div className="mt-5 text-center text-gray-500 text-sm">
        {t('registerPage.alreadyHaveAccount')}{' '}
        <Link className="font-medium text-blue-600 hover:underline" to="/login">
          {t('registerPage.login')}
        </Link>
      </div>
    </div>
  );
}
