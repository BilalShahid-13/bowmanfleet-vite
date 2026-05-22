import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { EMAIL_LINK, GAMES_DATA, marqueeRowText } from "../lib/constant";
import { scrollToSection } from "../lib/utils";
import BentoSection from "./BentoSection";
import ContactUs from "./ContactUsForm";
import { GameCard } from "./gameCard";

gsap.registerPlugin(ScrollTrigger);

const SectionHeader = ({ title, highlight, description, align = "left" }: any) => (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
        <h2 className={`text-5xl md:text-7xl font-black italic uppercase`}>
            {title} <span className="text-yellow-500">{highlight}</span>
        </h2>

        {description && <p className="opacity-40 mt-4 max-w-xl mx-auto">{description}</p>}
    </div>
);

// --- MAIN PAGE ---

export default function ExpandedLandingPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    } as const;

    return (
        <div className="bg-[#0d0d00] text-[#f5f0e0] font-sans selection:bg-yellow-500/30 w-full overflow-x-hidden">

            {/* 2. HERO */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32">
                <div className="absolute top-1/4 -left-20 w-125 h-125 bg-yellow-500/10 blur-[120px] rounded-full animate-pulse " />
                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-6xl mx-auto text-center z-10 py-4">
                    <motion.div variants={fadeUp}>
                        <Badge className="bg-white/5 border-white/10 text-yellow-500 mb-8 py-2 px-6 rounded-full tracking-widest">
                            <Star className="w-3 h-3 mr-2 fill-yellow-500" /> TOP-TIER MOBILE PUBLISHER
                        </Badge>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className={`text-6xl md:text-[110px] font-black italic uppercase leading-[0.85] tracking-tighter mb-10 font-sans`}>
                        Scale <span className="text-yellow-500">Beyond</span> <br /> Limits.
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto mb-12">
                        Bowman Fleet Solutions LLC bridge the gap between creative game design and massive commercial success.
                        Home to <span className="text-white font-bold underline decoration-yellow-500">5 Million+ Downloads</span>.
                    </motion.p>
                    <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6">
                        <Button onClick={() => scrollToSection('games')} className="h-16 px-10 bg-yellow-500 text-black font-black text-lg rounded-2xl">
                            VIEW PORTFOLIO
                        </Button>
                        <Button asChild variant="default" className="h-16 px-10 border-white/10 text-white font-black text-lg rounded-2xl hover:bg-white/5">
                            <a href={EMAIL_LINK}>GET IN TOUCH</a>
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* 3. MARQUEE */}
            <MarqueeRow items={marqueeRowText} />

            {/* 4. GAMES */}
            <section id="games" className="py-32 px-6 max-w-7xl mx-auto">
                <SectionHeader title="The" highlight="Lineup" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {GAMES_DATA.map((game, i) => <GameCard key={i} game={game} />)}
                </div>
            </section>

            {/* 5. EXPERTISE */}
            <section id="expertise" className="py-32 px-6 bg-[#0a0a00]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader title="Our" highlight="Expertise" align="center" description="Why major studios trust Bowman Fleet Solutions LLC for development scaling." />
                    <BentoSection />
                </div>
            </section>

            <ContactUs />
        </div>
    );
}

// --- DATA & HELPER COMPONENTS ---


const MarqueeRow = ({ items }: { items: string[] }) => (
    <div className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap flex">
        {[1, 2].map((_, idx) => (
            <motion.div key={idx} animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="flex gap-20 items-center pr-20">
                {items.map((text, i) => (
                    <span key={i} className={`text-4xl font-black opacity-10 italic uppercase`}>{text}</span>
                ))}
            </motion.div>
        ))}
    </div>
);
