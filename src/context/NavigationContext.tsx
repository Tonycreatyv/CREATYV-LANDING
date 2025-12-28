import { createContext, useContext, type ReactNode } from 'react';

type NavigationContextValue = {
  goTo: (to: string, hash?: string, options?: { replace?: boolean }) => void;
  scrollToSection: (id: string) => void;
};

const NavigationContext = createContext<NavigationContextValue | undefined>(undefined);

export const NavigationProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: NavigationContextValue;
}) => {
  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
