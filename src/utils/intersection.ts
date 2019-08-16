export const intersection = (data1: any[], data2: any[]): any[] => {
  return data1.filter((item: any) => data2.includes(item));
};
