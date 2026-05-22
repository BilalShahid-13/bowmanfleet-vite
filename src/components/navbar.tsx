"use client";
import { useNavigate } from '@tanstack/react-router';
import { scrollToSection } from '../lib/utils';
import { Button } from './ui/button';

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center w-full'>
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 backdrop-blur-xl bg-[#0d0d00]/60 px-6 md:px-12 py-5 flex justify-between items-center text-[#f5f0e0]">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => {
          // router.push('/')
          navigate({
            to: '/'
          })
          window.scrollTo(0, 0)

        }}>
          <div className="w-9 h-9 bg-yellow-500 rounded-lg flex items-center justify-center font-black text-black">B</div>
          <span className={`text-[#f5f0e0] font-black tracking-tighter text-lg uppercase`}>
            Bowman <span className="text-yellow-500 italic">Fleet</span>
          </span>
        </div>
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">
          {['games', 'expertise', 'about'].map(id => (
            <button key={id} onClick={() => scrollToSection(id)} className="hover:text-yellow-500 transition-colors uppercase">{id}</button>
          ))}
        </div>
        <Button
          variant={'default'}
          onClick={() => scrollToSection('contact-us')}
          className="bg-yellow-500 text-black font-black hover:scale-105 hover:bg-yellow-600 transition-transform">
          CONTACT US
        </Button>
      </nav>
    </div>

  )
}
