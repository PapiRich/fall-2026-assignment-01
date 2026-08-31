export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  const remainingItems = inventory.filter((item) => item[1] > 5);
  //console.log(remainingItems);
  const total =remainingItems.reduce((total, item) => total + (item[1] * item[2]),0);

  
  return total;
}
