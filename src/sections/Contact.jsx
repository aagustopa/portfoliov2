import contact from "@/data/contact.json";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { RiMapPin2Fill } from "react-icons/ri";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser"

export const Contact = () => {
    const icons = { IoMdMail, FaPhone, RiMapPin2Fill };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // 'success' or 'error'
        message: "",
    });
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim() || formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.message.trim() || formData.message.trim().split(/\s+/).length < 5) {
            newErrors.message = "Message must be at least 5 words";
        }
        return newErrors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables"
                );
            }
            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err);
            setSubmitStatus({
                type: "error",
                message:
                    err.text || "Failed to send message. Please try again later.",
            })
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
            <section id="contact" className="py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                            Let's build{" "}
                            <span className="font-serif italic font-normal text-white">
                                something great.
                            </span>
                        </h2>
                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                            Have a project in mind? I'd love to hear about it. Send me a message
                            and let's discuss how we can work together.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="glass p-8 rounded-3xl border-primary/30 animate-fade-in animation-delay-300">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="Your name..."
                                        value={formData.name}
                                        onChange={(e) => {
                                            setFormData({ ...formData, name: e.target.value });
                                            if (errors.name) setErrors({ ...errors, name: "" })
                                        }}
                                        className={`w-full px-4 py-3 bg-surface rounded-xl border focus:ring-1 outline-none transition-all
                                        ${errors.name
                                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                                : "border-border focus:border-primary focus:ring-primary"
                                            }`} />
                                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input id="email"
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value });
                                            if (errors.email) setErrors({ ...errors, email: "" })
                                        }}
                                        // className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                        className={`w-full px-4 py-3 bg-surface rounded-xl border focus:ring-1 outline-none transition-all
                                        ${errors.email
                                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                                : "border-border focus:border-primary focus:ring-primary"
                                            }`} />
                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        required
                                        placeholder="Your message..."
                                        value={formData.message}
                                        onChange={(e) => {
                                            setFormData({ ...formData, message: e.target.value });
                                            if (errors.message) setErrors({ ...errors, message: "" })
                                        }}
                                        className={`w-full px-4 py-3 bg-surface rounded-xl border focus:ring-1 outline-none transition-all resize-none
                                        ${errors.message
                                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                                : "border-border focus:border-primary focus:ring-primary"
                                            }`} />
                                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                </div>
                                <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>
                                {
                                    submitStatus.type && (
                                        <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success"
                                            ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                                            }`}>
                                            {submitStatus.type === "success" ? (
                                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                            ) : (
                                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            )}
                                            <p className="text-sm">{submitStatus.message}</p>
                                        </div>
                                    )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6 animate-fade-in animation-delay-400">
                            <div className="glass rounded-3xl p-8">
                                <h3 className="text-xl font-semibold mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    {contact.map((item) => {
                                        const Icon = icons[item.icon];
                                        return (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                    <Icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {item.label}
                                                    </div>
                                                    <div className="font-medium">{item.value}</div>
                                                </div>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Availability Card */}
                            <div className="glass rounded-3xl p-8 border border-primary/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="font-medium">Currently Available</span>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    I'm currently open to new opportunities and exciting projects.
                                    Whether you need a full-time engineer or a freelance consultant,
                                    let's talk!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}