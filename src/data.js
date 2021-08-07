import data from "./data/athletes/athletes.js";//obtiene los datos de la base de datos original  


export function sortByAtoZ(data){
  let aToZ= data.sort((a, b) => {
    return a.name < b.name ? -1 : 1;//revisar esta vaina de if y else 
})
return aToZ;
}//esta función realiza el ordenamiento por orden alfabético, es llamada en main.js en la funsión de filtrado

export function searchByTeam(dataX, team, searchInData, datA=data.athletes) {
  let filterPerTeam;
  if (searchInData) {
    filterPerTeam = datA.filter(function (atleta) {
      return atleta.team == team;
    });
  } else {
    filterPerTeam = dataX.filter(function (atleta) {
      return atleta.team == team;
    });
  }
  return filterPerTeam;
}
export function searchBySport(dataX, sport, searchInData, datA=data.athletes) {
  let filterPerSport;
  if (searchInData) {
    filterPerSport = datA.filter(function (atleta) {
      return atleta.sport == sport;
    });
  } else {
    filterPerSport = dataX.filter(function (atleta) {
      return atleta.sport == sport;
    });
  }
  return filterPerSport;
}
export function searchByGender(dataX, gender, searchInData, datA=data.athletes) {
  let filterPerGender;
  if (searchInData) {
    filterPerGender = datA.filter(function (atleta) {
      return atleta.gender == gender;
    });
  } else {
    filterPerGender = dataX.filter(function (atleta) {
      return atleta.gender == gender;
    });
  }
  return filterPerGender;
}

export function searchByMedal(dataX, medal, searchInData, datA=data.athletes) {
  let filterPerMedal;
  if (searchInData) {
    filterPerMedal = datA.filter(function (atleta) {
      return atleta.medal == medal;
    });
  } else {
    filterPerMedal = dataX.filter(function (atleta) {
      return atleta.medal == medal;
    });
  }
  return filterPerMedal;
}
