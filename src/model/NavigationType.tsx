export type NavigationType = {
  navigate: (value: string, params?: any) => void;
  params?: any;
  goBack?: any;
  popToTop?: any;
  addListener?: any;
  removeListener?: any;
  pop: (value: number) => void;
  push?: any;
};
