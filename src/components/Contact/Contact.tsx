import React from 'react';
import ContactBtn from './ContactBtn';
import { FaEnvelope, FaGithubAlt, FaLinkedin } from 'react-icons/fa';

function Contact() {
	return (
		<div className="flex flex-col h-full border border-[#64A4CE]">
			<div className="flex p-2 items-center text-left h-[25px] bg-[#64A4CE] text-white font-bold">
				Contacting Jessica
			</div>
			<div className="flex flex-row items-center justify-start p-2">
				<ContactBtn
					label={'Email'}
					icon={<FaEnvelope />}
					link={'mailto:calderonjessica13@yahoo.com'}
				/>
				<ContactBtn
					label={'Github'}
					icon={<FaGithubAlt />}
					link={'https://github.com/jessica-calderon'}
				/>
			</div>
			<div className="flex flex-row items-center justify-start p-2">
				<ContactBtn
					label={'LinkedIn'}
					icon={<FaLinkedin />}
					link={'https://LinkedIn.com/in/jessica-calderon'}
				/>
			</div>
		</div>
	);
}

export default Contact;
