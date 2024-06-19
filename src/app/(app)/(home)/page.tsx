import { navigationItems } from "@/lib/data";

import { FloatingNavigationBar } from "@/components/ui/floating-navigation-bar";
import HeroSection from "@/components/hero-section";
import GridSection from "@/components/grid-section";

const HomePage = () => {
	return (
		<article>
			<section className="w-full max-w-7xl">
				<FloatingNavigationBar navigationItems={navigationItems} />

				<HeroSection />

				<GridSection />
			</section>
		</article>
	);
};

export default HomePage;
