import CategoryCard from "./CategoryCard";
import { Code2, Leaf, Heart, GraduationCap } from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Technology",
      description: "Build innovative tech solutions using modern frameworks, AI, and emerging technologies to solve digital challenges.",
      icon: Code2,
      projectCount: 18,
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "Environment",
      description: "Create sustainable solutions for environmental challenges like climate change, waste reduction, and renewable energy.",
      icon: Leaf,
      projectCount: 12,
      gradient: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      title: "Healthcare",
      description: "Develop health-focused applications and tools that improve patient care, medical research, and health accessibility.",
      icon: Heart,
      projectCount: 15,
      gradient: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      title: "Education",
      description: "Design learning platforms and educational tools that make knowledge more accessible and engaging for all ages.",
      icon: GraduationCap,
      projectCount: 9,
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Explore by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from diverse project categories, each designed to build specific skills 
            while addressing real-world problems that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;