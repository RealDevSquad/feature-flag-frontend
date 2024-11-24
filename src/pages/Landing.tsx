import { motion } from 'framer-motion';
import RDSLogo from '../assets/rds-logo.svg';
import { FEATURES, REPO_URL, WHAT_IS_FEATURE_FLAG, WHY_USE_FEATURE_FLAGS } from '../constants/landing';
import { ScrollIndicator } from '../components/landing/ScrollIndicator';

const Landing = () => {
  return (
    <main className="min-h-screen bg-white" role="main">
      <motion.div 
        className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        role="banner"
        aria-labelledby="hero-title"
      >
        <div className="max-w-4xl">
          <h1 
            id="hero-title"
            className="mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-5xl font-bold text-transparent md:text-6xl"
          >
            Welcome to Feature-Flag
          </h1>
          <div className="flex items-center justify-center gap-3" aria-label="Created by Real Dev Squad">
            <span className="text-lg text-secondary-light">by</span>
            <img src={RDSLogo} alt="RDS Logo" className="h-10 w-auto" />
            <span className="text-lg text-secondary-light">Real Dev Squad</span>
          </div>
        </div>
        <ScrollIndicator aria-label="Scroll down to learn more" />
      </motion.div>
      <motion.section 
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        aria-labelledby="what-are-feature-flags"
      >
        <div className="mx-auto max-w-4xl space-y-16 px-4">
          <div>
            <h2 
              id="what-are-feature-flags"
              className="mb-6 text-3xl font-bold text-[#041484] md:text-4xl"
            >
              What are Feature Flags?
            </h2>
            <p className="text-lg text-gray-600">
              {WHAT_IS_FEATURE_FLAG}
            </p>
          </div>

          <div>
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
              {WHY_USE_FEATURE_FLAGS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        aria-labelledby="key-features"
      >
        <div className="mx-auto max-w-4xl px-4">
          <h2 
            id="key-features"
            className="mb-12 text-center text-3xl font-bold text-[#041484] md:text-4xl"
          >
            Key Features
          </h2>
          <div 
            className="grid gap-8 md:grid-cols-2"
            role="list"
            aria-label="List of key features"
          >
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                role="listitem"
              >
                <h3 className="mb-3 text-xl font-semibold text-[#041484]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.footer 
        className="bg-gradient-to-r from-primary to-primary-light py-12 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        role="contentinfo"
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-lg">
            The contents of the website are deployed from this open sourced{' '}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-white hover:border-accent hover:text-accent"
              aria-label="View source code on GitHub (opens in new tab)"
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