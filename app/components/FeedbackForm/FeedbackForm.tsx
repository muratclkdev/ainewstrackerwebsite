import type { Lang } from '../../types';

interface FeedbackFormProps {
  lang: Lang;
}

const texts = {
  tr: {
    feedback: "Geri Bildirim",
    feedbackDesc: "Görüşlerinizi bizimle paylaşın",
    feedbackName: "İsim",
    feedbackEmail: "E-posta",
    feedbackMessage: "Mesaj",
    feedbackSubmit: "Gönder",
    feedbackSuccess: "Geri bildiriminiz için teşekkürler!"
  },
  en: {
    feedback: "Feedback",
    feedbackDesc: "Share your thoughts with us",
    feedbackName: "Name",
    feedbackEmail: "Email",
    feedbackMessage: "Message",
    feedbackSubmit: "Submit",
    feedbackSuccess: "Thank you for your feedback!"
  }
};

export default function FeedbackForm({ lang }: FeedbackFormProps) {
  // ... geri kalan kod aynı kalacak, sadece content[lang] yerine texts[lang] kullanılacak
} 