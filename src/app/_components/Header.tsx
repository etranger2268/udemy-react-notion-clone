import Link from 'next/link';

const NAVIGATION_LINKS = [
  { href: '/', title: 'Home' },
  { href: '/signin', title: 'Sign In' },
  { href: '/signup', title: 'Sign Up' },
  { href: '/notes/1', title: 'notes1' },
  { href: '/notes/2', title: 'notes2' },
];

const Header = () => {
  return (
    <nav className="w-full p-3 border-b border-gray-100">
      <ul className="flex justify-center gap-4">
        {NAVIGATION_LINKS.map(({ href, title }) => (
          <li
            key={href}
            className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
          >
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
