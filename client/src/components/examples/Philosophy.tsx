import Philosophy from '../../pages/Philosophy';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function PhilosophyExample() {
  return (
    <LanguageProvider>
      <Philosophy />
    </LanguageProvider>
  );
}
