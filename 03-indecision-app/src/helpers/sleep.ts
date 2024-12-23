// promise que demora 1 segundo en responder

export const sleep = ( seconds:number = 1) => {
   return new Promise( resolve => {
       setTimeout(resolve, seconds * 1000);
   });
};
