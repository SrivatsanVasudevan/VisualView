import React from 'react';

import './kadane-styles.scss';

class Kadane extends React.Component{
    constructor(){
        super();

        this.state = {
            array: [],
            max: "",
            tempArray : [],
            disappear: false,
            desc: ""
        };
    }

    componentDidMount(){
        
        this.generateArray();
       
    }

    generateArray(){
        const array = []; 
        let m = -50, n =50;
        for(let i=0; i<8; i++){
            array.push( Math.floor(Math.random()*(n-m+1)+m) );
        }
        
        this.setState({array,max:"",tempArray:[]});
    }

    kadane(array){
        const dp = [];
        
        dp[0] = array[0];
        let max = dp[0];
        for(let i=1;i<array.length;i++){
            dp[i] = Math.max(dp[i-1] + array[i],array[i]);
            
            max = Math.max(max,dp[i])
        }
        console.log(max);
    }

    kadaneWithoutArray(array){
        this.setState({disappear:true,max : "",desc : "Given below are the maximum subarray sums for each index of the array using the above formula"});
        let prevNumber = 0, currNumber = array[0], max = -100;
        const tempArray = [];

        
            for(let i=0;i<array.length;i++){
                if(i === 0){
                    max = array[0];
                    tempArray.push(max);
                    continue;
                }
                prevNumber = currNumber;
                currNumber = Math.max(prevNumber + array[i],array[i]);
    
                max = Math.max(max,currNumber);
                tempArray.push(max);
               
            }
            this.getSumAtEachIndex(tempArray);
        
            setTimeout(() => {this.setState({max:` The maximum subarray sum is ${max}!`,tempArray:[],desc:"",disappear:false});},10000);
            
        }

    getSumAtEachIndex(array){
        
        const tempArray = [];

        for(let i=0;i<array.length;i++){
            setTimeout(() => {
                tempArray.push(array[i]);
                this.setState({tempArray:tempArray})
            },i*1000);
        }
        
    }
    

    render(){

        const {array} = this.state;
        const {max} = this.state;
        const {tempArray} = this.state;
        const {desc} = this.state;

        return(
            <>
            <div >

                <div className = "problem"> Kadane's Algorithm </div>

                <div className = "problemStatement"> Given a list of unsorted numbers (consisting of
                positive and negative numbers), find the maximum subarray sum. For example, in the 
                array [4,2,1,1], since all elements are positive, the maximum subarray sum is simply
                the sum of all the elements i.e, 4+2+1+1 = 8. But given an array [5, -7, 2, 3], we 
                won't get our answer by adding the numbers, as there is a negative number. Adding up
                the numbers will give us 5+(-7)+2+3 = 3, while our answer is just selecting the first
                element, 5, which will be the maximum subarray sum.  </div>

                <div className = "problemStatement"> This is a classic dynamic programming problem,
                where we solve the problem at each index of the array to find the result for the 
                entire array. To find the maximum subarray sort, we use the formula: </div>

                <ul> 
                <li className = "formulae"> dp[0] = array[0] </li>
                <li className = "formulae"> dp[i] = Max(dp[i-1] + array[i],array[i]) </li>
                <li className = "formulae"> max = Max(max,dp[i]) </li>
                </ul>

                <div className = "problemStatement"> The above formula will find the maximum subarray
                sum, and the following visualization represents it for each index of the array. </div>

            {
                array.map((value,index) => (
                    <div key = {index} className = "kadaneNumbers">
                        {value}    
                    </div>
                ) )
            }
            </div>

            <div className = "problemStatement"> 
                {desc}
            </div>

            <div> 
                {
                    tempArray.map((value,index) => (
                        <div key = {index}>
                           <span className = "tempArray"> {value} </span> 
                        </div>
                    ))
                }         
             </div>

                
            <div className = "result"> {max}   </div>
                      
            <div className = {!this.state.disappear?"":"buttonSpace"}>
            {!this.state.disappear?<button className = "kadaneButton" onClick = {() => (this.generateArray())} >Generate a new Array</button>:null}
            {!this.state.disappear?<button className = "kadaneButton" onClick = {() => (this.kadaneWithoutArray(array)) }> Get the maximum subarray sum </button>:null}
            </div>
            </>
        );
    }
}

export default Kadane;
