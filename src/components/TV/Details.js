import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../../Providers';
import Details from '../Details';

export default function TvList() {
  const params = useParams();
  const tvId = params.tvId;

  const {
    tv: { genres },
  } = useContext(AppContext);

  return <Details id={tvId} genres={genres} type="tv" />;
}
