import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 w-full" />
      <div className="flex items-center justify-center text-sm pb-4 text-gray-500 dark:text-gray-400">
        <span>Fatto con ❤️ da Konny</span>
        <img
          src="/footerLogo.svg"
          className="w-8 h-8 ml-2 bg-transparent"
          alt="Konny"
        />
      </div>
    </div>
  );
};

export default Footer;
