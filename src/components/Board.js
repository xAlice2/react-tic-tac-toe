import React from 'react';  // because this extends react.component
import Square from './Square';    // because it contains the component Square


/**
 * changing from class to function
 */
function Board(props) {

    const renderSquare = (i) => {
        return (
            <Square
                value={props.squares[i]}    //this.props only applies to class component, here we replace with props because its passed through the function
                onClick={() => props.onClick(i)}
            />
        );
    }

    return (
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
}

// ===================

//  class Board extends React.Component {
//     renderSquare(i) {
//       return (
//         <Square
//           value={this.props.squares[i]}
//           onClick={() => this.props.onClick(i)}
//         />
//       );
//     }
  
//     render() {
//       return (
//         <div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }


export default Board;