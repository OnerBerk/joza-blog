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