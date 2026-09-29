import styled from "@emotion/styled";

import { GridList } from "@/components/GridList";
import { LanguageList } from "@/components/LanguageList";
import { LinkList } from "@/components/LinkList";
import { MainContent } from "@/components/MainContent";
import { PersonalInfo } from "@/components/PersonalInfo";
import { SaveButton } from "@/components/SaveButton";
import { Section } from "@/components/Section";
import { Sidebar } from "@/components/Sidebar";
import { SimpleList } from "@/components/SimpleList";
import { Summary } from "@/components/Summary";
import { TimelineItem } from "@/components/TimelineItem";
import type { Resume } from "@/types/index";

const StyledWrapper = styled.div`
  position: relative;
  max-width: 210mm;
  margin: 0 auto;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 297mm;
  background-color: var(--c-bg-alt);
  box-shadow: var(--shadow-xl);
`;

interface Props {
  resume: Resume;
}

export const ResumeContent = ({ resume }: Props) => (
  <StyledWrapper>
    <StyledContent>
      <Sidebar>
        <PersonalInfo personal={resume.personal} />

        <Section variant="sidebar" title="Skills">
          <SimpleList items={resume.skills} />
        </Section>

        <Section variant="sidebar" title="Links">
          <LinkList items={resume.links} />
        </Section>

        <Section variant="sidebar" title="Languages">
          <LanguageList items={resume.languages} />
        </Section>

        <Section variant="sidebar" title="Interests & Hobbies">
          <GridList items={resume.interests} />
        </Section>
      </Sidebar>

      <MainContent>
        <Summary items={resume.summary} />

        <Section variant="main" title="Employment History">
          {resume.experience.map((exp, index) => (
            <TimelineItem
              key={`${exp.title}-${index}`}
              title={exp.title}
              subtitle={exp.company}
              period={exp.period}
              location={exp.location}
              items={exp.responsibilities}
            />
          ))}
        </Section>

        <Section variant="main" title="Personal Projects">
          {resume.projects.map((project, index) => (
            <TimelineItem
              key={`${project.title}-${index}`}
              title={project.title}
              period={project.period}
              description={project.description}
              links={project.links}
            />
          ))}
        </Section>

        <Section variant="main" title="Education">
          {resume.education.map((edu, index) => (
            <TimelineItem
              key={`${edu.degree}-${index}`}
              title={edu.degree}
              subtitle={edu.school}
              period={edu.period}
              location={edu.location}
            />
          ))}
        </Section>
      </MainContent>
    </StyledContent>
    <SaveButton />
  </StyledWrapper>
);
