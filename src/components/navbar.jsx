import React from 'react';

const NavBar = (props) => {
    const { totalCounter, totalItems } = props
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container d-block">
                    <div>
                        Total products <span className="badge text-bg-secondary">{totalItems}</span>
                    </div>
                    <div>
                        Total Count <span className="badge text-bg-secondary">{totalCounter}</span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

// class Navbar extends Component {
//     state = {}
//     render() {
//         return (
//             <>
//                 <nav className="navbar bg-light">
//                     <div className="container d-block">
//                         <div>
//                             Total products <span className="badge text-bg-secondary">{this.props.totalItems}</span>

//                         </div>
//                         <div>
//                         Cart Count <span className="badge text-bg-secondary">{this.props.totalCounter}</span>

//                         </div>
//                     </div>
//                 </nav>
//             </>
//         );
//     }
// }

// export default Navbar;
