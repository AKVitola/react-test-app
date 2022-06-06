import { useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductComponent = () => {
    const products = useSelector((state) => state.productListing.products);

    const renderList = Array.from(products).map((product) => {
        const { id, title, description, thumbnail } = product;

        return (
            <Card
                sx={{
                    width: "95%",
                    margin: "5px auto",
                    background: "#f2f8fb",
                    border: "2px solid #92bdca",
                }}
                key={id}
                className="listing-page-card"
            >
                <CardMedia
                    component="img"
                    alt={title}
                    image={thumbnail}
                    className="produc-image"
                />
                <CardContent
                    className="product-listing-card-content"
                    sx={{
                        overflow: "scroll",
                        boxSizing: "border-box"
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="madium"
                        component="a"
                        href={`/products/${id}`}
                        sx={{
                            background: "#92bdca",
                            border: "1px solid #92bdca",
                            width: "100%"
                        }}
                    >
                        More details
                    </Button>
                </CardActions>
            </Card >
        );
    });

    return (
        <>{renderList}</>
    );
};

export default ProductComponent;