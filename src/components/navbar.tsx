import React, { useState } from 'react';
import { getConfig } from '../config';
import { useAuth } from '../context/AuthContext';
import Dropdown from './Dropdown';
import { signInUrl } from '../services/api';
import RDSLogo from '../assets/rds-logo.svg';
import GITHUB_LOGO from '../assets/github-white.png';
import DEFAULT_AVATAR from '../assets/user.png';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { welcomeSiteUrl, membersSiteUrl, statusSiteUrl } = getConfig();
  const { user, signout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    window.location.href = signInUrl;
    navigate('/featureFlag');
  };

  const handleSignOut = async () => {
    try {
      await signout();
      setDropdownOpen(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleCloseDropdown = () => setDropdownOpen(false);

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

        <div className="relative ml-auto">
          {!user ? (
            <button
              onClick={handleSignIn}
              className="flex items-center rounded-lg border-2 border-white bg-transparent px-4 py-2 text-base text-white transition-shadow duration-200 hover:shadow-lg"
              aria-label="Sign In"
              data-testid="navbar-signin-btn"
            >
              Sign in with GitHub
              <img
                src={GITHUB_LOGO}
                alt="GitHub Icon"
                height="20px"
                width="20px"
                className="ml-2"
              />
            </button>
          ) : (
            <div
              className="relative flex items-center gap-2"
              onClick={toggleDropdown}
              role="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
            >
              <span className="inline-block cursor-pointer text-base font-bold text-white">
                {`Hello, ${user.firstName || 'User'}`}
              </span>
              <img
                src={user.profilePicture || DEFAULT_AVATAR}
                alt="Profile picture"
                className="h-7 w-7 overflow-hidden rounded-full"
              />
              <FaChevronDown
                className={`h-4 w-4 text-white transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                onClick={toggleDropdown}
              />
              <Dropdown
                isOpen={dropdownOpen}
                onClose={handleCloseDropdown}
                onSignOut={handleSignOut}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
