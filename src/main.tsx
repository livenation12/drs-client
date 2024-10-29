import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import router from './routers/root.router'
import { store } from './app/store'
import { Toaster } from './components/ui/toaster'
import { ThemeProvider } from './components/theme-provider'

createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </>
)


