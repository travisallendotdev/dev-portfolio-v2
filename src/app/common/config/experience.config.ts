interface IExperiencePosition {
  title: string;
  startDate: string;
  endDate: string | null;
  team?: string;
}

interface IExperienceCompany {
  companyName: string;
  positions: IExperiencePosition[];
}

interface IExperiencePositionWithDuration
  extends Omit<IExperiencePosition, 'startDate' | 'endDate'> {
  durationInYears: number;
}

interface IExperienceCompanyWithDuration
  extends Omit<IExperienceCompany, 'positions'> {
  durationInYears: number;
  positions: IExperiencePositionWithDuration[];
}

const experience: IExperienceCompany[] = [
  {
    companyName: 'Gala Games',
    positions: [
      {
        title: 'Staff Engineer (Founding Engineer)',
        startDate: '2026-03-01',
        endDate: null,
        // team: 'Platform',
      },
      {
        title: 'Full Stack Engineer → Team Lead',
        startDate: '2020-04-16',
        endDate: '2026-02-28',
        // team: 'Platform',
      },
    ],
  },
  {
    companyName: 'Block Brothers',
    positions: [
      {
        title: 'Lead Full Stack Developer',
        startDate: '2019-10-16',
        endDate: '2020-04-15',
      },
      {
        title: 'Full Stack Developer',
        startDate: '2018-12-01',
        endDate: '2019-10-01',
      },
    ],
  },
  {
    companyName: 'DevMountain',
    positions: [
      {
        title: 'Full Stack Developer and Mentor',
        startDate: '2018-06-01',
        endDate: '2018-12-01',
      },
      {
        title: 'Full Stack Student Developer',
        startDate: '2018-02-01',
        endDate: '2018-05-31',
      },
    ],
  },
];

const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

export const calculateExperienceDurationInYears = (
  startDate: string,
  endDate: string | null
) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  return (end.getTime() - start.getTime()) / MS_PER_YEAR;
};

export const getExperienceData = () =>
  experience.map((company): IExperienceCompanyWithDuration => {
    const positionsWithDuration = company.positions.map(
      (position): IExperiencePositionWithDuration => ({
        title: position.title,
        team: position.team,
        durationInYears: calculateExperienceDurationInYears(
          position.startDate,
          position.endDate
        ),
      })
    );

    return {
      companyName: company.companyName,
      durationInYears: positionsWithDuration.reduce(
        (acc, position) => acc + position.durationInYears,
        0
      ),
      positions: positionsWithDuration,
    };
  });
