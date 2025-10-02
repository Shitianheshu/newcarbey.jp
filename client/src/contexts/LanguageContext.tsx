import { createContext, useContext, useState } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ja: {
    home: 'ホーム',
    about: 'Carbeyについて',
    business: '事業内容',
    company: '会社情報',
    philosophy: '企業理念',
    contact: 'お問い合わせ',
    login: 'ログイン',
    logout: 'ログアウト',
    register: '新規登録',
    
    heroTitle: '最新技術で中古車売買をもっと簡単に',
    heroSubtitle: '誰でも、経験がなくても始められる。利益の出る車屋経営を、すべての人へ。',
    requestDocument: '資料請求',
    learnMore: '詳しく見る',
    
    mission: 'ミッション',
    missionTitle: '私たちが実現したいこと',
    missionText: '最新技術で中古車売買をもっと簡単に。これまで「車を売る」ことは、豊富な経験と多額の資産を持つ一部の人だけに限られていました。Carbeyは独自のデータ分析と自動売買システムで、この参入障壁を取り除き、経験がない方でも利益の出る車屋経営を始められるフランチャイズシステムを提供します。',
    
    vision: 'ビジョン',
    visionTitle: '私たちが目指す未来',
    visionText: '利益の出る車屋経営を、すべての人へ。経験がなくても、資金が少なくても始められる。誰もが利益の出る車屋経営を始められる社会を創ります。中古車市場は約5兆円の規模があり、成功の可能性が高い。個人や中小企業が主役となる未来を創ります。',
    
    strengths: 'Carbeyの強み',
    strength1Title: '業界初の中古車自動売買システム',
    strength1Text: 'このシステムを活用することで、フランチャイズ本部が調査から仕入れ、販売まで一括管理し、代行します。加盟店は在庫リスクを負うことなく、誰でも簡単に始められます。',
    
    strength2Title: '自社開発の調査システム',
    strength2Text: '中古車の相場調査方法がわからないと、高値掴みをして損をすることがよくあります。Carbeyは独自のAIデータ分析技術を駆使し、加盟店が簡単に始められるシステム環境を提供します。',
    
    strength3Title: '安定的・継続的な収益基盤の構築',
    strength3Text: '会員様には月次で販売利益を受け取っていただくことで、日々の業務負担なく継続的に収益を積み上げることができます。',
    
    businessTitle: '事業内容',
    businessSubtitle: 'Carbeyは2つの事業であなたのチャレンジをサポートします',
    
    companyName: '株式会社Carbay',
    address: '神奈川県厚木市旭町1-21-12 三紫ビル3A',
    postalCode: '〒243-0014',
    phone: '046-210-4561',
    businessHours: '営業時間：平日 9:00-18:00',
    closedDays: '定休日：土日祝',
    
    contactTitle: 'お問い合わせ',
    contactSubtitle: '資料に関するお問い合わせ・ビジネスのご相談・採用についてお気軽にお問い合わせください。',
    companyNameField: '会社名',
    nameField: '氏名',
    emailField: 'メールアドレス',
    phoneField: '携帯電話',
    messageField: 'お問い合わせ内容',
    privacyPolicy: 'プライバシーポリシーに同意する',
    submit: '送信',
    
    footerAbout: 'Carbeyについて',
    footerBusiness: '事業内容',
    footerCompany: '会社情報',
    footerContact: 'お問い合わせ',
    footerRights: '© 2025 Carbay Co., Ltd. All rights reserved.',
  },
  en: {
    home: 'Home',
    about: 'About Carbey',
    business: 'Business',
    company: 'Company',
    philosophy: 'Philosophy',
    contact: 'Contact',
    login: 'Login',
    logout: 'Logout',
    register: 'Sign Up',
    
    heroTitle: 'Making Used Car Trading Easier with Latest Technology',
    heroSubtitle: 'Anyone can start, even without experience. Profitable car dealership for everyone.',
    requestDocument: 'Request Information',
    learnMore: 'Learn More',
    
    mission: 'Mission',
    missionTitle: 'What We Want to Achieve',
    missionText: 'Making used car trading easier with the latest technology. Until now, "selling cars" has been limited to a select few with extensive experience and significant assets. Carbey uses proprietary data analysis and automated trading systems to remove this barrier, providing a franchise system that allows anyone to start a profitable car dealership, even without experience.',
    
    vision: 'Vision',
    visionTitle: 'The Future We Aim For',
    visionText: 'Make a profitable car dealership accessible to everyone. You can start even if you have no experience or a low budget. We will create a society where anyone can start a profitable car dealership business. The used car market is worth approximately 5 trillion yen, so there is a high possibility of success.',
    
    strengths: "Carbey's Strengths",
    strength1Title: "Industry's First Automated Used Car Trading System",
    strength1Text: 'By utilizing this system, the franchise headquarters will centrally manage and act on your behalf from research to purchasing and sales. Franchisees do not have to bear inventory risk, and anyone can easily get started.',
    
    strength2Title: 'In-house Developed Research System',
    strength2Text: "If you don't know how to research used car market prices, you often end up overpaying and losing money. Carbey uses its own AI data analysis technology to provide a system environment in which franchisees can easily get started.",
    
    strength3Title: 'Building a Stable, Continuous Revenue Base',
    strength3Text: 'Members receive sales profits on a monthly basis, allowing them to accumulate revenue continuously without the burden of daily operations.',
    
    businessTitle: 'Business Content',
    businessSubtitle: 'Carbey will support your challenges through two businesses',
    
    companyName: 'Carbay Co., Ltd.',
    address: 'Sanshi Building 3A, 1-21-12 Asahicho, Atsugi City, Kanagawa Prefecture',
    postalCode: '243-0014',
    phone: '046-210-4561',
    businessHours: 'Business hours: Weekdays 9:00-18:00',
    closedDays: 'Closed: Saturdays, Sundays, and holidays',
    
    contactTitle: 'Contact Us',
    contactSubtitle: 'Feel free to contact us about materials, business consultations, or recruitment.',
    companyNameField: 'Company Name',
    nameField: 'Name',
    emailField: 'Email Address',
    phoneField: 'Phone Number',
    messageField: 'Message',
    privacyPolicy: 'I agree to the Privacy Policy',
    submit: 'Submit',
    
    footerAbout: 'About',
    footerBusiness: 'Business',
    footerCompany: 'Company',
    footerContact: 'Contact',
    footerRights: '© 2025 Carbay Co., Ltd. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ja] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
