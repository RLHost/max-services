import { Phone } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511000000000" // Replace with actual WhatsApp number if available
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform transform hover:scale-110 animate-[bounce_2s_infinite] flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <Phone size={28} className="fill-current" />
    </a>
  );
}