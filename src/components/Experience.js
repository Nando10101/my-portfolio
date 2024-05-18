// src/components/Experience.js
import React from 'react';
import FloatingHeader from './FloatingHeader';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <FloatingHeader>Experience</FloatingHeader>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Office assistant</h3>
          <p>CSUF Housing and Residential engagment</p>
          <p>August 2023-Present</p>
          <ul>
            <li>Log, issue, and investigate packages for residents (up to 2,200)</li>
            <li>Serve as a resource person for students (up to 2,200) and guests</li>
            <li>Complete daily reports as needed</li>
            <li>Set up meeting rooms and meeting room technology for special events and meetings (up to 300+ people)</li>
            <li>Give Housing community tours to new prospective students and families (up to 50)</li>
        </ul>
        </div>
        <div className="experience-item">
          <h3>Resident Advisor</h3>
          <p>CSUF Housing and Resdiential engament</p>
          <p>August 2021-May 2023</p>
          <ul>
              <li>Supervised 54 first-year students living on campus by providing information and guidance to be involved in the housing and university community while maintaining a full-time student course load</li>
              <li>Facilitated conflict mediations that may arise among residents</li>
              <li>Designed flyers for events, sent out emails with updates on the community, maintained community board with current events, and filled out incident reports when necessary</li>
              <li>Cooperated with a team of six resident advisors per active shift to ensure all CSUF Housing residents (approximately 2,000 students) were following the policies of the department/university</li>
              <li>Created and executed engaging educational programs for groups ranging between 10 and 100+ students</li>
            </ul>
        </div>
        {/* Add more experiences as needed */}
      </div>
    </section>
  );
};

export default Experience;
