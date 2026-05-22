import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter, createHashHistory } from '@tanstack/react-router' // 🌟 createHashHistory import kiya
import './index.css'

import { routeTree } from './routeTree.gen'
import { Toaster } from './components/ui/sonner'

// 🌟 Local files aur normal hosting dono ke liye sabse safe tareeqa
const hashHistory = createHashHistory()

// Router instantiate karte waqt history pass karein
const router = createRouter({
  routeTree,
  history: hashHistory
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)