type CardProps = {
    title: string;
    description: string;
    buttonText: string;
};

export default function Card({ title, description, buttonText }: CardProps) {
    return (
        <div className="bg-purple-200 rounded-2xl shadow-lg p-14 border border-gray-200 hover:shadow-amber-100 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
            <p  className="text-gray-600 text-base leading-7 mb-6">{description}</p>
            <button className="bg-button text-white px-15 py-4 rounded-full font-semibold hover:bg-purple-800 transition-all duration-300"   >{buttonText}</button>


        </div>
    );
}