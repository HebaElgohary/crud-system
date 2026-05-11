import React from 'react'
import ReactQueryProvider from './ReactQueryProvider'

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ReactQueryProvider>
      {children}
     </ReactQueryProvider>
      </div>
  )
}
