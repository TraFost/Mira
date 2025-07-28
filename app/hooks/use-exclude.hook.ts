import { usePathname } from "next/navigation";

export function useExclude(pathnames: string[] | string): boolean {
  const pathname = usePathname();

  return Array.isArray(pathnames)
    ? pathnames.includes(pathname)
    : pathnames === pathname;
}
