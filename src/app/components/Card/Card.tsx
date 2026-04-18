import applyStyles from '../../utils/apply-styles';
import styles from './Card.module.css';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({
  title,
  children,
  style = {},
  className = '',
}: CardProps) {
  const combinedClassName = applyStyles({
    [className || '']: !!className,
    [styles.card]: true,
  });
  return (
    <div style={style} className={combinedClassName}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Card.defaultProps = {
  title: '',
  className: '',
  style: {},
};
