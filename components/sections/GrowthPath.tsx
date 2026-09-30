interface Stat { value: string; label: string; blue?: boolean }
interface Props { title?: string; stats?: Stat[]; image?: string }

export default function GrowthPath({ title = "Your Path to Professional Growth Starts Here!", image = "images/growth.jpeg",
  stats = [{ value: "10K", label: "Students", blue: true }, { value: "50+", label: "Courses" }, { value: "11", label: "Creators" }] }: Props) {
  return (
    <div id="about" className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-md text-mute">Learn at your own pace with structured courses taught by working professionals, and track every step of your progress.</p>
        <dl className="mt-8 flex gap-10">
          {stats.map((s) => (<div key={s.label}><dt className="sr-only">{s.label}</dt><dd className={`text-4xl font-bold ${s.blue ? "text-brand" : ""}`}>{s.value}</dd><p className="text-mute">{s.label}</p></div>))}
        </dl>
      </div>
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="Learn Figma course preview" width={560} height={380} className="w-full rounded-card object-cover" />
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white p-4 shadow-xl">
          <div className="flex justify-between font-semibold"><span>Learn Figma</span><span className="text-brand">48%</span></div>
          <div className="mt-2 h-2 rounded-full bg-soft2"><div className="h-2 w-[48%] rounded-full bg-brand" /></div>
        </div>
      </div>
    </div>
  );
}
