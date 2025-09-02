import Image from "next/image";
import { Card, CardContent } from "@/components/ui/crazxy-ui/card";
import Container from "@/components/common/Container";

export default function BlogPage() {
  return (
    <Container>
    <div className="min-h-screen mt-20 bg-black px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Blog Card */}
        <Card className="rounded-2xl overflow-hidden shadow-lg bg-neutral-900 border border-neutral-800">
          <div className="relative h-48 w-full">
            <Image
              src="/nishul.jpg"
              alt="Blog preview"
              width={500}
              height={500}
              className="object-cover opacity-40"
            />
          </div>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-white opacity-50">
              How I made 1cr at the age of 20
            </h2>
            <p className="mt-3 text-sm text-gray-300 opacity-40">
              I tried in what I was good. I learned consistency, and
              experimentation that changed my career path. Blog
              coming soon...
            </p>
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500 opacity-30">
              <span>September 3, 2025</span>
              <span className="cursor-pointer hover:underline">Read More →</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </Container>
  );
}
