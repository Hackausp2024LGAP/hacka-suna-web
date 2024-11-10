'use client'

import { RefreshCcw, ChevronUp, Home, MessageCircle, Settings, User2, Briefcase } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"

// Menu items.
const items = [
  {
    title: "Início",
    url: "#",
    icon: Home,
  },
  {
    title: "Conversas",
    url: "#",
    icon: MessageCircle,
  },
  {
    title: "Descartes",
    url: "app/descarte",
    icon: RefreshCcw,
  },
  {
    title: "Configurações",
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
  const [defaultOpen, setDefaultOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(true)

  const isMobile = useIsMobile()

  useEffect(() => {
    const vendorState = Cookies.get('isVendor:state') === 'true'
    setIsVendor(vendorState)
    setChosenUser(userChooser[vendorState ? 1 : 0])

    const sidebarState = Cookies.get('sidebar:state') === 'true'
    setDefaultOpen(!isMobile && sidebarState)

    setIsLoading(false)
  }, [])

  const handleToggleIsVendor = () => {
    const newState = !isVendor
    setIsVendor(newState)
    setChosenUser(userChooser[newState ? 1 : 0])
    Cookies.set('isVendor:state', newState.toString())
    window.dispatchEvent(new Event('vendorStateChange'))
  }

  const handleToggleSidebar = () => {
    const newState = isMobile ? true : !defaultOpen
    setDefaultOpen(newState)
    !isMobile && Cookies.set('sidebar:state', newState.toString())
  }

  if (isLoading) {
    return null // ou um spinner de carregamento, por exemplo
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar collapsible="icon" className={`${isVendor ? 'bg-gradient-to-b from-white to-emerald-400 !important' : 'bg-gradient-to-b from-white to-cyan-400 !important'}`}>
        <SidebarHeader className={`${defaultOpen && !isMobile && "p-5"} w-full flex justify-center items-center`}>
          {defaultOpen || isMobile ?
            <Image
              src="/assets/images/reletrify_title.png"
              width={773}
              height={216}
              alt="Reletrify logo"
            //className="md:w-[140px] sm:w-[128px]"
            />
            :
            <Image
              src="/assets/images/logo_transparent.png"
              width={30}
              height={30}
              alt="Reletrify logo"
            //className="md:w-[140px] sm:w-[128px]"
            />
          }
        </SidebarHeader>
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
          
        </header>*/}
      <main className={`w-full p-5 ${isVendor ? 'bg-gradient-to-br from-white to-emerald-400' : 'bg-gradient-to-br from-white to-cyan-400'}`}>
        <SidebarTrigger onClick={handleToggleSidebar} />
        <div className='w-full flex justify-center'>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
