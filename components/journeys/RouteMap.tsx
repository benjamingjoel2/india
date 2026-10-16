import { JaaliPanel } from "@/components/ui/Jaali";

/**
 * Map placeholder: a stylised route diagram of the stops in travel order.
 * TODO: replace with an interactive map (Mapbox/MapLibre) using destination coordinates.
 */
export function RouteMap({ stops }: { stops: string[] }) {
  const n = stops.length;
  const w = 600;
  const h = 360;
  const pts = stops.map((_, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    return { x: 60 + t * (w - 120), y: h / 2 + Math.sin(t * Math.PI * 1.6) * 90 };
  });
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  return (
    <figure className="relative overflow-hidden bg-ivory-deep">
      <JaaliPanel className="absolute inset-0 text-indigo opacity-[0.06]" />
      <svg viewBox={`0 0 ${w} ${h}`} className="relative w-full" role="img" aria-label={`Route: ${stops.join(", then ")}`}>
        <path d={d} fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 6" className="text-indigo/60" />
        {pts.map((p, i) => (
          <g key={stops[i] + i}>
            <rect x={p.x - 6} y={p.y - 6} width="12" height="12" transform={`rotate(45 ${p.x} ${p.y})`} className="fill-marigold" />
            <text x={p.x} y={p.y + (i % 2 ? 30 : -20)} textAnchor="middle" className="fill-charcoal font-display text-[15px]">
              {stops[i]}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="absolute right-4 bottom-3 text-[0.7rem] tracking-wide text-stone uppercase">Map placeholder · route not to scale</figcaption>
    </figure>
  );
}
