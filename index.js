function superbowlWin(record) {
    // Find the first entry in the record where the result is a win ("W")
    const winningEntry = record.find(element => element.result === "W");
  
    // Return the year if a win is found, otherwise return undefined
    return winningEntry ? winningEntry.year : undefined;
  }
  
console.log(superbowlWin())