import React, { useState, useEffect } from 'react';
import { getConfig } from '../config';
import RDSLogo from '../assets/rds-logo.svg';
import GITHUB_LOGO from '../assets/github-white.png';
import DEFAULT_AVATAR from '../assets/user.png';
import { useUserContext } from '../context/UserContext';
import fetchApi from '../services/api';
import Dropdown from './Dropdown';
import { FaChevronDown } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { welcomeSiteUrl, membersSiteUrl, statusSiteUrl } = getConfig();
  const { user, setUser } = useUserContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { rdsBackendBaseUrl } = getConfig();
  const authUrl = `${rdsBackendBaseUrl}/auth/github/login?redirectURL=${window.location.href}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseJson = await fetchApi(`${rdsBackendBaseUrl}/users?profile=true`);
        setIsLoggedIn(true);
        setUser({
          userName: responseJson.username,
          firstName: responseJson.first_name,
          profilePicture: responseJson.picture?.url ?? DEFAULT_AVATAR,
        });
      } catch (error) {
        console.error(error);
        setIsLoggedIn(false);
      }
    };

    fetchData();
  }, []);

  const handleSignIn = () => {
    window.location.href = authUrl;
  };

  const handleSignOut = async () => {
    try {
      await fetchApi(`${rdsBackendBaseUrl}/users/signout`, { method: 'POST' });
      setIsLoggedIn(false);
      setUser(null);
      setDropdownOpen(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

   const handleCloseDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-primary p-2" aria-label="Main Navigation" data-testid="navbar">
      <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center gap-6 px-6">
        <a href="/" className="flex items-center" aria-label="Home" data-testid="navbar-home-link">
          <img src={RDSLogo} alt="RDS Logo" className="h-12 w-12" />
        </a>

        <div className="flex items-center space-x-6">
          <a href={welcomeSiteUrl} className="text-white hover:text-accent" target="_blank" rel="noopener noreferrer" aria-label="Go to Welcome site" data-testid="navbar-welcome-link">
            Welcome
          </a>
          <a href={membersSiteUrl} className="text-white hover:text-accent" target="_blank" rel="noopener noreferrer" aria-label="Go to Members site" data-testid="navbar-members-link">
            Members
          </a>
          <a href={statusSiteUrl} className="text-white hover:text-accent" target="_blank" rel="noopener noreferrer" aria-label="Go to Status site" data-testid="navbar-status-link">
            Status
          </a>
        </div>

        <div className="ml-auto relative">
          {!isLoggedIn ? (
            <button
              onClick={handleSignIn}
              className="border border-white text-white bg-transparent rounded px-4 py-2 hover:bg-white hover:text-primary"
              aria-label="Sign In"
              data-testid="navbar-signin-btn"
              style={{ fontSize: '16px', fontWeight: 700 }}
            >
              Sign in with GitHub
              <img src={GITHUB_LOGO} alt="GitHub Icon" height="15px" width="15px" />
            </button>
          ) : (
            <div className="flex items-center gap-2 relative">
              <span className="inline-block text-white cursor-pointer" style={{ fontSize: '16px', fontWeight: 700 }} onClick={toggleDropdown}>
                {`Hello, ${user?.firstName}`}
              </span>
              <img src={user?.profilePicture || DEFAULT_AVATAR} alt="Profile pic" className="h-7 w-7 overflow-hidden rounded-full" onClick={toggleDropdown} />
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