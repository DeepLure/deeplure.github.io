import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/text.css'
import App from './components/App.tsx'

let content: HTMLElement | null = document.getElementById('content');
if (content != null) {
    createRoot(content).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
} else {
    content = document.getElementsByName('body').item(0);
}
