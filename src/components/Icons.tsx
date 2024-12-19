type IconProps = {
  platformSlug?: string;
  className?: string;
  iconMap: Record<string, React.ElementType>;
};

const Icons: React.FC<IconProps> = ({ platformSlug, className, iconMap }) => {
  const SelectedIcon = platformSlug ? iconMap[platformSlug] : null;

  return SelectedIcon ? <SelectedIcon className={className} /> : null;
};

export default Icons;