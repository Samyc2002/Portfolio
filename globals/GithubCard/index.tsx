import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

import styles from './styles.module.css';

interface Iprops{
    user: string;
    repo: string;
    image?: string;
}

const GithubCard = ({ user, repo, image }: Iprops) => {

    const [repoData, setRepoData] = useState<any>({});
    const [readme, setReadme] = useState<any>({});

    useEffect(() => {
        const fetchRepo = async () => {
            const repoRes = await axios(`https://api.github.com/repos/${user}/${repo}`);
            setRepoData(repoRes?.data);
        }
        const fetchReadme = async () => {
            const readmeRes = await axios(`https://raw.githubusercontent.com/${user}/${repo}/master/README.md`);
            setReadme(readmeRes?.data);
        }
        fetchRepo();
        fetchReadme();
    });

    return (
        <div className={styles.root}>
            {image && (
                <Image
                    src={image}
                    alt="Image"
                    layout="fill"
                />
            )}
            <a href={repoData?.html_url} rel="noreferrer" target="_blank">
                <h5 className={styles.h5}>
                    {repoData?.owner?.login}/{repoData?.name}
                </h5>
            </a>
            <h4 className={styles.h4}>
                {repoData?.description}
            </h4>
        </div>
    )
}

export default GithubCard;
