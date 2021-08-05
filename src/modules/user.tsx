import { getCurrentUserAsync } from '@slices/user';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';

export function User() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getCurrentUserAsync());
    }, []);

    return (
        <div />
    );
}
