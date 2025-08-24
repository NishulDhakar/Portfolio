import { Reveal } from '@/components/common/reveal';

import Link from 'next/link';
import GitHubCalendar from 'react-github-calendar';


export default function Github() {
    return(
      <Reveal>
    <section className="px-8 mb-8 transition-colors duration-300">
      <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">

                              GitHub Contributions.
                          
      </div>
      <Link href="https://github.com/nishuldhakar" target="_blank" rel="noopener noreferrer">
        <div className="border rounded-lg p-4 bg-white dark:bg-gray-950 shadow-sm hover:opacity-80 transition">
          <GitHubCalendar username="nishuldhakar" />
        </div>
      </Link>
      </section>
      </Reveal>
    )
}