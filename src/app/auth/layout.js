import { Square, Waves } from "lucide-react";

export default function Layout({ children }) {
  return (
      <main className='w-full h-screen bg-gradient-to-br from-cyan-500 to-violet-600 flex justify-center items-center flex-col'>
        {children}
      </main>
  )
}