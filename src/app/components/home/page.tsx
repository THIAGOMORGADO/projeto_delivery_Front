/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      <h1>{session?.user?.name}</h1>
      <p>email: {session?.user?.email}</p>
      <img src={session?.user?.image && session?.user?.image} />
    </>
  );
}