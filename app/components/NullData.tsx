import exp from "constants";

interface NullDataProps{
    title: string;
}

const NullData: React.FC<NullDataProps> = ({ title }) => {
    return (
        <div className="w-full h-[50px] flex items-center justify-center text-xl md:text-2xl">
            <p className="font-medium">{title}</p>
        </div>
    );
};

export default NullData;