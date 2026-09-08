import { useState } from 'react';

export default function StudentPortal({ onBackToHome }) {
  const [activeTab, setActiveTab] = useState('notices');

  const tabs = [
    {
      id: 'notices',
      label: 'Notices & Events'
    },
    {
      id: 'assignments',
      label: 'Assignments'
    },
    {
      id: 'attendance',
      label: 'Track Attendance'
    },
    {
      id: 'profile',
      label: 'Profile'
    }
  ];

  const notices = [
    {
      title: 'Internal Assessment - CIE 2',
      date: 'September 10, 2026',
      description:
        'CIE 2 examination schedule has been announced. Students are requested to check the academic calendar.'
    },
    {
      title: 'Full Stack Development Lab',
      date: 'September 12, 2026',
      description:
        'Students are requested to complete the assigned Full Stack Development laboratory activities.'
    },
    {
      title: 'Campus Connect Portal',
      date: 'September 15, 2026',
      description:
        'Project submission and demonstration details will be shared through the student portal.'
    }
  ];

  const assignments = [
    {
      title: 'Full Stack Development',
      subject: 'CS3301',
      due: 'September 15, 2026'
    },
    {
      title: 'Data Science Assignment',
      subject: 'Data Science',
      due: 'September 18, 2026'
    },
    {
      title: 'Fintech Case Study',
      subject: 'Fintech',
      due: 'September 20, 2026'
    }
  ];

  const attendance = [
    {
      subject: 'Full Stack Development',
      percentage: '92%'
    },
    {
      subject: 'Data Science',
      percentage: '88%'
    },
    {
      subject: 'Fintech',
      percentage: '90%'
    },
    {
      subject: 'Computer Networks',
      percentage: '85%'
    }
  ];

  const renderNotices = () => (
    <div className="portal-content">

      <div className="content-title">
        <h3>Notices &amp; Events</h3>
        <p>Latest updates from RV University</p>
      </div>

      <div className="notice-list">

        {notices.map((notice, index) => (
          <div className="notice-card" key={index}>

            <div className="notice-info">
              <h4>{notice.title}</h4>

              <span className="notice-date">
                {notice.date}
              </span>

              <p>{notice.description}</p>
            </div>

            <button
              type="button"
              className="notice-button"
            >
              View
            </button>

          </div>
        ))}

      </div>

    </div>
  );

  const renderAssignments = () => (
    <div className="portal-content">

      <div className="content-title">
        <h3>Assignments</h3>
        <p>Your current academic assignments</p>
      </div>

      <div className="assignment-list">

        {assignments.map((assignment, index) => (
          <div
            className="assignment-card"
            key={index}
          >

            <div>
              <h4>{assignment.title}</h4>

              <p>
                Subject: {assignment.subject}
              </p>
            </div>

            <div className="assignment-due">
              Due: {assignment.due}
            </div>

          </div>
        ))}

      </div>

    </div>
  );

  const renderAttendance = () => (
    <div className="portal-content">

      <div className="content-title">
        <h3>Track Attendance</h3>
        <p>Your subject-wise attendance</p>
      </div>

      <div className="attendance-list">

        {attendance.map((item, index) => (
          <div
            className="attendance-card"
            key={index}
          >

            <div>
              <h4>{item.subject}</h4>
            </div>

            <strong>
              {item.percentage}
            </strong>

          </div>
        ))}

      </div>

    </div>
  );

  const renderProfile = () => (
    <div className="portal-content">

      <div className="content-title">
        <h3>Student Profile</h3>
        <p>Your basic student information</p>
      </div>

      <div className="profile-card">

        <div className="profile-row">
          <span>Name</span>
          <strong>RVU Student</strong>
        </div>

        <div className="profile-row">
          <span>University</span>
          <strong>RV University</strong>
        </div>

        <div className="profile-row">
          <span>School</span>
          <strong>
            School of Computer Science &amp; Engineering
          </strong>
        </div>

        <div className="profile-row">
          <span>Course</span>
          <strong>
            Full Stack Development
          </strong>
        </div>

      </div>

    </div>
  );

  const renderContent = () => {
    if (activeTab === 'notices') {
      return renderNotices();
    }

    if (activeTab === 'assignments') {
      return renderAssignments();
    }

    if (activeTab === 'attendance') {
      return renderAttendance();
    }

    if (activeTab === 'profile') {
      return renderProfile();
    }

    return renderNotices();
  };

  return (
    <div className="student-portal">

      <div className="student-portal-container">

        {/* HEADER */}
        <header className="student-portal-header">

          <div>
            <h2>Student Portal</h2>

            <p>
              Welcome, RVU Student
            </p>
          </div>

          <button
            type="button"
            className="student-back-button"
            onClick={onBackToHome}
          >
            ← Back to Main Campus View
          </button>

        </header>


        {/* TABS */}
        <nav className="student-tabs">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={
                activeTab === tab.id
                  ? 'student-tab active'
                  : 'student-tab'
              }
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}

        </nav>


        {/* CONTENT */}
        <main className="student-content">
          {renderContent()}
        </main>

      </div>

    </div>
  );
}