import React, { useState } from 'react';
import { X, Menu, Home, Info, BookOpen, Wrench } from 'lucide-react';

interface MenuItem {
    title: string;
    icon: JSX.Element;
    sectionId: string;
}

function Hamburger() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setIsOpen(false);
        }
    };

    const menuItems: MenuItem[] = [
        { title: 'Home', icon: <Home size={20} />, sectionId: 'home' },
        { title: 'About', icon: <Info size={20} />, sectionId: 'about' },
        {
            title: 'Projects',
            icon: <BookOpen size={20} />,
            sectionId: 'projects'
        },
        { title: 'Skills', icon: <Wrench size={20} />, sectionId: 'skills' }
    ];

    return (
        <div className="relative z-50">
            <button
                onClick={handleClick}
                className="relative z-50 p-3 bg-transparent text-white hover:text-red-300 focus:outline-none"
                style={{ touchAction: 'manipulation' }}
            >
                {isOpen ? (
                    <X className="h-8 w-8" />
                ) : (
                    <Menu className="h-8 w-8" />
                )}
            </button>

            <div
                className={`
                    absolute right-0 top-full mt-2 w-56 
                    transition-all duration-200 ease-in-out
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
            >
                <div className="bg-white rounded-lg shadow-lg py-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.title}
                            className="flex items-center gap-2 px-4 py-2 text-gray-700"
                            onClick={() => scrollToSection(item.sectionId)}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hamburger;
