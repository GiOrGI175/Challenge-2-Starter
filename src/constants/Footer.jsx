import React from 'react';

import { logo } from '../assets';
import { footerLinks } from '../constants/index';
import { socialMedia } from '../constants/index';

const Footer = () => {
  return (
    <footer className='flex justify-center items-center py-6 sm:py-16 flex-col'>
      {/* top side */}
      <div className='flex justify-center items-start md:flex-row mb-8 w-full'>
        {/* left side */}
        <div className='flex-[1] flex flex-col justify-start mr-10 '>
          <img
            src={logo}
            alt='bank_logo'
            className='w-[266px] h-[72.14px] object-contain *: '
          />
          <p className='font-poppins font-normal text-dimWhite leading-[30.8px]  mt-4 max-w-[312px]  '>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {/* right side */}
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 '>
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className='felx fel-col ss:my-0 my-4 min-w-[150px]  '
            >
              <h4 className='font-poppins font-medium text-[18px] leading-[28px] text-[white] '>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4 gap-4 flex flex-col'>
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer'
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* bottom side */}

      <div />

      <div className='w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3f3e45] '>
        <p className='font-poppins font-normal text-normal text-[White] text-[16px] leading-[27.8px]  mt-4 max-w-[312px]'>
          Copyright c 2021 HooBank. All Rights Reserved.
        </p>
        <div className='felx felx-row mt-6 md:mt-0 gap-[30px] '>
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className='w-[40px] h-[21px] object-contain cursor-pointer  '
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
