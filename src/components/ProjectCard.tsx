import { Badge } from "@/components/ui/badge";
import { Clock, Users, Target } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  tools: string[];
  impact: string;
}

const ProjectCard = ({ title, description, category, difficulty, estimatedTime, tools, impact }: ProjectCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-success/10 text-success-foreground border-success/20";
      case "Intermediate": return "bg-warning/10 text-warning-foreground border-warning/20";
      case "Advanced": return "bg-destructive/10 text-destructive-foreground border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="project-card group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <Badge variant="secondary" className="text-xs font-medium">
          {category}
        </Badge>
        <Badge className={`text-xs ${getDifficultyColor(difficulty)}`}>
          {difficulty}
        </Badge>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Meta Information */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{estimatedTime}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Target className="w-4 h-4" />
          <span className="line-clamp-1">{impact}</span>
        </div>
      </div>

      {/* Tools */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {tools.slice(0, 3).map((tool, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs bg-accent/50 hover:bg-accent"
            >
              {tool}
            </Badge>
          ))}
          {tools.length > 3 && (
            <Badge variant="outline" className="text-xs bg-accent/50">
              +{tools.length - 3}
            </Badge>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>Community project</span>
        </div>
        
        <span className="text-sm font-medium text-primary group-hover:text-primary-glow transition-colors cursor-pointer">
          Learn more →
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;