import getUsers from "@/actions/getUsers";
import Header from "@/components/Header";

import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="bg-neutral-900 m-2 rounded-lg min-h-screen w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            Manage platform Users
          </h1>
          <p>
            You can only modify your own details. Modify password by logging out
            and selecting
            <strong> Forgot your password?</strong>.
          </p>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <PageContent users={users} />
      </div>
    </div>
  );
}
