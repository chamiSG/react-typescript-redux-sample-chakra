const useStatusColorScheme = (status: string | undefined) => {
  let color = "yellow";
  switch (status) {
    case 'Alive':
      color = "green";
      break;
    case 'Dead':
      color = "red";
      break;
    default:
      color = "yellow";
      break;
  }
  return color;
}

export default useStatusColorScheme
