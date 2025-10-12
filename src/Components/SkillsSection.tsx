import React from "react";

function SkillsSection() {
  return (
    <div className="h-screen w-full bg-black flex flex-col relative font-['Fractul']">
      <div className="absolute top-8 left-8 text-[#f5deb3] text-base font-medium">
        Skills
      </div>

      <div className="flex-1 flex items-center justify-center px-16">
        <div className="text-[#f5deb3] text-center space-y-8">
          <div>
            <p className="text-2xl font-bold mb-3">Languages</p>
            <p className="sm:text-sm text-[11px] font-medium">
              HTML • CSS • JavaScript • TypeScript
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-3">Frameworks</p>
            <p className="sm:text-sm text-[11px] font-medium">
              Next.js • React.js • Tailwind CSS 
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-3">Libraries</p>
            <p className="sm:text-sm text-[11px] font-medium">
              Redux Toolkit • React Hook Form
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-3">Backend & Database</p>
            <p className="sm:text-sm text-[11px] font-medium">
              Next.js <span className="text-[10px]">(API Routes)</span> • Appwrite • Clerk • Prisma • SQLite
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-3">Tools & Deployment</p>
            <p className="sm:text-sm text-[11px] font-medium">
              Git • GitHub • Vercel • Netlify
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;