import { ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const fetchImagesCompleted = response => ({ type: 'FETCH_IMAGES_COMPLETED', response });

export const fetchImages = action$ =>
    action$.pipe(
        ofType('FETCH_IMAGES'),
        switchMap(() =>
            ajax.getJSON('https://jsonplaceholder.typicode.com/photos').pipe(
                map(fetchImagesCompleted),
            ),
        ),
    );
