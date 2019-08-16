export const difference = (data1: any[], data2: any[]): any[] => {
  return data1.filter((item: any) => !data2.includes(item));
};
