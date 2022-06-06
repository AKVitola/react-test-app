import { useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserComponent = () => {
    const users = useSelector((state) => state.allUsers.users);

    const renderList = Array.from(users).map((user) => {
        const { id, firstName, lastName, maidenName, image, university, age } = user;

        return (
            <Card
                sx={{
                    width: "95%",
                    margin: "5px auto",
                    background: "#f2f8fb",
                    border: "2px solid #92bdca"
                }}
                key={id}
                className="listing-page-card"
            >
                <CardMedia
                    component="img"
                    alt="${firstName} image"
                    image={image}
                />
                <CardContent
                    className="user-listing-card-content">
                    <Typography gutterBottom variant="h5" component="div">
                        {firstName} {lastName} {maidenName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Was assembled {age} years ago. {firstName} is attending {university} to study human behavior.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="madium"
                        component="a"
                        href={`/users/${id}`}
                        sx={{
                            background: "#92bdca",
                            border: "1px solid #92bdca",
                            width: "100%"
                        }}
                    >
                        Learn more
                    </Button>
                </CardActions>
            </Card >
        );
    });

    return (
        <>{renderList}</>
    );
};

export default UserComponent;