'use client';
import Image from 'next/image';
import path from 'path';
import React, { useState } from 'react';

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const MenuList = [
    { name: 'Dashboard', icon: '/home.png', path: '' },
    { name: 'Aave V3', icon: '/newAave.png', path: '' },
    { name: 'Uniswap V3', icon: '/uniswap.png', path: '' },
    { name: 'Diffusion Vault', icon: '/pie-chart.png', path: '' },
    { name: 'SDK', icon: '/cpu.png', path: '' }
  ];

  return (
    <div className={`h-screen shadow-lg pt-5 pl-1 transition-all duration-300 ease-in-out ${collapsed ? 'w-14' : 'w-48'}`}>
      <div>
        <div className=''>
          <a href="" className='transition-all duration-300 ease-in-out'>
          {collapsed ? (
            <Image src={'/logo.svg'} alt='logo' width={40} height={10} className='mb-2 flex justify-center items-center' />
          ) : (
            <Image src={'/biglogo.png'} alt='biglogo' width={176} height={35} className='mb-1' />

          )}
          </a>
        </div>
      </div>
      <div className='flex justify-end pr-3 pt-1 transition-all duration-300 ease-in-out'>
        <button className='border rounded-md bg-sky-100 hover:bg-sky-300' onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <Image src={'/chevrons-right.svg'} alt='arrow-left' width={32} height={34} />
          ) : (
            <Image src={'/chevrons-left.svg'} alt='arrow-right' width={32} height={34} />
          )}
        </button>
      </div>
      <div className='mt-4 hover:cursor-pointer'>
        {MenuList.map((menu, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`flex gap-2 gap-x-3 mb-1 p-3 cursor-pointer items-center rounded-lg transition-all duration-300 ease-in-out ${
              selected === index ? 'bg-blue-500 text-white' : ''
            }`}
          >
            <Image src={menu.icon} alt='icon' width={collapsed ? 24 : 30} height={collapsed ? 22 : 28} />
            <h2 className={`${collapsed ? 'hidden' : 'text-sm text-center'} transition-all duration-300 ease-in-out`}>
              {menu.name}
            </h2>
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-2'>
        <div className={` ${collapsed ? 'mt-16 flex flex-col gap-5 hover:cursor-pointer' : 'flex flex-row gap-5 hover:cursor-pointer mt-28'}`}>
          <a href="https://x.com/LayerDapp" target='blank'>
            <Image src={'/twitter.png'} alt='twitter' width={20} height={20} className='transition-all duration-300 ease-in-out' />
          </a>
          <a href="https://discord.com/invite/eDwnvCc8nB" target='blank'>
            <Image src={'/discord.png'} alt='discord' width={20} height={20} className='transition-all duration-300 ease-in-out' />
          </a>
          <a href="https://docs.layerdapp.xyz/" target='blank'>
            <Image src={'/open-book.png'} alt='docs' width={20} height={20} className='transition-all duration-300 ease-in-out' />
          </a>
        </div>
      </div>
      <div className='flex flex-col items-center mt-4 gap-2 transition-all duration-300 ease-in-out'>
        <button className={`flex justify-evenly items-center rounded-xl bg-blue-100 text-blue-700 hover:cursor-pointer hover:bg-blue-200 ${collapsed ? 'w-10 h-10 mt-4' : 'w-40 h-14'}`}>
          <Image src={'/feedback.gif'} alt='arrow' width={30} height={30} className='rounded-xl' />
          <span className={`font-semibold ${collapsed ? 'hidden' : ''}`}>FeedBack</span>
        </button>
        <button className={`flex justify-evenly items-center rounded-xl bg-blue-100 text-blue-700 hover:cursor-pointer hover:bg-blue-200 ${collapsed ? 'w-10 h-10' : 'w-40 h-12'}`}>
          <Image src={'/moon.gif'} alt='arrow' width={30} height={30} className='rounded-full' />
          <span className={` text-sm font-semibold ${collapsed ? 'hidden' : 'font-semibold'}`}>Switch to Dark</span>
        </button>
      </div>
    </div>
  );
}

export default SideNav;
