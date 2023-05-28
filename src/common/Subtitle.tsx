interface SubtitleProps {
    subtitle: string;
}
function Subtitle({ subtitle }: SubtitleProps) {
    return (
        <>
            <span className='font-semibold text-[#FA6E29]'>{subtitle}:</span>
        </>
    );
}

export default Subtitle;
