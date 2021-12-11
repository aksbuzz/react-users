import { createSelector } from 'reselect';

const userPageUserSelector = state => state.userPageState.user;

export const makeSelectUser = createSelector(
	userPageUserSelector,
	user => user
);
