"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./navbar.module.css";
import { Hand, HomeIcon, Lightbulb, Mail, TicketPlus, Users } from "lucide-react";
import Image from "next/image";
import cn from "@/lib/cn";
import About from '@/modules/About/About';

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".nav_animate",
        { width: 30, opacity: 0 },
        {
          width: 350,
          opacity: 1,
          ease: "elastic.out(0.5,0.4)",
          duration: 1,
        }
      );
    },
    { scope: container }
  );
  
  return (
		<div ref={container}>
			<nav className={cn(styles.nav, "nav_animate")} draggable={false}>
				<Link href="/" aria-label="Home" className="popup-cont">
					<span className="popup-element">Home</span>
					<HomeIcon />
				</Link>
				<Link href="#about" aria-label="About" className="popup-cont">
					<span className="popup-element">About</span>
					<Users />
				</Link>
				<Link href="/glimpses" aria-label="Glimpses" className="popup-cont">
					<span className="popup-element">Glimpses</span>
					<Image
						className={styles.logo}
						height={27}
						width={24}
						src="/ensemble-white.webp"
						alt="Ensemble '24 logo"
						draggable={false}
						priority
					/>
				</Link>
				<Link href="/events" aria-label="Events" className="popup-cont">
					<span className="popup-element">Events</span>
					<TicketPlus />
				</Link>
				<Link href="#contact" aria-label="Contact" className="popup-cont">
					<span className="popup-element">Contact</span>
					<Mail />
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
