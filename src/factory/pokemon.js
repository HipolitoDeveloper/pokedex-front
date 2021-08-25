const constructNewPokemonObj = (pokemon) => {
  return {
    name: pokemon.name,
    number: pokemon.national_number,
    img: pokemon.sprites.normal,
    isFavorite: false,
    isInView: true,
    types: buildTypeObj(pokemon.type),
  };
};

const fixTypes = (types) => {
  let newTypes = [];

  types.forEach((type) => {
    if (newTypes.length > 0) {
      if (newTypes.indexOf(type) === -1) newTypes.push(type);
    } else {
      newTypes.push(type);
    }
  });

  return newTypes.map((type) => {
    return {
      name: type,
      isActive: false,
    };
  });
};

const buildTypeObj = (types) => {
  return types.map((type) => {
    return {
      name: type,
      color: assignColorToType(type),
    };
  });
};

const assignColorToType = (type) => {
  switch (type) {
    case "Grass":
      return "--color-grass";
    case "Poison":
      return "--color-poison";
    case "Fire":
      return "--color-fire";
    case "Dragon":
      return "--color-dragon";
    case "Flying":
      return "--color-flying";
    case "Water":
      return "--color-water";
    case "Bug":
      return "--color-bug";
    case "Normal":
      return "--color-normal";
    case "Dark":
      return "--color-dark";
    case "Electric":
      return "--color-electric";
    case "Psychic":
      return "--color-psychic";
    case "Ice":
      return "--color-ice";
    case "Steel":
      return "--color-steel";
    case "Ground":
      return "--color-ground";
    case "Fairy":
      return "--color-fairy";
    case "Fighting":
      return "--color-fighting";
    case "Rock":
      return "--color-rock";
    case "Ghost":
      return "--color-ghost";
    default:
      return "--color-dark-gray";
  }
};

export { constructNewPokemonObj, fixTypes };
