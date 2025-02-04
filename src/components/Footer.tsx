"use client";

import React, { useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Toaster, toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Minus } from "lucide-react";

export function Footer() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
    });
    
    // Close the form when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setIsFormOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };
    
    const validateForm = () => {
        const newErrors = {
            firstname: formData.firstname.trim() ? "" : "First name is required.",
            lastname: formData.lastname.trim() ? "" : "Last name is required.",
            email: validateEmail(formData.email) ? "" : "Enter a valid email address.",
            subject: formData.subject.trim() ? "" : "Subject is required.",
            message: formData.message.trim().length >= 10 ? "" : "Message must be at least 10 characters.",
        };

        setErrors(newErrors);

        // Remove errors after 4 seconds
        setTimeout(() => setErrors({ firstname: "", lastname: "", email: "", subject: "", message: "" }), 4000);

        return Object.values(newErrors).every((err) => err === "");
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formDataForSubmission = new FormData();
        formDataForSubmission.append("firstname", formData.firstname);
        formDataForSubmission.append("lastname", formData.lastname);
        formDataForSubmission.append("email", formData.email);
        formDataForSubmission.append("subject", formData.subject);
        formDataForSubmission.append("message", formData.message);

        try {
            const response = await fetch("https://formspree.io/f/xnnjvqal", {
                method: "POST",
                body: formDataForSubmission,
                headers: {
                    "Accept": "application/json",
                },
            });

            if (response.ok) {
                // Reset form data on successful submission
                setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    subject: "",
                    message: "",
                });

                // Display success toast notification
                toast.success("Your message has been sent successfully!", {
                    description: "We will get back to you shortly.",
                    duration: 5000,
                    position: "top-center",
                    style: {
                        background: "#000", // Match form's dark theme
                        color: "#fff",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                    },
                });

                // Optionally close the form after submission
                setTimeout(() => {
                    setIsFormOpen(false);
                }, 8000);
            } else {
                // Handle failure (if needed)
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("There was an error sending your message.");
            console.log("Error sending message:", error);
        }
    };

    return (
        <div 
            className="h-[40rem] w-full rounded-md bg-gradient-to-b from-gray-900 via-gray-900 to-neutral-950 relative flex flex-col items-center justify-center antialiased"
            id="footer-section"
        >
            <div className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center">
                <h1 className="relative z-10 md:text-7xl text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Get in touch
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 md:text-lg text-sm text-center relative z-10">
                    Every great product starts with a conversation. Whether you need a high-performance web app, a scalable backend, or a seamless user experience, let&rsquo;s connect and get it done.
                </p>
                <button 
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none mt-10 outline-none cursor-pointer z-50"
                    onClick={() => setIsFormOpen(true)}
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white backdrop-blur-3xl">
                        Send a message
                    </span>
                </button>
            </div>

            <>
                {/* Toaster Component for Notifications */}
                <Toaster
                    theme="dark"
                    position="top-center"
                    toastOptions={{
                        className: "text-white bg-black border border-white/20 shadow-lg",
                    }}
                    closeButton
                />

                <AnimatePresence mode="wait">
                    {isFormOpen && (
                        <motion.div 
                            key="form-container" // Unique key to help AnimatePresence track changes
                            initial={{ opacity: 0, height: "fit" }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: "fit", transition: { duration: 0.5, ease: "easeInOut", delay: 0.8 } }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="fixed inset-0 bg-black/10 backdrop-blur-lg border border-black/20 flex items-center justify-center z-[5010] px-5"
                        >
                            <motion.div 
                                key="form-content"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                                transition={{ type: "spring", damping: 20, stiffness: 300, duration: 0.5, delay: 0.5, ease: "easeInOut" }} 
                                ref={formRef} 
                                className="relative max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-black"
                            >
                                {/* Close Icon */}
                                <button
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
                                    onClick={() => setIsFormOpen(false)}
                                    type="button"
                                >
                                    <Minus size={20} />
                                </button>
        
                                <h2 className="font-bold text-xl text-neutral-200">
                                    Get in touch
                                </h2>
                                <p className="text-sm max-w-sm mt-2 text-neutral-300">
                                    Kindly fill the form below to get started.
                                </p>
        
                                <form 
                                    className="my-8" 
                                    onSubmit={handleSubmit}
                                >
                                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                        <LabelInputContainer>
                                            <Label htmlFor="firstname">First name</Label>
                                            <Input 
                                                id="firstname" 
                                                placeholder="Tyler" 
                                                type="text" 
                                                autoComplete="off"
                                                value={formData.firstname}
                                                onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                            />
                                            <AnimatePresence mode="wait">
                                                {errors.firstname && <ErrorMessage message={errors.firstname} />}
                                            </AnimatePresence>
                                        </LabelInputContainer>
                                        <LabelInputContainer>
                                            <Label htmlFor="lastname">Last name</Label>
                                            <Input 
                                                id="lastname" 
                                                placeholder="Durden" 
                                                type="text" 
                                                autoComplete="off"
                                                value={formData.lastname}
                                                onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                            />
                                            <AnimatePresence mode="wait">
                                                {errors.lastname && <ErrorMessage message={errors.lastname} />}
                                            </AnimatePresence>
                                        </LabelInputContainer>
                                    </div>
                                    <LabelInputContainer className="mb-4">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input 
                                            id="email" 
                                            placeholder="example@gmail.com" 
                                            type="email" 
                                            autoComplete="off" 
                                            onInvalid={(e) => e.preventDefault()}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        <AnimatePresence mode="wait">
                                            {errors.email && <ErrorMessage message={errors.email} />}
                                        </AnimatePresence>
                                    </LabelInputContainer>
                                    <LabelInputContainer className="mb-4">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input 
                                            id="subject" 
                                            placeholder="What's the subject?" 
                                            type="text" 
                                            autoComplete="off" 
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                        <AnimatePresence mode="wait">
                                            {errors.subject && <ErrorMessage message={errors.subject} />}
                                        </AnimatePresence>
                                    </LabelInputContainer>
                                    <LabelInputContainer className="mb-4">
                                        <Label htmlFor="message">Message</Label>
                                        <Input 
                                            id="message" 
                                            placeholder="Tell me about your project..." 
                                            type="text" 
                                            autoComplete="off" 
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                        <AnimatePresence mode="wait">
                                            {errors.message && <ErrorMessage message={errors.message} />}
                                        </AnimatePresence>
                                    </LabelInputContainer>
        
                                    <button
                                        className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)inset,0px-1px_0px_0px_var(--zinc-800)_inset]"
                                        type="submit"
                                    >
                                        Send message
                                        <BottomGradient />
                                    </button>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
            <BackgroundBeams />
        </div>
    );
}

const ErrorMessage = ({ message }: { message: string }) => (
    <motion.p 
        initial={{ y: -10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        exit={{ y: -10, opacity: 0 }} 
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-neutral-400 text-sm mt-1"
    >
        {message}
    </motion.p>
);

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};