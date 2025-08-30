import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  projectCount: number;
  gradient: string;
}

const CategoryCard = ({ title, description, icon: Icon, projectCount, gradient }: CategoryCardProps) => {
  return (
    <div className="project-card group cursor-pointer">
      <div className={`w-16 h-16 rounded-xl ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-primary font-medium">
          {projectCount} projects
        </span>
        <span className="text-muted-foreground group-hover:text-primary transition-colors">
          Explore →
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;