import Button from "@/components/ui/Button";
export default function NotFound() {
  return (
    <main className="grid-bg flex min-h-screen flex-col items-center justify-center bg-brand px-4 text-center text-white">
      <h1 className="text-[9rem] font-extrabold leading-none text-lime md:text-[14rem]">404</h1>
      <p className="mb-8 text-lg">The page you are looking for doesn&apos;t exist</p>
      <Button href="/" variant="lime">Back to home</Button>
    </main>
  );
}
