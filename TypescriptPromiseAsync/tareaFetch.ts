type Product = {
  idproducto:number,
  nombreProducto:string,
  existencias:number,
  totalOrders:number,
  totalCantidades:number
}
var products:Product[] = []

type Order = {
    idproduct:number,
    cantidad:number
}
var orders:Order[] = []


function printProduct(product){
 console.log("*** Producto ***")
 console.log("ID: " + product.idproducto)
 console.log("Nombre: " + product.nombreProducto)
 console.log("Existencias: " + product.unidadesEnExistencia)
}

function processProduct(product){
  let tmp:Product = {
    idproducto : product.idproducto,
    nombreProducto : product.nombreProducto,
    existencias : product.unidadesEnExistencia,
    totalOrders :  0,
    totalCantidades: 0
  }
  products.push(tmp)
}

function processOrders(order){
  let tmp:Order = {
    idproduct : order.idproducto,
    cantidad : order.cantidad
  }
  orders.push(tmp)
}

function filterOrder(product:Product, order:Order){
  return product.idproducto == order.idproduct
}

const myURLProducts = 'https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json'
const myURLOrders = 'https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json'


let jsonPromise1 = fetch(myURLProducts)
                .then(res => res.json())

let promise1 = jsonPromise1.then(r=>{
    console.log("Total Registros: " + r.length)
    console.log("Inicio *** *** ***")
    r.forEach(e => {
     processProduct(e)
    });
    console.log("*** Productos: " + products.length)
    console.log("productos[0]: " + products[0])
    console.log("Fin *** *** ***")
})

let jsonPromise2 = fetch(myURLOrders)
                .then(res => res.json())

let promise2 = jsonPromise2.then(r=>{
    console.log("Total Registros: " + r.length)
    console.log("Inicio *** *** ***")
    r.forEach(e => {
     processOrders(e)
    });
    console.log("*** Pedidos: " + orders.length)
    console.log("orders[0]: " + orders[0])
    console.log("Fin *** *** ***")
})

Promise.all([promise1, promise2]).then(values => {
    console.log(products.length +" --> " + orders.length)

    let mayor:Product = products[0]

    products.forEach(p=>{
        let totalOrders = orders.reduce((t,o)=>{
            if(p.idproducto==o.idproduct){
              p.totalCantidades += parseInt(o.cantidad)
              return t + 1
            }
            else {
              return t
            }
        },0)
        p.totalOrders = totalOrders
        //if(p.totalOrders > mayor.totalOrders){
        if(p.totalOrders > mayor.totalCantidades){
          mayor = p
        }
    })
    console.log("Mayor: ")
    console.log(mayor)
})









