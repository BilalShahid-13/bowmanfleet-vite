import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '@/components/navbar'
import GamingFooter from '@/components/footer'

export const Route = createRootRoute({
    component: () => (
        <React.Fragment>
            {/* Aapka Gaming Navbar */}
            <Navbar />

            {/* Saare pages yahan load honge */}
            <main className="min-h-screen">
                <Outlet />
            </main>

            <GamingFooter />
        </React.Fragment>
    )
})