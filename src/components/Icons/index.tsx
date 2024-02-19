export const UserIcon = ({color} : {color?: string}) => {
    return (
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountCircleIcon">
            <path fill={color ? color : ""} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20">
            </path>
        </svg>
    );
};

export const CloseIcon = ({color, onClick} : {color?: string, onClick?: ()=>void}) => {
    return (
        <div onClick={onClick} style={{cursor: "pointer"}}>
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon">
                <path fill={color ? color : ""} d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
        </div>
    )
}