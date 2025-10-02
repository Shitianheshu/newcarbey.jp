import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">{t('companyName')}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <div>{t('postalCode')}</div>
                  <div>{t('address')}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div>{t('phone')}</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footerAbout')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a data-testid="link-footer-about" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block">
                    {t('about')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/philosophy">
                  <a data-testid="link-footer-philosophy" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block">
                    {t('philosophy')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footerBusiness')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/business">
                  <a data-testid="link-footer-business" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block">
                    {t('business')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footerContact')}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>{t('businessHours')}</div>
              <div>{t('closedDays')}</div>
              <Link href="/contact">
                <a data-testid="link-footer-contact" className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Mail className="h-4 w-4" />
                  <span>{t('contact')}</span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">{t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
}
