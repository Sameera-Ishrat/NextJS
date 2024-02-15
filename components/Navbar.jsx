import Link from "next/link";
import React from "react";

const links = [
  {
    href: "/client",
    label: "Client",
  },
  {
    href: "/drinks",
    label: "Drinks",
  },
  {
    href: "/info",
    label: "Info",
  },
  {
    href: "/prisma-example",
    label: "Prisma Example",
  },
  {
    href: "/task",
    label: "Task",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn-btn-primary">
          Next js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="uppercase">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
