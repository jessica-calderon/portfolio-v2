interface TitleProps {
    titleText: string;
}
function Title({ titleText }: TitleProps) {
    return (
        <div className='px-1 flex w-full h-[25px] items-center bg-[#E4BF82] font-semibold text-[#FA6E29] '>
            <span className='ml-px'>{titleText}</span>
        </div>
    );
}

export default Title;
