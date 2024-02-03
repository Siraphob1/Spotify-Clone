import { ReactNode } from 'react';
import Tooltip from './Tooltip';

type Props = {
  label: string;
  children: ReactNode;
  onClick: () => void;
};

const ButtonCircle = ({ label, children, onClick }: Props) => {
  return (
    <Tooltip label={label}>
      <div
        className="hover:bg-gray-800 rounded-full p-[0.2rem] cursor-pointer"
        onClick={onClick}
      >
        {children}
      </div>
    </Tooltip>
  );
};

export default ButtonCircle;
