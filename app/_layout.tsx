import { AuthProvider } from '@/context/AuthContext';
import { ToastProvider, useToast } from '@/context/ToastContext';
import { setGlobalToastCallback, setupGlobalErrorHandlers } from '@/utils/globalErrorHandler';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};
const GlobalErrorInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { showToast } = useToast();
    
    React.useEffect(() => {
        setGlobalToastCallback(showToast);
        setupGlobalErrorHandlers();
    }, [showToast]);
    
    return <>{children}</>;
};
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Inter': require('@assets/fonts/Inter_28pt-Medium.ttf'),
  });
  useEffect(() => {
    if (error) throw error;
    
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ToastProvider>
      <GlobalErrorInitializer>
        <AuthProvider>
          <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" />
          </Stack>
        </AuthProvider>
      </GlobalErrorInitializer>
    </ToastProvider>
  );
}
