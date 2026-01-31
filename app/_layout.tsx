import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuth = false;

  // Delay navigation to ensure the root layout and its navigators mount first
  useEffect(() => {
    if (!isAuth) {
      const t = setTimeout(() => router.replace("/auth"), 0);
      return () => clearTimeout(t);
    }
  }, [router, isAuth]);

  return <>{children}</>;
}

export default function TabsLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
  );
}
