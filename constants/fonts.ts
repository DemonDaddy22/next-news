import { Fredericka_the_Great, IBM_Plex_Serif } from 'next/font/google';

const ftg = Fredericka_the_Great({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ftg',
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
});

export const FONTS = {
  FTG: ftg.className,
  IBS: ibmPlexSerif.className,
};
