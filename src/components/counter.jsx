import React from "react";


const Counter = (props) => {
   

    const getBadgeClasses = () => {
        let classes = "badge m-2 bg-";
        classes += props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    const formatCount = () => {
        const { value } = props.counter;
        return value === 0 ? 'zero' : value;
    }
    return (
        < React.Fragment>
            <div className='my-3 p-2 text-center border border-secondary rounded'>

                <div >
                  
                    {props.children}
                 {<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1TMhaHu5p0rFI7Tnoem9NB5IiYB4qkz0sw&usqp=CAU" alt="speaker" height={'100px'} width={'100px'} /> }
                </div>
                <div>
                    <span className={getBadgeClasses()}>{formatCount()}</span>
                    <button onClick={() => props.onIncrement(props.counter)} className={`btn btn-secondary btn-sm` }>+</button>
                    <button onClick={() => props.onDecrement(props.counter)} className={`btn btn-secondary btn-sm m-2`}
                      disabled={props.counter.value == 0 ? 'disabled' : ''}>-</button>
                    <button onClick={() => props.onDelete(props.counter.id)} className={`btn btn-danger btn-sm`}
                  >x</button>

                </div>
            </div>
        </React.Fragment>

    );
}

export default Counter;

// class Counter extends Component {
//     state = {
//         value: this.props.counter.value
//     };
//     constructor (){
//         super ();
//          this.handleIncrement = this.handleIncrement.bind(this);
//     }
//     // using arrow function we can bind this directly without `this`.
//     handleIncrement = () => {
//         this.setState({ value: this.state.value + 1 })
//     }


//     render() {


//         return (
//             < React.Fragment>
//                 <div className='my-3 p-2 text-center border border-secondary rounded'>

//                     <div >
//                         <div>
//                             <button onClick={() => this.props.onDelete(this.props.counter.id)} className={`btn btn-danger mx-2 btn-sm`}>Remove</button>

//                         </div>
//                         {this.props.children}
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1TMhaHu5p0rFI7Tnoem9NB5IiYB4qkz0sw&usqp=CAU" alt="speaker" height={'100px'} width={'100px'} />
//                     </div>
//                     <div>
//                         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//                         <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
//                     </div>
//                 </div>
//             </React.Fragment>

//         );
//     }
//     getBadgeClasses() {
//         let classes = "badge m-2 bg-";
//         classes += this.props.counter.value === 0 ? "warning" : "primary";
//         return classes;
//     }

//     formatCount() {
//         const { value } = this.props.counter;
//         return value === 0 ? 'zero' : value;
//     }
// }

// export default Counter;



