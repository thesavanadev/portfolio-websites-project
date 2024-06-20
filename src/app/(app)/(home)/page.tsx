import { navigationItems } from "@/lib/data";

import { FloatingNavigationBar } from "@/components/ui/floating-navigation-bar";
import HeroSection from "@/components/hero-section";
import GridSection from "@/components/grid-section";
import RecentProjectsSection from "@/components/recent-projects-section";
import ClientsTestimonialSection from "@/components/clients-testimonial-section";
import WorkExperienceSection from "@/components/work-experience-section";

const HomePage = () => {
	return (
		<article className="w-full max-w-7xl">
			<FloatingNavigationBar navigationItems={navigationItems} />

			<HeroSection />

			<GridSection />

			<RecentProjectsSection />

			<ClientsTestimonialSection />

			<WorkExperienceSection />
		</article>
	);
};

export default HomePage;
