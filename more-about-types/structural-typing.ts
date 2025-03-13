// https://code-basics.com/ru/languages/typescript/lessons/structural-typing

enum LoadingStatus {
    Loading,
    Error,
    Success
}

type DataState = {
    status: LoadingStatus,
    error?: Error,
    data?: number,
}

function handleData(fetchData: DataState): string {
    switch (fetchData.status){
        case (LoadingStatus.Loading):
            return 'loading...'
        case (LoadingStatus.Error):
            return 'error'
        case (LoadingStatus.Success):
            return fetchData.data?.toString() ?? 'unknown';
        default:
            return 'unknown';
    } 
}

