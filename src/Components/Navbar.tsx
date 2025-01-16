import React from 'react';
import Hamburger from './Hamburger';
import { Home, LibraryBig, ChartNoAxesColumnIncreasing } from 'lucide-react';

interface Section {
    id: string;
    label: string;
    icon: React.ReactNode;
}

const Navbar: React.FC = () => {
    const sections: Section[] = [
        { id: 'home', icon: <Home size={20} />, label: 'Home' },
        { id: 'about', icon: <LibraryBig size={20} />, label: 'About' },
        {
            id: 'projects',
            icon: <ChartNoAxesColumnIncreasing size={20} />,
            label: 'Projects'
        }
    ];

    return (
        <div className="">
            <div className="mx-auto max-w-6xl">
                <div className="relative flex items-center justify-between py-5">
                    <a href="#">
                        <div className="flex items-center">
                            <span className="font-semibold text-white text-2xl">
                                Lit
                            </span>
                            <span className="text-[#2AC3DE] font-semibold text-2xl">
                                Type
                            </span>
                        </div>
                    </a>

                    <div className="hidden md:flex items-center gap-10 z-40 h-full">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="relative text-white gap-1 h-full flex items-center"
                            >
                                {section.icon}
                                <div>{section.label}</div>
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden z-50">
                        <Hamburger />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
