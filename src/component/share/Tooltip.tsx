import { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
};

const Tooltip = ({ label, children }: Props) => {
  return (
    <div className="tooltip" data-tip={label}>
      {children}
    </div>
  );
};

export default Tooltip;
