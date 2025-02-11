import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";
import { careerData } from "../career/careerData";
import bgvid from "../assets/icons/bgvid.mp4";

export default function Home() {
  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Grid */}
      <div className="relative z-10 pt-20 pb-8 h-screen grid grid-cols-1 sm:grid-cols-7 gap-4 p-4 w-full">
        
        {/* Main Content */}
        <Card className="sm:col-span-5 p-4 flex flex-col items-center justify-center shadow-xl backdrop-blur-lg bg-white/20 dark:bg-black/30 rounded-lg">
          <CardContent className="text-center">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn3.iconfinder.com/data/icons/smart-home-set/132/Icon_stairs-256.png"
                alt="Ladder Icon"
                className="w-20 h-20"
              />
              <h1 className="text-5xl mt-4 font-bold font-Equinox text-white">
                PathPlex
              </h1>
            </div>
            
            <p className="text-lg mb-6 text-white/90">
              Discover Your Perfect Career Path
            </p>
            <Link
              to="/quiz"
              className="text-base px-6 py-3 bg-[#F472B6] hover:bg-[#EC4899] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_#EC4899]"
            >
              Start Quiz
            </Link>
          </CardContent>
        </Card>

        {/* Sidebar Right */}
        {/* Sidebar Right */}
<Card className="hidden sm:flex sm:col-span-2 p-4 pt-5 backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-lg">
  <CardContent>
    <h2 className="text-xl font-semibold mb-4 px-2 pb-2 text-white">
      Career Categories
    </h2>
    <div className="grid grid-cols-1 gap-2">
      {Object.entries(careerData).map(([slug, career]) => (
        <Link 
          key={slug} 
          to={`/careers/${slug}`}
          className="flex items-center space-x-2 p-2 gap-3 rounded-md hover:bg-white/20 dark:hover:bg-black/30 transition-colors duration-200"
        >
          <img 
            src={career.icon} 
            alt={career.title} 
            className="w-6 h-6 object-contain"
          />
          <span className="text-base flex-1 leading-tight text-white hover:text-pink-400 transition-colors duration-200">
            {career.title}
          </span>
        </Link>
      ))}
    </div>
  </CardContent>
</Card>

      </div>
    </motion.div>
  );
}