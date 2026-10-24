import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    institution: "International Institute of Information Technology (I2IT / ISquareIT)",
    degree: "B.E - Information Technology",
    period: "2021 – 2025",
    location: "Pune, Maharashtra",
    grade: "CGPA - 8.4 / 10",
  },
  {
    institution: "Sant Tukaram English Medium School & Junior College",
    degree: "12th - PCM",
    period: "2020 – 2021",
    location: "Pune, Maharashtra",
    grade: "Percentage - 82%",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-16 md:py-20 border-t border-border" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">04 / BACKGROUND</p>
          <h2 className="section-title">Education & recognition.</h2>
          <p className="section-description">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-3">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                  
                  <div className="mt-4 inline-block px-3 py-1 bg-primary/10 rounded-full">
                    <span className="font-mono text-sm text-primary">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 bg-card border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Achievements & Certifications</h3>
          <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
            <li>Rockstar Rookie 2025 at BeeLogical Software Solutions for internship contributions.</li>
            <li>Solved 250+ coding problems across LeetCode and GeeksforGeeks.</li>
            <li>Completed the Full-Stack Web Development program from 100xDevs.</li>
            <li>SQL (Basic) certification from HackerRank.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
