import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ContactButtonProps = {
	label: string;
	icon: ReactNode;
	link: string;
	title: string;
};

const ContactBtn: FC<ContactButtonProps> = ({ label, icon, link, title }) => {
	return (
		<div className="flex flex-row w-[50%]">
			<Link to={link}>
				<button className="flex items-center justify-center px-2 py-2 font-medium text-black" title={title}>
					{icon && <span className="w-[20px]">{icon}</span>}
					<span className="ml-2">{label}</span>
				</button>
			</Link>
		</div>
	);
};

export default ContactBtn;
