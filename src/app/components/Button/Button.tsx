import styles from './Button.module.css';
import applyStyles from '../../utils/apply-styles';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  isActive: boolean;
  activeClassName?: string;
  onClick: () => void;
}

export default function Button({
  children,
  onClick,
  activeClassName = '',
  isActive = false,
  className = '',
}: ButtonProps) {
  const combinedClassNames = applyStyles({
    [styles.button]: true,
    [className]: !!className,
    [activeClassName]: isActive,
  });

  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={combinedClassNames}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  activeClassName: '',
};
