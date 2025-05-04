import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner'; // Import toast
import { Mail, Send, Loader2 } from 'lucide-react'; // Using icons
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input';   
import { Textarea } from '@/components/ui/textarea'; 
import { Label } from '@/components/ui/label';     

// Define form input types
type FormInputs = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit: handleRHFSubmit, reset, formState: { errors } } = useForm<FormInputs>();
  const formspreeEndpoint = "https://formspree.io/f/meogaydd";

  // AJAX submission handler for Formspree
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json', // Important for AJAX submission
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset(); // Clear the form
      } else {
        // Attempt to parse error from Formspree response
        const responseData = await response.json();
        const errorMessage = responseData?.errors?.map((err: any) => err.message).join(', ') || 'An error occurred.';
        toast.error(`Failed to send message: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Mail className="h-12 w-12 text-navy mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Contact Us</h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
            Have questions, feedback, or suggestions? We'd love to hear from you! Fill out the form below or email us directly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Use react-hook-form's handleSubmit for AJAX submission */}
          <form onSubmit={handleRHFSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-navy font-medium">Name</Label>
              <Input 
                id="name" 
                {...register("name", { required: "Name is required" })}
                className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Your Name" 
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-navy font-medium">Email</Label>
              <Input 
                id="email" 
                type="email"
                {...register("email", { 
                  required: "Email is required", 
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
                })}
                className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="your.email@example.com" 
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="message" className="text-navy font-medium">Message</Label>
              <Textarea 
                id="message" 
                rows={5} 
                {...register("message", { required: "Message is required" })}
                className={`mt-1 ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Your message..." 
                disabled={isSubmitting}
              />
              {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
            </div>
            <div className="text-center">
              {/* Submit button with loading state */}
              <Button 
                type="submit" 
                className="bg-croissant hover:bg-croissant-dark text-white px-8 py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
          
          <div className="text-center mt-12">
             <p className="text-navy-light">Alternatively, you can reach us at:</p>
             <a href="mailto:croissantquestions@gmail.com" className="text-croissant hover:text-croissant-dark font-medium">
             croissantquestions@gmail.com
             </a>
             {/* Add social media links if applicable */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
