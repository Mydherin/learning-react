import { useEffect, useRef } from 'react';
import './FloatingMenu.css';

const FloatingMenu = ({isOpen, anchorEl, onClose}) => {
    const floatingMenuRef = useRef(null);

    useEffect(() => {
        if (!floatingMenuRef.current || !anchorEl || !isOpen) {
            return;
        }
        const floatingMenu = floatingMenuRef.current;
        const handleFloatingMenu = () => {
            const rect = anchorEl.getBoundingClientRect();
            floatingMenu.style.top = `${rect.bottom + window.scrollY}px`;
            floatingMenu.style.left = `${rect.left}px`;
        }

        handleFloatingMenu();

        const observer = new ResizeObserver(() => {
            handleFloatingMenu();
        });

        document.addEventListener('mousedown', onClose);
        document.addEventListener('scroll', handleFloatingMenu);
        observer.observe(document.body);

        return () => {
            document.removeEventListener('scroll', handleFloatingMenu);
            document.removeEventListener('mousedown', onClose);
            observer.disconnect();
        }
    }, [floatingMenuRef, anchorEl, isOpen]);

    return (
        <div className={`floating-menu ${isOpen ? 'floating-menu-open' : ''}`} ref={floatingMenuRef}>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        </div>
    );
};

export default FloatingMenu;