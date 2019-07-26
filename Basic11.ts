function logParamter(target, propertyName,index) {
    const metadataKey=`log_${propertyName}_paramters`;
    if(Array.isArray(target[metadataKey])){
        target[metadataKey].push(index);
    }
    else{
        target[metadataKey]=[index];
    }
}


class  P {
    greet (@logParamter message:string):string{
        return message;
    }

}

const  p= new P();
p.greet('Hola');
