import { Button } from '@/components/ui/button';

export function SocialLogin() {
  return (
    <div className="mb-5 flex gap-4">
      <Button className="flex-1 rounded" variant="outline">
        <span className="inline-block h-5 w-5">
          {/* Google SVG */}
          <svg
            height="20"
            viewBox="0 0 48 48"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Google</title>
            <g>
              <path
                d="M24 9.5c3.54 0 6.36 1.22 8.32 3.22l6.18-6.18C34.88 2.7 29.87 0 24 0 14.61 0 6.48 6.48 2.69 15.88l7.19 5.59C11.6 15.13 17.29 9.5 24 9.5z"
                fill="#4285F4"
              />
              <path
                d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9.02h12.44c-.54 2.91-2.18 5.38-4.66 7.04l7.19 5.59C43.52 37.52 46.1 31.5 46.1 24.5z"
                fill="#34A853"
              />
              <path
                d="M10.88 28.47c-.54-1.62-.85-3.34-.85-5.22s.31-3.6.85-5.22l-7.19-5.59C2.25 16.48 0 20.02 0 24c0 3.98 2.25 7.52 5.69 10.34l7.19-5.59z"
                fill="#FBBC05"
              />
              <path
                d="M24 48c6.48 0 11.93-2.14 15.91-5.84l-7.19-5.59c-2.01 1.35-4.59 2.15-8.72 2.15-6.71 0-12.4-5.63-13.12-12.97l-7.19 5.59C6.48 41.52 14.61 48 24 48z"
                fill="#EA4335"
              />
            </g>
          </svg>
        </span>
        <span className="text-xs">Continue with Google</span>
      </Button>
      <Button className="flex-1 rounded" variant="outline">
        <span className="inline-block h-5 w-5">
          {/* Facebook SVG */}
          <svg
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Facebook</title>
            <path
              d="M32 16c0-8.837-7.163-16-16-16S0 7.163 0 16c0 7.987 5.84 14.623 13.438 15.735V20.89h-4.047v-4.89h4.047v-3.722c0-4.007 2.393-6.223 6.06-6.223 1.757 0 3.594.312 3.594.312v3.953h-2.025c-1.997 0-2.62 1.24-2.62 2.513v3.167h4.453l-.713 4.89h-3.74v10.845C26.16 30.623 32 23.987 32 16z"
              fill="#1877F3"
            />
          </svg>
        </span>
        <span className="text-xs">Continue with Facebook</span>
      </Button>
    </div>
  );
}
