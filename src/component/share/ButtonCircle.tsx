import { ReactNode } from 'react';
import Tooltip from './Tooltip';

type Props = {
  label: string;
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

const ButtonCircle = ({ label, children, isLoading, onClick }: Props) => {
  return (
    <Tooltip label={label}>
      <div
        className="hover:bg-gray-800 rounded-full p-[0.2rem] cursor-pointer"
        onClick={onClick}
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          children
        )}
      </div>
    </Tooltip>
  );
};

export default ButtonCircle;
