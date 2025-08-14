import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { LoginForm } from '@/components/auth/LoginForm';
import { SocialLogin } from '@/components/auth/SocialLogin';

export default function LoginPage() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <h2 className="mb-6 text-center font-semibold text-2xl">
        {t('loginPage.welcomeBack')}
      </h2>
      <SocialLogin />
      <div className="my-4 flex items-center">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="mx-2 text-gray-400 text-sm">{t('loginPage.or')}</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>
      <LoginForm />
      <div className="mt-6 text-center text-gray-500 text-sm">
        {t('loginPage.dontHaveAccount')}{' '}
        <Link
          className="font-medium text-blue-600 hover:underline"
          to="/register"
        >
          {t('loginForm.signUp')}
        </Link>
      </div>
    </div>
  );
}
