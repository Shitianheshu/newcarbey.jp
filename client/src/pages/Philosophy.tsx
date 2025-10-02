import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import { Card } from '@/components/ui/card';
import { Zap, Heart, TrendingUp, Users } from 'lucide-react';
import ceoImage from '@assets/generated_images/CEO_professional_headshot_2d4cb2b5.png';

export default function Philosophy() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Zap,
      title: 'チャレンジ',
      subtitle: 'challenge',
      description: '既成概念を打ち破り、新たな流通の形を創造する'
    },
    {
      icon: Heart,
      title: '信頼',
      subtitle: 'trust',
      description: '加盟店、お客様、パートナーとの信頼を最優先'
    },
    {
      icon: TrendingUp,
      title: '成長',
      subtitle: 'growth',
      description: '会員様の成長とともに、私たちも進化し続ける'
    },
    {
      icon: Users,
      title: '共創',
      subtitle: 'co-creation',
      description: '個の力をつなぎ、価値を社会全体に広げる'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            label="PHILOSOPHY"
            title="企業理念"
            subtitle="革新的な発想で中古車市場に革命を"
            centered={true}
          />
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 md:p-12 mb-16">
            <div className="text-center mb-6">
              <div className="text-sm font-semibold text-primary mb-2">Philosophy</div>
              <h3 className="text-3xl font-bold font-heading">理念</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
              Carbeyでは、誰もが車屋になれる社会を目指し、車の流通における新しいグローバルスタンダードを創造しています。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mt-4">
              統計に基づいた最新のAI技術やビッグデータ分析を活用することで、個人のスキルに大きく依存していた中古車の仕入れ負担を最大限軽減し、スピーディな意思決定を実現します。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mt-4">
              仕入れに要する時間を最小限に抑え、ご自身の自由な時間を増やし、負担の少ないゆとりある働き方を確立しやすくすることで、加盟店の皆様が安心してビジネスに取り組めるシステムを提供します。
            </p>
          </Card>

          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-primary mb-2">Values</div>
              <h3 className="text-3xl font-bold font-heading">価値観</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover-elevate transition-all"
                  data-testid={`card-value-${index}`}
                >
                  <div className="w-14 h-14 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-2">{value.title}</h4>
                  <p className="text-sm text-primary font-semibold mb-3">{value.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 mb-16">
            <div className="text-center mb-6">
              <div className="text-sm font-semibold text-primary mb-2">Credo</div>
              <h3 className="text-3xl font-bold font-heading">行動指針</h3>
            </div>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className="text-center">
                私たちのすべての判断基準は「安心して利益を出せるか」です。
              </p>
              <p className="text-center">
                常に数字とデータに基づいた判断と取引状況をオープンにし、情報共有を大切にします。
              </p>
            </div>
          </Card>

          <Card className="p-8 md:p-12 mb-16">
            <div className="text-center mb-6">
              <div className="text-sm font-semibold text-primary mb-2">Why we exist</div>
              <h3 className="text-3xl font-bold font-heading">存在意義</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
              日本の中古車市場は巨大である一方、制度は不透明なままであり、参入障壁が高い状況が続いています。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mt-4">
              Carbeyは、この巨大な市場を「誰もが参加できる壮大なフィールド」へと変革し、新たな働き方や豊かな地域社会づくりに貢献します。
            </p>
          </Card>

          <Card className="p-8 md:p-12">
            <h3 className="text-2xl font-bold font-heading mb-8">CEOメッセージ</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <img
                  src={ceoImage}
                  alt="代表取締役 山岡 淳弘"
                  className="w-full rounded-lg"
                  data-testid="img-ceo-philosophy"
                />
              </div>
              <div className="lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  約5年前、当社の経営陣はそれぞれ別々の事業を営んでいました。
                </p>
                <p>
                  ある日、中古車屋を営んでいた私が、現在の経営陣メンバーと出会いました。
                </p>
                <p>
                  意気投合し、力を合わせることを決意。多くの困難に直面しながらも、それぞれの強みを持ち寄り、良いときも悪いときも分かち合うことで、大きな成果を上げることができました。
                </p>
                <p>
                  コロナによる経済危機に直面したり、大手中古車販売会社の不祥事による強い世間の批判にさらされたりと、前例のない景気低迷やイメージダメージにより、業界全体に悲観的なムードが蔓延していることを痛感しています。
                </p>
                <p>
                  このままでは業界全体が危機に陥る。この状況が生じた時、自社で開発したシステムを多くの方に利用していただければ、私たちに何ができるかを考え始めました。
                </p>
                <p>
                  この時、経営陣の間で「仕組み化されたビジネスモデルがあれば誰でも参加でき、収益基盤が安定していれば、中古車販売を始めたいと思う誰もが成功できる」という共通認識が生まれました。様々な選択肢を検証し、スキームに問題がないことを確信した上で、Carbeyを立ち上げました。
                </p>
                <p className="font-semibold text-foreground">
                  「Carbeyの成功は、加盟店の皆様の成功にかかっている」という信念のもと、今後も事業を推進してまいります。
                </p>
                <p className="text-right font-semibold text-foreground mt-6">代表取締役 山岡 淳弘</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
