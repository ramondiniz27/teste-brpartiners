import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


async function deferRender() {
  const {server} = await import("./mocks/browser")
  server.start()
}

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
    )
})
