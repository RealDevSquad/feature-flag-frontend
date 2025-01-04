import { motion } from 'framer-motion';
import RDSLogo from '../assets/rds-logo.svg';
import {
  FEATURES,
  WHAT_IS_FEATURE_FLAG,
  WHY_USE_FEATURE_FLAGS,
} from '../constants/landing';
import { ScrollIndicator } from '../components/landing/ScrollIndicator';
import { fadeInViewportAnimation } from '../utils/animations';

interface Feature {
  title: string;
  description: string;
}

const Landing = () => {
  return (
    <main className="min-h-screen bg-white" role="main">
      <motion.div
        className="relative z-0 flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        role="banner"
        data-testid="hero-section"
      >
        <div className="max-w-4xl">
          <h1
            className="mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text pb-1 text-5xl font-bold text-transparent md:text-6xl"
            data-testid="hero-title"
          >
            Welcome to Feature-Flag
          </h1>
          <div
            className="flex items-center justify-center gap-3"
            aria-label="Created by Real Dev Squad"
          >
            <span className="text-lg text-secondary-light">by</span>
            <img src={RDSLogo} alt="RDS Logo" className="h-10 w-auto" />
            <span className="text-lg text-secondary-light">Real Dev Squad</span>
          </div>
        </div>
        <ScrollIndicator />
      </motion.div>
      <motion.section
        className="scroll-mt-16 bg-gray-50 py-20"
        {...fadeInViewportAnimation}
        id="what-is-section"
        data-testid="what-is-section"
      >
        <div className="mx-auto max-w-4xl space-y-16 px-4">
          <div>
            <h2
              id="what-are-feature-flags"
              className="mb-6 text-3xl font-bold text-[#041484] md:text-4xl"
            >
              What are Feature Flags?
            </h2>
            <p className="text-lg text-gray-600">{WHAT_IS_FEATURE_FLAG}</p>
          </div>

          <div data-testid="why-use-section">
            <h2
              id="why-use-feature-flags"
              className="mb-6 text-3xl font-bold text-[#041484] md:text-4xl"
            >
              Why Use Feature Flags?
            </h2>
            <ul
              className="list-inside list-disc space-y-3 text-lg text-gray-600"
              aria-label="Benefits of using feature flags"
            >
              {WHY_USE_FEATURE_FLAGS.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-20"
        {...fadeInViewportAnimation}
        data-testid="features-section"
      >
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#041484] md:text-4xl">
            Key Features
          </h2>
          <div
            className="grid gap-8 md:grid-cols-2"
            data-testid="features-grid"
          >
            {FEATURES.map((feature: Feature, index) => (
              <motion.div
                key={feature.title}
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`feature-card-${index}`}
              >
                <h3 className="mb-3 text-xl font-semibold text-[#041484]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.footer
        className="bg-gradient-to-r from-primary to-primary-light py-12 text-white"
        {...fadeInViewportAnimation}
        role="contentinfo"
        data-testid="footer"
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-lg">
            The contents of the website are deployed from this open sourced{' '}
            <a
              href="https://github.com/Real-Dev-Squad/feature-flag-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-white hover:border-accent hover:text-accent"
              data-testid="repo-link"
            >
              repo
            </a>
          </p>
        </div>
      </motion.footer>
    </main>
  );
};

export default Landing;
