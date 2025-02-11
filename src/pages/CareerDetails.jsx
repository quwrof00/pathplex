import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { careerData } from '../career/careerData';

export default function CareerDetails() {
  const { careerSlug } = useParams();
  const career = careerData[careerSlug];

  if (!career) {
    return <div>Career not found</div>;
  }

  return (
    <motion.div
      className="relative min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 text-foreground pt-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mt-6 ">
        {/* Left Sidebar - Navigation */}
        <Card className="hidden sm:block sm:col-span-2 p-4 bg-white dark:bg-black/20 flex flex-cols items-center justify-center">
          <CardContent>
            <Button variant="secondary" asChild>
              <Link to="/careers">🔙 Back to Careers</Link>
            </Button>
            <h2 className="text-lg font-semibold mt-6">Related Careers</h2>
            <ul className="mt-4 space-y-2">
              {career.relatedCareers.map((relatedCareer, index) => (
                <li key={index}>
                  <Link to={`/careers/${relatedCareer.slug}`} className="hover:underline">
                    {relatedCareer.icon} {relatedCareer.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Main Content - Career Details */}
        <Card className="sm:col-span-7 p-6 shadow-xl backdrop-blur-lg bg-white dark:bg-black/30">
          <CardContent>
            {/* Header: Image beside Career Title */}
            <div className="flex items-center gap-3 bg-black dark:bg-gray-600 text-white rounded p-2">
              <img 
                src={career.icon} 
                alt={career.title} 
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-3xl font-bold">{career.title}</h1>
            </div>
            <p className="text-muted-foreground mt-2">{career.description}</p>

            {/* Career Overview */}
            <div className="mt-6 space-y-4">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p><strong>📌 What They Do:</strong> {career.whatTheyDo}</p>
              <p><strong>🛠 Skills Required:</strong> {career.skillsRequired.join(", ")}</p>
              <p><strong>🎓 Education:</strong> {career.education}</p>
              <p><strong>💰 Salary:</strong> {career.salary}</p>
            </div>

            {/* Career Pathway */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Career Pathway</h2>
              <motion.div
                className="flex gap-4 mt-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {career.pathway.map((stage, index) => (
                  <div key={index} className={`p-4 ${stage.color} text-white rounded-lg`}>
                    {stage.icon} {stage.title}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Pros & Cons */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Card className="p-4 bg-green-200 dark:bg-green-800">
                <CardContent>
                  <h2 className="font-semibold">✅ Pros</h2>
                  <ul className="list-disc pl-5 mt-2">
                    {career.pros.map((pro, index) => (
                      <li key={index}>{pro}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-4 bg-red-200 dark:bg-red-800">
                <CardContent>
                  <h2 className="font-semibold">❌ Cons</h2>
                  <ul className="list-disc pl-5 mt-2">
                    {career.cons.map((con, index) => (
                      <li key={index}>{con}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <motion.div
              className="mt-6 flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" asChild>
                <Link to="/quiz">🎯 Take the Career Quiz</Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>

        {/* Right Sidebar - Quick Facts & Resources */}
        <Card className="hidden sm:block sm:col-span-3 p-4 bg-white dark:bg-black/20">
          <CardContent>
            <h2 className="text-lg font-semibold">Quick Facts</h2>
            <ul className="mt-4 space-y-2">
              <li><strong>Avg Salary:</strong> {career.avgSalary}</li>
              <li><strong>Growth Rate:</strong> {career.growthRate}</li>
              <li><strong>Top Companies:</strong> {career.topCompanies.join(", ")}</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">Resources</h2>
            <ul className="mt-4 space-y-2">
              {career.resources.map((resource, index) => (
                <li key={index}>
                  <Link to={resource.link} className="hover:underline">
                    {resource.icon} {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
