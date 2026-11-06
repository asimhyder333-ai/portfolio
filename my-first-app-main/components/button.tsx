type ButtonProps = {
    text: string;
};

export default function Button({ text }: ButtonProps) {
    return (
        <button className="px-8 py-3 rounded-full bg-button text-white font-bold hover:bg-green-800">
            {text}
        </button>
    );
}