import './App.css'
import { BrowserRouter } from 'react-router'
import AppSidebar from './components/custom/AppSidebar'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

function App() {

  return (
    <>
    <BrowserRouter>
    <SidebarProvider>
    <AppSidebar />
    <SidebarTrigger />
    
    </SidebarProvider>
    </BrowserRouter>
    </>
  )
}

export default App
