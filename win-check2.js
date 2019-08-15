var gridOne = {
  cells: [
    ["x", "o", "x"],
    ["o", "x", "o"],
    ["x", "o", "o"]
  ],
  column: function(number) {
    number = number - 1;
    return [
      this.cells[0][number],
      this.cells[1][number],
      this.cells[2][number]
    ];
  },
  row: function(number) {
    number = number - 1;
    return this.cells[number];
  },
  diagonal: function(leftOrRight) {
    if (leftOrRight === "left") {
      return [
        this.cells[0][0],
        this.cells[1][1],
        this.cells[2][2]
      ];
    } else {
      return [
        this.cells[0][2],
        this.cells[1][1],
        this.cells[2][0]
      ];

    }
  }
};

assertTrue("Column Zero is 'x', 'o', 'x'",
  arrayCompare(gridOne.column(1), ['x', 'o', 'x']));

assertTrue("Should break",
  arrayCompare(['o', 'o', 'o'], ['x', 'o', 'x']));

assertTrue("String one is String one", '1' === '1')

function arrayCompare(first, second) {
  if (first.length !== second.length) { return false; }
  for (let index = 0; index < first.length; index++) {
    const firstValue = first[index];
    const secondValue = second[index];
    if (firstValue !== secondValue) { return false };
  }
  return true;
}

function assertTrue(message, value) {
  if (value) {
    console.log(`Success: ${message}`);
    return true;
  } else {
    console.log(`Failure: ${message}`);
    return false;
  }
}s