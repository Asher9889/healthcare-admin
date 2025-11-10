import { Icon } from "lucide-react";

export interface NavItem {
  name: string;
  path?: string;
  element?: React.ComponentType<any>;
  icon?: typeof Icon;
  skip?: boolean;
  children?: NavItem[];
}
