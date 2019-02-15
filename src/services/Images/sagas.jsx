import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
    SHIBES_GET_IMGS_REQUEST,
    SHIBES_GET_IMGS_FAILURE,
    SHIBES_GET_IMGS_SUCCESS
} from '../types';

const BASE_API = 'https://us-central1-react-training-101.cloudfunctions.net/api/shibes';

function* getImages(action) {
    try {

        const response = yield call(axios.get, BASE_API, {
            params : {
                count : action.payload  ,
                //count : 3
            }
        });
        yield put({
            type: SHIBES_GET_IMGS_SUCCESS,
            payload: {
                images : response.data,
                imageCount : action.payload,
            } ,
        });
    } catch (err) {
        console.error(err);
        yield put({ type: SHIBES_GET_IMGS_FAILURE });
    }
}

export default function* () {
    yield takeLatest(SHIBES_GET_IMGS_REQUEST, getImages);
};