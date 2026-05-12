import React from 'react'
import ReactQueryProvider from './ReactQueryProvider'
import ThemeProvider  from './ThemeProvider'

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThemeProvider>
      <ReactQueryProvider>
        
      {children}
     </ReactQueryProvider>
      </ThemeProvider>
      </div>
  )
}
