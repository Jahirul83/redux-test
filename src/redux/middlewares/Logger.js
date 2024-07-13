const logger = (store) => (next) => (action)=>{

    const currentState = store.getState();
    console.log('current State =>',currentState);
    console.log('action dispatched =>',action);
    
    next(action);
    const updatedState = store.getState();
    console.log('updated State =>',updatedState);
    
};

export default logger;