import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex items-center space-x-2 text-sm">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    {index > 0 && <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />}
                    {item.path ? (
                        <Link
                            to={item.path}
                            className="text-slate-600 hover:text-primary-500 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-slate-900 font-medium">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;
