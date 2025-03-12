
interface NewButtonProps {
    btntext: string;
}

const NewButton = ({ btntext }: NewButtonProps) => {
    return (<button className="bg-orange-200 w-[150px] rounded-lg border-3 border-gray-500 h-12 text-lg text-gray-700 font-semibold">{btntext}</button>);
}

export default NewButton;