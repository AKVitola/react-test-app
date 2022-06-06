import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import ImageComponent from './ImageComponent'
import { getPhotos } from '../store/actions/photosActions';

import '../style/generalStyle.css';

const Gallery = () => {
    const photos = useSelector((state) => state.gallery);
    const dispatch = useDispatch();

    const fetchPhotos = async () => {
        const response = await axios
            .get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .catch((err) => {
                console.log('Err: ', err);
            });

        dispatch(getPhotos(response.data));
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    return (
        <div className='page-container'>
            <ImageComponent />
        </div>
    )
}

export default Gallery;