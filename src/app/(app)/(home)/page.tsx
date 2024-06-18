import { navigationItems } from "@/lib/data";

import HeroSection from "@/components/hero-section";
import { FloatingNavigationBar } from "@/components/ui/floating-navigation-bar";

const HomePage = () => {
	return (
		<article>
			<section className="w-full max-w-7xl">
				<FloatingNavigationBar navigationItems={navigationItems} />

				<HeroSection />
			</section>
		</article>
	);
};

export default HomePage;
