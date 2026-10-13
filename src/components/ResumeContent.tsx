import styled from "@emotion/styled";

import { GridList } from "@/components/GridList";
import { LanguageList } from "@/components/LanguageList";
import { LinkList } from "@/components/LinkList";
import { MainContent } from "@/components/MainContent";
import { PersonalInfo } from "@/components/PersonalInfo";
import { Section } from "@/components/Section";
import { Sidebar } from "@/components/Sidebar";
import { SimpleList } from "@/components/SimpleList";
import { Summary } from "@/components/Summary";
import { TimelineItem } from "@/components/TimelineItem";
import type { Resume } from "@/types/index";

const PREVIEW_RATIO = 0.85;

const StyledWrapper = styled.div`
  position: relative;
  width: 210mm;
  margin: 0 auto;
  zoom: ${PREVIEW_RATIO};

  &::after {
    position: absolute;
    top: 297mm;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    content: "";
    background: repeating-linear-gradient(
      var(--c-error) 0,
      var(--c-error) 2px,
      transparent 2px,
      transparent 297mm
    );
    mask-image: repeating-linear-gradient(
      to right,
      #000 0,
      #000 2px,
      transparent 2px,
      transparent 5px
    );
    pointer-events: none;
  }

  @media print {
    zoom: 1;

    &::after {
      display: none;
    }
  }
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

        {resume.skills.length > 0 && (
          <Section variant="sidebar" title="Skills">
            <SimpleList items={resume.skills} />
          </Section>
        )}

        {resume.links.length > 0 && (
          <Section variant="sidebar" title="Links">
            <LinkList items={resume.links} />
          </Section>
        )}

        {resume.languages.length > 0 && (
          <Section variant="sidebar" title="Languages">
            <LanguageList items={resume.languages} />
          </Section>
        )}

        {resume.interests.length > 0 && (
          <Section variant="sidebar" title="Interests & Hobbies">
            <GridList items={resume.interests} />
          </Section>
        )}
      </Sidebar>

      <MainContent>
        <Summary text={resume.summary} />

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

        {resume.projects.length > 0 && (
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
        )}

        {resume.education.length > 0 && (
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
        )}
      </MainContent>
    </StyledContent>
  </StyledWrapper>
);
