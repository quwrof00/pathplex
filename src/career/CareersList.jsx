import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from "../components/ui/card";
import { careerData } from './careerData';

export default function CareersList() {
  return (
    <motion.div
  className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 text-foreground  px-4 md:px-8 lg:px-16 py-12 pt-24"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>

      <h1 className="text-3xl font-bold text-center mb-8">Explore Careers</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(careerData).map(([slug, career]) => (
          <Card 
            key={slug} 
            className="hover:shadow-xl transition-all duration-300 rounded-lg"
          >
            <CardContent className="p-6 flex flex-col gap-3">
              
              {/* Career Header */}
              <div className="flex items-center gap-4 bg-black dark:bg-gray-600 text-white rounded p-2">
                <img 
                  className="w-12 h-12 object-contain" 
                  src={career.icon} 
                  alt={career.title} 
                />
                <h2 className="text-xl font-semibold">{career.title}</h2>
              </div>
              
              {/* Career Description */}
              <p className="text-muted-foreground flex-1">{career.description}</p>
              
              {/* Learn More Button */}
              <Link
                to={`/careers/${slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 self-start"
              >
                Learn More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
