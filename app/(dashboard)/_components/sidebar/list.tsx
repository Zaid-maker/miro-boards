"use client";

import { useOrganizationList } from "@clerk/nextjs";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul>
      {userMemberships.data?.map((mem) => {
        <p key={mem.organization.id}>{mem.organization.name}</p>;
      })}
    </ul>
  );
};
