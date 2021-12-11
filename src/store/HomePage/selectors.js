import { createSelector } from 'reselect';

const homePageSelector = state => state.homePageState;
// gives you the whole homePage state

const homePageUserSelector = state => state.homePageState.users;
// will give you users
// state.homePageState.error will give you error(if defined in the state)

export const makeSelectUsers = createSelector(
	homePageSelector,
	homePage => homePage.users
);

export const makeSelectLoading = createSelector(
	homePageSelector,
	homePage => homePage.loading
);

export const makeSelectError = createSelector(
	homePageSelector,
	homePage => homePage.error
);
export const makeSelectTotalUsers = createSelector(
	homePageUserSelector,
	users => users.length
);
// OR createSelector(homePageUserSelector, users => users)
// users can be anything data => data will work too.
// users => users.length will gsive you total users.
