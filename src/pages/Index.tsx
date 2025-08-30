import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProjects from "@/components/FeaturedProjects";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProjects />
    </main>
  );
};

export default Index;