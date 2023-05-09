export interface IPet {
  id:number,
  name:string,
  owner: {
    id: number,
    username:string,
    ownersName:string,
    password:string
  },
  code:number,
  furColor:string,
  petType:string,
  country:string
}
