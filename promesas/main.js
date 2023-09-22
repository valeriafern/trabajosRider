
// const midiv = document.getElementById("miDiv");

// const setText = data => {
//     midiv.textContent = data;
// }

// const getdata = c1 => {
//     setText("puedo jugar");
//     setTimeout(() => {
//         c1(true);
//     }, 200);
// }

// const showdata = c2 => {
//     setText("esperando autorizacion");
//     setTimeout(() => {
//         c2({ jugador: "ryder" });
//     }, 2000);
// }

// miboton.addEvenListener('click'=()={
//     getdata(permitido=>{
//         if(permitido){
//             showdata(user=>{
//                 setText(user.jugador)
//             })
//         }
//     })
// })


// const midiv = document.getElementById("miDiv");
// const miboton = document.getElementById("miBoton");
// const miboton1 = document.getElementById("miBoton1");
// const miboton2 = document.getElementById("miBoton2");

// const setText = data => {
//     midiv.textContent = data;
//     console.log(data)
// }

// const getdata = c1 => {
//     setText("puedo jugar");
//     setTimeout(() => {
//         if (miboton1.clicked) {
//             c1(true);
//         } else {
//             setText("No puede jugar");
//         }
//     }, 2000);
// }
// const showdata = c2 => {
//     setText("esperando autorizacion");
//     setTimeout(() => {
//         c2({ jugador: "ryder" });
//     }, 2000);
// }

// miboton.addEventListener('click', () => {
//     getdata(permitido => {
//         if (permitido) {
//             showdata(hol => {
//                 setText(hol.jugador);
//             });
//         }
//     });
// })
// miboton1.addEventListener('click', () => {
//     getdata(permitido => {
//         if (permitido) {
//             showdata(user => {
//                 setText(user.jugador);
//             });
//         }
//     });
// });

const midiv = document.getElementById("miDiv");
const miboton = document.getElementById("miBoton");
const miboton1 = document.getElementById("miBoton1");
const miboton2 = document.getElementById("miBoton2");

const setText = data => {
    midiv.textContent = data;
    console.log(data);
}

const getdata = c1 => {
    setText("puedo jugar");
    setTimeout(() => {
        if (miboton1.clicked) {
            c1(true);
        } else {
            setText("dale rapido pirobo");
        }
    }, 2000);
}

const showdata = c2 => {
    setText("esperando autorizacion");
    setTimeout(() => {
        c2({ jugador: "ryder" });
    }, 2000);
}

miboton.addEventListener('click', () => {
    getdata(permitido => {
        if (permitido) {
            showdata(user => {
                setText(user.jugador);
            });
        }
    });
});

miboton1.addEventListener('click', () => {
    miboton1.clicked = true; // Marcar que se hizo clic en miBoton1
    getdata(permitido => {
        if (permitido) {
            showdata(user => {
                setText(user.jugador);
              const botoncito=  document.createElement("button")
              botoncito.id = "botoncito";
              botoncito.textContent="botoncito";
              document.body.appendChild(botoncito)
            });
        }
    });
});

miboton2.addEventListener('click', () => {
    miboton1.clicked = false; 
    setText("No puede jugar");
});


// const midiv = document.getElementById("miDiv");
// const miboton = document.getElementById("miBoton");

// const setText = data => {
//     midiv.textContent = data;
// }

// const getdata = () => {
//     return new Promise((resuleve,rechaza)=>{
//     setText("puedo jugar");
//     setTimeout(() => {
//         resuleve(true);
//     }, 200);
// })}

// const showdata = c2 => {
//     return new Promise((resuelve1,rechaza1)=>{
//     setText("esperando autorizacion");
//     setTimeout(() => {
//         resuelve1({ jugador: "ryder" });
//     }, 2000);
//     }
// }

// miboton.addEventListener('click', () => {
//     getdata().then(permitido => {
//         if (permitido) {
//             return showdata()}
//         }).then(user=>{
//             setText(user.jugador)
//         })

/*
const midiv = document.getElementById("miDiv");
const miboton = document.getElementById("miBoton");

const setText = data => {
    midiv.textContent = data;
}

const getdata = () => {
    return new Promise((resolve,rechaza) => {
        setText("puedo jugar");
        setTimeout(() => {
            resolve(true);
            
        }, 2000);
    });
}

const showdata = () => {
    return new Promise((resolve1, rechaza1) => {
        setText("esperando autorizacion");
        setTimeout(() => {
            resolve1({ jugador: "ryder" });
           
        }, 2000);
    });
}

miboton.addEventListener('click', () => {
    getdata()
        .then(permitido => {
            if (permitido) {
                return showdata();
            }
        })
        .then(user => {
            setText(user.jugador);
        });
});
*/