const loggerMiddleware = store => next => action => {
    console.group(action.type);

    console.log('이전상태', store.getState());
    console.log('액션',action);
    const result = next(action);
    console.log('다음상태', store.getState());
    console.log('result',result);
    console.groupEnd();

    return result

}

export default loggerMiddleware


// export default loggerMiddleware