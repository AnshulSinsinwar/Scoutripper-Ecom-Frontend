import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Story', path: '/story' },
            { name: 'Careers', path: '/careers' },
            { name: 'Press', path: '/press' },
        ],
        support: [
            { name: 'Help Center', path: '/help' },
            { name: 'Shipping Info', path: '/shipping' },
            { name: 'Returns', path: '/returns' },
            { name: 'Track Order', path: '/track' },
        ],
        gear: [
            { name: 'All Products', path: '/products' },
            { name: 'Trek Kits', path: '/trek-kits' },
            { name: 'Rental Guide', path: '/rental-guide' },
            { name: 'Size Guide', path: '/size-guide' },
        ],
        legal: [
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms of Service', path: '/terms' },
            { name: 'Refund Policy', path: '/refund' },
        ],
    };

    const socialLinks = [
        { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
        { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
        { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
        { icon: Youtube, url: 'https://youtube.com', label: 'Youtube' },
    ];

    return (
        <footer className="bg-[#4EC5C1] text-white">
            <div className="container py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="inline-block mb-4">
                            <img
                                src="/assets/logo.png"
                                alt="Scoutripper"
                                className="h-10 brightness-0 invert"
                            />
                        </Link>
                        <p className="text-white mb-6 max-w-sm">
                            Your trusted partner for premium trekking gear. Rent or buy equipment that's tested on real trails.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white hover:text-primary-300 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white hover:text-primary-300 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-lg mb-4">Gear</h3>
                        <ul className="space-y-2">
                            {footerLinks.gear.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white hover:text-primary-300 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
                        <p className="text-white text-sm mb-4">
                            Get trek tips and gear updates
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-primary-500 focus:outline-none text-sm"
                            />
                            <button className="p-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors">
                                <Mail className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white text-sm">
                        © {currentYear} Scoutripper. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-white hover:text-primary-300 text-sm transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
