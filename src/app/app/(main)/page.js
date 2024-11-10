import { JobsHistory } from "./_components/jobsHistory";
import { TipsCard } from "./_components/tipsCard";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center">
      <TipsCard />
      <div className="w-full">
        <JobsHistory />
      </div>
    </div>
  )
}