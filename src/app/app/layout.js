import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/appsidebar'

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/*<header className="px-20 py-6 xl:px-12 md:py-4 sm:px-6 sm:py-4">
          <Image
            src="/assets/images/logo_horizontal.png"
            width={156}
            height={59}
            alt="Leah logo"
            className="md:w-[140px] sm:w-[128px]"
          />
        </header>*/}
      <main className='w-full p-5'>
        <SidebarTrigger />
        <div className='w-full flex justify-center'>
            {children}
        </div>
      </main>
    </SidebarProvider>
  )
}