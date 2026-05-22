import PrivacyPolicyPage from '@/privacy/page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/privacy')({
    component: () => <PrivacyPolicyPage />
})