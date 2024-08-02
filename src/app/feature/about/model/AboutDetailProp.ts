interface DutyProps {
  dutyId: string;
  dutyDes: string;
}

interface ProjectProps {
  projectId: string;
  name: string;
  role: string;
  duty: DutyProps[];
}

interface AboutDetailProps {
  title: string;
  description: string;
  project: ProjectProps[];
}

export type { AboutDetailProps, ProjectProps, DutyProps };