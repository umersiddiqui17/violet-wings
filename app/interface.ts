
export interface simplifiedproduct{
    _id:string,
    slug:string,
    imageUrl:string,
    price:number,
    name:string,
    categoryName:string
}

export interface fullProduct{
    _id:string,
    slug:string,
    images:any,
    price:number,
    name:string,
    categoryName:string,
    description:string,
    price_id:string
}