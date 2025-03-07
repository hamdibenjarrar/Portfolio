import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "10px", backgroundColor: "#476778", color: "white" }}>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/projects">Projects</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
