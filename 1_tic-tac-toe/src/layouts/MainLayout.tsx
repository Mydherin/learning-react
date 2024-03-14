import React from 'react'

interface MainLayoutProps {
    children: React.ReactNode
    title: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
    document.title = title
    return children
}