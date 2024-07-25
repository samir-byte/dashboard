import { items } from "@/constants/navItem";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export default function DashboardNav() {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {items.map((item) => (
        <NavLink
          key={item.slug}
          to={item.href}
          className={({ isActive }) =>
            cn(
              "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
              { "bg-muted text-foreground": isActive }
            )
          }
          end
        >
          {item.icon}
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
