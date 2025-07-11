import { VerifyEmailForm } from "@/components/auth/resend-verification-email";
import { GalleryVerticalEnd } from "lucide-react";

export default function ResetPasswordPage() {
    return (
        <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex justify-center gap-2 md:justify-start">
                <a href="#" className="flex items-center gap-2 font-medium">
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    Acme Inc.
                </a>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-xs">
                    <VerifyEmailForm />
                </div>
            </div>
        </div>
    )
}
