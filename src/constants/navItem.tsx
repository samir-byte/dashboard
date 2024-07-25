import { Home, Users } from "lucide-react";

type Item = {
  label: string;
  icon: JSX.Element;
  href: string;
  slug: string;
};

const items: Item[] = [
  {
    label: "Dashboard",
    icon: <Home className="h-4 w-4" />,
    href: "/",
    slug: "dashboard",
  },
  {
    label: "Users",
    icon: <Users className="h-4 w-4" />,
    href: "/users",
    slug: "users",
  },
];

export { items };
