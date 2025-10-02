import StrengthCard from '../StrengthCard';
import { Cpu } from 'lucide-react';

export default function StrengthCardExample() {
  return (
    <div className="p-8 max-w-2xl">
      <StrengthCard
        icon={Cpu}
        number="STRENGTHS 1"
        title="業界初の中古車自動売買システム"
        description="このシステムを活用することで、フランチャイズ本部が調査から仕入れ、販売まで一括管理し、代行します。加盟店は在庫リスクを負うことなく、誰でも簡単に始められます。"
      />
    </div>
  );
}
