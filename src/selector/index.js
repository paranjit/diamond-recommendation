export const getUpdateData = (state, key, selected) => {
  return state.data.reduce((accumulator, currentValue) => {
    if(currentValue[key] === selected){
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
};


export const getCut = state => {
  const cutTypes = state.data.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue.cut)){
      accumulator.push(currentValue.cut);
    }
    return accumulator;
  }, []);

  return cutTypes.reduce((accumulator, currentValue) => {
    accumulator.push({
      label: currentValue,
      value: currentValue
    });
    return accumulator;
  }, []);
};

export const getCarat = state => {
  const caratTypes = state.data.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue.carat)){
      accumulator.push(currentValue.carat);
    }
    return accumulator;
  }, []);

  return caratTypes.reduce((accumulator, currentValue) => {
    accumulator.push({
      label: currentValue,
      value: currentValue
    });
    return accumulator;
  }, []);
};

export const getDataSelector = state => {
  const colorTypes = state.data.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue.color)){
      accumulator.push(currentValue.color);
    }
    return accumulator;
  }, []);

  const clarityTypes = state.data.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue.clarity)){
      accumulator.push(currentValue.clarity);
    }
    return accumulator;
  }, []);

  if(colorTypes.length > clarityTypes.length) {
    const key = 'color';
    const data = colorTypes.reduce((accumulator, currentValue) => {
      accumulator.push({
        label: currentValue,
        value: currentValue
      });
      return accumulator;
    }, []);
    return ({
      key, data
    });
  } else {
    const key = 'clarity';
    const data = clarityTypes.reduce((accumulator, currentValue) => {
      accumulator.push({
        label: currentValue,
        value: currentValue
      });
      return accumulator;
    }, []);
    return ({
      key, data
    });
  }
};

export const getRecommendedData = state => {
  if(state.data.length ===  1) {
    return state.data[0];
  }

  const totalPrice = state.data.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  const meanPrice = totalPrice / state.data.length;
  let closestDifference = -1;
  let recommendedDiamond = null;

  state.data.forEach(function(element) {
    if (closestDifference !== -1) {
      const diff = Math.abs(meanPrice - element.price);
      recommendedDiamond = (diff < closestDifference) ? element : recommendedDiamond;
    } else {
      closestDifference = Math.abs(meanPrice - element.price);
      recommendedDiamond = element;
    }
  });

  return recommendedDiamond;
};