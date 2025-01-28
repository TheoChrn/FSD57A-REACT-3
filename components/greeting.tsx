type GreetingProps = {
  name: string;
  age?: number;
};

export function Greeting({ name, age }: GreetingProps) {
  const ageCategory = age
    ? age < 18
      ? "under 18"
      : age <= 21
      ? "18-21"
      : "over 21"
    : null;

  return (
    <div>
      <h1>
        Hello {name} {`${age ? `${age}y/o` : ""}`}
      </h1>
      {ageCategory && <span>Category: {ageCategory}</span>}
    </div>
  );
}
