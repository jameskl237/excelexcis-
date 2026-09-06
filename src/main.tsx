import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import './animations.css'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Services } from './pages/Services/Services'
import { Contact } from './pages/Contact/Contact'
import { Memories } from './pages/Memories/Memories'
import { MemoriesDetail } from './pages/Memories/MemoriesDetail'
import { Formations } from './pages/Formations/Formations'
import { FormationDetail } from './pages/Formations/FormationDetail'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="formations" element={<Formations />} />
            <Route path="formations/:slug" element={<FormationDetail />} />
            <Route path="memories" element={<Memories />} />
            <Route path="memories/:slug" element={<MemoriesDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
