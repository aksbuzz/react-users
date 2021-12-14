import { Link, Outlet, useSearchParams } from 'react-router-dom';

const Users = props => {
	const { users = [] } = props;
	const [searchParams, setSearchParams] = useSearchParams();
	const searchTerm = searchParams.get('name') || '';

	const handleChange = e => {
		const name = e.target.value;
		if (name) {
			setSearchParams({ name });
		} else {
			setSearchParams({});
		}
	};
	return (
		<>
			<input
				type={'text'}
				placeholder='Search for a user'
				value={searchTerm}
				onChange={handleChange}
				style={{ marginTop: '1rem' }}
			/>
			<div
				style={{
					display: 'flex',
					justifyContent: 'start',
					alignItems: 'center',
				}}
			>
				<ul
					style={{
						listStyle: 'none',
						textDecoration: 'none',
						// display: 'flex',
						// flex: '1',
					}}
				>
					{users &&
						users
							.filter(user =>
								user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
							)
							.map(user => (
								<li key={user.id}>
									<Link to={`${user.id}`}>
										<h2>User {user.name}</h2>
									</Link>
								</li>
							))}
				</ul>
				<div style={{ marginLeft: '2rem' }}>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Users;
