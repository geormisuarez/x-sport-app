const data = [
    {
        id:'01',
        name: 'patin',
        description: 'bla bla',
        price: 500,
        stock:25,
        category:'patines',
        img:'../patin1.png'
    },
    {
        id:'02',
        name: 'skate',
        description: 'bla bla',
        price: 500,
        stock:25,
        category:'skate',
        img:'../tabla1.png'
    },
    {
        id:'03',
        name: 'bmx',
        description: 'bla bla',
        price: 500,
        stock:25,
        category:'bmx',
        img:'../bmx1.png'
    },
    {
        id:'04',
        name: 'casco',
        description: 'bla bla',
        price: 500,
        stock:25,
        category:'proteccion',
        img:'../casco1.png'
    }
]

// crear y exportar la promesa

export const getProducts= () => {
    let error= false
    return new Promise((resolve, reject)=> {
        setInterval(()=> {
            if(!error){
                resolve(data)
            }else{
                reject('intente mas tarde')
            }

        },3000)
    })
}