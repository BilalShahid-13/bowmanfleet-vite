import ExpandedLandingPage from '@/components/LandingPage2';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: () => <ExpandedLandingPage />
})