import { useState } from "react";

interface ContactFormProps {
    onClose: () => void;
}

function ContactForm({ onClose }: ContactFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can send the form data to an API or perform any other actions
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        // Show success message
        setShowSuccessMessage(true);
        // // Close the modal after a certain duration (e.g., 3 seconds)
        // setTimeout(() => {
        //     setShowSuccessMessage(false);
        //     onClose();
        // }, 3000);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className='text-left space-y-4 w-[500px]'>
            <div className='flex flex-col'>
                <label htmlFor='name' className='text-sm font-semibold text-gray-700'>
                    Name
                </label>
                <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='email' className='text-sm font-semibold text-gray-700'>
                    Email
                </label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='message' className='text-sm font-semibold text-gray-700'>
                    Message
                </label>
                <textarea
                    id='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className='mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    required
                />
            </div>
            <div className='flex justify-end'>
                <button type='submit' className='px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600'>
                    Submit
                </button>
                <button type='button' className='px-4 py-2 ml-2 text-blue-500 font-semibold rounded hover:bg-blue-100' onClick={handleClose}>
                    Close
                </button>
            </div>
            {showSuccessMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4">
                    Thank you for your message! I will get back to you soon.
                </div>
            )}
        </form>
    );
}

export default ContactForm;