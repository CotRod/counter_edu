export const fetchData = async () => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new"
  );
  return Number(await response.text());
}