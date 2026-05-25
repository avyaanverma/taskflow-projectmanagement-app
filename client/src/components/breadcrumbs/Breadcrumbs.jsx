// components/dashboard/Breadcrumbs.jsx

const Breadcrumbs = ({ items }) => {
    return (
        <div className="flex items-center gap-2 text-sm text-gray-500">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2"
                >
                    <span>{item}</span>

                    {index !== items.length - 1 && (
                        <span>/</span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Breadcrumbs;