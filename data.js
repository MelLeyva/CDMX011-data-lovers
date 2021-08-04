// estas funciones son de ejemplo
//import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";//obtiene los datos d ela base de datos original  


export function sortByAtoZ(data){
  let aToZ= data.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
})
return aToZ;
}
/*xport const name = data.athletes.sort((a, b) => {
  return a.name < b.name ? -1 : 1;
});
//console.log(name);*/

export function searchByTeam(dataX, pais, buscarTodo, datA=data.athletes) {
  let filterPerTeam;
  if (buscarTodo) {
    filterPerTeam = datA.filter(function (atleta) {
      return atleta.team == pais;
    });
  } else {
    filterPerTeam = dataX.filter(function (atleta) {
      return atleta.team == pais;
    });
  }
  return filterPerTeam;
}
export function searchBySport(dataX, deporte, buscarTodo, datA=data.athletes) {
  let filterPerSport;
  if (buscarTodo) {
    filterPerSport = datA.filter(function (atleta) {
      return atleta.sport == deporte;
    });
  } else {
    filterPerSport = dataX.filter(function (atleta) {
      return atleta.sport == deporte;
    });
  }
  return filterPerSport;
}
export function searchByGender(dataX, genero, buscarTodo, datA=data.athletes) {
  let filterPerGender;
  if (buscarTodo) {
    filterPerGender = datA.filter(function (atleta) {
      return atleta.gender == genero;
    });
  } else {
    filterPerGender = dataX.filter(function (atleta) {
      return atleta.gender == genero;
    });
  }
  return filterPerGender;
}

export function searchByMedal(dataX, medalla, buscarTodo, datA=data.athletes) {
  let filterPerMedal;
  if (buscarTodo) {
    filterPerMedal = datA.filter(function (atleta) {
      return atleta.medal == medalla;
    });
  } else {
    filterPerMedal = dataX.filter(function (atleta) {
      return atleta.medal == medalla;
    });
  }
  return filterPerMedal;
}
