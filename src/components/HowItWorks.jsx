import { motion } from 'framer-motion';
import { MapPin, Award, CheckCircle } from 'lucide-react';
import Card from './Card';

const HowItWorks = () => {
    const steps = [
        {
            number: '1',
            icon: MapPin,
            title: 'Choose Your Trek',
            description: "Tell us where you're heading. We'll understand the terrain, weather, and what you'll need.",
        },
        {
            number: '2',
            icon: Award,
            title: 'Get Recommended Gear',
            description: 'Our experts and algorithms suggest the perfect gear based on real trekker experiences.',
        },
        {
            number: '3',
            icon: CheckCircle,
            title: 'Rent or Buy with Confidence',
            description: 'Quality-checked, hygienically cleaned, and ready for your adventure.',
        },
    ];

    return (
        <section className="py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        How Scoutripper Gear Works
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Simple steps to get the perfect gear for your adventure
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Lines (Desktop only) */}
                    <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent -z-10" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                            >
                                <Card className="relative h-full bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                                    {/* Number Badge */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                        {step.number}
                                    </div>

                                    <div className="pt-8 text-center">
                                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                        <p className="text-slate-600">{step.description}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
