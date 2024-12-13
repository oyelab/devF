import Link from "next/link";

const MultiMenu = () => {
  return (
    <ul className="navigation clearfix">
      <li className="active">
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/services">services</Link>
      </li>
      <li>
        <Link href="/projects-masonry">projects</Link>
      </li>
      <li>
        <Link href="/blog">blog</Link>
      </li>
      <li>
        <Link href="contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MultiMenu;