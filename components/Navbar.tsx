'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link'
import { Button } from './retroui/Button';
import Image from "next/image";
import logo from '@/assets/logo.png';

export function Navbar({ isLanding }: { isLanding?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed w-full top-0 z-40">
            <nav
                className={`h-16 md:h-18 px-6 md:px-14 flex items-center justify-between transition-all duration-100 z-50 ${isScrolled || isOpen || !isLanding
                    ? 'bg-transparent'
                    : 'bg-[#ebbeba3c] border-b border-gray-200'
                    }`}
            >
                <div className="flex items-center">
                    <Image
                        src={logo}
                        alt="URange Systems"
                     
                        className="h-12 w-auto object-contain"
                        priority
                    />
                    <h1 className='font-head text-xl text-brand'>URange Systems</h1>
                </div>

                <div>
                    <ul className="flex-row items-center gap-4 hidden md:flex">
                        <li>
                            <Link href="/" className="font-head transition-all duration-300 hover:text-brand hover:underline px-2 py-1">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="font-head transition-all duration-300 hover:text-brand hover:underline px-2 py-1">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="font-head transition-all duration-300 hover:text-brand hover:underline px-2 py-1">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="font-head transition-all duration-300 hover:text-brand hover:underline px-2 py-1">
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/signup"
                            >
                                <Button >
                                    Get Started
                                </Button>
                            </Link>
                        </li>
                    </ul>

                    <Button
                        className="px-1.5 py-1.5 border-b-4 border-r-4 border-black md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                </div>
            </nav>

            <div
                className={`md:hidden absolute z-40 ${isOpen ? 'top-16' : '-top-62'
                    } transition-all duration-200 w-full px-8 bg-[#ebbeba3c] h-auto py-6 border-b border-gray-200`}
            >
                <ul className="flex flex-col justify-center text-center gap-4">
                    <li>
                        <Link href="/" className="font-head transition-all duration-300 hover:text-brand hover:underline px-2 py-1">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="font-head transition-all duration-300 hover:text-brand hover:underline px-2 py-1">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="font-head transition-all duration-300 hover:text-brand hover:underline px-2 py-1">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="font-head transition-all duration-300 hover:text-brand hover:underline px-2 py-1">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/signup"
                        >
                            <Button>
                                Get Started
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
