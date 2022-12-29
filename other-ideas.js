function attempt1 () {
  const totalMonths = finances.length
  const changesPerMonth = finances.map(([month, current], i, arr) => {
    const previous = arr[i-1]?.[1] || 0;
    const change = current - previous;
    return { change, current, month, previous }
  })
  const totalChangesOverTime = changesPerMonth.map(x => x.change).reduce((acc, curr) => acc + curr)

  const allChanges = changesPerMonth.map(x => x.change);
  const greatestIncrease = changesPerMonth.find(x => x.change === Math.max(...allChanges))
  const greatestDecrease = changesPerMonth.find(x => x.change === Math.min(...allChanges))

  const averageNetChange = totalChangesOverTime / totalMonths
  const total = finances.map(([,profit]) => profit).reduce((acc, curr) => acc + curr)

  console.log(`Financial Analysis. 
  ------------------------------
  Total Months: ${totalMonths}
  Total Amount: $${total} 
  Average Net change: $${averageNetChange.toFixed(2)}
  The greatest increase in profits from month to month: ${greatestIncrease.month} ($${greatestIncrease.change})
  The greatest decrease in losses from month to month: ${greatestDecrease.month} ($${greatestDecrease.change})
  `);
}

function attempt2 () {
  //empty variables outside of the scope of the for loop.
  let totalMonths = finances.length;
  let totalChanges = 0;
  let changes = []
  let total = 0

  //this for loop and find all amount within the finances array. 
  for (let i = 0; i < finances.length; i++) {
     totalChanges = totalChanges + finances[i][1];
  }

  // this works out the average by taking the total amount and dividing it by the total months.
  const average = totalChanges / totalMonths;

  let greatestIncrease = { date: '', amount: 0 };
  let greatestDecrease = { date: '', amount: 0 };

  for (let i = 1; i < finances.length; i++) {
    const currentProfit = finances[i][1];
    const previousProfit = finances[i - 1][1];
    const change = currentProfit - previousProfit;

    if (change > greatestIncrease.amount) {
      greatestIncrease.date = finances[i][0];
      greatestIncrease.amount = change;
    }

    if (change < greatestDecrease.amount) {
      greatestDecrease.date = finances[i][0];
      greatestDecrease.amount = change;
    }
  }
}