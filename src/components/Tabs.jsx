import { useState } from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ tabs, defaultTab = 0 }) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    return (
        <div className="w-full">
            {/* Tab Headers */}
            <div className="flex border-b border-slate-200 overflow-x-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`relative px-6 py-3 font-medium transition-colors whitespace-nowrap ${activeTab === index
                                ? 'text-primary-500'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                    >
                        {tab.label}
                        {activeTab === index && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                                initial={false}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="py-6">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {tabs[activeTab].content}
                </motion.div>
            </div>
        </div>
    );
};

export default Tabs;
