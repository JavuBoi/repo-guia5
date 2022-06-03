sessionStorage.clear()

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

var pedido = {};

function agregar_pedido(id) {
    let cantidad = document.getElementById(id).value;

    if (cantidad > 0) {
        let plato = {
            "nombre": platillos[id].nombre,
            "cantidad": cantidad,
            "precio": platillos[id].precio
        };

        pedido[id] = plato;
    };
};

function realizar_pedido() {
    console.log(pedido)
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
};

function cambiar_valor(id, accion) {
    let plato = document.getElementById(id);
    let cantidad = parseInt(plato.value);

    plato.value = accion == "+" ? cantidad + 1 : (cantidad > 0 && accion == "-" ? cantidad - 1 : 0);
};