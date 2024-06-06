import Address from "./Address";

export default interface User {
  id: string;
  name: string;
  email: string;
  address: Address;
}