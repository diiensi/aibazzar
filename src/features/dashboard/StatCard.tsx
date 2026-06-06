import { Card } from "@/components/ui/Card";

interface Props {
  label: string;
  value: string;
  sub?: string;
  deltaPct?: number;
}
export function StatCard({ label, value, sub, deltaPct }: Props) {
  const up = (deltaPct ?? 0) >= 0;
  return (
    <Card>
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-2 text-2xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-xs text-muted">
        {sub}{" "}
        {deltaPct !== undefined && (
          <span className={up ? "text-success" : "text-danger"}>
            {up ? "↑" : "↓"} {Math.abs(deltaPct)}%
          </span>
        )}
      </p>
    </Card>
  );
}