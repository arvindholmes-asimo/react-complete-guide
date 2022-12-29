import React, { Component } from 'react';
import Counter from "./counter"

// const Counters = (props) => {
//     return (
//         <>
//             <button onClick={props.onReset} className="btn btn-primary btn-sm">Reset</button>

//             <div className='d-flex gap-2'>
//                 {props.counters.map(counter => (
//                     <Counter key={counter.id}
//                         onDelete={props.onDelete}
//                         onIncrement={props.onIncrement}
//                         //  value={counter.value} 
//                         //  id={counter.id}
//                         counter={counter}

//                     />
//                 ))
//                 }
//             </div>
//         </>
//     );
// }

// export default Counters;

class Counters extends Component {
    
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps );
        console.log('prevState', prevState );
        // if(prevProps.counter.value !== this.props.counter.value){

        // }
    }
    componentWillUnmount(){
        console.log('Counter - Unmount');
    }
    render() {
        console.log("rendered");
        const {onReset,onDelete,onIncrement,counters,onDecrement} = this.props;
        return (
            <>
                <button onClick={onReset} className="btn btn-primary btn-sm">Reset</button>

                <div className='d-flex gap-2'>
                    {counters.map(counter => (
                        <Counter key={counter.id}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            //  value={counter.value}
                            //  id={counter.id}
                            counter={counter}

                        />
                    ))
                    }
                </div>
            </>
        );
    }
}

export default Counters;