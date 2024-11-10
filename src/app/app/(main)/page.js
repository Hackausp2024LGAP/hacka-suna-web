import { JobsHistory } from "./_components/jobsHistory";
import { TipsCard } from "./_components/tipsCard";
import { getJobs } from "@/script";

export default async function Page() {

  const jobs = await getJobs()

  return (
    <div className="w-full flex flex-col items-center space-y-10">
      {/*<TipsCard />*/}
      <div className="w-full">
        <JobsHistory jobs={jobs} />
      </div>
    </div>
  )
}