'use client';

// import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon,} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    // { name: 'Home', href: '/dashboard', icon: HomeIcon },
    // { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon,},
    // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },

    { name: 'Shortened Links', href: '/dashboard/shortlinks' },
    { name: 'Link Trees', href: '/dashboard/linktrees'},
    { name: 'Generated QRs', href: '/dashboard/qrcodes'},
];

export default function SideLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-green-700 p-3 text-sm font-medium hover:bg-green-200 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-green-200 text-green-600': pathname === link.href,
              },
            )}
            >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}