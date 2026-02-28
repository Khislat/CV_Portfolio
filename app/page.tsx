import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Resume />
			<Services />
			<Skills />
			<Portfolio />
			<CaseStudy />
			<Contact />
			<Footer />
		</main>
	);
}
