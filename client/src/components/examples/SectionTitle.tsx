import SectionTitle from '../SectionTitle';

export default function SectionTitleExample() {
  return (
    <div className="p-8 max-w-4xl">
      <SectionTitle
        label="MISSION"
        title="私たちが実現したいこと"
        subtitle="最新技術で中古車売買をもっと簡単に"
        centered={true}
      />
    </div>
  );
}
