
type SumaParameter = string | number
type SumaReturn=string |number;
function Suma(num1:SumaParameter,num2:SumaParameter):SumaReturn{
    return String(num1)+String(num2);
}

interface Interface1{
    prop1:number;
}

interface Interface2{
    prop2:number;
}

type InterfaceMix=Interface1 |Interface2;

const  interfaceMix: InterfaceMix={
    prop1:2,
    prop2:2
}
