import { motion } from 'framer-motion';
import { Mountain, Users, Sparkles } from 'lucide-react';
import Card from './Card';

const WhyTrustUs = () => {
    const trustFactors = [
        {
            icon: Mountain,
            title: 'Trek-Tested Gear',
            description: 'Every piece of equipment has been used on real treks and verified for performance.',
            color: 'bg-green-50 text-green-600',
        },
        {
            icon: Users,
            title: 'Verified by Real Trekkers',
            description: "Reviews and ratings from actual adventurers who've used the gear in the field.",
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Sparkles,
            title: 'Hygienically Cleaned Rentals',
            description: 'Every rental item is professionally sanitized and inspected before delivery.',
            color: 'bg-blue-50 text-blue-600',
        },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                        Why Trekkers Trust Us
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We take gear seriously because your safety matters
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustFactors.map((factor, index) => {
                        const Icon = factor.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                            >
                                <Card className="bg-white border border-slate-200 h-full">
                                    <div className={`w-14 h-14 ${factor.color} rounded-xl flex items-center justify-center mb-4`}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-slate-900">{factor.title}</h3>
                                    <p className="text-slate-600">{factor.description}</p>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyTrustUs;
