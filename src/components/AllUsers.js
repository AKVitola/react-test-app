import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import UserComponent from './UserComponent'
import { getUsers } from '../store/actions/usersActions';

import '../style/generalStyle.css';

const AllUsers = () => {
    const users = useSelector((state) => state.allUsers.users);
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const response = await axios
            .get('https://dummyjson.com/users')
            .catch((err) => {
                console.log('Err: ', err);
            });

        dispatch(getUsers(response.data));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='page-container'>
            <UserComponent />
        </div>
    );
}

export default AllUsers;