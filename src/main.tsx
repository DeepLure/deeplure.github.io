import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './text.css'
import App from './App.tsx'

let content: HTMLElement | null = document.getElementById('content')
if (content != null) {
    createRoot(content).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
} else {
    console.log("Content element not found!")
}
