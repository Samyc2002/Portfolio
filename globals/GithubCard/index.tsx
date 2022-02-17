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
    const [langData, setLangData] = useState<string[]>([]);

    useEffect(() => {
        const fetchRepo = async () => {
            const repoRes = await axios(`https://api.github.com/repos/${user}/${repo}`);
            setRepoData(repoRes?.data);
        }
        const fetchReadme = async () => {
            axios(`https://raw.githubusercontent.com/${user}/${repo}/master/README.md`).then(readmeRes => {
                setReadme(readmeRes?.data);
            }).catch(err => {
                axios(`https://raw.githubusercontent.com/${user}/${repo}/master/README.md`).then(readmeRes => {
                    setReadme(readmeRes?.data);
                }).catch(err => console.log(err));
            })
        }
        const fetchLangData = async () => {
            const langRes = await axios(`https://api.github.com/repos/${user}/${repo}/languages`);
            const langs = Object.keys(langRes?.data);
            setLangData(langs);
        }
        fetchRepo();
        fetchReadme();
        fetchLangData();
    }, [user, repo]);

    return (
        <>
            <div className={styles.root}>
                {image && (
                    <Image
                        src={image}
                        alt="Image"
                        width={768}
                        height={300}
                    />
                )}
                <div className={styles.content}>
                    <a href={repoData?.html_url} rel="noreferrer" target="_blank">
                        <h5 className={styles.h5}>
                            {repoData?.owner?.login}/{repoData?.name}
                        </h5>
                    </a>
                    <h4 className={styles.h4}>
                        {repoData?.description}
                    </h4>
                    <h4 className={styles.h4}>
                        <span className={styles.span}>Languages:</span> {langData.map((lang, index) => {
                            if(index === langData.length-1) {
                                return `${lang}`;
                            } else {
                                return `${lang}, `;
                            }
                        })}
                    </h4>
                </div>
            </div>
        </>
    )
}

export default GithubCard;
