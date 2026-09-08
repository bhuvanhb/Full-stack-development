import { useEffect, useState } from 'react';
import AuthModule from './components/AuthModule.jsx';
import StudentPortal from './components/studentportal.jsx';

export default function App() {
  const [activeView, setActiveView] = useState('none');
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === '#login') {
        setActiveView('auth');
        setActiveTab('login');

        setTimeout(() => {
          document.getElementById('auth-section')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }

      else if (hash === '#register') {
        setActiveView('auth');
        setActiveTab('register');

        setTimeout(() => {
          document.getElementById('auth-section')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }

      else if (hash === '#student') {
        setActiveView('student');

        setTimeout(() => {
          document.getElementById('auth-section')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }

      else {
        setActiveView('none');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleLoginSuccess = () => {
    window.location.hash = 'student';
  };

  const handleBackToHome = () => {
    window.location.hash = '';

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {activeView === 'auth' && (
        <AuthModule
          key={activeTab}
          initialMode={activeTab}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {activeView === 'student' && (
        <StudentPortal
          onBackToHome={handleBackToHome}
        />
      )}
    </>
  );
}