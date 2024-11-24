import { motion } from 'framer-motion';

export const ScrollIndicator = () => {
  const handleClick = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <motion.div 
      className="absolute bottom-8 cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      onClick={handleClick}
    >
      <svg 
        className="h-6 w-6 text-secondary-light"
        fill="none" 
        strokeWidth="2" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </motion.div>
  );
}; 