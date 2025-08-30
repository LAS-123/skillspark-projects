import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Smart Campus Energy Monitor",
      description: "Build an IoT system to track and optimize energy consumption across campus buildings using sensor networks and machine learning algorithms.",
      category: "Technology",
      difficulty: "Intermediate" as const,
      estimatedTime: "6-8 weeks",
      tools: ["Arduino", "Python", "Firebase", "TensorFlow"],
      impact: "Reduce campus energy consumption by 20%"
    },
    {
      title: "Community Food Waste Tracker",
      description: "Develop a mobile app that connects local restaurants with food banks to reduce waste and help communities access fresh food.",
      category: "Environment",
      difficulty: "Beginner" as const,
      estimatedTime: "4-6 weeks",
      tools: ["React Native", "Firebase", "Google Maps API"],
      impact: "Divert 500+ pounds of food from landfills monthly"
    },
    {
      title: "AI-Powered Health Symptom Checker",
      description: "Create an intelligent chatbot that helps users understand symptoms and provides guidance on when to seek medical attention.",
      category: "Healthcare",
      difficulty: "Advanced" as const,
      estimatedTime: "10-12 weeks",
      tools: ["Python", "NLP", "OpenAI API", "React"],
      impact: "Improve healthcare accessibility in underserved areas"
    },
    {
      title: "Interactive Learning Platform for Kids",
      description: "Design a gamified educational platform that makes learning math and science engaging through interactive experiments and challenges.",
      category: "Education",
      difficulty: "Intermediate" as const,
      estimatedTime: "8-10 weeks",
      tools: ["React", "Three.js", "Node.js", "MongoDB"],
      impact: "Increase student engagement by 40%"
    }
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive into these carefully curated project ideas that combine real-world impact 
            with hands-on learning opportunities across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;