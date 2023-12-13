h1 = document.querySelector("h1");
function disp(value, color,delay,nextfun){
    setTimeout(() => {
        h1.style.display = value;
        h1.style.color = color;
        if(nextfun) {
            nextfun();
        }
    }, delay);
}

let time = 300;
let intime = time*8;
let id = setInterval(() => {
    disp("none","orange",time, () =>{
        disp("inline","red",time, () =>{
            disp("none","yellow",time, () =>{
                disp("inline","green",time, () =>{
                    disp("none","violet",time, () =>{
                        disp("inline","blue",time, () =>{
                            disp("none","green",time, () =>{
                                disp("inline","dogerblue",time);
                            });
                        });
                    });
                });
            });
        });
    });
}, intime);