import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function ResetPasswordForm({ className, ...props }: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Reset your password</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter a new password for your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Reset Password
                </Button>
            </div>
            <div className="text-center text-sm">
                Remembered it?{" "}
                <a href="#" className="underline underline-offset-4">
                    Sign in
                </a>
            </div>
        </form>
    );
}
