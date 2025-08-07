import { auth } from "#/server/auth";

interface UserGateProps {
    children: (isAdministratorUser: boolean) => React.ReactNode;
}

export async function UserAuthGate({ children }: UserGateProps) {
    const session = await auth();
    const isAdministratorUser = !!session?.user;

    return <>{children(isAdministratorUser)}</>;
}
