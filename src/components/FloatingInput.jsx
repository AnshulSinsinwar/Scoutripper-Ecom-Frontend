import { useState } from 'react';

function FloatingInput({
    type = 'text',
    name,
    value,
    onChange,
    label,
    required = false,
    style = {}
}) {
    const [isFocused, setIsFocused] = useState(false);
    const isActive = isFocused || value;

    return (
        <div className="relative" style={style}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full h-full px-4 pt-5 pb-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                style={{ fontFamily: 'Jost, sans-serif', color: '#6b8c89' }}
                required={required}
            />
            <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${isActive
                    ? 'top-2 text-sm'
                    : 'top-1/2 -translate-y-1/2 text-base'
                    }`}
                style={{ fontFamily: 'Jost, sans-serif', color: '#6b8c89' }}
            >
                {label}
            </label>
        </div>
    );
}

export default FloatingInput;
