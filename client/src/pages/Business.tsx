import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import { Card } from '@/components/ui/card';
import { Building2, TrendingUp, Database, CircleDollarSign } from 'lucide-react';
import carImage from '@assets/generated_images/Automotive_business_imagery_42db317d.png';

export default function Business() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: '中古車販売フランチャイズシステムの開発・運営',
      subtitle: '誰もが車屋になれるシステムの提供',
      description: 'AIデータ分析と自動売買システムを活用し、車両の保管から管理まで一括管理。在庫リスクを負うことなく中古車販売ビジネスに参入できるフランチャイズシステムを運営しています。'
    },
    {
      icon: TrendingUp,
      title: '資金調達支援・経営コンサルティング',
      subtitle: '事業資金調達のための多彩なサポート方法をご用意',
      description: '日本政策金融公庫、市制度融資、県制度融資、信用組合、保証協会付き融資制度、中小企業保証制度、創業融資など、様々な資金調達方法をサポートします。'
    },
    {
      icon: Database,
      title: '自社開発AIデータ分析の提供',
      subtitle: '統計的ビッグデータに導かれた最適な仕入れ判断を提供',
      description: 'ビッグデータを分析し、車種ごとの需要・回転率・販売量を算出。仕入れミスや売れ残りのリスクを最小限に抑えながら、最適な販売・仕入れを実現します。'
    },
    {
      icon: CircleDollarSign,
      title: 'ファクタリングシステム開発・運営',
      subtitle: 'キャッシュフローを支える仕組み',
      description: 'オンラインファクタリングシステムを開発・運営し、会員様やクライアント様の資金繰り管理をスピーディにサポートします。'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img src={carImage} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionTitle
            label="BUSINESS"
            title={t('businessTitle')}
            subtitle={t('businessSubtitle')}
            centered={true}
          />
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover-elevate transition-all" data-testid={`card-service-${index}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-2">{service.title}</h3>
                    <p className="text-sm text-primary font-semibold">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-6">
            carbayは2つの事業であなたのチャレンジをサポートします
          </h3>
          <p className="text-lg text-muted-foreground">
            資金調達から運営まで、包括的なサポート体制であなたの成功を後押しします。
          </p>
        </div>
      </section>
    </div>
  );
}
