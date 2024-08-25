import logo from './logo.svg';
import './App.css';

function App() {

  let characterOfMovieInterstellar =["Jessica  chastain ", "Anne Hathaway", "Machenzie Foy", "Timothee Chalamet" , "Matt Damon","Matthew McConaughey" ,"Michael Caine"]; 
  return (
    <div className="App">

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        console.log(characterOfMovieInterstellar.length);
        console.log(characterOfMovieInterstellar[5]);

        for(let i=0;i<=characterOfMovieInterstellar.length;i++){
          console.log(characterOfMovieInterstellar[i]);
        }

      }}>Length</button>


      <button type ="button" onClick ={()=>{
       for(let i=0;i<=characterOfMovieInterstellar.length;i++){
        console.log(characterOfMovieInterstellar.at(i));
      }
      }}>At</button>


      <button type ="button" onClick ={()=>{

        console.log(characterOfMovieInterstellar);
        console.log(characterOfMovieInterstellar.toString());
      }}>To String</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar.join("'''"));
      }}>Join</button>


      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        delete characterOfMovieInterstellar[0];
      }}>Delete</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        characterOfMovieInterstellar.pop();
      }}>pop</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        characterOfMovieInterstellar.push("Hero");
      }}>push</button>

      <button type ="button" onClick ={()=>{
            console.log(characterOfMovieInterstellar);
            characterOfMovieInterstellar.shift();
      }}>Shift</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        characterOfMovieInterstellar.unshift("Hello");
      }}>Unshift</button>


      <button type ="button" onClick ={()=>{
       console.log(characterOfMovieInterstellar);
       characterOfMovieInterstellar.splice(2,3,"shaik","firdous");


      }} >Splice</button>


      <button type ="button" onClick ={()=>{

        let hero =["Aamir Khan","Akshay kumar","Ajay Devgn"];
        let heroin =["Aishwarya Rai Bachchan","Deepika Padukone","Priyanka Chopra"];

         let all = hero.concat(heroin);



        console.log(all );
      }}>concat</button>


      <button type ="button" onClick ={()=>{
         let evenNumbers = [[1,2], 4, 6,8,10];
         let oldNumbers = [1,3,5,7,9];

         let numbers = [evenNumbers,oldNumbers];
         let wholeNumbers = numbers.flat(3);

         console.log(numbers);
         console.log(wholeNumbers);
      }}>Flat</button>


      <button type ="button" onClick ={()=>{
        let sliceArray =characterOfMovieInterstellar.slice(3,7);
        console.log(sliceArray);

       let wholeNumbers = [1,2,3,4,5,6,7,8,9,10];
       let wholeNumbersArray = wholeNumbers.slice(5,8);
       console.log(wholeNumbersArray);


      }}>slice</button>

      <button type ="button" onClick ={()=>{
        let newArray = characterOfMovieInterstellar.fill("shaik",5,6);
        console.log(newArray);
      }}>Fill</button>


      <button type ="button" onClick ={()=>{

        console.log(Array.from("12345678910"));
        console.log(Array.from("SHAIKFIRDOUS"));
      }}>from</button>


      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar.includes("Matthew McConaughey","1"));
      }}>includes</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar.indexOf("Matthew McConaughey"));
        console.log(characterOfMovieInterstellar.indexOf("2"));
      }}>indexOF</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar.lastIndexOf("Matthew McConaughey"));
      }}>LastIndexOf</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        characterOfMovieInterstellar.reverse();
        console.log(characterOfMovieInterstellar);
      }}>Reverse</button>

      <button type ="button" onClick ={()=>{
         console.log(Array.isArray("abc"));
         console.log(Array.isArray(1234));
         console.log(Array.isArray("ABC"));
         console.log(Array.isArray([1,2,3,4,5]));
         console.log(Array.isArray([1],[2.5],[3]));
         console.log(Array.isArray(["Shaik","Firdous"]));


      }}>isArray</button>

      <button type ="button" onClick ={()=>{
        characterOfMovieInterstellar.forEach((ele,i)=>{
          console.log(`${ele}`);
        })
      }}>forEach</button>

      <button type ="button" onClick ={()=>{
        let shaikTenthMarks =[88,99,0,22,33,11,99,100,91,93,94,95];
        let passMarks =35;

         let result =shaikTenthMarks.every((ele,i) =>{
          return ele >= passMarks;
        })

        if(result==true){
         console.log("passed");
        }else{
         console.log("failed");
        }

        // if(shaikTenthMarks[0]>= passMarks &&
        //   shaikTenthMarks[1]>= passMarks &&
        //   shaikTenthMarks[2]>= passMarks &&
        //   shaikTenthMarks[3]>= passMarks &&
        //   shaikTenthMarks[4]>= passMarks &&
        //   shaikTenthMarks[5]>= passMarks 
        // ){
        //   console.log("Student Passed in Tenth");
        // }else{
        //   console.log("Student failed in Tenth");
        // }
      }}>Every</button>


      <button type ="button" onClick ={()=>{

        let interMarks =[10,10,10,10,10,10];
        let passMarks = 35;

        let result =interMarks.some((ele,i)=>{
          return ele<passMarks;
        })

        if(result==true){
        console.log("failed");
        }else{
        console.log("passed");
        }
      }}>Some</button>
      <button type ="button" onClick ={()=>{
        let marks = [10,12,14,15,20,21,22,25,26,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
        let passMarks = 35;

        let filteredArr= marks.filter((ele,i)=>{
          return ele >=30;
        });
        console.log(filteredArr);
      }}>filter</button>

      <button type ="button" onClick ={()=>{
       
       let marks =[88,99,77,99,21,12,33,34,35,89,98];

        let result =marks.findLastIndex((ele,i) =>{
        return ele > 80;
       })
        console.log(result);

      }}>find/findIndex/findLast/findLastIndex</button>

      <button type ="button" onClick ={()=>{
               let marks =["a","e","i","o","u"];

               let result =marks.reduce((ele,tot) =>{
               return (tot  += ele) ;
              })
               console.log(result);

      }}>reduce</button>

      <button type ="button" onClick ={()=>{
        let marks =[10,55,77,22,11,33,99,88,100,110];
        marks.sort((a,b)=>{
          return a-b;
        });
        console.log(marks);
        console.log(marks.reverse);
      }}>sort: this is only for numbers</button>


      <button type ="button" onClick ={()=>{
        let tenthPassedStu =  ["Banana", "Apple", "Cherry", "Mango", "Blueberry"];
        tenthPassedStu.sort();
        console.log(tenthPassedStu);
        tenthPassedStu.reverse();
        console.log(tenthPassedStu);

      }}>sort for string</button>

      <button type ="button" onClick ={()=>{

        let cricketPlayer =["Virat Kohli","Hardik Himanshu Pandya ","Bumrah ","Jadeja ","Rohit Gurunath Sharma","Shubman Gill "];
        let newArray = cricketPlayer.map
        ((ele,i) =>{
        return `Mr.${ele} is the Indian Cricket Player `;
        })
        console.log(cricketPlayer);
        console.log(newArray);
      }}>Map</button>

      {characterOfMovieInterstellar.map((ele,i) =>{
        return <h3 key={i}>{ele}</h3>;
      })}


    </div>
  );
}

export default App;
