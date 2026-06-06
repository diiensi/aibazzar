export default function Loading() {
  return (
    <div className="p-8">
      <div className="h-8 w-40 animate-pulse rounded bg-slate-200" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[0, 1, 2].map((i) => <div key={i} className="h-28 animate-pulse rounded-lg bg-slate-200" />)}
      </div>
      <div className="mt-6 h-64 animate-pulse rounded-lg bg-slate-200" />
    </div>
  );
}