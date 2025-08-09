import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Calendar, Clock, Heart, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
      const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'info@dominiquestrategic.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        },
        publicKey
      );
      
      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="border-border focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="border-border focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="border-border focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('contact.subject')}</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="border-border focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message')}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about what you're looking for..."
                      rows={5}
                      className="border-border focus:ring-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero hover:opacity-90 transition-opacity relative"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      t('contact.sendMessage')
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Calendly */}
            <div className="space-y-8">
              
              {/* Quick Contact */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Phone className="h-6 w-6 text-primary" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:info@dominiquestrategic.com">info@dominiquestrategic.com</a>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+15145011194">(514) 501-1194</a>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <a href="https://www.google.com/maps/place/88+Boulevard+St+Joseph+E,+Montreal,+Quebec,+H2T+1H1/@45.502166,-73.568566,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91b41b4b4b4b4:0x4b4b4b4b4b4b4b4b!8m2!3d45.502166!4d-73.566366">88 Boul. St. Joseph E., Montreal, Quebec - H2T 1H1</a>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Consultation */}
              <Card className="shadow-warm bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    {t('contact.scheduleCall')}
                  </CardTitle>
                  <CardDescription>
                    Book a 30-minute free consultation to discuss your goals and how we can help you achieve them.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-hero shadow-soft"
                    onClick={() => window.open('https://calendly.com/christian-coach/1-hour-consult?embed_domain=dominiquestrategic.com&embed_type=Inline', '_blank')}
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Now
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    No commitment required • 100% confidential
                  </p>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Heart className="h-6 w-6 text-primary" />
                    Our Specialties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{t('services.happiness.title')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">{t('services.health.title')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{t('services.couples.title')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-muted-foreground">{t('services.organization.title')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};