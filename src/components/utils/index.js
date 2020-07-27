export const durationInHours = (duration) => {
  if (duration < 60) {
    return `00:${duration}`;
  } else {
    var hours = Math.floor(duration / 60);
    var minutes = duration % 60;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
  }
};

export const formatCurrency = (number) => {
  if (Intl && Intl.NumberFormat) {
    return Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: 'USD',
    }).format(number);
  }
  return `$ ${number}`;
};
