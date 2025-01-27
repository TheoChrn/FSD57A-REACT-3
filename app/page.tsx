import { Greeting } from "@/components/greeting";

export default function Home() {
  return (
    <div className="space-y-8">
      <Greeting name="John Doe" />
      <Greeting name="Jane Doe" age={32} />
    </div>
  );
}
