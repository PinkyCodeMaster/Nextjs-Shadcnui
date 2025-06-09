import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function TwoFactorForm() {
    return (
        <form className="w-full max-w-xs space-y-6">
            <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="size-8 text-primary" />
                <h1 className="text-2xl font-bold">Two-Factor Authentication</h1>
                <p className="text-muted-foreground text-sm">
                    Enter the 6-digit code from your authenticator app or email.
                </p>
            </div>

            <div className="grid gap-3">
                <Label htmlFor="code">Authentication Code</Label>
                <Input
                    id="code"
                    name="code"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    placeholder="123456"
                    maxLength={6}
                    required
                />
            </div>

            <Button type="submit" className="w-full">
                Verify
            </Button>

            <div className="text-center text-sm text-muted-foreground">
                Didn’t receive a code?{" "}
                <a href="#" className="underline underline-offset-4">
                    Resend
                </a>
            </div>
        </form>
    );
}
