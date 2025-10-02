import Business from '../../pages/Business';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function BusinessExample() {
  return (
    <LanguageProvider>
      <Business />
    </LanguageProvider>
  );
}
