// WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '5518991660760';
  const message = encodeURIComponent('Olá, preciso de uma orientação jurídica!');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
};

export default WhatsAppButton;
