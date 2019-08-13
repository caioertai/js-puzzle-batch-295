// Selecting all the pieces (used later for adding behaviour to the
// pieces)
const pieces = document.querySelectorAll('td');

// Defines how a piece swaps position with the empty square
const swapWithEmpty = (piece) => {
  // Select the empty piece by it's empty class
  const emptyPiece = document.querySelector(".empty");
  // Remove empty class from the current empty piece
  // Console.log(emptyPiece);
  emptyPiece.classList.remove("empty");
  // Assign empty class to given piece
  piece.classList.add("empty");
  // Add the number of the given piece to the empty
  emptyPiece.innerText = piece.innerText;
  // Remove the innerText from the given piece
  piece.innerText = "";
}

// This function was the hardest step, but I hope the
// general idea was understandable. =)
// It checks wheter a given piece represents a valid
// piece to move.
const isValidMove = (piece) => {
  const emptyPiece  = document.querySelector(".empty");

  const pieceX      = piece.cellIndex;
  const emptyPieceX = emptyPiece.cellIndex;

  const pieceY      = piece.parentElement.rowIndex;
  const emptyPieceY = emptyPiece.parentElement.rowIndex;

  const isSameX = pieceX === emptyPieceX;
  const isSameY = pieceY === emptyPieceY;

  const isAdjX = Math.abs(pieceX - emptyPieceX) === 1;
  const isAdjY = Math.abs(pieceY - emptyPieceY) === 1;

  return isSameX && isAdjY || isSameY && isAdjX
}

// ============================
// Noticed how up to this point everything was just functions
// and variable definitions/assignments?
// ============================

// Here we start using the pieces that we laid:
pieces.forEach((piece) => {
  // We assign the listener for what happens when we click a piece
  piece.addEventListener('click', (event) => {
    // We get the currently clicked piece
    // remember this event.currentTarget, please. Super important. =)
    const currentPiece = event.currentTarget;

    // We set our if by using the function that checks if a piece
    // is a valid move.
    if (isValidMove(currentPiece)) {
      // If it is indeed valid, we call our piece swapping function
      // to finish the job.
      swapWithEmpty(currentPiece);
    }
  })
})
