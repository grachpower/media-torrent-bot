import { Observable, Observer } from 'rxjs';
import axios, { AxiosResponse } from "axios";

export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
}

export interface RequestParams {
    url?: string;
    method?: string;
    baseURL?: string;
    headers?: any;
    params?: any;
    paramsSerializer?: (params: any) => string;
    data?: any;
    timeout?: number;
    withCredentials?: boolean;
    responseType?: string;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: (progressEvent: any) => void;
    onDownloadProgress?: (progressEvent: any) => void;
    maxContentLength?: number;
    validateStatus?: (status: number) => boolean;
    maxRedirects?: number;
    httpAgent?: any;
    httpsAgent?: any;
}

export interface Response<T = any> extends AxiosResponse { }

export class Http {
    public static get<T>(request: string, params: RequestParams = {}): Observable<T> {
        return Observable.create((observer: Observer<Response<T>>) => {
            axios.get<T>(request, params)
            .then((response: Response) => {
                observer.next(response.data);
                observer.complete();
            })
            .catch((response: Response) => {
                observer.error(response);
                observer.complete();
            })
        })
    }

    public static post<T>(request: string, params: any = {}): Observable<T> {
        return Observable.create((observer: Observer<Response<T>>) => {
            axios.post<T>(request, params)
            .then((response: Response) => {
                observer.next(response.data);
                observer.complete();
            })
            .catch((response: Response) => {
                observer.error(response);
                observer.complete();
            })
        })
    }

    public static delete<T>(request: string, params: any = {}): Observable<T> {
        return Observable.create((observer: Observer<Response<T>>) => {
            axios.delete(request, params)
            .then((response: Response) => {
                observer.next(response.data);
                observer.complete();
            })
            .catch((response: Response) => {
                observer.error(response);
                observer.complete();
            })
        })
    }

    public static put<T>(request: string, params: any = {}): Observable<T> {
        return Observable.create((observer: Observer<Response<T>>) => {
            axios.put<T>(request, params)
            .then((response: Response) => {
                observer.next(response.data);
                observer.complete();
            })
            .catch((response: Response) => {
                observer.error(response);
                observer.complete();
            })
        })
    }

    public static patch<T>(request: string, params: any = {}): Observable<T> {
        return Observable.create((observer: Observer<Response<T>>) => {
            axios.patch<T>(request, params)
            .then((response: Response) => {
                observer.next(response.data);
                observer.complete();
            })
            .catch((response: Response) => {
                observer.error(response);
                observer.complete();
            })
        })
    }
}