import { navigationItems } from "@/lib/data";

import { FloatingNavigationBar } from "@/components/ui/floating-navigation-bar";
import HeroSection from "@/components/hero-section";
import GridSection from "@/components/grid-section";
import RecentProjectsSection from "@/components/recent-projects-section";
import ClientsTestimonials from "@/components/clients-testimonials";

const HomePage = () => {
	return (
		<article>
			<section className="w-full max-w-7xl">
				<FloatingNavigationBar navigationItems={navigationItems} />

				<HeroSection />

				<GridSection />

				<RecentProjectsSection />

				<ClientsTestimonials />
			</section>
		</article>
	);
};

export default HomePage;
