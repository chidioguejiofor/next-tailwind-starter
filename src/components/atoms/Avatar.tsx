import React from 'react';

type AvatarProps = {
  src: string;
};
const Avatar = (props: AvatarProps) => {
  return (
    <img
      className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
      src={props.src}
      alt="Bordered avatar"
    />
  );
};

export default Avatar;
