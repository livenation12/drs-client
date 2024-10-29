export interface SidebarItemProps {
          active?: boolean;
          icon: React.ReactNode;
          text: string;
          expanded: boolean;
          subMenu?: SubMenuItemProps[] | null;
}

export interface SubMenuItemProps extends Omit<SidebarItemProps, 'expanded'> {
          expanded?: never;
          subMenu?: never;
}