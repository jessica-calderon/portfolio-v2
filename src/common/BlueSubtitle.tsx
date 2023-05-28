interface BlueSubtitleProps {
    subtitleText: string;
}
function BlueSubtitle({ subtitleText }: BlueSubtitleProps) {
    return <div className='flex p-2 items-center text-left h-[25px] bg-[#64A4CE] text-white font-bold'>{subtitleText}</div>;
}

export default BlueSubtitle;
