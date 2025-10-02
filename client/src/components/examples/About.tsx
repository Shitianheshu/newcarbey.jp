import About from '../../pages/About';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function AboutExample() {
  return (
    <LanguageProvider>
      <About />
    </LanguageProvider>
  );
}
