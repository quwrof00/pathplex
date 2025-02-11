import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import ThemeToggle from "./ui/themeToggle";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 py-3 
                 bg-black/50 backdrop-blur-md border-b border-gray-700"
    >
      {/* Left Section - Mobile Menu */}
      <div className="flex-1 sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-2xl text-white">
              ☰
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-black/80 border-r border-gray-600 shadow-lg p-6"
          >
            <nav className="flex flex-col gap-5 text-lg font-medium mt-4">
              
              <Link to="/" className="hover:text-yellow-400 transition text-white">
                Home
              </Link>
              <Link to="/quiz" className="hover:text-yellow-400 transition text-white">
                Quiz
              </Link>
              <Link to="/careers" className="hover:text-yellow-400 transition text-white">
                Explore
              </Link>
              <Link to="/about" className="hover:text-yellow-400 transition text-white">
                About Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Center Section - Desktop Navigation */}
      <nav className="hidden sm:flex flex-1 items-center justify-between gap-6 md:gap-8 text-[16px] font-medium">
      <img className="h-10" src="https://cdn3.iconfinder.com/data/icons/smart-home-set/132/Icon_stairs-256.png" alt="" />
      <div className="flex items-center justify-center gap-8">
      <Link to="/" className="hover:text-yellow-400 transition text-white">
          Home
        </Link>
        <Link to='/quiz' className="hover:text-yellow-400 transition text-white">
          Quiz
        </Link>
        <Link to='/careers' className="hover:text-yellow-400 transition text-white">
          Explore
        </Link>
        <Link to='/about' className="hover:text-yellow-400 transition text-white">
          About Us
        </Link>
        
      </div>
      <ThemeToggle />
        
      </nav>
    </motion.header>
  );
}
