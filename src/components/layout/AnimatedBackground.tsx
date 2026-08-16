import { motion, useReducedMotion } from "framer-motion";
import { themeRegistry } from "../../themes/registry";
import type { ProjectCategory } from "../../types/project";
import SnowyMountainBase from "./SnowyMountainBase";

interface AnimatedBackgroundProps {
  activeCategory: ProjectCategory | null;
  /** Fades the mountain scene out once the user has scrolled into the experience sections. */
  showMountains: boolean;
}

export default function AnimatedBackground({ activeCategory, showMountains }: AnimatedBackgroundProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none" aria-hidden>
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: showMountains ? 1 : 0.1 }}
        transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeInOut" }}
      >
        <SnowyMountainBase />
      </motion.div>
      {Object.values(themeRegistry).map((theme) => {
        const isActive = theme.category === activeCategory;
        return (
          <motion.div
            key={theme.category}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeInOut" }}
          >
            <theme.Background isActive={isActive} />
          </motion.div>
        );
      })}
    </div>
  );
}
