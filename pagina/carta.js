const platillos = {
    "plato1": {
        "nombre": "Platillo 1",
        "precio": 10
    },
    "plato2": {
        "nombre": "Platillo 2",
        "precio": 20
    },
    "plato3": {
        "nombre": "Platillo 3",
        "precio": 30
    }
};
var pedido = [];

function agregar_pedido(id) {
    let plato = {
        "nombre": platillos[id].nombre,
        "cantidad": document.getElementById(id).value,
        "precio": platillos[id].precio
    };

    pedido.push(plato);
};

function realizar_pedido() {
    sessionStorage.setItem("pedido", pedido);
};

function cambiar_cantidad(id, accion) {
    let plato = document.getElementById(id);
    let cantidad = plato.value;

    plato.value = accion == "+" ? cantidad + 1 : (cantidad > 0 && accion == "-" ? cantidad - 1 : 0);
};