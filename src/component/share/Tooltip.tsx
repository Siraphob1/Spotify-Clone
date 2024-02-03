import classNames from 'classnames';
import { ReactNode } from 'react';
import { ToolTipPositionE } from '../../type/tooltip';

type Props = {
  label: string;
  children: ReactNode;
  position?: ToolTipPositionE;
};

const Tooltip = ({ label, children, position }: Props) => {
  return (
    <div
      className={classNames('tooltip', {
        'tooltip-top': position === ToolTipPositionE.TOP,
        'tooltip-bottom': position === ToolTipPositionE.BOTTOM,
        'tooltip-left': position === ToolTipPositionE.LEFT,
        'tooltip-right': position === ToolTipPositionE.RIGHT,
      })}
      data-tip={label}
    >
      {children}
    </div>
  );
};

export default Tooltip;
