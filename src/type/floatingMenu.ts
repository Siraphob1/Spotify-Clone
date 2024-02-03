export type ListMenu = {
  listMenu: Menu[];
};

export type Menu = {
  label: string;
  icon: JSX.Element;
  isDropdown: boolean;
  onMouseOver?: () => void;
  onClick?: () => void;
};
