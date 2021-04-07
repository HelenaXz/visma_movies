export class SharedUtils {
  public static joinArrayIntoString(array: any[], joinSeparator: string, property?: string): string {
    const resultArray = [];
    array.map(value => {
        resultArray.push(property ? value[property] : value)
    })
    return resultArray.join(joinSeparator);
  }
}
