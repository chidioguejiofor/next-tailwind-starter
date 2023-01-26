import { Avatar } from "flowbite-react";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>

      <div>Uses Flowbite to add these Avatars</div>

      <div className="flex flex-wrap gap-2">
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
        />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
      </div>
    </div>
  );
}
