import Button from "../ui/Button";
export default function CreatorBanner({ title = "Unlock Your Potential as a Creator with ByteSpace", description = "Turn your expertise into income. Publish courses, build an audience and grow with a community of learners." }) {
  return (
    <section className="relative overflow-hidden bg-brand2 px-4 py-20 text-center text-white md:px-10">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div aria-hidden className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-lime" />
      <div aria-hidden className="absolute -bottom-8 -right-8 h-32 w-32 rotate-45 rounded-2xl bg-lime" />
      <div aria-hidden className="absolute bottom-6 left-10 h-0 w-0 border-x-[20px] border-b-[34px] border-x-transparent border-b-white" />
      <div aria-hidden className="absolute right-16 top-8 h-6 w-6 rounded-full bg-white" />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mt-4 text-sm text-periwinkle">{description}</p>
        <Button href="/signup" variant="lime" className="mt-8">Join as Creator</Button>
      </div>
    </section>
  );
}
