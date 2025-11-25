import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // We will define this next
import posthog from 'posthog-js'

// Initialize PostHog (Replace with your actual key from the PostHog dashboard)
// This captures visitors even before they click anything
posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com',
    autocapture: false, // We will manually capture events to keep it clean
    loaded: (posthog) => {
        if (import.meta.env.DEV) posthog.opt_out_capturing(); // Don't track localhost dev
    }
})

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)