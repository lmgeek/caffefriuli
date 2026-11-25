import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    const counted = sessionStorage.getItem("cf-visit");
    fetch(`https://abacus.jasoncameron.dev/${counted ? "get" : "hit"}/caffefriuli-latina/visite`)
      .then((r) => r.json())
      .then((d) => {
        setCount(d.value);
        sessionStorage.setItem("cf-visit", "1");
      })
      .catch(() => setCount(null));
  }, []);
  if (count === null) return null;
  return (
    <p className="flex items-center gap-2">
      <Eye className="size-3 text-gold" />
      Visite: {count.toLocaleString("it-IT")}
    </p>
  );
}
