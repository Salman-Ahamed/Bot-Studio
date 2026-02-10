import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const TestPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/widget");
  }, []);

  return <div>Test</div>;
};
