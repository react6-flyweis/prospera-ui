import { Outlet } from 'react-router';
import abstractionImage from '@/assets/images/abstraction.png';
import logoImage from '@/assets/images/logo.svg';
import LanguageSelector from '@/components/LanguageSelector';

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-primary-gradient md:flex-row">
      {/* Left Side: Branding & Image */}
      <div className="relative hidden flex-col bg-primary-gradient p-10 text-white md:flex md:w-1/3">
        {/* Logo */}
        <div className="mb-2 flex gap-2">
          {/* Replace with your logo image */}
          <img alt="Prospera Logo" className="max-w-20" src={logoImage} />
        </div>
        {/* Slogan & Description */}
        <div className="">
          <h2 className="mb-4 font-bold text-4xl">Design with us</h2>
          <p className="max-w-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac semper
            orci, eu porttitor lacus.
          </p>
        </div>
        {/* Decorative Image */}
        <img
          alt="Decor"
          className="max-w-xs translate-x-36"
          src={abstractionImage}
        />
      </div>

      {/* Right Side: Auth Form Outlet */}
      <div className="relative flex flex-1 items-center justify-center rounded-l-3xl bg-white shadow-lg">
        {/* Language Selector - positioned on the right side */}
        <div className="absolute top-4 right-4 z-10">
          <LanguageSelector />
        </div>

        <div className="w-full max-w-md p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
