import Home from '../../pages/Home';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function HomeExample() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}
