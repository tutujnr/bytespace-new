import Card from "../ui/Card";
import Image from 'next/image';
import { testimonials } from "@/lib/data";
export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-[#f3ffd0] to-[#eef0ff] px-4 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-md text-3xl font-bold md:text-4xl">Discover What Our Community Is Saying</h2>
          <p className="max-w-sm text-mute">Thousands of learners and creators use ByteSpace every week. Here is what a few of them told us.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6">
              <div className="mb-4 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                <div><p className="font-bold">{t.name}</p><p className="text-xs text-brand">{t.role}</p></div>
              </div>
              <p className="text-xs leading-relaxed text-mute">{t.quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
