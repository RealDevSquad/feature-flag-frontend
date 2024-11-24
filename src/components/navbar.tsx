import React, { useEffect } from 'react';
import { getConfig, validateEnv } from '../config';
import RDSLogo from '../assets/rds-logo.svg';

const Navbar: React.FC = () => {
  const { welcomeSiteUrl, membersSiteUrl, statusSiteUrl } = getConfig();

  useEffect(() => {
    try {
      validateEnv();
    } catch (error) {
      console.error('Environment validation error:', error);
    }
  }, []);

  return (
    <nav
      className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-primary p-2"
      aria-label="Main Navigation"
      data-testid="navbar"
    >
      <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center gap-6 px-6">
        <a
          href="/"
          className="flex items-center"
          aria-label="Home"
          data-testid="navbar-home-link"
        >
          <img src={RDSLogo} alt="RDS Logo" className="h-12 w-12" />
        </a>

        <div className="flex items-center space-x-6">
          <a
            href={welcomeSiteUrl}
            className="text-white hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Welcome site"
            data-testid="navbar-welcome-link"
          >
            Welcome
          </a>
          <a
            href={membersSiteUrl}
            className="text-white hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Members site"
            data-testid="navbar-members-link"
          >
            Members
          </a>
          <a
            href={statusSiteUrl}
            className="text-white hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Status site"
            data-testid="navbar-status-link"
          >
            Status
          </a>
        </div>

        <div className="ml-auto">
          <button
            className="rounded bg-secondary px-4 py-2 text-white hover:bg-accent"
            aria-label="Sign In"
            data-testid="navbar-signin-btn"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
