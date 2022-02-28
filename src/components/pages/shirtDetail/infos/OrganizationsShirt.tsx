import { Maybe, Organizations } from 'graphQl/generated';
import { formatSize } from 'lib/utils';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../../resources/gots.svg';

type Props = {
  organization: Maybe<Organizations> | undefined;
};

const OrganizationsShirt = ({ organization }: Props) => {
  return (
    <>
      {organization && (
        <div className="flex items-center justify-center p-10">
          <div className="w-1/3">
            <img src={logo} alt="test" />
          </div>
          <div className="flex flex-col mx-4">
            <h2 className="mb-5 text-2xl font-medium text-center text-primary">
              {formatSize(organization.name)}
            </h2>
            <Link to="/organizations/:idOrganizations">
              {`En savoir plus sur l'association`}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default OrganizationsShirt;
