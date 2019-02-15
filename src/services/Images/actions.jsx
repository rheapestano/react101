import { 
    SHIBES_GET_IMGS_REQUEST,
 } from '../types'

export const getImages = (imageCount) => ({
    type: SHIBES_GET_IMGS_REQUEST,
    payload: imageCount ,
});


