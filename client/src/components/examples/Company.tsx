import Company from '../../pages/Company';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function CompanyExample() {
  return (
    <LanguageProvider>
      <Company />
    </LanguageProvider>
  );
}
