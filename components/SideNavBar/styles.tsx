export const styles = {
    common: {
        height: '100%',
        position: 'fixed',
        cursor: 'default'
    },
    header: {
        padding: '24px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: '1px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        color: '#D9E1EE',
        cursor: 'pointer'
    },
    menuItem: {
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: '1px',
        overflow: 'hidden',
        color: '#D9E1EE'
    },
    footer: {
        top: {
            textAlign: 'center',
            cursor: 'default'
        },
        child: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            cursor: 'default'
        },
        buttonPadding: {
            padding: '20px 24px',
            cursor: 'pointer'
        },
        iconSize: {
            fontSize: 20,
            cursor: 'pointer'
        }
    }
}