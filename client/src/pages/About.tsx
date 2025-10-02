import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import { Card } from '@/components/ui/card';
import { Target, Eye, Cpu, Database, TrendingUp } from 'lucide-react';
import techBg from '@assets/generated_images/AI_technology_background_740c9bc3.png';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img src={techBg} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionTitle
            label="ABOUT"
            title="carbayについて"
            subtitle="最新技術で中古車売買をもっと簡単に"
            centered={true}
          />
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
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
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('missionText')}
              </p>
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
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('visionText')}
              </p>
            </Card>
          </div>

          <div>
            <SectionTitle
              label={t('strengths')}
              title="carbayの3つの強み"
              centered={true}
            />
            
            <div className="mt-12 space-y-8">
              <Card className="p-8 hover-elevate">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Cpu className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">STRENGTHS 1</div>
                    <h3 className="text-2xl font-bold font-heading mb-4">{t('strength1Title')}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {t('strength1Text')}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-elevate">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Database className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">STRENGTHS 2</div>
                    <h3 className="text-2xl font-bold font-heading mb-4">{t('strength2Title')}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {t('strength2Text')}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-elevate">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">STRENGTHS 3</div>
                    <h3 className="text-2xl font-bold font-heading mb-4">{t('strength3Title')}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {t('strength3Text')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
