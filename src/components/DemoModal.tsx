import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, Loader2, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  workEmail: string;
  company: string;
  role: string;
  message: string;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    workEmail: "",
    company: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fire analytics event
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("analytics", { detail: { event: "demo_request_submitted" } }));
    }

    try {
      const { error } = await supabase.from("leads").insert({
        full_name: formData.fullName,
        work_email: formData.workEmail,
        company: formData.company,
        role: formData.role,
        message: formData.message || null,
        source: "demo_request",
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Request submitted",
        description: "We'll be in touch within 24 hours.",
      });
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us at info@zrotrustai.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after animation
    setTimeout(() => {
      setFormData({ fullName: "", workEmail: "", company: "", role: "", message: "" });
      setIsSuccess(false);
    }, 300);
  };

  const handleOpen = (open: boolean) => {
    if (open) {
      // Fire analytics event when modal opens
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("analytics", { detail: { event: "demo_request_opened" } }));
      }
    } else {
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpen}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-xl">Thank you!</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                We've received your request and will be in touch within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={handleClose} className="mt-6">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <DialogTitle>Request a Demo</DialogTitle>
              </div>
              <DialogDescription>
                See how ZROTrust.AI can help you ship GenAI with confidence.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workEmail">Work email *</Label>
                <Input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  placeholder="jane@company.com"
                  className="bg-background"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Acme Inc."
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role *</Label>
                  <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    placeholder="CISO"
                    className="bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your use case..."
                  rows={3}
                  className="bg-background resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Request Demo"
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our{" "}
                <a href="/legal/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
