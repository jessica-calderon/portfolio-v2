import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type ContactButtonProps = {
    label: string;
    icon: ReactNode;
    link: string;
    title: string;
    onClick?: () => void;
};

const ContactBtn: FC<ContactButtonProps> = ({ label, icon, link, title, onClick }) => {
    return (
        <div className='flex flex-row w-[50%] hover:text-red-700'>
            <Link to={link}>
                <button className='flex items-center justify-center px-2 py-2 text-black font-medium hover:text-red-700' title={title} onClick={onClick}>
                    {icon && <span className='w-[20px]'>{icon}</span>}
                    <span className='ml-2 text-[#07359E] hover:text-red-700'>{label}</span>
                </button>
            </Link>
        </div>
    );
};

export default ContactBtn;
