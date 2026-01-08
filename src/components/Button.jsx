import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    loading = false,
    icon: Icon,
    ...props
}) => {
    const baseClasses = 'btn font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50',
        ghost: 'text-slate-700 hover:bg-slate-100',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            {...props}
        >
            {loading ? (
                <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {Icon && <Icon className="w-5 h-5" />}
                    {children}
                </>
            )}
        </motion.button>
    );
};

export default Button;
