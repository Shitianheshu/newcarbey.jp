import ContactForm from '../ContactForm';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ContactFormExample() {
  return (
    <LanguageProvider>
      <div className="p-8 max-w-2xl">
        <ContactForm />
      </div>
    </LanguageProvider>
  );
}
