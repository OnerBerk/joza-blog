export  interface Ipost{
    id:number
    author:number
    featured_media:number
    categories:number[]
    date:Date
    excerpt:{rendered:string}
    slug:string
    title:{rendered:string}
    type:string
}

export interface Icategorie{
    id:number
    description:string
    name:string
    slug:string
    meta:[]
}