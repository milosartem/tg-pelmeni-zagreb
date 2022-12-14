import React from 'react';
import {useTelegram} from "../../components/Hooks/useTelegram.js"

const Header = () => {
    const{user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header;