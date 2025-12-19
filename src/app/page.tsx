import { ChatMessageList } from "@/components/ChatMessageList";
import { UserPanel } from "@/components/UserPanel";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-6">
      <main className="flex w-full max-w-3xl flex-col gap-6 px-6 py-12">
        <UserPanel />
        <ChatMessageList />
      </main>
    </div>
  );
}
