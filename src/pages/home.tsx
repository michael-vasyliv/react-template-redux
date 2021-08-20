import { useAppDispatch } from '@features/store';
import { getUsersAsync } from '@features/users/actions';
import React, { useEffect } from 'react';

export function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const promise = dispatch(getUsersAsync());
        return () => promise.abort();
    }, []);

    return (
        <div />
    );
}
