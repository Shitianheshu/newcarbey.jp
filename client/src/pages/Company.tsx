import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';
import ceoImage from '@assets/generated_images/CEO_professional_headshot_2d4cb2b5.png';

export default function Company() {
  const { t } = useLanguage();

  const companyInfo = [
    { label: '会社名', value: t('companyName') },
    { label: '所在地', value: `${t('postalCode')}\n${t('address')}` },
    { label: '設立', value: '2025年6月' },
    { label: '代表者', value: '代表取締役 山岡 淳弘' },
    { label: 'TEL', value: t('phone') },
    { label: '資本金', value: '300万円' },
    { label: '顧問', value: '弁護士：ナガツ法律事務所\n税理士：一戸税理士事務所' },
    { label: '主要取引先', value: 'オリックス自動車株式会社\nUSS株式会社\nオークネット株式会社\n株式会社ゼロ\n株式会社リクルート\n株式会社プロトなど' }
  ];

  const history = [
    { year: '2023', event: 'コンセプト立ち上げ、市場調査' },
    { year: '2024', event: 'システム開発、法人設立準備' },
    { year: '2025', event: '会社設立、サービス開始' },
    { year: '2026', event: 'サービス拡大、全国展開' }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            label="COMPANY"
            title="会社情報"
            centered={true}
          />
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-bold font-heading mb-8">代表メッセージ</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <img
                  src={ceoImage}
                  alt="代表取締役 山岡 淳弘"
                  className="w-full rounded-lg"
                  data-testid="img-ceo"
                />
                <p className="text-center mt-4 font-semibold">代表取締役 山岡 淳弘</p>
              </div>
              <div className="lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
                <p>拝啓</p>
                <p>
                  従来、中古車を販売するビジネスは、豊富な経験と多額の資金を必要とする、一部の人だけが参入できるものでした。
                </p>
                <p>
                  中古車業界が抱える社会課題、そして現在の制約的な枠組みを乗り越え、誰もが利益の出る車屋になれる未来を実現したい。
                </p>
                <p>
                  carbayは、独自の調査システムと自動売買システムを組み合わせたフランチャイズシステムをより多くの方に利用していただくことで、様々な社会課題や参入障壁を解消できると考えています。
                </p>
                <p>
                  継続的な利益積み上げが可能なフランチャイズシステムを提供することで、より多くの方に新たなビジネスの可能性をもたらします。
                  公正で透明性の高い中古車市場を構築し、チャレンジする誰もが成功できる環境を創ります。
                </p>
                <p className="text-right font-semibold text-foreground">代表取締役 山岡 淳弘</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-bold font-heading mb-8">会社概要</h3>
            <div className="space-y-6">
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-4 border-b border-border last:border-0"
                  data-testid={`info-${index}`}
                >
                  <div className="font-semibold">{info.label}</div>
                  <div className="sm:col-span-2 text-muted-foreground whitespace-pre-line">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-bold font-heading mb-8">アクセス</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">本社</p>
                  <p className="text-muted-foreground">{t('postalCode')}</p>
                  <p className="text-muted-foreground">{t('address')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">{t('phone')}</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">{t('businessHours')}</p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-sm text-muted-foreground">
              <p>● 小田急線 本厚木駅 東口より徒歩3分</p>
              <p>● JR相模線 厚木駅より徒歩15分</p>
              <p>● 東名高速道路 厚木ICより車で10分</p>
            </div>
          </Card>

          <Card className="p-8 md:p-12">
            <h3 className="text-2xl font-bold font-heading mb-8">沿革</h3>
            <div className="space-y-6">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6"
                  data-testid={`history-${index}`}
                >
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="pt-1 text-muted-foreground">{item.event}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
