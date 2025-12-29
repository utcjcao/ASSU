export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup =
  | {
      type: "dropdown";
      label: string;
      href: string;
      items: NavItem[];
    }
  | {
      type: "link";
      label: string;
      href: string;
    };
