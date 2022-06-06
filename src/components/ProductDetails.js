import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { selectedProduct, removeSelectedProduct } from '../store/actions/productsActions';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CircleIcon from '@mui/icons-material/Circle';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { id, title, description, price, rating, stock, brand, category, thumbnail } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = async (id) => {
        const response = await axios
            .get(`https://dummyjson.com/products/${id}`)
            .catch((err) => {
                console.log('Err: ', err);
            });

        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== '') fetchProductDetails(productId);

        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Card
            key={id}
            sx={{
                maxWidth: "500px",
                width: "95%",
                margin: "10px auto 66px auto",
                background: "#f2f8fb",
                border: "2px solid #92bdca"
            }}
        >
            <CardMedia
                component="img"
                alt={title}
                image={thumbnail}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h4>Price: {price} €</h4>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h4>In stock: {stock} items</h4>
                </Typography>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 500,
                        background: "inherit",
                        border: "1px solid #92bdca"
                    }}
                    component="nav"
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <AddCircleOutlineIcon fontSize='large' />
                        </ListItemIcon>
                        <ListItemText primary="Information" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 3 }}>
                                <ListItemIcon>
                                    <CircleIcon fontSize='small' />
                                </ListItemIcon>
                                <ListItemText primary="Rating" />
                                <ListItemText primary={rating} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 3 }}>
                                <ListItemIcon>
                                    <CircleIcon fontSize='small' />
                                </ListItemIcon>
                                <ListItemText primary="Brand" />
                                <ListItemText primary={brand} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 3 }}>
                                <ListItemIcon>
                                    <CircleIcon fontSize='small' />
                                </ListItemIcon>
                                <ListItemText primary="Category " />
                                <ListItemText primary={category} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </CardContent>
        </Card>
    );
};

export default ProductDetails;