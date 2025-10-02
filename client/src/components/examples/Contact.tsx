import Contact from '../../pages/Contact';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ContactExample() {
  return (
    <LanguageProvider>
      <Contact />
    </LanguageProvider>
  );
}
