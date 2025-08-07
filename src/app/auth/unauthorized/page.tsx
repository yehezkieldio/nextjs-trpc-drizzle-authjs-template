import { ShieldAlertIcon } from "lucide-react";
import Link from "next/link";

export default function UnauthorizedPage() {
    return (
        <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background text-foreground">
            <div className="relative w-full max-w-sm px-4">
                <div className="rounded-md border border-border/10 bg-card/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_12px_32px_-16px_rgba(0,0,0,0.4)] backdrop-blur supports-[backdrop-filter]:bg-card/50 sm:p-7">
                    <div className="space-y-6 text-center">
                        <div className="space-y-1">
                            <h1 className="text-2xl tracking-tight">Access Denied</h1>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                You are not authorized to authenticate with this application.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <div className="flex justify-center">
                            <div className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-destructive/10 text-destructive">
                                <ShieldAlertIcon className="h-4 w-4" />
                                <span className="text-sm">Unauthorized</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-3 border-border/60 border-t pt-6 text-center">
                        <p className="text-muted-foreground text-xs">Return to safety</p>
                        <Link
                            className="inline-flex h-8 items-center justify-center text-primary text-xs transition hover:text-primary/80"
                            href="/"
                        >
                            Go Home →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
