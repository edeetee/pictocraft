// declare module 'isopen' {

// }

// declare 

declare module 'isopen' {
    // function fun
    // export = fun 
    export default function (url: string, portS: string|number|number[], callback: (resp: any) => void): void
}
