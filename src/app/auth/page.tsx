import Link from "next/link";
import { Suspense } from "react";
import { Icons } from "#/components/icons";
import { Button } from "#/components/ui/button";
import { UserAuthGate } from "#/components/user-auth-gate";
import { signIn, signOut } from "#/server/auth";

export default async function LoginPage() {
    return (
        <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background text-foreground">
            <div className="relative w-full max-w-sm px-4">
                <div className="rounded-md border border-border/10 bg-card/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_12px_32px_-16px_rgba(0,0,0,0.4)] backdrop-blur supports-[backdrop-filter]:bg-card/50 sm:p-7">
                    <div className="space-y-6 text-center">
                        <div className="space-y-1">
                            <h1 className="text-2xl tracking-tight">Next.js tRPC Template</h1>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <div className="flex justify-center">
                            <Suspense
                                fallback={
                                    <Button className="w-full" disabled size="default" variant="outline">
                                        Please wait...
                                    </Button>
                                }
                            >
                                <UserAuthGate>
                                    {(isAdministratorUser) =>
                                        isAdministratorUser ? (
                                            <form
                                                action={async () => {
                                                    "use server";
                                                    await signOut({ redirectTo: "/" });
                                                }}
                                                className="w-full"
                                            >
                                                <Button
                                                    className="w-full"
                                                    size="default"
                                                    type="submit"
                                                    variant="destructive"
                                                >
                                                    Sign out
                                                </Button>
                                            </form>
                                        ) : (
                                            <form
                                                action={async () => {
                                                    "use server";
                                                    await signIn("discord", { redirectTo: "/" });
                                                }}
                                                className="w-full"
                                            >
                                                <Button className="w-full" size="default" type="submit">
                                                    <Icons.discord />
                                                    Continue with Discord
                                                </Button>
                                            </form>
                                        )
                                    }
                                </UserAuthGate>
                            </Suspense>
                        </div>
                    </div>

                    <div className="mt-8 space-y-3 border-border/60 border-t pt-6 text-center">
                        <p className="text-muted-foreground text-xs">Continue as guest</p>
                        <Link
                            className="inline-flex h-8 items-center justify-center text-primary text-xs transition hover:text-primary/80"
                            href="/library"
                        >
                            Continue →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
