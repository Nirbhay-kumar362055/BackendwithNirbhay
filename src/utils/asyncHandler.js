//ye function isliye banaye hai ki jo function promise return karta uska koi alag file ho jaha se hum directly import kar sake
//ye thoda new syntax hai


const asyncHandler = (requestHandler) => async (err, req, res, next) => {  
  Promise.resolve(requestHandler(req, res, next)).catch((error) => {
    next(error);
  });
};


export {asyncHandler}