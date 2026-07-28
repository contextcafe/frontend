"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const onboardingSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  dob: z.string().nonempty("Date of birth is required"),
  // Additional fields can be added here
});

type OnboardingValues = z.infer<typeof onboardingSchema>;

const steps = [
  {
    id: "step-1",
    title: "Let's get to know you",
    subtitle: "What is your name?",
    fields: ["firstName", "lastName"],
  },
  {
    id: "step-2",
    title: "When were you born?",
    subtitle: "Don't worry, it's only to wish you Happy Birthday! 🎉",
    fields: ["dob"],
  },
  {
    id: "step-3",
    title: "All set!",
    subtitle: "Your Baker profile is ready to go.",
    fields: [],
  }
];

export function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<OnboardingValues>({
    resolver: zodResolver(onboardingSchema),
    mode: "onTouched",
  });

  const handleNext = async () => {
    const fieldsToValidate = steps[currentStep].fields as Array<keyof OnboardingValues>;
    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      if (currentStep === steps.length - 2) {
        // Submit the form on the last input step
        handleSubmit(onSubmit)();
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (data: OnboardingValues) => {
    setIsSubmitting(true);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("No user found");
      }

      // Upsert profile data to the 'BakerProfile' table based on Prisma schema
      const { error } = await supabase
        .from('BakerProfile')
        .upsert({ 
          id: user.id, 
          name: `${data.firstName} ${data.lastName}`.trim(),
          email: user.email,
          dateOfBirth: data.dob ? new Date(data.dob).toISOString() : null,
          updatedAt: new Date().toISOString(),
        });

      if (error) throw error;

      // Move to success step
      setCurrentStep(steps.length - 1);
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push("/bakers");
        router.refresh();
      }, 2500);

    } catch (error: any) {
      console.error("Error saving profile:", error);
      // Supabase errors usually have a message property
      setSubmitError(error?.message || JSON.stringify(error) || "An unexpected error occurred while saving your profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto relative">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              className={`w-1/3 h-2 rounded-full mx-1 transition-colors duration-500 ${
                idx <= currentStep ? 'bg-indigo-600' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-slate-500 text-center font-medium mt-4">
          Step {Math.min(currentStep + 1, steps.length)} of {steps.length}
        </p>
      </div>

      <div className="glass-panel rounded-3xl p-8 relative overflow-hidden bg-white/80">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2 font-display">
                {steps[currentStep].title}
              </h2>
              <p className="text-slate-500 text-lg">
                {steps[currentStep].subtitle}
              </p>
            </div>

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
                <strong>Error saving profile:</strong> {submitError}
                <p className="mt-1 text-xs opacity-80">
                  Please check your Supabase dashboard: Ensure the `BakerProfile` table exists and Row Level Security (RLS) allows inserts/updates for your user.
                </p>
              </div>
            )}

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Jane"
                      {...register("firstName")}
                      className={errors.firstName ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      {...register("lastName")}
                      className={errors.lastName ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      {...register("dob")}
                      className={errors.dob ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.dob && (
                      <p className="text-sm text-red-500">{errors.dob.message}</p>
                    )}
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 flex items-start space-x-3 mt-4">
                    <div className="text-2xl">🎂</div>
                    <p className="text-sm text-indigo-800 leading-relaxed">
                      We use your date of birth to personalize your experience and ensure you meet the age requirements for our legal platform.
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-24 h-24 text-green-500" />
                  </motion.div>
                  <p className="text-slate-600 animate-pulse">Redirecting you to the dashboard...</p>
                </div>
              )}
            </form>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {currentStep < steps.length - 1 && (
          <div className="mt-10 flex justify-between gap-4">
            {currentStep > 0 ? (
              <Button
                variant="outline"
                className="w-1/3 h-12 rounded-xl"
                onClick={handleBack}
                disabled={isSubmitting}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            ) : (
              <div className="w-1/3" /> 
            )}
            
            <Button
              className="flex-1 h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700"
              onClick={handleNext}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <>
                  {currentStep === steps.length - 2 ? "Complete Profile" : "Continue"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
