import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: 'お問い合わせを送信しました',
      description: '担当者より折り返しご連絡いたします。',
    });
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      agree: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-2">
          {t('companyNameField')}
        </label>
        <Input
          id="company"
          data-testid="input-company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          {t('nameField')}
        </label>
        <Input
          id="name"
          data-testid="input-name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          {t('emailField')}
        </label>
        <Input
          id="email"
          type="email"
          data-testid="input-email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
          {t('phoneField')}
        </label>
        <Input
          id="phone"
          type="tel"
          data-testid="input-phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          {t('messageField')}
        </label>
        <Textarea
          id="message"
          rows={6}
          data-testid="input-message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="agree"
          checked={formData.agree}
          onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
          data-testid="checkbox-privacy"
        />
        <label htmlFor="agree" className="text-sm leading-relaxed">
          {t('privacyPolicy')}
        </label>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={!formData.agree}
        data-testid="button-submit-form"
      >
        {t('submit')}
      </Button>
    </form>
  );
}
