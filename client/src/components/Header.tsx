import { Link, useLocation } from 'wouter';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import logo from '../../../attached_assets/generated_images/1.png'
export default function Header() {
  const [, setLocation] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/business', label: t('business') },
    { path: '/company', label: t('company') },
    { path: '/philosophy', label: t('philosophy') },
    { path: '/contact', label: t('contact') },
  ];
  const customStyle = {
  display: "flex",
  color: "#f8b76c",
  alignItems: "center",
  fontFamily: `"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", "ＭＳ ゴシック", "MS Gothic", "Noto Sans CJK JP", TakaoPGothic, sans-serif`,
  textIndent: "10px",
  fontSize: "32px"
};

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a data-testid="link-home" className="flex items-center space-x-2 hover-elevate px-3 py-2 rounded-md">
              <span style={customStyle} className="text-xl font-bold font-heading text-primary">
                <img src={logo} width={100} height={100} />
                <h5>Carbay</h5>
              </span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  data-testid={`link-${item.path.substring(1) || 'home'}`}
                  className="px-3 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2"
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
              data-testid="button-language-toggle"
            >
              <Globe className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button
              variant="default"
              onClick={() => setLocation('/contact')}
              className="hidden md:flex"
              data-testid="button-request-document"
            >
              {t('requestDocument')}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.path.substring(1) || 'home'}`}
                  className="block px-3 py-2 rounded-md text-base font-medium hover-elevate active-elevate-2"
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Button
              variant="default"
              onClick={() => {
                setLocation('/contact');
                setMobileMenuOpen(false);
              }}
              className="w-full"
              data-testid="button-mobile-request-document"
            >
              {t('requestDocument')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
