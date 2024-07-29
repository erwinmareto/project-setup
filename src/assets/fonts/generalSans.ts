import localFont from 'next/font/local';

const generalSans = localFont({
  src: [
    { path: './semibold/GeneralSans-Semibold.woff2', weight: '600', style: 'semibold' },
    { path: './semibold/GeneralSans-Semibold.woff', weight: '600', style: 'semibold' },
    { path: './semibold/GeneralSans-Semibold.ttf', weight: '600', style: 'semibold' },
    { path: './medium/GeneralSans-Medium.woff2', weight: '500', style: 'medium' },
    { path: './medium/GeneralSans-Medium.woff', weight: '500', style: 'medium' },
    { path: './medium/GeneralSans-Medium.ttf', weight: '500', style: 'medium' },
    { path: './regular/GeneralSans-Regular.woff2', weight: '400', style: 'regular' },
    { path: './regular/GeneralSans-Regular.woff', weight: '400', style: 'regular' },
    { path: './regular/GeneralSans-Regular.ttf', weight: '400', style: 'regular' },
    { path: './light/GeneralSans-Light.woff2', weight: '300', style: 'thin' },
    { path: './light/GeneralSans-Light.woff', weight: '300', style: 'thin' },
    { path: './light/GeneralSans-Light.ttf', weight: '300', style: 'thin' }
  ],
  variable: '--font-general-sans',
  fallback: ['system-ui', 'sans-serif']
});

export default generalSans;
