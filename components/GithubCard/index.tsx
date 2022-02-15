import React from 'react';
import { GithubCard as Card } from '../../globals';

interface Iprops{
  repo: string,
  image?: string
}

const GithubCard = ({ repo, image }: Iprops) => {
  return (
    <Card user="Samyc2002" repo={repo} image={image} />
  )
}

export default GithubCard;