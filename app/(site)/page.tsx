import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-neutral-900 m-2 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            Manage your Users
          </h1>
        </div>
      </Header>
    </div>
  );
}
