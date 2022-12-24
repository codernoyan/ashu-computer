import Image from 'next/image';
import React from 'react';
import contactAnimation from '../../public/contact-2.gif';

const Contact = () => {
  return (
    <div id="contact" className="text-white font-siliguri">
      <div>
        <h1 className="text-center text-2xl md:text-4xl font-semibold">আমাদের সাথে <span className="text-cyan-500">যোগাযোগ</span></h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center md:justify-items-between items-center text-center py-16">
        <div className="justify-self-center md:justify-self-start">
          <Image src={contactAnimation} height={500} width={500} alt="contact"></Image>
        </div>
        <div className="text-base md:text-2xl space-y-4 justify-self-center md:justify-self-end">
          <div>
            <p className="text-cyan-500">ঠিকানা - </p>
            <p>আব্দুল রাজ্জাক মার্কেট, শান্তিরহাট</p>
            <p>(কাপ্তাই রোড সংলগ্ন), পোমরা, রাঙ্গুনিয়া, চট্টগ্রাম</p>
          </div>
          <div>
            <p><span className="text-cyan-500">ফোন -</span> <a href="tel:+8801812541215">(+৮৮) ০১৮১২৫৪১২১৫</a> | <a href="tel:+8801812541215">+8801812-541215</a></p>
            <p><span className="text-cyan-500">ই-মেইল -</span> <a href="mailto:ashucomputer.ctg@gmail.com">ashucomputer.ctg@gmail.com</a>, <a href="mailto:ashucomputer.ctg.ac@gmail.com">ashucomputer.ctg.ac@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;