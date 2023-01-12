function myTryCatchFunction(){
    try{
        let number;
        //let  x = number /10;
        console.log(x);
    }catch (error) {
        console.log(error.name + error.message );
    }
}

function myTryCatchFinallyFunction(){
    try{
        let number;
        //let  x = number /10;
        console.log(x);
    }catch (error) {
        console.log(error.name + error.message );
    }
    finally{

        console.log('inside finally');
    }
}