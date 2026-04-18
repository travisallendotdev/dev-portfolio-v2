const getDurationText = (duration: number, label: 'years' | 'months') => {
  if (duration < 1) {
    return '';
  }

  if (duration === 1) {
    return `${duration} ${label.slice(0, -1)}`;
  }

  return `${duration} ${label}`;
};

const getSeparatorText = (years: number, months: number) => {
  if (years > 0 && months > 0) {
    return ', ';
  }

  return '';
};

interface YearsMonthsDurationProps {
  durationInYears: number;
  className?: string;
}

export default function YearsMonthsDuration({
  durationInYears,
  className = '',
}: YearsMonthsDurationProps) {
  const years = Math.floor(durationInYears);
  const months = Math.floor((durationInYears - years) * 12);
  return (
    <span className={className}>
      {getDurationText(years, 'years')}
      {getSeparatorText(years, months)}
      {getDurationText(months, 'months')}
    </span>
  );
}

YearsMonthsDuration.defaultProps = {
  className: '',
};
