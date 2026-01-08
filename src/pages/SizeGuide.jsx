import { useState } from 'react';
import { Ruler, TrendingUp, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';

const SizeGuide = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('boots');

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Sizing Guide' },
    ];

    const tabs = [
        { id: 'boots', label: 'Trekking Boots', icon: '🥾' },
        { id: 'jackets', label: 'Jackets & Layers', icon: '🧥' },
        { id: 'backpacks', label: 'Backpacks', icon: '🎒' },
    ];

    const bootsSizeChart = [
        { uk: '5', eu: '38', us: '6', foot: '23.0' },
        { uk: '6', eu: '39', us: '7', foot: '24.5' },
        { uk: '7', eu: '40.5', us: '8', foot: '25.5' },
        { uk: '8', eu: '42', us: '9', foot: '26.5' },
        { uk: '9', eu: '43', us: '10', foot: '27.5' },
        { uk: '10', eu: '44.5', us: '11', foot: '28.5' },
        { uk: '11', eu: '46', us: '12', foot: '29.5' },
        { uk: '12', eu: '47', us: '13', foot: '30.5' },
    ];

    const jacketsSizeChart = [
        { size: 'XS', chest: '86-91', height: '165-170' },
        { size: 'S', chest: '91-96', height: '170-175' },
        { size: 'M', chest: '96-101', height: '175-180' },
        { size: 'L', chest: '101-106', height: '180-185' },
        { size: 'XL', chest: '106-112', height: '185-190' },
        { size: 'XXL', chest: '112-118', height: '190-195' },
    ];

    const backpacksSizeChart = [
        { size: 'XS', torso: '38-43', capacity: '30-40L' },
        { size: 'S', torso: '43-48', capacity: '40-50L' },
        { size: 'M', torso: '48-53', capacity: '50-65L' },
        { size: 'L', torso: '53-58', capacity: '65-80L' },
        { size: 'XL', torso: '58-63', capacity: '80L+' },
    ];

    const bootsMeasurementSteps = [
        {
            number: '1',
            title: 'Stand in place',
            description: 'Stand with your foot against a wall. Stand on it with your heel touching the wall.',
        },
        {
            number: '2',
            title: 'Mark the longest toe',
            description: 'Have someone mark where your longest toe ends. This is where you should make your foot measurement.',
        },
        {
            number: '3',
            title: 'Measure the distance',
            description: 'Measure from the wall to the mark with a ruler or tape measure. Use this to find your size in the chart below.',
        },
    ];

    const jacketsMeasurementSteps = [
        {
            number: '1',
            title: 'Measure your chest',
            description: 'Wrap a measuring tape around the fullest part of your chest, keeping the tape parallel to the ground.',
        },
        {
            number: '2',
            title: 'Measure your height',
            description: 'Stand straight against a wall and measure from the floor to the top of your head.',
        },
        {
            number: '3',
            title: 'Check the fit',
            description: 'Consider layering - if you plan to wear multiple layers, size up for comfort and mobility.',
        },
    ];

    const backpacksMeasurementSteps = [
        {
            number: '1',
            title: 'Measure torso length',
            description: 'Tilt your head forward and find the C7 vertebra (the prominent bone at the base of your neck). Measure from there to the top of your hip bones.',
        },
        {
            number: '2',
            title: 'Consider your gear',
            description: 'Choose capacity based on trip length - weekend trips need 40-50L, multi-day treks need 65L+.',
        },
        {
            number: '3',
            title: 'Check hip belt fit',
            description: 'The hip belt should sit comfortably on your hip bones, not your waist, carrying most of the weight.',
        },
    ];

    const bootsProTips = [
        'Measure at the evening when feet are slightly larger',
        'Wear trekking socks while measuring',
        'If between sizes, go for a step up for toe room',
        'Measure both feet – use the larger measurement',
    ];

    const jacketsProTips = [
        'Measure over a light shirt for accurate results',
        'Allow room for layering underneath in cold weather',
        'Check sleeve length and shoulder fit carefully',
        'Consider getting a size chart from the brand',
    ];

    const backpacksProTips = [
        'Torso length matters more than height',
        'Load the pack with weight when trying it on',
        'Adjust all straps for proper weight distribution',
        'Hip belt should carry 80% of the weight',
    ];

    const measurementSteps = activeTab === 'boots' ? bootsMeasurementSteps :
        activeTab === 'jackets' ? jacketsMeasurementSteps :
            backpacksMeasurementSteps;

    const currentProTips = activeTab === 'boots' ? bootsProTips :
        activeTab === 'jackets' ? jacketsProTips :
            backpacksProTips;

    const faqItems = [
        {
            question: "What if I'm between sizes?",
            answer: "For trekking boots, always size up – you need room for your toes to move freely when you're heading downhill. For jackets, consider whether you'll be layering underneath. Go larger if you're unsure about your size, as trekking boots especially work better with a bit of toe room rather than being too tight.",
        },
        {
            question: 'Can I exchange rental gear if it doesn\'t fit?',
            answer: 'Yes! We offer free size exchanges on rental gear. Just contact us within 24 hours of receiving your order.',
        },
        {
            question: 'Do you have women\'s-specific sizing?',
            answer: 'Yes, we offer women\'s-specific sizing for most products. Check the product page for availability.',
        },
        {
            question: 'I\'m still unsure about my size. Can someone help?',
            answer: 'Absolutely! Our sizing experts are here to help. Contact us via chat or email with your measurements and we\'ll recommend the perfect size.',
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50">
            <div className="container max-w-5xl">
                <Breadcrumb items={breadcrumbItems} />

                {/* Header */}
                <div className="mt-6 mb-8">
                    <div className="flex items-center gap-2 text-teal-600 text-sm font-medium mb-3">
                        <Ruler className="w-4 h-4" />
                        <span>SIZING GUIDE</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-3">Find Your Perfect Fit</h1>
                    <p className="text-slate-600 text-lg">
                        Proper gear fit is crucial for comfort and safety on the trail. Use our measurement guides to find the right
                        size before you rent.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 border-b">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 font-medium transition-all border-b-2 ${activeTab === tab.id
                                ? 'border-teal-600 text-teal-600'
                                : 'border-transparent text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Measurement Guide */}
                <div className="bg-white rounded-xl p-8 mb-6 shadow-sm border border-slate-200">
                    <h2 className="text-2xl font-bold mb-2">
                        {activeTab === 'boots' && 'How to Measure Your Foot'}
                        {activeTab === 'jackets' && 'How to Measure for Jackets'}
                        {activeTab === 'backpacks' && 'How to Measure for Backpacks'}
                    </h2>
                    <p className="text-slate-600 mb-6">Follow these simple steps for accurate measurements</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {measurementSteps.map((step) => (
                            <div key={step.number} className="relative">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold text-lg">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{step.title}</h3>
                                        <p className="text-sm text-slate-600">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pro Tips Section */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold mb-4">
                            {activeTab === 'boots' && 'Boot Size Chart'}
                            {activeTab === 'jackets' && 'Jacket Size Chart'}
                            {activeTab === 'backpacks' && 'Backpack Size Chart'}
                        </h3>
                        <div className="overflow-x-auto">
                            {activeTab === 'boots' && (
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-semibold text-slate-700">UK Size</th>
                                            <th className="text-left py-3 px-4 font-semibold text-slate-700">EU Size</th>
                                            <th className="text-left py-3 px-4 font-semibold text-slate-700">US Size</th>
                                            <th className="text-left py-3 px-4 font-semibold text-slate-700">Foot Length (cm)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bootsSizeChart.map((row, index) => (
                                            <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                                                <td className="py-3 px-4">{row.uk}</td>
                                                <td className="py-3 px-4">{row.eu}</td>
                                                <td className="py-3 px-4">{row.us}</td>
                                                <td className="py-3 px-4">{row.foot}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                            {activeTab === 'jackets' && (
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-semibold text-slate-700">Size</th>
                                            <th className="text-left py-3 px-4 font-semibold text-slate-700">Chest (cm)</th>
                                            <th className="text-left py-3 px-4 font-semibold text-slate-700">Height (cm)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jacketsSizeChart.map((row, index) => (
                                            <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                                                <td className="py-3 px-4 font-semibold">{row.size}</td>
                                                <td className="py-3 px-4">{row.chest}</td>
                                                <td className="py-3 px-4">{row.height}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                            {activeTab === 'backpacks' && (
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-semibold text-slate-700">Size</th>
                                            <th className="text-left py-3 px-4 font-semibold text-slate-700">Torso Length (cm)</th>
                                            <th className="text-left py-3 px-4 font-semibold text-slate-700">Ideal Capacity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {backpacksSizeChart.map((row, index) => (
                                            <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                                                <td className="py-3 px-4 font-semibold">{row.size}</td>
                                                <td className="py-3 px-4">{row.torso}</td>
                                                <td className="py-3 px-4">{row.capacity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100">
                        <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-teal-600" />
                            <h3 className="font-semibold text-lg">Pro Tips</h3>
                        </div>
                        <ul className="space-y-3">
                            {currentProTips.map((tip, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                    <span className="text-teal-500 mt-0.5">✓</span>
                                    <span className="text-slate-700">{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-8">
                    <h2 className="text-2xl font-bold mb-6">Common Sizing Questions</h2>
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <details key={index} className="group border-b border-slate-200 pb-4">
                                <summary className="font-semibold text-slate-900 cursor-pointer flex items-center justify-between py-2 hover:text-teal-600 transition-colors">
                                    {item.question}
                                    <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-slate-600 mt-2 pl-4">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 text-center text-white">
                    <h2 className="text-2xl font-bold mb-2">Ready to find your gear?</h2>
                    <p className="mb-6 text-teal-50">
                        Now that you know your size, explore our selection of quality gear curated just for you!
                    </p>
                    <Button
                        onClick={() => navigate('/products')}
                        className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-xl font-semibold"
                        icon={ShoppingBag}
                    >
                        Browse Gear
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SizeGuide;
