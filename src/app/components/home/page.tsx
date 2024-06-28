
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  
  return (
    <>
      <h1>{session?.user?.name}</h1>
      <p>email: {session?.user?.email}</p>
      
    </>
  );
}