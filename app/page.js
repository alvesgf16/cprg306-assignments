import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">CPRG 306: Web Development 2 - Assignments</h1>
      <nav className="flex space-x-7">
        <Link href="./week-2" className="text-lg font-semibold hover:text-blue-500">Week 2</Link>
        <Link href="./week-3" className="text-lg font-semibold hover:text-blue-500">Week 3</Link>
        <Link href="./week-4" className="text-lg font-semibold hover:text-blue-500">Week 4</Link>
        <Link href="./week-5" className="text-lg font-semibold hover:text-blue-500">Week 5</Link>
        <Link href="./week-6" className="text-lg font-semibold hover:text-blue-500">Week 6</Link>
        <Link href="./week-7" className="text-lg font-semibold hover:text-blue-500">Week 7</Link>
        <Link href="./week-8" className="text-lg font-semibold hover:text-blue-500">Week 8</Link>
        <Link href="./week-9" className="text-lg font-semibold hover:text-blue-500">Week 9</Link>
      </nav>
    </div>
  );
}