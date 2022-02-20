import { useQuery } from '@apollo/client';
import { Query } from 'graphQl/generated';
import { usersQuery } from 'graphQl/queries';
import React from 'react';

const HomeContainer = () => {
  const { loading, error, data } = useQuery<Query>(usersQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex">
      {data?.AllUsers?.map((user) => (
        <p key={user?.idUser}>{user?.email}</p>
      ))}
    </div>
  );
};

export default HomeContainer;
