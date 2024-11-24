import { useEffect, useRef } from 'react'
import './ContextMenu.css'

const ContextMenu = () => {
    const contextMenuRef = useRef(null);

    useEffect(() => {
        if (!contextMenuRef.current) {
            return;
        }

        const contextMenu = contextMenuRef.current;
        const handleContextMenu = (event) => {
            event.preventDefault();
            contextMenu.style.display = 'block';
            contextMenu.style.left = `${event.clientX}px`;
            contextMenu.style.top = `${event.clientY}px`;
        };

        const handleHideContextMenu = () => {
            contextMenu.style.display = 'none';
        };

        const observer = new ResizeObserver(() => {
            handleHideContextMenu();
        });
        observer.observe(document.body);

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('mousedown', handleHideContextMenu);
        document.addEventListener('scroll', handleHideContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('mousedown', handleHideContextMenu);
            document.removeEventListener('scroll', handleHideContextMenu);
            observer.disconnect();
        }
    }, [contextMenuRef])

    return (
        <div className="context-menu" ref={contextMenuRef}>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
            </ul>
        </div>
    )
}

export default ContextMenu