import { useSelector } from 'react-redux';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import '../style/generalStyle.css';

const ImageComponent = () => {
    const photos = useSelector((state) => state.gallery);
    const renderList = [];

    for (const key in photos) {
        const photo = photos[key];
        const imageHtml =
            <ImageListItem key={photo.id}>
                <img
                    src={`${photo.url}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${photo.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={photo.title}
                    loading="lazy"
                />
            </ImageListItem>

        renderList.push(imageHtml);
    }

    return (
        <ImageList
            sx={{
                height: "100%",
                margin: 0,
            }}
        >
            <>{renderList}</>
        </ImageList>
    );
};

export default ImageComponent;