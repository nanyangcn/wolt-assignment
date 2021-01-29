const distance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI/180; // φ, λ in radians
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c; // in metres

  return d;
};


const isSorted = (array: boolean[] | number[] | Date[], order: number): boolean => {
  if (array.length === 0)
    return true;

  let i = 0;
  let flag = true;
  for (i = 0; i < array.length - 1; i++) {
    const e0 = array[i] as boolean | number | Date;
    const e1 = array[i + 1] as boolean | number | Date;
    if (e0 > e1 && order === 1 || e0 < e1 && order === -1) {
      flag = false;
      break;
    }
  }
  return flag;
};

const monthsDiff = (d1: Date, d2: Date): number => {
  const d1Y = d1.getFullYear();
  const d2Y = d2.getFullYear();
  const d1M = d1.getMonth();
  const d2M = d2.getMonth();

  return (d2M+12*d2Y)-(d1M+12*d1Y);
};

export default {
  distance,
  isSorted,
  monthsDiff
};