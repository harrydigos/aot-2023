type Address = { address: string; city: string };

type PresentDeliveryList<T> = {
  [Property in keyof T]: Address;
};
