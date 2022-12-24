import Image from 'next/image';
import React from 'react';
import contactAnimation from '../../public/contact.gif';

const Contact = () => {
  return (
    <div id="contact" className="text-white font-siliguri">
      <div>
        <h1 className="text-center text-4xl font-semibold">আমাদের সাথে <span className="text-cyan-500">যোগাযোগ</span></h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center md:justify-items-between items-center text-center py-16">
        <div>
          <Image src={contactAnimation} height={400} width={400} alt="contact"></Image>
        </div>
        <div className="text-base md:text-2xl space-y-4">
          <div>
            <p className="text-cyan-500">ঠিকানা - </p>
            <p>আব্দুল রাজ্জাক মার্কেট, শান্তিরহাট</p>
            <p>(কাপ্তাই রোড সংলগ্ন), পোমরা, রাঙ্গুনিয়া, চট্টগ্রাম</p>
          </div>
          <div>
            <p><span className="text-cyan-500">ফোন -</span> (+৮৮) ০১৮১২৫৪১২১৫ | +8801812-541215</p>
            <p><span className="text-cyan-500">ই-মেইল -</span> ashucomputer@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;