// Setup
function phoneticLookup(val) {
    let result = [];
  result.push(val);
  console.log(result);
    // Only change code below this line
    const lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank"
    }
    result = lookup[val]
    // Only change code above this line
   return result;
  }
  const result1 = phoneticLookup("alpha");
  const result2 = phoneticLookup("bravo");
  const result3 = phoneticLookup("charlie");
  const result4 = phoneticLookup("delta");
  const result5 = phoneticLookup("echo");
  const result6 = phoneticLookup("foxtrot");
  console.log(result1, result2, result3, result4, result5, result6);