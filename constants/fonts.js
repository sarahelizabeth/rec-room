import { useFonts } from 'expo-font';

export const importFonts = {
  'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
  'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
};

export const fonts = () => {
  const [loaded, error] = useFonts({
    pthin: [importFonts['Poppins-Thin'], 'sans-serif'],
    pextralight: [importFonts['Poppins-ExtraLight'], 'sans-serif'],
    plight: [importFonts['Poppins-Light'], 'sans-serif'],
    pregular: [importFonts['Poppins-Regular'], 'sans-serif'],
    pmedium: [importFonts['Poppins-Medium'], 'sans-serif'],
    psemibold: [importFonts['Poppins-SemiBold'], 'sans-serif'],
    pbold: [importFonts['Poppins-Bold'], 'sans-serif'],
    pextrabold: [importFonts['Poppins-ExtraBold'], 'sans-serif'],
    pblack: [importFonts['Poppins-Black'], 'sans-serif'],
  });

  if (error) {
    console.error(error);
  }

  return { loaded, fonts };
};
