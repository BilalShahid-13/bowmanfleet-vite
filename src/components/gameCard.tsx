import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react";
import { useEffect, useRef } from "react";

// GSAP ke ScrollTrigger plugin ko register karna zaroori hai
gsap.registerPlugin(ScrollTrigger);

export const GameCard = ({ game }: { game: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 🌟 GSAP Context: Yeh React ke strict mode aur production builds ke liye best hai
    let ctx = gsap.context(() => {

      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 30
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%", // Jab card viewport ke 85% par aaye
            toggleActions: "play none none none", // Ek baar chalega (once: true)
          },
        }
      );

    }, cardRef); // <- scope to this card

    // 🌟 Cleanup: Yeh sirf is specific card ki animation ko kill karega, baaki sab safe rahenge!
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 hover:border-yellow-500/50 transition-all duration-500"
      style={{ opacity: 0 }} // 🌟 Shuru mein hide rakha taaki page load par jhatka na lage
    >
      {/* Glow Effect */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />

      <div className="flex justify-between items-start mb-12">
        <div className="relative w-20 h-20 rounded-3xl overflow-hidden">
          <img
            src={game.img}
            className="object-cover rounded-3xl"
            width={80}
            height={80}
            alt={game.title}
          />
        </div>
        <div className="text-right">
          <span className="block text-3xl font-black text-yellow-500">{game.downloads}</span>
          <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Global Downloads</span>
        </div>
      </div>

      <h3 className="text-3xl font-bold mb-4">{game.title}</h3>
      <p className="opacity-50 mb-8 text-lg leading-relaxed">{game.description}</p>

      <div className="flex gap-2 mb-10">
        {game.tags.map((t: string) => (
          <Badge key={t} variant="default" className="border-white/10 opacity-60 italic text-[10px]">{t}</Badge>
        ))}
      </div>

      <Button asChild className="w-full h-16 bg-yellow-500 text-black font-black text-lg rounded-2xl hover:bg-yellow-400">
        <a href={game.link} target="_blank" rel="noreferrer">
          DOWNLOAD <Download className="ml-2 w-5 h-5" />
        </a>
      </Button>
    </div>
  );
};
