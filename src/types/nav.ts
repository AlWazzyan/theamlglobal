type Role = "superuser" | "auser" | "fuser" | "user" | "ccuser";
export interface INav {
  name: string;
  to?: string;
  icon?: any;
  badge?: IBadge;
  items?: ISubItems[];
  acceptedRoles?: Role[];
}
export interface IBadge {
  color: string;
  text: string;
}
export interface ISubItems {
  name: string;
  to?: string;
  badge?: IBadge;

  items?: ISubItems[];
}
export interface IRoute {
  path: string;
  exact?: boolean;
  name: string;
  element?: any;
}
