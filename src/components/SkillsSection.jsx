import { useState } from "react";

const skills = [
{
        name: 'Python',
        category: 'Programming',
        proficiency: 'Advanced', 
    },
    { 
        name: 'Linux', 
        category: 'Tools',
        proficiency: 'Intermediate', 
    },
    {
        name: 'Burpsuite',
        category: 'Cybersecurity',
        proficiency: 'Familiar',
    },
    {
        name: 'Autopsy',
        category: 'Cybersecurity',
        proficiency: 'Intermediate',
    },
    {
        name: 'Wireshark',
        category: 'Cybersecurity',
        proficiency: 'Advanced',
    },
    {
        name: 'PHP',
        category: 'Programming',
        proficiency: 'Intermediate',
    },
    {
        name: 'JavaScript',
        category: 'Programming',
        proficiency: 'Familiar',
    },
    {
        name: 'SQL',
        category: 'Programming',
        proficiency: 'Intermediate',
    },
    {
        name: 'HTML',
        category: 'Programming',
        proficiency: 'Advanced',
    },
    {
        name: 'CSS',
        category: 'Programming',
        proficiency: 'Familiar',
    },
    {
        name: 'C',
        category: 'Programming',
        proficiency: 'Intermediate',
    },
    {
        name: 'Ghidra',
        category: 'Cybersecurity',
        proficiency: 'Intermediate',
    },
    {
        name: 'Nessus',
        category: 'Cybersecurity',
        proficiency: 'Familiar',
    },
    {
        name: 'Git',
        category: 'Tools',
        proficiency: 'Intermediate', 
    },

    { 
        name: 'MATLAB', 
        category: 'Programming',
        proficiency: 'Familiar',
        certifications: ['MATLAB Fundamentals OnRamp'],
    },
];

const categories = ["All", "Cybersecurity", "Programming", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    const groupedSkills = {
        Advanced: filteredSkills.filter(skill => skill.proficiency === 'Advanced'),
        Intermediate: filteredSkills.filter(skill => skill.proficiency === 'Intermediate'),
        Familiar: filteredSkills.filter(skill => skill.proficiency === 'Familiar'),
    };

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                                activeCategory === category
                                    ? "bg-primary text-white"
                                    : "bg-secondary/70 hover:bg-secondary"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grouped by Proficiency */}
                {Object.entries(groupedSkills).map(([proficiency, skills]) => (
                    skills.length > 0 && (
                        <div key={proficiency} className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 capitalize border-b pb-2">
                                {proficiency} ({skills.length})
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skills.map((skill) => (
                                    <div 
                                        key={skill.name} 
                                        className="bg-card p-4 rounded-lg border hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-medium text-lg">{skill.name}</h4>
                                        </div>

                                        {/* Project/Certification Links */}
                                        <div className="mt-2">
                                            {skill.projects && (
                                                <p className="text-sm">
                                                    <span className="font-medium">Projects: </span>
                                                    {skill.projects.map((project, i) => (
                                                        <a 
                                                            key={i} 
                                                            href={project} 
                                                            className="text-primary hover:underline ml-1"
                                                        >
                                                            #{i + 1}
                                                        </a>
                                                    ))}
                                                </p>
                                            )}
                                            {skill.certifications && (
                                                <p className="text-sm mt-1">
                                                    <span className="font-medium">Certified: </span>
                                                    {skill.certifications.join(', ')}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};