import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import StrengthCard from '@/components/StrengthCard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Database, TrendingUp, Target, Eye } from 'lucide-react';
import heroImage from '@assets/generated_images/Modern_office_hero_image_ff63d47e.png';

export default function Home() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Hero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        backgroundImage={heroImage}
        primaryAction={{
          label: t('requestDocument'),
          onClick: () => setLocation('/contact')
        }}
        secondaryAction={{
          label: t('learnMore'),
          onClick: () => setLocation('/about')
        }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label={t('strengths')}
            title="carbayの強み"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StrengthCard
              icon={Cpu}
              number="STRENGTHS 1"
              title={t('strength1Title')}
              description={t('strength1Text')}
            />
            <StrengthCard
              icon={Database}
              number="STRENGTHS 2"
              title={t('strength2Title')}
              description={t('strength2Text')}
            />
            <StrengthCard
              icon={TrendingUp}
              number="STRENGTHS 3"
              title={t('strength3Title')}
              description={t('strength3Text')}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">{t('mission')}</div>
                  <h3 className="text-2xl font-bold font-heading">{t('missionTitle')}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t('missionText')}</p>
            </Card>

            <Card className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">{t('vision')}</div>
                  <h3 className="text-2xl font-bold font-heading">{t('visionTitle')}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t('visionText')}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            資料請求・お問い合わせ
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            carbayのフランチャイズシステムについて詳しく知りたい方は、お気軽にお問い合わせください。
          </p>
          <Button
            size="lg"
            onClick={() => setLocation('/contact')}
            data-testid="button-cta-contact"
          >
            {t('requestDocument')}
          </Button>
        </div>
      </section>
    </div>
  );
}
