'use client'

import { Calendar, ChevronUp, Home, Inbox, Search, Settings, User2, Briefcase } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const userChooser = [
  {
    title: "Cliente",
    icon: User2,
  },
  {
    title: "Vendedor",
    icon: Briefcase,
  }
]

export function AppSidebar({ children }) {
  const [isVendor, setIsVendor] = useState(false)
  const [chosenUser, setChosenUser] = useState(userChooser[0])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const vendorState = Cookies.get('isVendor:state') === 'true'
    setIsVendor(vendorState)
    setChosenUser(userChooser[vendorState ? 1 : 0])
    setIsLoading(false)
  }, [])

  const handleToggleIsVendor = () => {
    const newState = !isVendor
    setIsVendor(newState)
    setChosenUser(userChooser[newState ? 1 : 0])
    Cookies.set('isVendor:state', newState.toString())
  }

  if (isLoading) {
    return null // ou um spinner de carregamento, por exemplo
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="bg-slate-950 text-white">
                    <chosenUser.icon />
                    {chosenUser.title}
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width] "
                >
                  <DropdownMenuItem onClick={handleToggleIsVendor}>
                    <span>{userChooser[isVendor ? 0 : 1].title}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      {/*<header className="px-20 py-6 xl:px-12 md:py-4 sm:px-6 sm:py-4">
          <Image
            src="/assets/images/logo_horizontal.png"
            width={156}
            height={59}
            alt="Leah logo"
            className="md:w-[140px] sm:w-[128px]"
          />
        </header>*/}
      <main className={`w-full p-5 ${isVendor ? 'bg-emerald-400' : 'bg-cyan-400'}`}>
        <SidebarTrigger />
        <div className='w-full flex justify-center'>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
