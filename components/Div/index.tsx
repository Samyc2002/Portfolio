import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

import { colors } from '../../styles/colors';

interface Iprops {
    children: React.ReactNode;
    href: string;
}

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: `#fafafa20`,
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    backdropFilter: "blur(20px)",
    textAlign: 'center',
    width: 'fit-content',
    borderRadius: '0.75rem',
    cursor: 'default'
}));

const LinkedDivStyle = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: `#fafafa20`,
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    backdropFilter: "blur(20px)",
    textAlign: 'center',
    width: 'fit-content',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
        color: colors.orange,
        fotWeight: 600
    }
}));

const LinkedDiv = ({ children, href }: Iprops) => {
    const router = useRouter();

    return (
        <LinkedDivStyle onClick={() => router.push(href)}>
            {children}
        </LinkedDivStyle>
    )
}

export { Div, LinkedDiv };