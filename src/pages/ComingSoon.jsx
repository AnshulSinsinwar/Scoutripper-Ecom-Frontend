import { useNavigate } from 'react-router-dom';
import { Construction, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const ComingSoon = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container max-w-2xl text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-[#4EC5C1] rounded-full"
                >
                    <Construction className="w-12 h-12 text-white" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="w-6 h-6 text-[#4EC5C1]" />
                        <h1 className="text-5xl md:text-6xl font-bold text-[#4EC5C1]">
                            Coming Soon
                        </h1>
                        <Sparkles className="w-6 h-6 text-[#4EC5C1]" />
                    </div>

                    <p className="text-xl md:text-2xl text-slate-700 mb-4">
                        We're Building Something Amazing!
                    </p>

                    <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                        This feature is currently under development. We're working hard to bring you an incredible experience. Stay tuned!
                    </p>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-200 shadow-lg">
                        <h2 className="text-lg font-semibold mb-3 text-slate-800">What to expect:</h2>
                        <ul className="text-left space-y-2 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-teal-500 mt-1">✓</span>
                                <span>Curated gear collections for every trek</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-teal-500 mt-1">✓</span>
                                <span>Eco-friendly and sustainable options</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-teal-500 mt-1">✓</span>
                                <span>Expert recommendations and reviews</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-teal-500 mt-1">✓</span>
                                <span>Special bundles and discounts</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => navigate('/')}
                            icon={ArrowLeft}
                            className="bg-[#4EC5C1] hover:bg-[#3db5b1] text-white px-8 py-3"
                        >
                            Back to Home
                        </Button>
                        <Button
                            onClick={() => navigate('/products')}
                            variant="secondary"
                            className="px-8 py-3"
                        >
                            Browse Available Gear
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ComingSoon;
