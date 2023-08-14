
// //Task 1
function add(...array){
let caunt = 0;

    for (let i = 0; i <array.length; i++) {  
        caunt += array[i];
    }
    return caunt;
}

const result = add(1,2,67,12)
console.log(result) 


// //Task 2
String.prototype.myCustomContat = function (arg) {

    return this + " my " + arg;
};

const result2 = 'I lost'.myCustomContat('phone')
console.log(result2) // I lost my phone


const result3 = 'hello'.myCustomContat('world')
console.log(result3) // hello my world


// //Task 3

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
    alert(result); // "done!"
  }
  
  f().then(console.log("then")).catch(console.log("catch"));


//Task 4

const user = {
    login: '',
    password: ''
}
 

function convertToObject (data){

    for (let i = 0; i < data.length; i++) { 

        if( data[i].id == "login"){
            user.login = data[i].value;

        }else {
            user.password = data[i].value;
        }
    }
    return user;
}



// const convertToObject = (data, idFieldName = 'id') => ...
// const convertToArray = (data, idFieldName = 'id') => ....

const formFields = [
    { id: 'login', value: 'john.doe' },
    { id: 'password', value: 'secret' },
  ]
  
  const formData = convertToObject(formFields)
  
  /**
   * {
   *   login: 'john.doe',
   *   password: 'secret'
   * }
   */
  console.log(formData)
  





function convertToArray(data) {
    
    const object1 =  { name: 'login', value: data.login }
    const object2 =  { name: 'password', value: data.password }

        const array = [];
        array.push(object1);
        array.push(object2);   

    return array;
}

  const backConverted = convertToArray(formData)
  
  /**
    * [
    *   { name: 'login', value: 'john.doe' },
    *   { name: 'password', value: 'secret' }
    * ]
   */
  console.log(backConverted)
