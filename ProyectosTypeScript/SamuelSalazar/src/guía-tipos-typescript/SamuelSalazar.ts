interface tipoVehiculo {
    tipo: string;
    marca: string;
    modelo: string;
    cilindraje: number;
    numPuertas: number;
    arrancarVehiculo: () => void;
    cEspeciales: caracteristicasEspeciales[];
}

interface caracteristicasEspeciales {
    velocidad: number;
    suspension: boolean;
    agregarSuspension: () => void;
}

interface testArray { 
    modelos: number[]; // Arreglo de números
    caracteristicasArray: Array<string[]>; // Definir arreglo de arreglos
}

const miSegundoVehiculo: caracteristicasEspeciales = {
    velocidad: 318,
    suspension: false,
    agregarSuspension() {
        if (this.suspension == true){
            console.log('Tu vehiculo tiene suspensión')
        }else{
            console.log('Tu vehiculo no tiene suspensión')
        }
    },
};

const miVehiculo: tipoVehiculo = {
    tipo: 'Gt3',
    marca: 'Porsche',
    modelo: '2020',
    cilindraje: 4000,
    numPuertas: 2,
    arrancarVehiculo() {
        console.log('El vehiculo arranco con un motor de ', this.cilindraje,'cc')
    },
    cEspeciales: [miSegundoVehiculo],

};

const miTercerVehiculo: testArray = {
    modelos: [2010,2020,2024,2023,2004],
    caracteristicasArray: [['azul','verde'],
                           ['Rin 15', 'Rin 17'],
                           ['2 puertas', '4 puertas']]
};

// Imprime el valor del objeto miOtroVehiculo.
console.log({miVehiculo});

// Invoca al método arrancarVehiculo usando el objeto correspondiente.
console.log(miVehiculo.arrancarVehiculo());

// Invoca al método arrancarVehiculo usando el objeto correspondiente.
console.log(miVehiculo.cEspeciales[0].agregarSuspension());

// Imprime el valor del objeto miTercerVechiculo. Emplea la notación ({ objeto })
console.log({miTercerVehiculo});

// Imprime un índice especifico del objeto miTercerObjeto, accede a la
// propiedad empleando la notación caracteristicasArray[ ][ ]
// obtén en la impresión de consola los valores: azul.
console.log(miTercerVehiculo.caracteristicasArray[0][0]);

// De igual forma imprime un índice especifico del objeto miTercerObjeto, 
// pero esta vez imprime en consola: 4 puertas
console.log(miTercerVehiculo.caracteristicasArray[2][1]);

let index = 0;
console.log('INDEX = 0')
miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => 
    console.log(caracteristica[index])
);

console.log('INDEX = 1')
index = 1;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => 
    console.log(caracteristica[index])
);