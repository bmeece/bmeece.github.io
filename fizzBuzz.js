for (var fazzBazz = 1; fazzBazz <= 100; fazzBazz++) {
    var say = "";

    if (fazzBazz % 15 == 0) {
        say += "JazzBazz";
    }

    else if (fazzBazz % 3 == 0) {
        say += "Jazz";
    }
    else if (fazzBazz % 5 == 0) {
        say += "Bazz";
    }

    else {
        say = fazzBazz;
    }
    console.log(say);
}