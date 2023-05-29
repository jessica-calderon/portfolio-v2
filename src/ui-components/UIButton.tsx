import React from "react";

interface UIButtonProps {
    href?: string;
    onClick?: () => void;
    target?: string;
    rel?: string;
    children: any;
}

const UIButton: React.FC<UIButtonProps> = ({ href, onClick, target, rel, children }) => {
    if (href) {
        return (
            <a
                href={href}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className='px-4 py-2 bg-zinc-300 text-black font-tahoma border-2 border-blue-400 font-light rounded hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-300'
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type='button'
            className='px-4 py-2 bg-zinc-300 text-black font-tahoma border-2 border-blue-400 font-light rounded hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-300'
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default UIButton;
