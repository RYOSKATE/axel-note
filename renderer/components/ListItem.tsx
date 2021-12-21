import Link from 'next/link';
import React from 'react';

import { User } from '../interfaces';

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => (
  <Link href='/detail/[id]' as={`/detail/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
