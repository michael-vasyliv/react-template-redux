import { getUsersAsync } from '@slices/user';
import { useAppDispatch } from '@store';
import React, { useEffect } from 'react';

export function User() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const promise = dispatch(getUsersAsync());
        return () => promise.abort();
    }, []);

    return (
        <div />
    );
}
