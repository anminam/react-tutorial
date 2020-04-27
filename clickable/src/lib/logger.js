const logger = stor => next => action => {
    console.log('현재는', store.getState());
    console.log('액션', action);

    const result = next(action);
    console.log('다음', store.getState());

    return result;
}

export default logger;

