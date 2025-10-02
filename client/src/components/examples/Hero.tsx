import Hero from '../Hero';
import heroImage from '@assets/generated_images/Modern_office_hero_image_ff63d47e.png';

export default function HeroExample() {
  return (
    <Hero
      title="最新技術で中古車売買をもっと簡単に"
      subtitle="誰でも、経験がなくても始められる。利益の出る車屋経営を、すべての人へ。"
      backgroundImage={heroImage}
      primaryAction={{
        label: '資料請求',
        onClick: () => console.log('Primary action clicked')
      }}
      secondaryAction={{
        label: '詳しく見る',
        onClick: () => console.log('Secondary action clicked')
      }}
    />
  );
}
