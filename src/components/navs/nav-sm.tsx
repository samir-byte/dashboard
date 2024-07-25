import { items } from "@/constants/navItem";
import { NavLink } from "react-router-dom";
import Logo from "../common/logo";
import { cn } from "@/lib/utils";

export default function DashboardNavSm() {
  return (
    <nav className="grid gap-2 text-lg font-medium">
      <Logo />
      {items.map((item) => (
        <NavLink
          to={item.href}
          key={item.slug}
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
