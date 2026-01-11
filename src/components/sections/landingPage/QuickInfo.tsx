"use client";

// import { Button } from "@/components/ui/button";
// import { FaRegFilePdf } from "react-icons/fa";

export default function QuickInfo() {

  return (
    <aside className="space-y-4 mt-6">
      <div>
        <h3 className="text-xs font-semibold text-neutral-900 dark:text-neutral-50 mb-2 uppercase tracking-wider">
          Status
        </h3>
        <div className="space-y-2 text-sm text-secondary dark:text-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Available for work
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Open to freelance
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-neutral-900 dark:text-neutral-50 mb-2 uppercase tracking-wider">
          Focus
        </h3>
        <ul className="space-y-1 text-sm text-secondary dark:text-gray-300 list-disc list-inside">
          <li>Full-Stack Development</li>
          <li>DSA & Problem Solving</li>
        </ul>
      </div>

      {/* <div>
          <Link
                href= "https://drive.google.com/file/d/1cgHicVE543FVpvgZwYiO4CsiDTxMPIG3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500">
                      <Button 

                  
                      
        variant={"outline"}
        className=" w-[180px] md:w-full"
        size={"lg"}
        > {<FaRegFilePdf />}
          Resume
        </Button>
              </Link>

      </div> */}
    </aside>
  );
}
