import React from 'react';

import './search-styles.scss';

class Search extends React.Component{
    constructor(){
        super();

        this.state = {
            array : [],
            mid : "",
            pos : "",
            target : 0,
            visible: false,
            tempArray: [],
            disappear: false
        }
    }

    getArray(){
        
        this.getArrayAndTargetValue();
        
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.getArray();
    }
    
    getBinarySearch(array){
        this.setState({tempArray:array,disappear:true,mid:""});
        let {tempArray} = this.state.tempArray;
        tempArray = this.state.array;
        this.binarySearch(tempArray);
    }

    binarySearch(array){
        
        let singleArray = [];
        let result = 0;
        let low = 0, high = array.length - 1;
        
        while(low <= high){
            let animatedArray = [];
            const mid = Math.floor((low + high)/2);
            
            if(this.state.target === array[mid]){
                result = mid;
                break;
            }
            else if(this.state.target < array[mid]){
                high = mid - 1;
                for(let i = low;i<=high;i++){
                    animatedArray.push(array[i]);
                    console.log(animatedArray);
                    setTimeout(
                        function() {
                            this.setState({tempArray:animatedArray, visible:true});
                        }
                        .bind(this),
                        i*1000
                    );
                }
            }
            else{
                low = mid + 1;
                for(let i = low;i<=high;i++){
                    animatedArray.push(array[i]);
                    setTimeout(
                        function() {
                            this.setState({tempArray:animatedArray, visible:true});
                        }
                        .bind(this),
                        i*1000
                    );
                }
            }
            
        }
        singleArray.push(array[result]);


        setTimeout(
            function() {
                this.setState({tempArray:singleArray});
            }
            .bind(this),
            10000
        );

        setTimeout(
            function() {
                this.setState({mid: `The target was found at position ${result}!`, visible:false , disappear:false, tempArray:[]});
            }
            .bind(this),
            15000
        );

        
        
    }

    getArrayAndTargetValue(){
        const newArray = this.generateNewArray();
        
        const target = this.getTarget(newArray);
        this.setState({array:newArray,target:target,mid:""});
    }

    generateNewArray(){
        const array = Array.from({length: 9}, () => Math.floor(Math.random() * 50));
        array.sort(function(a,b){
            return a-b;
        });
        
        return array;
    }


    getTarget(array){
        return array[Math.floor(Math.random()*array.length)];
    }

    render(){
        const {array} = this.state;
        const {mid} = this.state;
        const {tempArray} = this.state;
        return(
            <>
           
           <div className = "problem">Binary Search</div>

           <div className = "problemStatement"> Given a sorted array of numbers, you have to find the targeted
           value and return its position in the array using binary search. The Binary Search algorithm works
           by breaking a sorted array into halves. We first check and compare the middle element with the target,
           and if it matches, we have a solution. Else, we check if the target is lesser than the middle
           element, and if it is true, we eliminate the second half of the array and check the first
           half of the array with the same process and vice-versa. This is an efficient searching algorithm which runs in 
           O(log(N)) time complexity, where N is the length of the array. </div>

           <div className = "problemStatement"> The formula to find the middle element, given that the position of the left
           element is 0, and the position of the right element is the array length is: </div>

           <div className = "formulae"> mid = (left + right)/2 </div>

           <div className = "problemStatement"> If the middle element is the target, the algorithm ends there
           and we return the middle element position. Else, we check if the target is lesser than the middle element, and then we eliminate the right half of the 
           array and continue the above steps and similarly, we check if the target is greater than the middle element
           and then eliminate the left half of the array and continue till we find the element. </div>


            <div >
            {array.map((value,index) => (

                    <div className = "search" key = {index}>
                        <span>{value}</span>
                    </div>
                ))}
            </div>

            <div>
                {tempArray.map((value,index) => (

                    <div className = {!this.state.disappear?"":"newSearch"} key = {index}>
                        <span className = {!this.state.visible?"":"w3-animate-fading"} >{value}</span>
                    </div>
                ))}
            </div>


            <div className = {!this.state.disappear? "" : "output"}>
                <div className = {this.state.disappear?"":"outputMessage" }>{mid}</div>
            </div>
            

                {!this.state.disappear ?<button className = "binaryButton"  onClick = {() => {this.getArrayAndTargetValue()}}> Generate new Array and target </button> :null  }
            
                    {!this.state.disappear ? <button className = "binaryButton"  onClick = {() => {this.getBinarySearch(array)} }> Find position of value {this.state.target} </button> : null}
            
            
            </>
        );
    }
}

export default Search;