import React, { useState } from 'react';
import Sidebar from './Sidebar';
import {
  TeacherDashboardContainer,
  Content,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent
} from '../../styles/TeacherDashboardStyles';

const TeacherDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <TeacherDashboardContainer isOpen={isOpen}>
      <Sidebar isOpen={isOpen} />
      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Total Students</CardTitle>
              <CardContent>500</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Teachers</CardTitle>
              <CardContent>50</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Classes</CardTitle>
              <CardContent>50</CardContent>
            </Card>
          </CardContainer>
        </Section>

        <Section>
          <SectionTitle>Recent Activity</SectionTitle>
          {/* Add a list of recent activity items */}
        </Section>

        <Section>
          <SectionTitle>Upcoming Events</SectionTitle>
          {/* Add a calendar or list of upcoming events */}
        </Section>

        {/* Add more sections for other parts of the admin dashboard */}
      </Content>
    </TeacherDashboardContainer>
  );
};

export default TeacherDashboard;