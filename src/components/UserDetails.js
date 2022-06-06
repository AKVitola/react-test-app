import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { selectedUser, removeSelectedUser } from '../store/actions/usersActions';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const UserDetails = () => {
    const user = useSelector((state) => state.user);
    const { id, image, firstName, lastName, maidenName, gender, email, phone, username, birthDate, bloodGroup, height, weight, eyeColor } = user;
    const { userId } = useParams();
    const dispatch = useDispatch();

    const fetchUserDetails = async (id) => {
        const response = await axios
            .get(`https://dummyjson.com/users/${id}`)
            .catch((err) => {
                console.log('Err: ', err);
            });

        dispatch(selectedUser(response.data));
    };

    useEffect(() => {
        if (userId && userId !== '') fetchUserDetails(userId);

        return () => {
            dispatch(removeSelectedUser());
        };
    }, [userId]);

    return (
        <Card
            key={id}
            sx={{
                maxWidth: "500px",
                width: "95%",
                margin: "10px auto 66px auto",
                background: "#f2f8fb",
                border: "2px solid #92bdca"
            }}>
            <CardMedia
                component="img"
                alt="${firstName} image"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {firstName} {lastName} {maidenName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>General data</h3>
                    <ul>
                        <li>Date of assembly: {birthDate}</li>
                        <li>Gender: {gender}</li>
                        <li>Height: {height}</li>
                        <li>Weight: {weight}</li>
                    </ul>

                    <h3>Contact information</h3>
                    <ul>
                        <li>Email: {email}</li>
                        <li>Phone: {phone}</li>
                        <li>Username: {username}</li>
                    </ul>

                    <h3>Desired human features</h3>
                    <ul>
                        <li>Eye color: {eyeColor}</li>
                        <li>Blood group: {bloodGroup}</li>
                    </ul>
                </Typography>
            </CardContent>
        </Card >
    );
};

export default UserDetails;