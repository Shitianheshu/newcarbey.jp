import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            label="CONTACT"
            title={t('contactTitle')}
            subtitle={t('contactSubtitle')}
            centered={true}
          />
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-6">お問い合わせフォーム</h3>
              <ContactForm />
            </div>

            <div>
              <h3 className="text-2xl font-bold font-heading mb-6">お問い合わせ先</h3>
              <Card className="p-8 mb-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-4">{t('companyName')}</h4>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">所在地</p>
                      <p className="font-medium">{t('postalCode')}</p>
                      <p className="font-medium">{t('address')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">電話番号</p>
                      <p className="font-medium">{t('phone')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">メールでのお問い合わせ</p>
                      <p className="font-medium text-primary">こちらのフォームをご利用ください</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">営業時間</p>
                      <p className="font-medium">{t('businessHours')}</p>
                      <p className="font-medium">{t('closedDays')}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-muted/50">
                <h4 className="font-bold mb-3">アクセス</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>● 小田急線 本厚木駅 東口より徒歩3分</p>
                  <p>● JR相模線 厚木駅より徒歩15分</p>
                  <p>● 東名高速道路 厚木ICより車で10分</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
