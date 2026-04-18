import applyStyles from '../../utils/apply-styles';
import Button from '../Button/Button';

interface ActiveButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  activeClassName: string;
  inactiveClassName: string;
  className?: string;
  onClick: () => void;
}

export default function ActiveButton({
  children,
  onClick,
  isActive,
  activeClassName,
  inactiveClassName,
  className = '',
}: ActiveButtonProps) {
  const combinedClassName = applyStyles({
    [className]: !!className,
    [inactiveClassName]: !isActive,
    [activeClassName]: isActive,
  });

  return (
    <Button
      onClick={() => onClick()}
      className={combinedClassName}
      isActive={isActive}
    >
      {children}
    </Button>
  );
}

ActiveButton.defaultProps = {
  className: '',
};
